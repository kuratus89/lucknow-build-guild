import React from "react";
import Contact from "../components/Contact";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const FAQs = () => {
  return (
    <div className="w-full min-h-screen bg-[#0A365D] text-white flex flex-col">
      {/* Heading */}
      <header className="py-8 text-center">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-2 text-gray-300 text-sm">
          Explore answers to common questions
        </p>
      </header>

      {/* Slider with slightly increased height */}
      <main className="flex justify-center items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}   // 👈 allows side slides to peek in
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper w-full max-w-4xl h-[400px]"  // 👈 increased height
        >
          <SwiperSlide className="!w-[250px] !h-full">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="nature1"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[250px] !h-full">
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="nature2"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[250px] !h-full">
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="nature3"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[250px] !h-full">
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt="nature4"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[250px] !h-full">
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="nature5"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </main>

      {/* Contact at bottom */}
      <footer className="mt-12">
        <Contact />
      </footer>
    </div>
  );
};

export default FAQs;