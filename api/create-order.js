import Razorpay from 'razorpay';

export default async function handler(req, res) {
  // CORS setup
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { amount, currency = 'INR', receipt } = req.body || {};

    if (!amount || isNaN(Number(amount))) {
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    const numAmount = Number(amount);
    // If amount is passed in rupees (e.g. 2100), convert to paise (210000). If already in paise (>= 10000), keep as is.
    const amountInPaise = numAmount < 10000 ? Math.round(numAmount * 100) : Math.round(numAmount);

    if (amountInPaise < 100) {
      return res.status(400).json({ error: 'Minimum contribution is ₹1 (100 paise)' });
    }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || process.env.VITE_RAZORPAY_KEY_ID || '',
      key_secret: process.env.RAZORPAY_KEY_SECRET || '',
    });

    const options = {
      amount: amountInPaise,
      currency: currency || 'INR',
      receipt: receipt || `receipt_${Date.now()}`,
    };

    const order = await instance.orders.create(options);

    return res.status(200).json({
      ...order,
      id: order.id,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    if (error?.statusCode === 401) {
      return res.status(401).json({ error: 'Razorpay Authentication failed. Check KEY_ID and KEY_SECRET.' });
    }
    return res.status(500).json({
      error: error.message || 'Error creating order',
      details: error?.error?.description || error.message,
    });
  }
}
