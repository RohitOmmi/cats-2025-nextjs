"use client";
import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import AcademicSoftware from "../../../public/assets/services/Academic_software.png";
import Administration from "../../../public/assets/services/Administration_software.png";
import Hospital from "../../../public/assets/services/Hospital_software.png";
import WebApp from "../../../public/assets/services/Webapp.png";
import TechInfrastructure from "../../../public/assets/services/Techinfrastructure.png";
import DesktopPrint from "../../../public/assets/services/DesktopPrint.png";
import Infrastructure from "../../../public/assets/services/Infrastructure.png";
import AssetsAccq from "../../../public/assets/services/AssetsAccquisitions.png";
import CustomercareData from "../../../public/assets/services/Customercare.png";
import IdentitySecurity from "../../../public/assets/services/identitySecurity.png";
import Research from "../../../public/assets/services/researchServices.png";
import Communication from "../../../public/assets/services/communicationservices.png";
import breadcrumbImg from "../../../public/assets/services/services_breadcrumb.png";
import Navigation from "../components/Navigation";
import Footer from "../../../src/app/components/Footer";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import ServiceCard from "../components/serviceCard";

const data = [
  {
    id: 1,
    title: "Academic software",
    img: AcademicSoftware,
    link: "/subCategory",
  },
  {
    id: 2,
    title: "Administration software",
    img: Administration,
    link: "#",
  },
  {
    id: 3,
    title: "Hospital software",
    img: Hospital,
    link: "#",
  },
  {
    id: 4,
    title: "Web and App services",
    img: WebApp,
    link: "#",
  },
  {
    id: 5,
    title: "Tech infrastructure services",
    img: TechInfrastructure,
    link: "#",
  },
  {
    id: 6,
    title: "Desktop and Print services",
    img: DesktopPrint,
    link: "#",
  },
  {
    id: 7,
    title: "Infrastructure services",
    img: Infrastructure,
    link: "#",
  },
  {
    id: 8,
    title: "Assets Acquisitions",
    img: AssetsAccq,
    link: "#",
  },
  {
    id: 9,
    title: "Customer care and data reporting",
    img: CustomercareData,
    link: "#",
  },
  {
    id: 10,
    title: "Identity and Security",
    img: IdentitySecurity,
    link: "#",
  },
  {
    id: 11,
    title: "Research services",
    img: Research,
    link: "#",
  },
  {
    id: 12,
    title: "Communication services",
    img: Communication,
    link: "#",
  },
];

export default function Services() {
  return (
    <div className="min-h-[100vh]">
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
      {/* cards view */}
      <div className="h-full lg:max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[24px] mx-auto font-inter">
        {data.map((item) => (
          <div key={item.id}>
            <ServiceCard itemData={item} />
          </div>
        ))}
      </div>
      {/* endof card */}

      <Footer />
    </div>
  );
}
