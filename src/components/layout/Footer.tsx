// components/Footer.tsx
'use client';

import { Facebook, Twitter, Instagram } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const footerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.footer
      ref={ref}
      variants={footerVariants}
      initial="hidden"
      animate={controls}
      className="bg-[#2B2B2B] font-dm text-gray-400 py-16 px-6"
    >
      <motion.div
        variants={itemVariants}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm"
      >
        {/* Brand */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white text-xl font-bold mb-4">MBM Promotion</h3>
          <p>
            We help brands move — by turning every phone call into an audio ad opportunity.
            Direct. Measurable. Local.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Get a Proposal</a></li>
            <li><a href="#" className="hover:text-white">Listen to Sample Ad</a></li>
          </ul>
        </motion.div>

        {/* About */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4">About</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">How It Works</a></li>
            <li><a href="#" className="hover:text-white">Why Ad-RBT?</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>Email: hello@mbmpromotion.com</li>
            <li>Support: support@mbmpromotion.com</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        variants={itemVariants}
        className="mt-16 border-t border-gray-700 pt-6 text-center text-xs text-gray-500"
      >
        <p>© MBM Promotion 2025. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-white" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
