"use client";

import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 700);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex h-screen w-full items-center justify-center bg-[#19191933] z-50">
      <h1 className="text-[52px] text-[#F3F3F3] font-semibold">Hello</h1>
    </div>
  );
};

export default SplashScreen;
