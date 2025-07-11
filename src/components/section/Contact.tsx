'use client';

import Image from 'next/image';
import { BellRing, CheckCircle, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Typewriter component with onComplete callback
function Typewriter({
  text,
  speed = 100,
  onComplete,
}: {
  text: string;
  speed?: number;
  onComplete?: () => void;
}) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <>{displayedText}</>;
}

export default function HowItWorksDriver() {
  const [typingDone, setTypingDone] = useState(false);

  // Animation variants for the steps with stagger delay
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 150, damping: 15 },
    },
  };

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 15, delay: 0.2 },
    },
  };

  return (
    <section id="contact"
      className="bg-white font-dm py-24"
      style={{
        backgroundImage: "url('/images/curve.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title with typewriter */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black text-center mb-4"
        >
          <Typewriter
            text="How does Ad-RBT Campaign Work?"
            speed={100}
            onComplete={() => setTypingDone(true)}
          />
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={typingDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
        >
          Audio Ring Back Tone (Ad-RBT) campaigns let your brand speak directly to real people every time they
          make a call. It's direct, trackable, and impossible to ignore.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Left: Phones inside a circle with pop & grow */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center"
            initial="hidden"
            animate={typingDone ? 'visible' : 'hidden'}
            variants={circleVariants}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 bg-[#DBFCE7] rounded-full flex items-center justify-center z-0">
              <div className="flex gap-4 items-end">
                <Image
                  src="/images/d.png"
                  alt="Phone 1"
                  width={250}
                  height={300}
                  className="rounded-xl"
                  priority
                />
                <Image
                  src="/images/d.png"
                  alt="Phone 2"
                  width={150}
                  height={400}
                  className="rounded-xl"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800"
            initial="hidden"
            animate={typingDone ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {/* Step 1 */}
            <motion.div variants={stepVariants} className="relative">
              <motion.div
                variants={numberVariants}
                className="absolute -left-12 top-0 text-4xl font-bold text-[#20B46A]"
                aria-label="Step 1"
              >
                1
              </motion.div>

              <div className="mb-2 flex justify-start">
                <div className="bg-[#E6F7EF] text-[#20B46A] p-2 rounded-lg inline-flex items-center justify-center w-10 h-10">
                  <BellRing className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-black mb-2">Create Your Audio Message</h4>
              <p className="text-sm leading-relaxed">
                We help you record a clear, catchy tone that plays when subscribers receive a call.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={stepVariants} className="relative">
              <motion.div
                variants={numberVariants}
                className="absolute -left-12 top-0 text-4xl font-bold text-[#20B46A]"
                aria-label="Step 2"
              >
                2
              </motion.div>

              <div className="mb-2 flex justify-start">
                <div className="bg-[#E6F7EF] text-[#20B46A] p-2 rounded-lg inline-flex items-center justify-center w-10 h-10">
                  <CheckCircle className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-black mb-2">Sponsor & Activate</h4>
              <p className="text-sm leading-relaxed">
                Set your campaign live and pay only per subscriber and per actual listen.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={stepVariants}
              className="md:col-span-2 relative text-center md:text-left"
            >
              <motion.div
                variants={numberVariants}
                className="absolute -left-12 top-0 text-4xl font-bold text-[#20B46A]"
                aria-label="Step 3"
              >
                3
              </motion.div>

              <div className="mb-2 flex justify-center md:justify-start">
                <div className="bg-[#E6F7EF] text-[#20B46A] p-2 rounded-lg inline-flex items-center justify-center w-10 h-10">
                  <Navigation className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-black mb-2">Reach & Reward</h4>
              <p className="text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                Your message reaches real callers — and subscribers get free data or voice rewards.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
