'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // allow exit animation
          return 100;
        }
        return prev + 2;
      });
    }, 40); // simulate progress speed

    return () => clearInterval(interval);
  }, [onComplete]);

  // Phone ringing animation variants
  const ringVariants = {
    animate: {
      rotate: [0, 15, -15, 15, -15, 0], // shake effect
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
  };

  // Ring waves animation for subtle circles
  const ringWaveVariants = {
    animate: {
      scale: [0.8, 1.2],
      opacity: [0.6, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeOut',
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
       style={{
        backgroundImage: "url('/images/curve.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
      }}
        key="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-white overflow-hidden"
      >
        {/* Logo with ringing phone */}
        <motion.div layoutId="logo" className="flex items-center gap-4 mb-8">
          <div className="text-green-700 text-4xl font-bold select-none">mbm</div>

          {/* Phone ringing icon with animation */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-green-700"
            variants={ringVariants}
            animate="animate"
            role="img"
            aria-label="Phone ringing icon"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.21.37 2.39.72 3.5a2 2 0 0 1-.45 2.11L9 10.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c1.11.35 2.29.59 3.5.72a2 2 0 0 1 1.72 2z" />
            
            {/* Ring waves */}
            <motion.circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              variants={ringWaveVariants}
              animate="animate"
              style={{ originX: '50%', originY: '50%' }}
            />
            <motion.circle
              cx="12"
              cy="12"
              r="14"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              variants={ringWaveVariants}
              animate="animate"
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', repeatType: 'loop', delay: 0.7 }}
              style={{ originX: '50%', originY: '50%' }}
            />
          </motion.svg>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeInOut', duration: 0.2 }}
            className="h-full bg-green-600"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
