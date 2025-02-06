"use client";
import React from "react";
import Navigation from "../components/Navigation";
import { Breadcrumb } from "flowbite-react";
import { Card } from "flowbite-react";
import Image from "next/image";
import Courses from "../../../public/assets/Academic/Courses.png";
import Registrations from "../../../public/assets/Academic/G-Course registration.png";
import Glearn from "../../../public/assets/Academic/G learn.png";
import examination from "../../../public/assets/Academic/examination.png";
import Gevaluation from "../../../public/assets/Academic/G-Evaluation.png";
import Quize2 from "../../../public/assets/Academic/Quize2.png";
import Curriculum from "../../../public/assets/Academic/Curriculum.png";
import Coding from "../../../public/assets/Academic/Coding.png";
import Gquestion from "../../../public/assets/Academic/G-Question bank.png";
import Gvaluation from "../../../public/assets/Academic/G-Valuation.png";
import Webprofile from "../../../public/assets/Academic/Web-prifiles.png";
import breadcrumbImg from "../../../public/assets/services/services_breadcrumb.png";
import Footer from "../components/Footer";
import ServiceCard from "../components/serviceCard";
const data = [
  {
    id: 1,
    title: "G-Courses",
    img: Courses,
    link: "/innerPage",
  },
  {
    id: 2,
    title: "G-Registrations",
    img: Registrations,
    link: "#",
  },
  {
    id: 3,
    title: "G-Learn",
    img: Glearn,
    link: "#",
  },
  {
    id: 4,
    title: "G-Examinations",
    img: examination,
    link: "#",
  },
  {
    id: 5,
    title: "G-Evaluation",
    img: Gevaluation,
    link: "#",
  },
  {
    id: 6,
    title: "G-Results",
    img: Quize2,
    link: "#",
  },
  {
    id: 7,
    title: "G-Curriculum",
    img: Curriculum,
    link: "#",
  },
  {
    id: 8,
    title: "G-Coding",
    img: Coding,
    link: "#",
  },
  {
    id: 9,
    title: "G-Question bank",
    img: Gquestion,
    link: "#",
  },
  {
    id: 10,
    title: "G-Valuation",
    img: Gvaluation,
    link: "#",
  },
  {
    id: 11,
    title: "G-Web profile",
    img: Webprofile,
    link: "#",
  },
];
export default function AcademicSoftware() {
  return (
    <>
      <Navigation />
      {/* Breadcrumb */}

      <div className="w-full bg-[#f4e4c9] px-4 py-2 font-inter">
        <div className="container max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex flex-col justify-between  ">
            <h1 className="text-[#a58255] text-3xl font-medium my-4">
              {" "}
              Services
            </h1>
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/services">Services</Breadcrumb.Item>
              <Breadcrumb.Item href="">Academic software</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="h-[100px]">
            <Image
              src={breadcrumbImg}
              alt="service_Img"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* end of bread crumb */}
      <div className=" lg:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[24px] font-inter">
        {data.map((item) => (
          <div key={item.id}>
            <ServiceCard itemData={item} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
