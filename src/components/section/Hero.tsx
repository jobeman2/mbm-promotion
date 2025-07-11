'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import * as Tooltip from '@radix-ui/react-tooltip'
import {
  Play,
  Sparkles,
  PhoneCall,
  Zap,
  Camera,
  Volume2,
  X,
  Megaphone,
} from 'lucide-react'

function Toast({
  message,
  onClose,
  duration = 4000,
}: {
  message: string
  onClose: () => void
  duration?: number
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 bg-green-600 text-white rounded-lg shadow-lg px-5 py-3 flex items-center gap-3 max-w-xs z-[9999]"
      role="alert"
      aria-live="assertive"
    >
      <Play className="w-5 h-5" />
      <span className="flex-1 text-sm">{message}</span>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="hover:text-green-300 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </motion.div>
  )
}

export default function Hero() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 60, damping: 20 })
  const springY = useSpring(y, { stiffness: 60, damping: 20 })
  const rotateX = useTransform(springY, [-1, 1], [15, -15])
  const rotateY = useTransform(springX, [-1, 1], [-15, 15])

  const [showToast, setShowToast] = useState(false)

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
    const xVal = ((event.clientX - left) / width) * 2 - 1
    const yVal = ((event.clientY - top) / height) * 2 - 1
    x.set(xVal)
    y.set(yVal)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  function handlePlayClick() {
    setShowToast(true)
  }

  return (
    <>
      <section id="hero" className="relative py-20 font-dm bg-gradient-to-b from-green-80 to-white overflow-hidden sm:py-16">
        {/* Soft green translucent background overlay */}
        <div className="absolute inset-0 bg-green-100 opacity-70 pointer-events-none -z-10"></div>

        <div className="max-w-7xl mt-20 mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10 sm:mt-16 sm:gap-10">
          {/* Left Content with Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 max-w-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <div
                      onClick={handlePlayClick}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handlePlayClick()
                        }
                      }}
                      className="relative w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg animate-pulse cursor-pointer select-none"
                      aria-label="Play Promo"
                    >
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Content
                    side="top"
                    className="bg-gray-900 text-white px-2 py-1 text-xs rounded shadow"
                  >
                    Listen to sample promo
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
              <p className="text-sm font-medium text-gray-600 uppercase select-none">
                Play Promo
              </p>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
            >
              Make Brands
              <br />
              Move{' '}
              <motion.span
                className="inline-block px-2 ml-2 bg-[#DBFCE7]"
                style={{
                  clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0% 100%)',
                }}
                initial={{ opacity: 0, rotateX: -90, y: 20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
              >
                Let Every&nbsp;
              </motion.span>{' '}
              Ring Speak For You <span className="text-[#00A63E]">.</span>
            </motion.h1>

            <p className="text-gray-700 text-[17px] mb-4 font-dm">
              We help companies connect with real audiences through Audio Ring Back Tone (Ad-RBT)
              campaigns — in exclusive partnership with Ethio Telecom.
            </p>
            <p className="text-gray-700 mb-6">Start your referral marketing journey today:</p>

            <button className="bg-green-600 mt-4 sm:mt-6 text-white px-6 py-3 rounded-full hover:bg-green-700 transition w-full sm:w-auto">
              Get Started Now
            </button>
          </motion.div>

          {/* Right Content with Image and Floating Cards */}
          <div className="relative w-full lg:w-1/2 flex justify-center sm:max-w-sm">
            <motion.div
              className="relative w-full max-w-[280px] aspect-[9/16] z-10"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <Image
                src="/images/d.png"
                alt="App Preview"
                fill
                className="w-full h-auto object-contain select-none pointer-events-none"
                draggable={false}
                priority
              />
            </motion.div>

            {/* Floating Feature Cards */}
            {/* On smaller screens, we stack them below the image */}
            <div className="hidden lg:block">
              <FloatingCard
                delay={0.5}
                position="top-[-20px] right-[-60px]"
                icon={<Megaphone className="w-5 h-5 text-green-600" />}
                title="Branded Tones"
                subtitle="Turn every phone call into a mini radio ad"
              />
              <FloatingCard
                delay={0.7}
                position="bottom-[20px] left-[-70px]"
                icon={<Sparkles className="w-5 h-5 text-green-400" />}
                title="Targeted Reach"
                subtitle="Reach real people by location & language"
              />
              <FloatingCard
                delay={0.9}
                position="top-[50%] left-[calc(100%+10px)] translate-y-[-50%]"
                icon={<Volume2 className="w-5 h-5 text-green-500" />}
                title="Guaranteed Listen"
                subtitle="Your message plays *before* the call connects"
              />
              <FloatingCard
                delay={1.1}
                position="bottom-[40%] right-[calc(100%+20px)] translate-y-[50%]"
                icon={<Zap className="w-5 h-5 text-green-500" />}
                title="High Engagement"
                subtitle="Perfect for promotions, polls, & launches"
              />
            </div>

            {/* Floating cards fallback for smaller screens */}
            <div className="lg:hidden mt-8 flex flex-col gap-6 w-full max-w-xs">
              <FloatingCardSmall
                icon={<Megaphone className="w-5 h-5 text-green-600" />}
                title="Branded Tones"
                subtitle="Turn every phone call into a mini radio ad"
              />
              <FloatingCardSmall
                icon={<Sparkles className="w-5 h-5 text-green-400" />}
                title="Targeted Reach"
                subtitle="Reach real people by location & language"
              />
              <FloatingCardSmall
                icon={<Volume2 className="w-5 h-5 text-green-500" />}
                title="Guaranteed Listen"
                subtitle="Your message plays *before* the call connects"
              />
              <FloatingCardSmall
                icon={<Zap className="w-5 h-5 text-green-500" />}
                title="High Engagement"
                subtitle="Perfect for promotions, polls, & launches"
              />
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showToast && (
          <Toast message="Playing promo now!" onClose={() => setShowToast(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

function FloatingCard({
  position,
  delay,
  icon,
  title,
  subtitle,
}: {
  position: string
  delay: number
  icon: React.ReactNode
  title: string
  subtitle: string
}) {
  return (
    <motion.div
      className={`absolute ${position} w-[180px] p-4 backdrop-blur-md bg-white/70 shadow-lg rounded-xl text-sm text-gray-800 border border-white/30`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: [0, 1, 0.8, 1], y: 0 }}
      transition={{ delay, duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="flex items-center gap-2 font-semibold">
        {icon} {title}
      </div>
      <p className="text-xs text-gray-600 mt-1">{subtitle}</p>
    </motion.div>
  )
}

function FloatingCardSmall({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
}) {
  return (
    <motion.div
      className="w-full p-4 backdrop-blur-md bg-white/70 shadow-lg rounded-xl text-sm text-gray-800 border border-white/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-2 font-semibold">
        {icon} {title}
      </div>
      <p className="text-xs text-gray-600 mt-1">{subtitle}</p>
    </motion.div>
  )
}
