"use client";

import { useEffect, useState } from "react";

const languages = [
  "Hello", "E kaabo", "Sannu", "Ndewo", "Bonjour",
  "مرحبا", "Hola", "Namaste", "Merhaba", "Γεια σας", "shalom",
];

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const [index, setIndex] = useState(0);
  // State to explicitly track when the language sequence is finished internally
  const [isSequenceFinished, setIsSequenceFinished] = useState(false);

  // --- Effect 1: Handle the interval and internal state ---
  useEffect(() => {
    // Don't start the interval if the sequence is already marked as finished
    if (isSequenceFinished) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        // Check if the *next* index will be the end of the array
        if (nextIndex >= languages.length) {
          clearInterval(interval);        // Stop the timer
          setIsSequenceFinished(true);  // Mark the sequence as done *internally*
          return languages.length - 1;  // Keep displaying the last language
        }
        // Otherwise, update to the next index
        return nextIndex;
      });
    }, 150); // Your interval time

    // Cleanup function for the interval
    return () => clearInterval(interval);

  }, [isSequenceFinished]); // Rerun effect only if isSequenceFinished changes (e.g., reset logic if added later) - usually runs once.

  // --- Effect 2: Call the parent's onFinish *after* internal state is set ---
  useEffect(() => {
    // Only call onFinish if the sequence has finished AND the function exists
    if (isSequenceFinished && onFinish) {
      // console.log("Splash sequence finished, calling onFinish.");
      onFinish();
    }
    // This effect depends on the internal finished state and the callback prop
  }, [isSequenceFinished, onFinish]);

  // --- Render Logic ---
  // Render the splash screen *only* if the sequence is NOT finished.
  // Once isSequenceFinished becomes true, Effect 2 triggers onFinish,
  // which updates AppWrapper's state, causing AppWrapper to stop rendering SplashScreen.
  if (isSequenceFinished) {
    // Render nothing once the sequence finishes internally.
    // The parent component will handle the transition.
    return null;
  }

  // Render the splash screen UI using your original styles
  return (
    <div className="fixed inset-0 flex h-screen w-full items-center justify-center bg-[#19191933] z-50">
      <h1 className="text-[52px] text-[#F3F3F3] font-semibold">
        {/* Ensure index access is safe, though logic prevents out-of-bounds */}
        {languages[index] ?? ''}
      </h1>
    </div>
  );
};

export default SplashScreen;