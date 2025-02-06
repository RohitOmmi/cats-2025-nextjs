"use client";
import Image from "next/image";
import Lines from "../../../public/assets/images/slider-Lines.png"; // Ensure the correct path
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { PiStudent } from "react-icons/pi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { HiMiniBellAlert } from "react-icons/hi2";
import { LuMessageCircleQuestion } from "react-icons/lu";

const slides = [
  {
    id: 1,
    title: "Queen Victoria was proclaimed as The Empress of India",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://guprojects.gitam.edu/catscms2/public/slider/mainslider_677e135693899.png",
    link: "https://www.gitam.edu/",
    bgColor: "bg-teal-600",
    bgColor1: "bg-teal-400",
  },
  {
    id: 2,
    title: "GITAM University - Established 1980",
    description:
      "GITAM Deemed to be University stands at the intersection of multidisciplinary applied education.",
    image:
      "https://guprojects.gitam.edu/catscms2/public/slider/mainslider_6780e8bc22618.jpg",
    link: "https://pagespeed.web.dev/",
    bgColor: "bg-blue-600",
    bgColor1: "bg-blue-400",
  },
  {
    id: 3,
    title: "Screen-Free Childhood: The Waldorf Way",
    description:
      "Explore how the Waldorf approach promotes a balanced childhood experience.",
    video: "https://www.youtube.com/embed/LxzYNt9tKxs",
    link: "https://www.swechhawaldorf.in/Blog/view/screen-free-childhood-parenting-the-waldorf-way",
    bgColor: "bg-red-500",
    bgColor1: "bg-red-400",
  },
];

const faq = [
  { id: 1, title: "Student", link: "/Students", icon: <PiStudent /> },
  { id: 2, title: "Staff", link: "/Staff", icon: <BsFillPersonVcardFill /> },
  { id: 3, title: "Guest", link: "/Guest", icon: <BsFillPersonVcardFill /> },
  {
    id: 4,
    title: "Bell the CATS",
    link: "/BellTheCATS",
    icon: <LuMessageCircleQuestion />,
  },
];

export default function DynamicSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const activeBgColor = slides[activeSlide].bgColor;

  return (
    <>
      <section className="relative w-full  mx-auto transition-all duration-300  ">
        <div className={`relative ${slides[activeSlide].bgColor1} p-[30px]`}>
          {/* Background Lines Image Positioned at Top-Left */}
          <Image
            src={Lines} // Use Next.js Image optimization if needed
            alt="Decorative Lines"
            className="absolute top-0 left-0 w-[180px] h-[180px] opacity-50 pointer-events-none"
          />
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            onChange={handleSlideChange}
          >
            {slides.map((slide) => (
              <div className="flex justify-center w-full">
                <div className="w-full lg:max-w-screen-xl">
                  <fieldset
                    key={slide.id}
                    className={`p-8 ${slide.bgColor} text-white`}
                  >
                    <legend className="font-inter text-md bg-white text-black p-2 border text-left">
                      Commemorate - today
                    </legend>
                    <div className="flex flex-col lg:flex-row items-center w-full font-inter">
                      <div className="lg:w-1/2 w-full p-6 text-left">
                        <h2 className="text-3xl font-bold ">{slide.title}</h2>
                        <p className="mt-2">{slide.description}</p>
                        <a
                          href={slide.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block bg-white text-black px-4 py-2 rounded shadow"
                        >
                          Read More
                        </a>
                      </div>
                      <div className="lg:w-1/2 w-full">
                        {slide.video ? (
                          <iframe
                            width="100%"
                            height="320"
                            src={slide.video}
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="rounded-lg shadow-lg w-full h-[360px] object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="mt-3 md:mt-5 flex justify-center mx-auto lg:max-w-screen-xl font-inter ">
        <fieldset className={`w-full mx-auto ${activeBgColor} p-5 `}>
          {/* <legend className="text-sm bg-white p-1 border font-inter">
            Frequently Asked Questions
          </legend> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2 py-3 text-[#A18454]">
            {faq.map((item) => (
              <a href={item.link} key={item.id} className="block">
                <div className="flex items-center bg-white p-3  shadow-md hover:shadow-lg transition w-full ">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="ml-2 font-[500]">{item.title}</span>
                </div>
              </a>
            ))}
          </div>
        </fieldset>
      </div>
    </>
  );
}
