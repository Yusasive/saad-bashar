"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow'; // <== Essential for coverflow styles
import 'swiper/css/autoplay';

// import required modules
import { EffectCoverflow, Autoplay } from 'swiper/modules'; // <== Essential for coverflow effect

// Import your SVG components (ASSUMING THESE ARE THE POLAROID-STYLED SVGs)
import {
  Sliderone,
  Slidertwo,
  Sliderthree,
  Sliderfour,
  Sliderfive,
  Slidersix,
} from './Imageslider'; // Adjust the path as necessary
// import LabelAnimation from './AnimatedLabels';

// Define the type for our slide data
interface SlideData {
  id: number;
  caption: string;
  Component: React.ComponentType<{ className?: string }>;
}

// Map components to data
const slidesData: SlideData[] = [
  { id: 1, caption: "View + Skyline", Component: Sliderone },
  { id: 2, caption: "Elevating to an Insurance Tech Conference 2023", Component: Slidertwo },
  { id: 3, caption: "Exploring Knowledge", Component: Sliderthree },
  { id: 4, caption: "Fourth Image", Component: Sliderfour },
  { id: 5, caption: "Fifth Image", Component: Sliderfive },
  { id: 6, caption: "Sixth Image", Component: Slidersix },
];

// --- ADJUST THESE TO MATCH YOUR POLAROID SVG DIMENSIONS ---
const SLIDE_WIDTH_PX = 376;
const SLIDE_HEIGHT_PX = 428;

export default function ImageSlider() {
  return (
    // Container: Ensure it has enough width and overflow-hidden
    <div className="w-full max-w-4xl mx-auto py-16 overflow-hidden">
      <Swiper
        // --- Swiper Core Settings ---
        modules={[EffectCoverflow, Autoplay]} // Activate modules
        effect={'coverflow'}                // *** USE THE COVERFLOW EFFECT ***
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}             // Let Swiper size slides based on width + effect
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}

        // --- Coverflow Effect Configuration ---
        // *** THIS OBJECT CONTROLS THE SLANT, OVERLAP, AND DEPTH ***
        coverflowEffect={{
          rotate: 20,         // <== CONTROLS THE SLANT ANGLE. Try 15-25.
          stretch: -90,       // <== CONTROLS OVERLAP. Try -50 to -80. More negative = more overlap.
          depth: 120,         // <== CONTROLS PERSPECTIVE DEPTH. Try 100-150. Higher = further away.
          modifier: 1,        // Usually keep at 1.
          slideShadows: true,   // <== Adds shadows for depth. IMPORTANT!
        }}
        // --- End Coverflow Config ---

        className="myPolaroidSlider" // Specific class for styling
        style={{
            // *** ADD PADDING TO SWIPER CONTAINER ***
            // Prevents rotated slides being cut off. Adjust based on rotate/depth!
            paddingTop: '50px',
            paddingBottom: '50px',
        }}
      >
        {slidesData.map((slide) => (
          <SwiperSlide
            key={slide.id}
            // *** SET EXPLICIT SLIDE DIMENSIONS ***
            style={{
                width: `${SLIDE_WIDTH_PX}px`,
                height: `${SLIDE_HEIGHT_PX}px`,
                backgroundColor: 'transparent', // Ensure slide itself is transparent
            }}
            // *** DO NOT ADD STATIC ROTATION CLASSES HERE (like rotate-5, rotate-[-5deg]) ***
            className="group bg-transparent mx-4" // Ensure background is transparent
          >
            {({ isActive }) => (
              <div
                className={`
                  w-full h-full
                  transition-opacity duration-300 ease-out
                  ${isActive ? 'opacity-100 rotate-[-6deg]' : 'opacity-80 rotate-[6deg]'}
                  flex items-center justify-center
                  bg-transparent // Ensure inner div is transparent
                `}
              >
                {/* Render your Polaroid SVG component */}
                {/* Ensure the SVG has the desired frame/caption baked in */}
                <slide.Component className="w-full h-full object-contain drop-shadow-md" />
                 {/* Optional drop-shadow on the SVG itself */}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// Optional CSS in global.css (if needed)
/*
.myPolaroidSlider .swiper-slide {
  background-color: transparent !important;
  overflow: visible !important; // Allows shadows to show fully
}

// Fine-tune Coverflow shadows if the default isn't quite right
.myPolaroidSlider .swiper-slide-shadow-left,
.myPolaroidSlider .swiper-slide-shadow-right {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0)) !important;
}
.myPolaroidSlider .swiper-slide-shadow-left {
   background-image: linear-gradient(to right, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0)) !important;
}
*/
