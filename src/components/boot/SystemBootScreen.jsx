import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Volume2, VolumeX, ArrowRight, ShieldCheck, Zap, Bot, MessageSquare, Rocket } from 'lucide-react';

const SystemBootScreen = ({ onComplete }) => {
  const [speechBubbleText, setSpeechBubbleText] = useState("");
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const isAudioMutedRef = useRef(false);
  const hasSpokenRef = useRef(false);
  const utteranceRef = useRef(null);

  useEffect(() => {
    isAudioMutedRef.current = isAudioMuted;
  }, [isAudioMuted]);

  const fullSpeechText = "Welcome to Darshana Akadkar's Developer Control Panel. Initializing systems...";

  // Web Audio Rocket Thrust & Supersonic Launch Sound
  const playRocketLaunchSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // 1. Low-frequency rocket engine rumble
      const bufferSize = ctx.sampleRate * 0.9;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const lowpass = ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.setValueAtTime(300, ctx.currentTime);
      lowpass.frequency.linearRampToValueAtTime(1400, ctx.currentTime + 0.8);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.1, ctx.currentTime);
      noiseGain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.3);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.85);

      noise.connect(lowpass);
      lowpass.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noise.start(ctx.currentTime);

      // 2. High-speed supersonic pitch riser whoosh
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(2400, ctx.currentTime + 0.7);

      oscGain.gain.setValueAtTime(0.15, ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.75);

      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.8);
    } catch (e) {}
  };

  // High-tech chord chime for system reveal
  const playChime = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2 + idx * 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + 1.3 + idx * 0.08);
      });
    } catch (e) {}
  };

  // Select female voice reliably across Windows, Mac, iOS, Android, and Linux
  const selectFemaleVoice = (voices) => {
    if (!voices || !Array.isArray(voices) || voices.length === 0) return null;

    const maleKeywords = [
      'david', 'mark', 'george', 'ravi', 'steffan', 'guy', 'male', 'man', 'boy',
      'alex', 'fred', 'daniel', 'richard', 'oliver', 'thomas', 'ryan', 'eric',
      'christopher', 'james', 'john', 'paul', 'matthew', 'brian', 'sean', 'michael',
      'arthur', 'desktop - english (united states) david'
    ];

    const priorityFemaleKeywords = [
      'samantha',
      'victoria',
      'karen',
      'zira',
      'jenny',
      'aria',
      'hazel',
      'susan',
      'catherine',
      'heera',
      'neerja',
      'serena',
      'ava',
      'allison',
      'fiona',
      'moira',
      'tessa',
      'veena',
      'google us english',
      'google uk english female',
      'female'
    ];

    // Filter English voices if available
    const enVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
    const candidatePool = enVoices.length > 0 ? enVoices : voices;

    // 1. Search prioritized female voice names
    for (const kw of priorityFemaleKeywords) {
      const matched = candidatePool.find(v => {
        const name = (v.name || '').toLowerCase();
        const isMale = maleKeywords.some(m => name.includes(m));
        return !isMale && name.includes(kw);
      });
      if (matched) return matched;
    }

    // 2. Generic female keyword search
    const genericFemale = candidatePool.find(v => {
      const name = (v.name || '').toLowerCase();
      const isMale = maleKeywords.some(m => name.includes(m));
      return !isMale && (name.includes('female') || name.includes('woman') || name.includes('natural'));
    });
    if (genericFemale) return genericFemale;

    // 3. Fallback to any voice that is NOT explicitly male
    const nonMale = candidatePool.find(v => {
      const name = (v.name || '').toLowerCase();
      return !maleKeywords.some(m => name.includes(m));
    });
    if (nonMale) return nonMale;

    return candidatePool[0] || null;
  };

  const isLaunchingRef = useRef(false);

  // Rocket Launch Ignition & Transition
  const triggerRocketLaunch = () => {
    if (isLaunchingRef.current) return;
    isLaunchingRef.current = true;
    setIsLaunching(true);
    playRocketLaunchSound();

    setTimeout(() => {
      onComplete();
    }, 950);
  };

  // Trigger speech synthesis with female voice guarantee & mobile iOS/Android support
  const triggerVoiceWelcome = (force = false, isDirectGesture = false) => {
    if (isAudioMutedRef.current && !force) return;
    if (!('speechSynthesis' in window)) return;
    if (hasSpokenRef.current && !force) return;

    const speakCore = () => {
      if (isAudioMutedRef.current && !force) return;
      if (hasSpokenRef.current && !force) return;

      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        const utterance = new SpeechSynthesisUtterance("Welcome to Darshana Akadkar's Developer Control Panel.");
        utterance.rate = 1.0;
        utterance.pitch = 1.15; // Set clear, pleasant female assistant tone
        utterance.volume = 1.0;
        utterance.lang = 'en-US';

        const availableVoices = window.speechSynthesis.getVoices();
        const femaleVoice = selectFemaleVoice(availableVoices);
        if (femaleVoice) {
          utterance.voice = femaleVoice;
        }

        utterance.onstart = () => {
          hasSpokenRef.current = true;
          setIsSpeaking(true);
        };
        utterance.onend = () => {
          setIsSpeaking(false);
          // Launch immediately when voice finishes speaking
          setTimeout(() => {
            triggerRocketLaunch();
          }, 80);
        };
        utterance.onerror = () => {
          setIsSpeaking(false);
          setTimeout(() => {
            triggerRocketLaunch();
          }, 300);
        };

        // Retain utterance reference in window & ref to prevent garbage collection
        utteranceRef.current = utterance;
        window._activeUtterance = utterance;

        // Resume speech engine and speak immediately
        window.speechSynthesis.resume();
        window.speechSynthesis.speak(utterance);

        // Continuous resume heartbeat for mobile Android/iOS background speech engine
        const resumeHeartbeat = setInterval(() => {
          if (!('speechSynthesis' in window) || !window.speechSynthesis.speaking) {
            clearInterval(resumeHeartbeat);
          } else if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
        }, 100);
      } catch (err) {
        setIsSpeaking(false);
      }
    };

    const initialVoices = window.speechSynthesis.getVoices();
    if (initialVoices && initialVoices.length > 0) {
      speakCore();
    } else {
      // Chrome/Chromium asynchronous voice population on initial page load
      const handleVoicesChanged = () => {
        window.speechSynthesis.onvoiceschanged = null;
        speakCore();
      };
      window.speechSynthesis.onvoiceschanged = handleVoicesChanged;

      // Fallback timer if onvoiceschanged doesn't trigger
      setTimeout(() => {
        if (!hasSpokenRef.current) {
          window.speechSynthesis.onvoiceschanged = null;
          speakCore();
        }
      }, 100);
    }
  };

  const handleFirstGesture = () => {
    if (!hasSpokenRef.current && !isAudioMutedRef.current) {
      playChime();
      triggerVoiceWelcome(true, true);
    }
  };

  useEffect(() => {
    playChime();
    triggerVoiceWelcome(false, false);

    window.addEventListener('click', handleFirstGesture, { passive: true, once: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true, once: true });

    // Typewriter effect synchronized with speech length
    let charIdx = 0;
    const typeInterval = setInterval(() => {
      if (charIdx <= fullSpeechText.length) {
        setSpeechBubbleText(fullSpeechText.slice(0, charIdx));
        charIdx++;
      } else {
        clearInterval(typeInterval);
      }
    }, 28);

    // Safety fallback auto launch in case speech is muted or unsupported
    const autoLaunchTimer = setTimeout(() => {
      triggerRocketLaunch();
    }, 4500);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(autoLaunchTimer);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  return (
    <div 
      onClick={handleFirstGesture}
      onTouchStart={handleFirstGesture}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#070a13',
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        opacity: isLaunching ? 0.95 : 1,
        transition: 'all 0.3s ease',
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.18) 0%, transparent 65%),
          radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px'
      }}
    >
      {/* Warp Speed Lines during Rocket Blast */}
      {isLaunching && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 30 }}>
          {[15, 30, 45, 60, 75, 90].map((left, idx) => (
            <div
              key={idx}
              style={{
                position: 'absolute',
                left: `${left}%`,
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(to bottom, transparent, #06b6d4, #ffffff, transparent)',
                boxShadow: '0 0 10px #06b6d4',
                animation: `speedLine 0.4s linear infinite ${idx * 0.05}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Unified Responsive Top Navigation Bar */}
      <header className="boot-navbar">
        {/* Header Identity Badge */}
        <div className="boot-brand-badge">
          <div className="status-dot status-dot-cyan" />
          <span className="boot-brand-title">
            <span className="boot-brand-name">DARSHANA_AKADKAR</span>
            <span className="boot-brand-sep"> // </span>
            <span className="boot-brand-sub">AI_ASSISTANT_ONLINE</span>
          </span>
        </div>

        {/* Top Bar Controls (Sound & Launch) */}
        <div className="boot-nav-actions">
          <button
            onClick={(e) => {
              e.stopPropagation();
              const nextMuted = !isAudioMuted;
              setIsAudioMuted(nextMuted);
              isAudioMutedRef.current = nextMuted;
              if (nextMuted) {
                if ('speechSynthesis' in window) {
                  window.speechSynthesis.cancel();
                }
                setIsSpeaking(false);
              } else {
                triggerVoiceWelcome(true);
              }
            }}
            className="eng-btn-ghost boot-ctrl-btn"
            title={isAudioMuted ? "Turn Audio ON" : "Turn Audio OFF"}
            aria-label={isAudioMuted ? "Turn Audio ON" : "Turn Audio OFF"}
          >
            {isAudioMuted ? <VolumeX size={14} /> : <Volume2 size={14} style={{ color: 'var(--accent-cyan)' }} />}
            <span className="boot-btn-text-full">{isAudioMuted ? 'AUDIO: OFF' : 'AUDIO: ON'}</span>
            <span className="boot-btn-text-short">{isAudioMuted ? 'OFF' : 'ON'}</span>
          </button>

          <button
            onClick={triggerRocketLaunch}
            className="eng-btn-ghost boot-ctrl-btn boot-launch-btn"
            title="Launch and enter portfolio"
          >
            <span className="boot-btn-text-full">LAUNCH →</span>
            <span className="boot-btn-text-short">LAUNCH →</span>
          </button>
        </div>
      </header>

      {/* Center 3D Floating AI Companion Robot */}
      <div 
        className="boot-center-stage"
        style={{
          position: 'relative',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '680px',
          width: '100%'
        }}
      >
        {/* 3D Robot & Pedestal Container */}
        <div 
          style={{ position: 'relative', width: '240px', height: '230px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', pointerEvents: 'none', userSelect: 'none' }}
        >
          
          {/* Glowing Hexagonal Neon Pedestal */}
          <div 
            style={{
              position: 'absolute',
              bottom: '10px',
              width: '190px',
              height: '42px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.55) 0%, rgba(6, 182, 212, 0.12) 50%, transparent 75%)',
              border: '2px solid rgba(6, 182, 212, 0.65)',
              boxShadow: '0 0 35px rgba(6, 182, 212, 0.8), inset 0 0 15px rgba(6, 182, 212, 0.4)',
              transform: 'rotateX(65deg)',
              animation: 'pedestalPulse 2s ease-in-out infinite alternate'
            }}
          />

          {/* Pedestal Rotating Concentric Rings */}
          <div 
            style={{
              position: 'absolute',
              bottom: '5px',
              width: '220px',
              height: '52px',
              borderRadius: '50%',
              border: '1px dashed rgba(56, 189, 248, 0.45)',
              transform: 'rotateX(65deg)',
              animation: 'spinRing 10s linear infinite'
            }}
          />

          {/* Floating Robot Character with Supersonic Rocket Blast Animation */}
          <div 
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              animation: isLaunching 
                ? 'rocketBlastOff 0.9s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards' 
                : 'robotFloat 3s ease-in-out infinite alternate'
            }}
          >
            {/* Robot Head & Body */}
            <div 
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '50% 50% 45% 45%',
                background: 'linear-gradient(145deg, #ffffff 0%, #e2e8f0 55%, #94a3b8 100%)',
                border: '3px solid #cbd5e1',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6), inset 0 -4px 10px rgba(0,0,0,0.2), inset 0 4px 12px rgba(255,255,255,0.9), 0 0 25px rgba(6, 182, 212, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              {/* Glossy Curved Visor Screen */}
              <div 
                style={{
                  width: '82px',
                  height: '54px',
                  borderRadius: '26px',
                  background: 'linear-gradient(180deg, #0b1120 0%, #030712 100%)',
                  border: '2px solid rgba(6, 182, 212, 0.4)',
                  boxShadow: 'inset 0 0 15px rgba(6, 182, 212, 0.5), 0 0 10px rgba(6, 182, 212, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Visor Glare Reflection */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '4px',
                    left: '12px',
                    width: '32px',
                    height: '8px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.3)',
                    transform: 'rotate(-10deg)'
                  }} 
                />

                {/* Expressive Glowing Cyan LED Eyes */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '4px' }}>
                  <div 
                    style={{
                      width: '12px',
                      height: '14px',
                      borderRadius: '50%',
                      background: '#00f3ff',
                      boxShadow: '0 0 15px #00f3ff, 0 0 5px #ffffff',
                      animation: 'eyeBlink 3.5s infinite'
                    }} 
                  />
                  <div 
                    style={{
                      width: '12px',
                      height: '14px',
                      borderRadius: '50%',
                      background: '#00f3ff',
                      boxShadow: '0 0 15px #00f3ff, 0 0 5px #ffffff',
                      animation: 'eyeBlink 3.5s infinite'
                    }} 
                  />
                </div>

                {/* Cute Smiling Mouth / Soundwave */}
                <div 
                  style={{
                    width: isSpeaking ? '22px' : '14px',
                    height: isSpeaking ? '6px' : '3px',
                    borderRadius: '0 0 8px 8px',
                    background: '#00f3ff',
                    boxShadow: '0 0 8px #00f3ff',
                    transition: 'all 0.2s ease'
                  }} 
                />
              </div>

              {/* Side Audio Thruster Ears */}
              <div style={{ position: 'absolute', left: '-8px', width: '10px', height: '26px', borderRadius: '5px', background: '#94a3b8', border: '1px solid #64748b', boxShadow: 'inset 0 0 4px #06b6d4' }} />
              <div style={{ position: 'absolute', right: '-8px', width: '10px', height: '26px', borderRadius: '5px', background: '#94a3b8', border: '1px solid #64748b', boxShadow: 'inset 0 0 4px #06b6d4' }} />

              {/* Top Cyber Antenna */}
              <div style={{ position: 'absolute', top: '-14px', width: '3px', height: '14px', background: '#94a3b8' }}>
                <div style={{ position: 'absolute', top: '-6px', left: '-3px', width: '9px', height: '9px', borderRadius: '50%', background: '#00f3ff', boxShadow: '0 0 10px #00f3ff' }} />
              </div>
            </div>

            {/* Glowing Ion / Rocket Thruster Flames */}
            <div style={{ display: 'flex', gap: '28px', marginTop: '-4px' }}>
              <div 
                style={{
                  width: isLaunching ? '22px' : '14px',
                  height: isLaunching ? '80px' : '26px',
                  background: isLaunching 
                    ? 'linear-gradient(180deg, #ffffff 0%, #00f3ff 30%, #f59e0b 70%, transparent 100%)' 
                    : 'linear-gradient(180deg, #00f3ff 0%, rgba(6, 182, 212, 0.4) 60%, transparent 100%)',
                  borderRadius: '50%',
                  filter: 'blur(2px)',
                  boxShadow: isLaunching ? '0 0 35px #00f3ff, 0 0 20px #f59e0b' : '0 0 15px #00f3ff',
                  animation: 'thrusterPulse 0.3s ease-in-out infinite alternate',
                  transition: 'all 0.2s ease'
                }} 
              />
              <div 
                style={{
                  width: isLaunching ? '22px' : '14px',
                  height: isLaunching ? '80px' : '26px',
                  background: isLaunching 
                    ? 'linear-gradient(180deg, #ffffff 0%, #00f3ff 30%, #f59e0b 70%, transparent 100%)' 
                    : 'linear-gradient(180deg, #00f3ff 0%, rgba(6, 182, 212, 0.4) 60%, transparent 100%)',
                  borderRadius: '50%',
                  filter: 'blur(2px)',
                  boxShadow: isLaunching ? '0 0 35px #00f3ff, 0 0 20px #f59e0b' : '0 0 15px #00f3ff',
                  animation: 'thrusterPulse 0.3s ease-in-out infinite alternate 0.1s',
                  transition: 'all 0.2s ease'
                }} 
              />
            </div>
          </div>
        </div>

        {/* Live Speech Bubble */}
        <div 
          className="eng-card"
          style={{ 
            width: '100%',
            background: 'rgba(18, 24, 38, 0.95)',
            border: '1px solid rgba(6, 182, 212, 0.4)',
            borderRadius: '10px',
            padding: '1.25rem 1.5rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(6, 182, 212, 0.15)',
            marginBottom: '1.5rem',
            opacity: isLaunching ? 0.3 : 1,
            transform: isLaunching ? 'translateY(20px)' : 'translateY(0)',
            transition: 'all 0.3s ease',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={15} style={{ color: 'var(--accent-cyan)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-cyan-light)', fontWeight: 600 }}>
                AI VOICE ASSISTANT:
              </span>
            </div>

            {/* Equalizer Waveform */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '14px' }}>
              {[8, 14, 6, 12, 14, 9, 13, 7].map((h, i) => (
                <div 
                  key={i}
                  style={{
                    width: '3px',
                    height: isSpeaking ? `${h}px` : '3px',
                    background: '#00f3ff',
                    borderRadius: '1px',
                    animation: isSpeaking ? `equalizer 0.7s ease-in-out infinite alternate ${i * 0.08}s` : 'none'
                  }}
                />
              ))}
            </div>
          </div>

          <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 500, color: '#f8fafc', lineHeight: 1.5 }}>
            "{speechBubbleText}"
            <span className="animate-pulse" style={{ color: '#00f3ff', fontWeight: 700 }}>|</span>
          </p>
        </div>

        {/* Rocket Launch Action Button */}
        <button
          onClick={triggerRocketLaunch}
          className="eng-btn eng-btn-primary"
          style={{
            width: '100%',
            justifyContent: 'center',
            padding: '0.9rem',
            fontSize: '0.88rem',
            letterSpacing: '0.04em',
            background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #10b981 100%)',
            border: 'none',
            boxShadow: '0 0 25px rgba(6, 182, 212, 0.6), 0 0 35px rgba(16, 185, 129, 0.4)'
          }}
        >
          <Rocket size={17} style={{ color: '#ffffff' }} />
          <span>LAUNCH ROCKET & ENTER PORTFOLIO</span>
          <ArrowRight size={16} />
        </button>
      </div>

      <style>{`
        .boot-navbar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          gap: 0.75rem;
          z-index: 60;
          box-sizing: border-box;
          width: 100%;
        }

        .boot-brand-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 0;
          flex-shrink: 1;
        }

        .boot-brand-title {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-cyan-light);
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .boot-nav-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .boot-ctrl-btn {
          padding: 0.38rem 0.68rem;
          font-size: 0.74rem;
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          border: 1px solid var(--border-subtle);
          border-radius: 4px;
          color: var(--text-secondary);
          background: rgba(18, 24, 38, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .boot-ctrl-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.12);
        }

        .boot-launch-btn {
          color: var(--accent-cyan-light);
          border-color: rgba(6, 182, 212, 0.4);
        }

        .boot-launch-btn:hover {
          border-color: var(--accent-cyan);
          background: var(--accent-cyan-glow);
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.3);
        }

        .boot-btn-text-full {
          display: inline;
        }

        .boot-btn-text-short {
          display: none;
        }

        .boot-center-stage {
          margin-top: 4.5rem;
          padding: 0.5rem;
        }

        @media (max-width: 640px) {
          .boot-navbar {
            padding: 0.85rem 1rem;
            gap: 0.5rem;
          }
          .boot-brand-sub {
            display: none;
          }
          .boot-brand-sep {
            display: none;
          }
          .boot-brand-title {
            font-size: 0.72rem;
          }
          .boot-ctrl-btn {
            padding: 0.32rem 0.55rem;
            font-size: 0.72rem;
          }
          .boot-center-stage {
            margin-top: 3.5rem;
          }
        }

        @media (max-width: 420px) {
          .boot-navbar {
            padding: 0.75rem 0.65rem;
            gap: 0.35rem;
          }
          .boot-brand-name {
            display: none;
          }
          .boot-btn-text-full {
            display: none;
          }
          .boot-btn-text-short {
            display: inline;
          }
          .boot-ctrl-btn {
            padding: 0.3rem 0.45rem;
            font-size: 0.7rem;
            gap: 0.25rem;
          }
        }

        @keyframes robotFloat {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(1.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes rocketBlastOff {
          0% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(12px) scale(1.05); }
          100% { transform: translateY(-1400px) scale(0.4); opacity: 0; filter: blur(4px); }
        }
        @keyframes pedestalPulse {
          from { opacity: 0.6; box-shadow: 0 0 25px rgba(6, 182, 212, 0.6); }
          to { opacity: 1; box-shadow: 0 0 45px rgba(6, 182, 212, 1); }
        }
        @keyframes thrusterPulse {
          from { height: 22px; opacity: 0.8; }
          to { height: 34px; opacity: 1; }
        }
        @keyframes eyeBlink {
          0%, 92%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        @keyframes spinRing {
          from { transform: rotateX(65deg) rotate(0deg); }
          to { transform: rotateX(65deg) rotate(360deg); }
        }
        @keyframes equalizer {
          0% { height: 3px; }
          100% { height: 15px; }
        }
        @keyframes speedLine {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default SystemBootScreen;
