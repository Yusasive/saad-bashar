// "use client";

// import { useEffect, useState } from "react";

// const languages = [
//   "Hello", "E kaabo", "Sannu", "Ndewo", "Bonjour",
//   "مرحبا", "Hola", "Namaste", "Merhaba", "Γεια σας", "shalom",
// ];

// interface SplashScreenProps {
//   onFinish: () => void;
// }

// const SplashScreen = ({ onFinish }: SplashScreenProps) => {
//   const [index, setIndex] = useState(0);
//   const [isSequenceFinished, setIsSequenceFinished] = useState(false);

//   useEffect(() => {
//     if (isSequenceFinished) return;

//     const interval = setInterval(() => {
//       setIndex((prevIndex) => {
//         const nextIndex = prevIndex + 1;

//         if (nextIndex >= languages.length) {
//           clearInterval(interval);        // Stop the timer
//           setIsSequenceFinished(true);  // Mark the sequence as done *internally*
//           return languages.length - 1;  // Keep displaying the last language
//         }
//         return nextIndex;
//       });
//     }, 150); // Your interval time

//     return () => clearInterval(interval);

//   }, [isSequenceFinished]);

//   useEffect(() => {
//     if (isSequenceFinished && onFinish) {
//       onFinish();
//     }
//   }, [isSequenceFinished, onFinish]);

//   if (isSequenceFinished) {
//     return null;
//   }

//   return (
//     <div className="fixed inset-0 flex h-screen w-full items-center justify-center bg-[#19191933] z-50">
//       <h1 className="text-[52px] text-[#F3F3F3] font-semibold">
//         {languages[index] ?? ''}
//       </h1>
//     </div>
//   );
// };

// export default SplashScreen;