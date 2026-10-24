/**
 * Procedural Web Audio Engine for Fitria's Birthday Website.
 * Generates gentle music box chimes, soft acoustic piano chords,
 * and delicate sound effects without any external audio file dependencies.
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private volume: number = 0.5;
  private timerId: number | null = null;
  private masterGain: GainNode | null = null;

  // Melody notes frequencies (Hz) for a gentle, nostalgic music box lullaby
  // Scale based on C Major / F Lydian
  private notes: { [key: string]: number } = {
    C4: 261.63,
    D4: 293.66,
    E4: 329.63,
    F4: 349.23,
    G4: 392.0,
    A4: 440.0,
    B4: 493.88,
    C5: 523.25,
    D5: 587.33,
    E5: 659.25,
    F5: 698.46,
    G5: 783.99,
    A5: 880.0,
  };

  // Heartwarming melody sequence: note, duration in beats, chord accompaniment
  private melody: Array<{ note: string; duration: number; chord?: string[] }> = [
    { note: 'E5', duration: 1, chord: ['C4', 'G4', 'C5'] },
    { note: 'G5', duration: 1 },
    { note: 'A5', duration: 1.5, chord: ['F4', 'A4', 'C5'] },
    { note: 'G5', duration: 0.5 },
    { note: 'E5', duration: 2, chord: ['C4', 'E4', 'G4'] },

    { note: 'D5', duration: 1, chord: ['G4', 'B4', 'D5'] },
    { note: 'E5', duration: 1 },
    { note: 'F5', duration: 1.5, chord: ['D4', 'F4', 'A4'] },
    { note: 'E5', duration: 0.5 },
    { note: 'D5', duration: 2, chord: ['G4', 'B4'] },

    { note: 'C5', duration: 1, chord: ['A3', 'E4', 'A4'] },
    { note: 'E5', duration: 1 },
    { note: 'G5', duration: 1.5, chord: ['F4', 'A4', 'C5'] },
    { note: 'A5', duration: 0.5 },
    { note: 'G5', duration: 2, chord: ['C4', 'E4', 'G4'] },

    { note: 'F5', duration: 1, chord: ['D4', 'F4', 'A4'] },
    { note: 'E5', duration: 1, chord: ['G4', 'B4', 'D5'] },
    { note: 'D5', duration: 1.5, chord: ['G3', 'D4', 'G4'] },
    { note: 'C5', duration: 2.5, chord: ['C4', 'E4', 'G4', 'C5'] },
  ];

  private currentStep: number = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a music-box chime note
  private playMusicBoxTone(freq: number, time: number, duration: number, gainVal = 0.18) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // High sine with subtle harmonic shimmer like a music box cylinder
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    // Filter to soften brightness
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2400, time);

    // Natural bell envelope: rapid attack, lingering exponential decay
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(gainVal, time + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration + 1.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration + 1.3);
  }

  // Soft acoustic piano style warm pad note
  private playPianoTone(freq: number, time: number, duration: number, gainVal = 0.08) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(gainVal, time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration + 1.8);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration + 1.9);
  }

  public startBGM() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.scheduleNextNote();
  }

  private scheduleNextNote = () => {
    if (!this.isPlaying || !this.ctx) return;

    const step = this.melody[this.currentStep];
    const now = this.ctx.currentTime;
    const beatDuration = 0.82; // Tempo ~73 BPM, gentle and serene

    // Play melody note
    const noteFreq = this.notes[step.note];
    if (noteFreq) {
      this.playMusicBoxTone(noteFreq, now, step.duration * beatDuration, 0.22);
    }

    // Play accompaniment chord if present
    if (step.chord) {
      step.chord.forEach((chordNote, idx) => {
        const chordFreq = this.notes[chordNote];
        if (chordFreq) {
          // Subtle stagger for fingerpicking feel
          this.playPianoTone(chordFreq, now + idx * 0.03, step.duration * beatDuration * 1.5, 0.07);
        }
      });
    }

    this.currentStep = (this.currentStep + 1) % this.melody.length;
    const nextDelay = step.duration * beatDuration * 1000;
    this.timerId = window.setTimeout(this.scheduleNextNote, nextDelay);
  };

  public pauseBGM() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public toggleBGM(): boolean {
    if (this.isPlaying) {
      this.pauseBGM();
      return false;
    } else {
      this.startBGM();
      return true;
    }
  }

  public toggleMute(): boolean {
    this.initContext();
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // Interactive Sound Effects

  // Sparkle chime when envelope opens or confetti fires
  public playSparkle() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    const now = this.ctx.currentTime;
    notes.forEach((freq, idx) => {
      this.playMusicBoxTone(freq, now + idx * 0.08, 0.6, 0.12);
    });
  }

  // Gentle purr / meow tone when petting the cat
  public playPurr() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    // Gentle upward purr glide
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(480, now + 0.18);
    osc.frequency.exponentialRampToValueAtTime(390, now + 0.35);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.45);
  }

  // Typewriter key click sound
  public playTypewriterKey() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    const now = this.ctx.currentTime;

    osc.type = 'square';
    osc.frequency.setValueAtTime(420 + Math.random() * 80, now);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, now);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  // Gentle wind puff when blowing candle
  public playCandleBlow() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, this.ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(200, this.ctx.currentTime + 0.35);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.38);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start();
  }
}

export const audioEngine = new AudioEngine();
