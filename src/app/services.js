"use client";
import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import AcademicSoftware from "../../public/assets/services/Academic_software.png";
import Administration from "../../public/assets/services/Administration_software.png";
import Hospital from "../../public/assets/services/Hospital_software.png";
import WebApp from "../../public/assets/services/Webapp.png";
import TechInfrastructure from "../../public/assets/services/Techinfrastructure.png";
import DesktopPrint from "../../public/assets/services/DesktopPrint.png";
import Infrastructure from "../../public/assets/services/Infrastructure.png";
import AssetsAccq from "../../public/assets/services/AssetsAccquisitions.png";
import CustomercareData from "../../public/assets/services/Customercare.png";
import IdentitySecurity from "../../public/assets/services/identitySecurity.png";
import Research from "../../public/assets/services/researchServices.png";
import Communication from "../../public/assets/services/communicationservices.png";




const data = [
  {
    id: 1,
    title: "Academic software",
    img: AcademicSoftware,
    link: "#",
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <a href={item.link || "#"} key={item.id} className="block">
          <Card className="max-w-sm bg-[#f4e4c9]  border-[#a58255] p-4 d-block">
            <div className="h-[120px] flex justify-center items-center">
              
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
  );
}
