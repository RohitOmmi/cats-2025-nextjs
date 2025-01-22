"use client";
import React from 'react'
import Navigation from "../components/Navigation"
import { Breadcrumb } from "flowbite-react";
import { Card } from "flowbite-react";
import Image from "next/image";
import Courses from "../../../public/assets/Academic/Courses.png"
import Registrations from "../../../public/assets/Academic/G-Course registration.png"
import Glearn from "../../../public/assets/Academic/G learn.png"
import examination from "../../../public/assets/Academic/examination.png"
import Gevaluation from "../../../public/assets/Academic/G-Evaluation.png"
import Quize2 from "../../../public/assets/Academic/Quize2.png"
import Curriculum from "../../../public/assets/Academic/Curriculum.png"
import Coding from "../../../public/assets/Academic/Coding.png"
import Gquestion from "../../../public/assets/Academic/G-Question bank.png"
import Gvaluation from "../../../public/assets/Academic/G-Valuation.png"
import Webprofile from "../../../public/assets/Academic/Web-prifiles.png"
import breadcrumbImg from "../../../public/assets/services/services_breadcrumb.png"
import Footer from '../components/Footer';
const data = [
  {
    id: 1,
    title: "G-Courses",
    img:Courses,
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
    img:Coding,
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
         <div className="w-full bg-[#f4e4c9] px-4 py-2">
                 <div className="container max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
                   <div className="flex flex-col">
                     <h1 className="text-[#a58255] text-lg"> Services</h1>
                     <Breadcrumb aria-label="Default breadcrumb example">
                     <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                       <Breadcrumb.Item href="/services">Service</Breadcrumb.Item>
                       <Breadcrumb.Item href="">Academic software</Breadcrumb.Item>
                     </Breadcrumb>
                   </div>
                   <div className="h-[180px]">
                     <Image src={breadcrumbImg} alt="service_Img" className="h-max w-full object-contain" />
                   </div>
                 </div>
            </div>
         {/* end of bread crumb */}
        <div className=" lg:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[24px]">
                {data.map((item) => (
                  <a href={item.link || "#"} key={item.id} className="block">
                    <Card className=" bg-[#f4e4c9]  border-[#a58255] d-block">
                      <div className="h-[100px] flex justify-center items-center">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={100} // Adjust width as needed
                          height={100} // Adjust height as needed
                          className="object-contain"
                        />
                      </div>
                      <h6 className="font-normal text-gray-700 dark:text-gray-400 text-center">
                        {item.title}
                      </h6>
                    </Card>
                  </a>
                ))}
        </div>
        <Footer/>
   </>
  )
}

