"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const startTime = Date.now();

  useEffect(() => {
    // Check if loading takes more than 2 seconds
    const checkTimer = setTimeout(() => {
      if (progress < 100) {
        setShowProgressBar(true);
      }
    }, 2000);

    // Simulate loading progress
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      
      setProgress((prev) => {
        // Accelerate at the beginning, slow down near the end
        let increment;
        if (prev < 30) {
          increment = 3;
        } else if (prev < 60) {
          increment = 2;
        } else if (prev < 80) {
          increment = 1.5;
        } else {
          increment = 0.5;
        }

        const newProgress = Math.min(prev + increment, 100);

        // If loading takes more than 2 seconds, show progress bar
        if (elapsed > 2000 && !showProgressBar) {
          setShowProgressBar(true);
        }

        if (newProgress >= 100) {
          clearInterval(interval);
          clearTimeout(checkTimer);
          setIsComplete(true);
          // Wait for fade-out animation before calling onComplete
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }

        return newProgress;
      });
    }, 30); // Update every 30ms for smooth animation

    return () => {
      clearInterval(interval);
      clearTimeout(checkTimer);
    };
  }, [startTime, showProgressBar]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
          {/* OW Logo with Pulse Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <motion.div
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-6xl md:text-8xl font-bold text-primary font-heading mb-4"
            >
              OW
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/80 text-sm md:text-base font-light tracking-wider"
            >
              Optimize the World
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/60 text-xs md:text-sm font-light mt-2"
            >
              Loading urban intelligence...
            </motion.p>
          </motion.div>

          {/* Progress Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="w-full max-w-xs px-4"
          >
            {/* Progress Percentage */}
            {!showProgressBar && (
              <motion.div
                key={progress}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="text-white text-4xl md:text-6xl font-light tracking-wider text-center mb-4"
              >
                {Math.round(progress)}%
              </motion.div>
            )}

            {/* Progress Bar (shown if loading takes more than 2 seconds) */}
            {showProgressBar && (
              <div className="space-y-2">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
                <p className="text-white/60 text-xs text-center font-light">
                  {Math.round(progress)}%
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
