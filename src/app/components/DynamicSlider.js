"use client";

import Lines from "../../../public/assets/images/slider-Lines.png"; // Ensure the correct path
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Queen Victoria was proclaimed as The Empress of India",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://guprojects.gitam.edu/catscms2/public/slider/mainslider_677e135693899.png",
    link: "https://www.gitam.edu/",
    bgColor: "bg-teal-600",
  },
  {
    id: 2,
    title: "GITAM University - Established 1980",
    description:
      "GITAM Deemed to be University stands at the intersection of multidisciplinary applied education.",
    image: "https://guprojects.gitam.edu/catscms2/public/slider/mainslider_6780e8bc22618.jpg",
    link: "https://pagespeed.web.dev/",
    bgColor: "bg-blue-600",
  },
  {
    id: 3,
    title: "Screen-Free Childhood: The Waldorf Way",
    description:
      "Explore how the Waldorf approach promotes a balanced childhood experience.",
    video: "https://www.youtube.com/embed/LxzYNt9tKxs",
    link: "https://www.swechhawaldorf.in/Blog/view/screen-free-childhood-parenting-the-waldorf-way",
    bgColor: "bg-red-500",
  },
];

const faq = [
  { id: 1, title: "Student", link: "#" },
  { id: 2, title: "Staff", link: "#" },
  { id: 3, title: "Guest", link: "#" },
  { id: 4, title: "Bell the CATS", link: "#" },
];

export default function DynamicSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const activeBgColor = slides[activeSlide].bgColor;

  return (
    <>
      <section className="relative w-full max-w-6xl mx-auto transition-all duration-300 mt-[28px] ">
        <div>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          onChange={handleSlideChange}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={`p-8 ${slide.bgColor} text-white`}>
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 p-6">
                  <h2 className="text-3xl font-bold">{slide.title}</h2>
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
                <div className="lg:w-1/2">
                  {slide.video ? (
                    <iframe
                      width="100%"
                      height="300"
                      src={slide.video}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="rounded-lg shadow-lg h-[360px]"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="row">
        <div className="col-12">
          <div className="mt-[28px] justify-center mx-auto">
            <fieldset className={`mx-auto ${activeBgColor} px-5 border`}>
              <legend className="text-md bg-white">Frequently Asked Questions</legend>
              <div className="flex flex-row justify-evenly gap-4 px-[12px] py-[24px]">
                {faq.map((item) => (
                  <a href={item.link} key={item.id} target="_blank">
                    <div className="px-[24px] py-[12px] w-[240px] bg-white text-black text-center">
                      {item.title}
                    </div>
                  </a>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
}
