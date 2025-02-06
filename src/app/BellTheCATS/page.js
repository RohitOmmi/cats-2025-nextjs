"use client";
import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { Breadcrumb } from "flowbite-react";
import Image from "next/image";
import breadcrumbImg from "../../../public/assets/services/bell-cats-breadcrumb.png";
import Academic_software from "../../../public/assets/services/Academic_software.png";
import Administration_software from "../../../public/assets/services/Administration_software.png";
import Hospital_software from "../../../public/assets/services/Hospital_software.png";
import Infrastructure from "../../../public/assets/services/Infrastructure.png";
import DesktopPrint from "../../../public/assets/services/DesktopPrint.png";
import Customercare from "../../../public/assets/services/Customercare.png";
import identitySecurity from "../../../public/assets/services/identitySecurity.png";
import researchServices from "../../../public/assets/services/researchServices.png";
import communicationservices from "../../../public/assets/services/communicationservices.png";
import { PiDotsThreeCircleDuotone } from "react-icons/pi";
import { IoHandRightOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

import Footer from "../components/Footer";
function page() {
  // const [activeTab,setActiveTab]=useState("About");
  // const tabs=[
  //     {
  //         id:1,
  //         title:"About",
  //     },
  //     {
  //         id:2,
  //         title:"Key features",
  //     },
  //     {
  //         id:3,
  //         title:"How to access",
  //     },
  //     {
  //         id:4,
  //         title:"Support areas",
  //     },
  // ];
  // const About=[
  //     {
  //         id:1,
  //         title:"Bell the CATS – Service ticket management system",
  //         description:"Bell the CATS is GITAM's dedicated service ticket management system designed to streamline to support across all 4 campuses. This platform enables staff, faculty, and students to raise service requests efficiently, ensuring prompt resolution and effective communication with the support teams.",
  //     },
  // ]
  // const Keyfeatures=[
  //     {
  //         id:2,
  //         title:"Key features",
  //         description:"Bell the CATS is GITAM's dedicated service ticket management system designed to streamline to support across all 4 campuses. This platform enables staff, faculty, and students to raise service requests efficiently, ensuring prompt resolution and effective communication with the support teams.",
  //     },
  // ]
  // const Howtoaccess=[
  //     {
  //         id:3,
  //         title:"How to access",
  //         description:"Bell the CATS is GITAM's dedicated service ticket management system designed to streamline to support across all 4 campuses. This platform enables staff, faculty, and students to raise service requests efficiently, ensuring prompt resolution and effective communication with the support teams.",
  //     }];
  //     const Supportareas=[
  //     {
  //         id:4,
  //         title:"Support areas covered",
  //         description:"Bell the CATS is GITAM's dedicated service ticket management system designed to streamline to support across all 4 campuses. This platform enables staff, faculty, and students to raise service requests efficiently, ensuring prompt resolution and effective communication with the support teams.",
  //     }
  // ];
  // const getTabContent=()=>{
  //     switch(activeTab){
  //         case "About":
  //         return About;
  //         case "Key features":
  //         return Keyfeatures;
  //         case "How to access":
  //         return Howtoaccess;
  //         case "Support areas":
  //             return Supportareas;
  //             default:
  //             return[];
  //     }
  // }
  const [search, setSearch] = useState("");

  const cardData = [
    {
      id: 1,
      title: "software",
      img: Academic_software,
      description:
        "Services supporting for G-Courses, G-Registrations, G-Learn, G-Coding, G-Evaluation, G-Question bank, G-Results, G-Curriculum etc...",
    },
    {
      id: 2,
      title: "Administration software",
      img: Administration_software,
      description:
        "Services supporting for G-Application & Admissions, G-Mentors, G-Finance, G-Pay, G-Residence, G-Diner, G-Travel Desk etc...",
    },
    {
      id: 3,
      title: "Hospital software",
      img: Hospital_software,
      description:
        "Services supporting for GIMSR, Basavatarakam, Dental, All Hospital Modules, NMC, NABH, NABL, Medical LMS.",
    },
    {
      id: 4,
      title: "Infrastructure services",
      img: Infrastructure,
      description:
        "Services supporting for LAN, Switches, WIFI Points, Projectors, Biometrics, Access controls, UPS, Surveillance, Networks and Connectivity.",
    },
    {
      id: 5,
      title: "Computer and Print",
      img: DesktopPrint,
      description:
        "Services supporting for Move, Add and changes (MAC), System administration, End point management, Patch Management etc...",
    },
    {
      id: 6,
      title: "Customer care and data reporting",
      img: Customercare,
      description:
        "Services supporting for Bell The CATS, Training and adoption, Data reporting services, SSOT, SSOT-DIS, SSOT-SIS, SSOT-FIS, SSOT-CIS etc...",
    },
    {
      id: 7,
      title: "Identity and Security",
      img: identitySecurity,
      description:
        "Services providing for Domain Services, ID card services, SSO Services, Security, On-boarding & Separation, URL / DNS Security etc etc...",
    },
    {
      id: 8,
      title: "Research services",
      img: researchServices,
      description:
        "Services providing for HPC, G-Equip, G-Scholar, Journal Interface.",
    },
    {
      id: 9,
      title: "Communication and Collabration",
      img: communicationservices,
      description:
        "Services providing for Video Conferencing, Email, Broadcast, Signage, Text, Voice.",
    },
  ];
  const filteredCards = cardData.filter((card) =>
    
    card.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  console.log(filteredCards.length, "Length")
  return (
    <>
      <Navigation />
      {/* Bread crumb */}
      <div className="w-full bg-[#f4e4c9] px-4 py-2">
        <div className="container max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[#a58255] text-lg"> Services</h1>
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/BellTheCATS">
                Bell The CATS
              </Breadcrumb.Item>
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
      {/* End Bread crumb */}

      <div>
        {/* searchbar */}
        <div className=" flex flex-wrap justify-center p-4">
          <input
            type="text"
            className=" p-2 border border-gray-300 rounded-lg mb-4 w-[50vw] md:w-[25vw]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch color="black" size="34px" />
        </div>
        {/* cards starting */}
        <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div
                className="mx-auto bg-white border  border-black overflow-hidden"
                key={card.id}
              >
                <div className="bg-[#007367] w-full ">
                  <h2 className="text-white text-md lg:text-xl text-left px-4 py-1">
                    {card.title}
                  </h2>
                </div>
                <div className="flex flex-row justify-evenly gap-2 h-[100px] p-4">
                  <Image
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full bg-transparent align-middle my-auto"
                  />
                  <p>{card.description}</p>
                </div>
                <div className="flex flex-row justify-end gap-2 p-2">
                  <a href="#" target="_blank">
                    <PiDotsThreeCircleDuotone
                      color="#007367"
                      size="26px"
                      className=" text-xl  my-4"
                    />
                  </a>
                  <a href="#" target="_blank">
                    <IoHandRightOutline
                      color="#007367"
                      size="24px"
                      className=" text-xl  my-4"
                    />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No results found</p>
          )}
        </div>
        {/* cards Ending */}
      </div>

      

      {/*<div className="lg:max-w-screen-xl mx-auto">
                     <div className="p-4 flex gap-4">
                      {/* Sidebar for Tabs 
                      <div className="w-1/4 flex flex-col space-y-2">
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.title)}
                            className={`px-4 py-2 rounded-md w-full text-left ${
                              activeTab === tab.title ? "bg-[#a58255] text-white" : "bg-gray-300"
                            }`}
                          >
                            {tab.title}
                          </button>
                        ))}
                      </div>
            
                      {/* Tab Content 
                      <div className="w-3/4 p-4 ">
                        {getTabContent().map((item) => (
                          <div key={item.id} className=" pb-4 mb-4">
                            <div className="flex justify-between items-center  pb-2">
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            </div>

                            <p className="mt-2 text-gray-700">
                            {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div> 
            </div>*/}
            <Footer/>
            
    </>
  );
}

export default page;
