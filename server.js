import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import crypto from 'crypto';
import Razorpay from 'razorpay';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const key_id = process.env.RAZORPAY_KEY_ID || process.env.VITE_RAZORPAY_KEY_ID;
const key_secret = process.env.RAZORPAY_KEY_SECRET;

if (!key_id || !key_secret) {
  console.warn('⚠️ Warning: RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET environment variables are missing!');
}

const razorpay = new Razorpay({
  key_id: key_id || '',
  key_secret: key_secret || '',
});

// 1. BACKEND - Create Order Endpoint
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt } = req.body || {};

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    const amountInPaise = parseInt(amount, 10);

    // Minimum amount: 100 paise (₹1)
    if (amountInPaise < 100) {
      return res.status(400).json({ error: 'Minimum amount must be at least 100 paise (₹1)' });
    }

    const options = {
      amount: amountInPaise,
      currency: currency || 'INR',
      receipt: receipt || `MRRF_rcpt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return res.status(200).json({
      id: order.id,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
    });
  } catch (error) {
    console.error('Razorpay Create Order Error:', error);

    if (error?.statusCode === 401) {
      return res.status(401).json({ error: 'Razorpay Authentication failed. Check KEY_ID and KEY_SECRET.' });
    }

    return res.status(500).json({
      error: 'Failed to create Razorpay order',
      details: error?.error?.description || error.message,
    });
  }
});

// 2. BACKEND - Verify Signature Endpoint
app.post('/api/verify-payment', (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body || {};

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: razorpay_payment_id, razorpay_order_id, razorpay_signature',
      });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      return res.status(500).json({ success: false, error: 'Server key secret missing' });
    }

    const generated_signature = crypto
      .createHmac('sha256', secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generated_signature === razorpay_signature) {
      return res.status(200).json({
        success: true,
        message: 'Payment verified successfully',
        payment_id: razorpay_payment_id,
        order_id: razorpay_order_id,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: 'Invalid payment signature. Signature verification failed.',
      });
    }
  } catch (error) {
    console.error('Razorpay Payment Verification Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error during payment verification',
      details: error.message,
    });
  }
});

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', server: 'Manu Ram Rishi Foundation Razorpay Backend' });
});

app.listen(PORT, () => {
  console.log(`🚀 Razorpay Backend Server running on http://localhost:${PORT}`);
});

export default app;
