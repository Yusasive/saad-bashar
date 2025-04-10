"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  { src: "/projects/firstImage.svg", caption: "First Image" },
  { src: "/projects/secondImage.svg", caption: "Second Image" },
  { src: "/projects/thirdImage.svg", caption: "Third Image" },
  { src: "/projects/fourthImage.svg", caption: "Fourth Image" },
  { src: "/projects/fifthImage.svg", caption: "Fifth Image" },
  { src: "/projects/sixthImage.svg", caption: "Sixth Image" },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.5}
        centeredSlides
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              animate={{
                opacity: 1,
                scale: activeIndex === index ? 1 : 0.9,
                rotate: -10,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="p-2 rounded-lg shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.caption}
                className="rounded-lg "
                width={364}
                height={416}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
