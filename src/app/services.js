"use client";
import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import AcademicSoftware from "../../public/assets/services/Academic_software.png";

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
    img: AcademicSoftware,
    link: "#",
  },
  {
    id: 3,
    title: "Hospital software",
    img: AcademicSoftware,
    link: "#",
  },
  {
    id: 4,
    title: "Web and App services",
    img: AcademicSoftware,
    link: "#",
  },
  {
    id: 5,
    title: "Tech infrastructure services",
  },
  {
    id: 6,
    title: "Desktop and Print services",
  },
  {
    id: 7,
    title: "Infrastructure services",
  },
  {
    id: 8,
    title: "Assets Acquisitions",
  },
  {
    id: 9,
    title: "Customer care and data reporting",
  },
  {
    id: 10,
    title: "Identity and Security",
  },
  {
    id: 11,
    title: "Research services",
  },
  {
    id: 12,
    title: "Communication services",
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <a href={item.link || "#"} key={item.id} className="block">
          <Card className="max-w-sm bg-[#a58255] p-4">
            <div className="h-[120px] flex justify-center items-center">
              {item.img ? (
                <Image
                  src={item.img}
                  alt={item.title}
                  width={100} // Adjust width as needed
                  height={100} // Adjust height as needed
                  className="object-contain"
                />
              ) : (
                <div className="h-full flex items-center justify-center text-white">
                  No Image
                </div>
              )}
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
