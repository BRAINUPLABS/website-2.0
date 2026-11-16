import React, { useEffect, useState, useRef } from 'react';

interface MorphWord {
  text: string;
  gradient: string;
}

const MORPH_WORDS: MorphWord[] = [
  {
    text: 'Robotics Engineering',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600'
  },
  {
    text: 'AI & Neural Systems',
    gradient: 'from-purple-600 via-pink-600 to-indigo-600'
  },
  {
    text: 'STEM Innovation',
    gradient: 'from-teal-600 via-blue-600 to-indigo-600'
  },
  {
    text: 'Autonomous Rovers',
    gradient: 'from-emerald-600 via-teal-600 to-blue-600'
  }
];

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%*&<>[]_!';

export const CyberMorphText: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>(MORPH_WORDS[0].text);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const indexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let isCancelled = false;
    let stepInterval: ReturnType<typeof setInterval> | null = null;

    const runMorphSequence = () => {
      // Hold each completed word for 2.4 seconds before starting transition
      timeoutRef.current = setTimeout(() => {
        if (isCancelled) return;

        const fromText = MORPH_WORDS[indexRef.current].text;
        const nextIdx = (indexRef.current + 1) % MORPH_WORDS.length;
        indexRef.current = nextIdx;
        setCurrentWordIndex(nextIdx);
        const toText = MORPH_WORDS[nextIdx].text;

        const maxLen = Math.max(fromText.length, toText.length);
        const totalSteps = 20;
        let step = 0;

        if (stepInterval) clearInterval(stepInterval);

        stepInterval = setInterval(() => {
          if (isCancelled) {
            if (stepInterval) clearInterval(stepInterval);
            return;
          }

          step++;
          const progress = step / totalSteps;
          const resolvedCharCount = Math.floor(progress * toText.length);

          let scrambled = '';
          for (let i = 0; i < maxLen; i++) {
            if (i < resolvedCharCount) {
              scrambled += toText[i] || '';
            } else if (i < toText.length) {
              if (toText[i] === ' ' || toText[i] === '&') {
                scrambled += toText[i];
              } else {
                scrambled += GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
              }
            }
          }

          setDisplayText(scrambled);

          if (step >= totalSteps) {
            if (stepInterval) clearInterval(stepInterval);
            setDisplayText(toText);
            // Schedule next word morph
            runMorphSequence();
          }
        }, 35);
      }, 2400);
    };

    runMorphSequence();

    return () => {
      isCancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (stepInterval) clearInterval(stepInterval);
    };
  }, []);

  return (
    <span
      id="cyber-morph-wrapper"
      className="inline-flex items-center align-middle mx-1.5 h-12 sm:h-16 shrink-0 select-none overflow-hidden"
      style={{ verticalAlign: 'middle' }}
    >
      <span className="cyber-glow-badge relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md border-2 border-secondary/50 shadow-[0_4px_24px_rgba(0,81,213,0.2)] min-w-[280px] sm:min-w-[440px] h-12 sm:h-16 overflow-hidden shrink-0 transition-all duration-300">
        <span className="text-secondary font-mono text-[22px] sm:text-[34px] font-black select-none shrink-0 tracking-tighter leading-none">
          [
        </span>
        <span
          className={`font-display text-[20px] sm:text-[32px] lg:text-[36px] leading-none tracking-tight font-extrabold bg-gradient-to-r ${MORPH_WORDS[currentWordIndex].gradient} bg-clip-text text-transparent inline-flex items-center justify-center text-center transition-all duration-300 h-full overflow-hidden truncate px-1`}
        >
          {displayText}
        </span>
        <span className="cyber-cursor inline-block w-2 sm:w-2.5 h-5 sm:h-7 bg-secondary rounded-sm ml-1 shrink-0"></span>
        <span className="text-secondary font-mono text-[22px] sm:text-[34px] font-black select-none shrink-0 tracking-tighter leading-none">
          ]
        </span>
      </span>
    </span>
  );
};
