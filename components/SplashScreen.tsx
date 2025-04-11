"use client";

import { useEffect, useState } from "react";

const languages = [
  "Hello",
  "E kaabo",
  "Sannu",
  "Ndewo",
  "Bonjour",
  "مرحبا",
  "Hola",
  "Namaste",
  "Merhaba",
  "Γεια σας",
  "shalom",
];

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= languages.length) {
          clearInterval(interval);
          setVisible(false);
          onFinish();
        }
        return nextIndex;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex h-screen w-full items-center justify-center bg-[#19191933] z-50">
      <h1 className="text-[52px] text-[#F3F3F3] font-semibold">
        {languages[index]}
      </h1>
    </div>
  );
};

export default SplashScreen;
