'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HowRoaderWorks() {
  // Intersection observer hook to trigger animation on scroll for steps
  const [leftRef, leftInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [rightRef, rightInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [centerRef, centerInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const centerControls = useAnimation();

  useEffect(() => {
    if (leftInView) leftControls.start('visible');
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (rightInView) rightControls.start('visible');
  }, [rightInView, rightControls]);

  useEffect(() => {
    if (centerInView) centerControls.start('visible');
  }, [centerInView, centerControls]);

  // Variants for steps
  const stepVariants = {
    hidden: { opacity: 0, x: 50, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  // Hover effect for steps
  const stepHover = {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  };

  // Variants for center phone
  const centerVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 120, damping: 12 } },
  };

  // Green circle pulse animation (infinite)
  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="about" className="py-20 font-dm bg-white text-center relative overflow-hidden px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">How MBM Promotion Works</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12 sm:mb-16 text-sm sm:text-base leading-relaxed">
        We connect your brand to real audiences through Audio Ring Back Tone (Ad-RBT) campaigns — short, catchy, and heard every time someone makes a call.
      </p>

      <div
        className="relative flex flex-col lg:flex-row justify-center items-center max-w-7xl mx-auto gap-12 lg:gap-24"
        aria-label="How MBM Promotion Works Steps"
      >
        {/* Left Side Steps */}
        <motion.div
          ref={leftRef as React.Ref<HTMLDivElement>}
          initial="hidden"
          animate={leftControls}
          variants={stepVariants}
          className="space-y-8 text-right max-w-xs lg:max-w-[280px] self-start lg:self-auto"
        >
          {/* Step 1 */}
          <motion.div
            whileHover={stepHover}
            className="max-w-sm flex flex-col items-end mb-8 cursor-pointer mx-auto lg:mx-0"
            tabIndex={0}
            role="button"
            aria-label="Step 1: Create a Branded RBT"
          >
            <div className="w-10 h-10 bg-[#E5F3EA] text-[#0C9146] rounded-lg flex items-center justify-center font-bold mb-4 select-none">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">Create a Branded RBT</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              We help you craft a short, impactful audio message that represents your brand perfectly.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            whileHover={stepHover}
            className="max-w-sm flex flex-col items-end cursor-pointer mx-auto lg:mx-0"
            tabIndex={0}
            role="button"
            aria-label="Step 3: Reward Subscribers"
          >
            <div className="w-10 h-10 bg-[#E5F3EA] text-[#0C9146] rounded-lg flex items-center justify-center font-bold mb-4 select-none">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Reward Subscribers</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Users get free data or voice packages when they activate your RBT — boosting engagement.
            </p>
          </motion.div>
        </motion.div>

        {/* Center Phone Image with Green Circle */}
        <div
          className="relative mx-0 my-8 lg:my-0 flex items-center justify-center"
          ref={centerRef as React.Ref<HTMLDivElement>}
          aria-label="App screenshot"
        >
          <motion.div
            className="absolute bottom-[-20px] rounded-full w-60 sm:w-72 h-60 sm:h-72 bg-green-100 mx-auto"
            variants={pulseVariants}
            animate="animate"
            aria-hidden="true"
          />
          <motion.div
            className="relative z-10"
            initial="hidden"
            animate={centerControls}
            variants={centerVariants}
          >
            <Image
              src="/images/d.png"
              alt="App Screenshot"
              width={280}
              height={560}
              className="relative select-none max-w-[280px] w-full h-auto"
              draggable={false}
            />
          </motion.div>
        </div>

        {/* Right Side Steps */}
        <motion.div
          ref={rightRef as React.Ref<HTMLDivElement>}
          initial="hidden"
          animate={rightControls}
          variants={stepVariants}
          className="space-y-8 text-left max-w-xs lg:max-w-[280px] self-start lg:self-auto"
        >
          {/* Step 2 */}
          <motion.div
            whileHover={stepHover}
            className="max-w-sm flex flex-col items-start mb-8 cursor-pointer mx-auto lg:mx-0"
            tabIndex={0}
            role="button"
            aria-label="Step 2: Sponsor the Campaign"
          >
            <div className="w-10 h-10 bg-[#E5F3EA] text-[#0C9146] rounded-lg flex items-center justify-center font-bold mb-4 select-none">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">Sponsor the Campaign</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              You pay only per subscriber and per listen — fully trackable and cost-effective.
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            whileHover={stepHover}
            className="max-w-sm flex flex-col items-start cursor-pointer mx-auto lg:mx-0"
            tabIndex={0}
            role="button"
            aria-label="Step 4: Reach Real Callers"
          >
            <div className="w-10 h-10 bg-[#E5F3EA] text-[#0C9146] rounded-lg flex items-center justify-center font-bold mb-4 select-none">
              4
            </div>
            <h3 className="font-semibold text-lg mb-2">Reach Real Callers</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Every time someone calls a subscriber, they hear your message — no skipping, just impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
