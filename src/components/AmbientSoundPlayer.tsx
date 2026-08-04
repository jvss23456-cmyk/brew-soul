import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AmbientSoundPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.2);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const startAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Soft warm ambient chord: Eb major 7 / C minor 9 frequencies (Coffee shop chill vibe)
      // 155.56 Hz (Eb3), 196.00 Hz (G3), 233.08 Hz (Bb3), 293.66 Hz (D4)
      const freqs = [155.56, 196.00, 233.08, 293.66];
      oscillatorsRef.current = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        // Sine waves for smooth soothing tone
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle LFO modulation for organic breath-like swelling
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.1 + idx * 0.05, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.03, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(oscGain.gain);
        lfo.start();

        oscGain.gain.setValueAtTime(0.08 / freqs.length, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        oscillatorsRef.current.push(osc);
      });

      setIsPlaying(true);
    } catch (e) {
      console.warn('Web Audio not allowed or failed:', e);
    }
  };

  const stopAmbientSound = () => {
    if (oscillatorsRef.current.length > 0) {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      oscillatorsRef.current = [];
    }

    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbientSound();
    } else {
      startAmbientSound();
    }
  };

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      stopAmbientSound();
    };
  }, []);

  return (
    <div className="flex items-center gap-2 bg-[#231911]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E5BA73]/20 shadow-lg text-xs">
      <button
        onClick={toggleSound}
        className="flex items-center gap-2 text-[#E5BA73] hover:text-[#F5EBE0] transition-colors focus:outline-none"
        title={isPlaying ? 'Pausar Som Ambiente Lounge' : 'Tocar Som Ambiente Lounge'}
        id="ambient-sound-toggle-btn"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#E5BA73] animate-pulse" />
            <span className="hidden sm:inline font-serif italic text-[#F5EBE0]">Ambiente Ativo</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#E5BA73]/70" />
            <span className="hidden sm:inline text-[#F5EBE0]/70">Som Ambiente</span>
          </>
        )}
      </button>

      {isPlaying && (
        <input
          type="range"
          min="0.05"
          max="0.4"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-14 h-1 bg-[#4E6C50] rounded-lg appearance-none cursor-pointer accent-[#E5BA73]"
          title="Volume do som ambiente"
        />
      )}
    </div>
  );
};
