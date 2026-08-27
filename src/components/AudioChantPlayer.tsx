import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AudioChantPlayer: React.FC = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.3);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  // Function to create soothing temple bell / singing bowl chime
  const playSacredChime = (ctx: AudioContext, destination: AudioNode) => {
    const freqs = [528, 792, 1056, 1584]; // 528Hz Solfeggio love/miracle tone harmonics
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      
      const bellGain = 0.08 / (idx + 1);
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(bellGain, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.5);
      
      osc.connect(gain);
      gain.connect(destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 4.6);
    });
  };

  const startChant = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Tanpura / Om meditative root frequencies (Root C# / 138.59 Hz, Fifth G# / 207.65 Hz, Octave 277.18 Hz)
      const droneFreqs = [138.59, 207.65, 277.18, 415.3];
      const newOscs: OscillatorNode[] = [];

      droneFreqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        // Gentle subtle vibrato / slow modulation
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + i * 0.05, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        const baseAmp = 0.06 / (i + 1);
        oscGain.gain.setValueAtTime(0, ctx.currentTime);
        oscGain.gain.linearRampToValueAtTime(baseAmp, ctx.currentTime + 2);

        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        newOscs.push(osc);
      });

      oscillatorsRef.current = newOscs;
      setIsPlaying(true);

      // Play initial chime and schedule periodically
      playSacredChime(ctx, masterGain);
      intervalRef.current = window.setInterval(() => {
        if (audioCtxRef.current && masterGainRef.current) {
          playSacredChime(audioCtxRef.current, masterGainRef.current);
        }
      }, 9000);

    } catch (e) {
      console.warn('Audio could not start automatically', e);
    }
  };

  const stopChant = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    oscillatorsRef.current.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // already stopped
      }
    });
    oscillatorsRef.current = [];
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopChant();
    } else {
      startChant();
    }
  };

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(isPlaying ? volume : 0, audioCtxRef.current.currentTime);
    }
  }, [volume, isPlaying]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      oscillatorsRef.current.forEach(o => {
        try { o.stop(); } catch { /* ignore */ }
      });
    };
  }, []);

  return (
    <div className="flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 px-3 py-1.5 rounded-full text-xs text-cyan-200 shadow-lg shadow-cyan-950/40">
      <button
        onClick={togglePlay}
        className="flex items-center space-x-1.5 hover:text-amber-300 transition-colors focus:outline-none cursor-pointer"
        title={t("Toggle Vrindavan Meditative Ambient Chant", "वृन्दावन दिव्य ध्यान ध्वनि चालू/बंद करें")}
      >
        {isPlaying ? (
          <div className="flex items-center space-x-1 text-emerald-400">
            <Volume2 className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-medium tracking-wide">
              {t("Ambient Chants: ON", "दिव्य ध्वनि: चालू")}
            </span>
          </div>
        ) : (
          <div className="flex items-center space-x-1 text-slate-300">
            <VolumeX className="w-3.5 h-3.5 text-slate-400" />
            <span className="tracking-wide">
              {t("Divine Audio", "दिव्य ध्वनि")}
            </span>
          </div>
        )}
      </button>

      {/* Visual equalizer waves when playing */}
      {isPlaying && (
        <div className="flex items-end space-x-0.5 h-3.5 pl-1">
          <span className="w-0.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
          <span className="w-0.5 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.15s] h-2" />
          <span className="w-0.5 bg-teal-300 rounded-full animate-bounce [animation-delay:-0.4s] h-3.5" />
          <span className="w-0.5 bg-cyan-300 rounded-full animate-bounce h-2" />
        </div>
      )}

      {/* Volume slider */}
      {isPlaying && (
        <input
          type="range"
          min="0.05"
          max="0.8"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-12 h-1 accent-amber-400 cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
          title={t("Adjust Sound Volume", "ध्वनि स्तर बदलें")}
        />
      )}
    </div>
  );
};
