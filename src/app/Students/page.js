"use client";
import React,{useState} from 'react'
import Navigation from '../components/Navigation'
import { Accordion } from "flowbite-react";
import { Breadcrumb } from "flowbite-react";
import Image from "next/image";
import breadcrumbImg from "../../../public/assets/services/services_breadcrumb.png";

export default function page() {
    const [activeTab, setActiveTab] = useState("G-Learn");
    const studentTab=[
        {id:1,title:"G-Learn",},
        {id:2,title:"New student",},
        {id:3,title:"test1",},
        {id:4,title:"Wifi Access",},
    ];
    const GLearn=[
        {
            id:1,
            title:"Set up your My GITAM ID and password",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi consequatur, accusantium officia harum, atque ad cumque reiciendis aspernatur ea facilis rem, dolore dolor ducimus vitae fuga animi cum deserunt et aliquid perferendis omnis sequi minima! Aut fugit asperiores ipsa illum, ea, quam ipsam, velit est delectus quisquam officia accusantium deleniti.",

        },
        {
            id:2,
            title:"Enroll devices in ArchPass",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi consequatur, accusantium officia harum, atque ad cumque reiciendis aspernatur ea facilis rem, dolore dolor ducimus vitae fuga animi cum deserunt et aliquid perferendis omnis sequi minima! Aut fugit asperiores ipsa illum, ea, quam ipsam, velit est delectus quisquam officia accusantium deleniti.",

        },
    ];
    const NewStudent=[
        {
            id:1,
            title:"Set up your My GITAM ID and password",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi consequatur, accusantium officia harum, atque ad cumque reiciendis aspernatur ea facilis rem, dolore dolor ducimus vitae fuga animi cum deserunt et aliquid perferendis omnis sequi minima! Aut fugit asperiores ipsa illum, ea, quam ipsam, velit est delectus quisquam officia accusantium deleniti.",

        },
        {
            id:2,
            title:"Enroll devices in ArchPass",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi consequatur, accusantium officia harum, atque ad cumque reiciendis aspernatur ea facilis rem, dolore dolor ducimus vitae fuga animi cum deserunt et aliquid perferendis omnis sequi minima! Aut fugit asperiores ipsa illum, ea, quam ipsam, velit est delectus quisquam officia accusantium deleniti.",

        },
    ];
    const test1=[
        {
            id:1,
            title:"Set up your My GITAM ID and password",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi consequatur, accusantium officia harum, atque ad cumque reiciendis aspernatur ea facilis rem, dolore dolor ducimus vitae fuga animi cum deserunt et aliquid perferendis omnis sequi minima! Aut fugit asperiores ipsa illum, ea, quam ipsam, velit est delectus quisquam officia accusantium deleniti.",

        },
        {
            id:2,
            title:"Enroll devices in ArchPass",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi consequatur, accusantium officia harum, atque ad cumque reiciendis aspernatur ea facilis rem, dolore dolor ducimus vitae fuga animi cum deserunt et aliquid perferendis omnis sequi minima! Aut fugit asperiores ipsa illum, ea, quam ipsam, velit est delectus quisquam officia accusantium deleniti.",

        },
    ];
    const wifiAccess=[
        {
            id:1,
            title:"Enroll devices in ArchPass",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi consequatur, accusantium officia harum, atque ad cumque reiciendis aspernatur ea facilis rem, dolore dolor ducimus vitae fuga animi cum deserunt et aliquid perferendis omnis sequi minima! Aut fugit asperiores ipsa illum, ea, quam ipsam, velit est delectus quisquam officia accusantium deleniti.",

        },
        {
            id:2,
            title:"Set up your My GITAM ID and password",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi consequatur, accusantium officia harum, atque ad cumque reiciendis aspernatur ea facilis rem, dolore dolor ducimus vitae fuga animi cum deserunt et aliquid perferendis omnis sequi minima! Aut fugit asperiores ipsa illum, ea, quam ipsam, velit est delectus quisquam officia accusantium deleniti.",

        },
    ];
    const getTabContent = () => {
        switch (activeTab) {
          case "G-Learn":
            return GLearn;
          case "New student":
            return NewStudent;
          case "test1":
            return test1;
          case "Wifi Access":
            return wifiAccess;
          default:
            return [];
        }
      };
   
  return (
    <>
        <Navigation/>
        {/* Bread crumb */}
        <div className="w-full bg-[#f4e4c9] px-4 py-2">
                <div className="container max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
                  <div className="flex flex-col">
                    <h1 className="text-[#a58255] text-lg"> Services</h1>
                    <Breadcrumb aria-label="Default breadcrumb example">
                      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                      <Breadcrumb.Item href="/Students">Students</Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                  <div className="h-[180px]">
                    <Image src={breadcrumbImg} alt="service_Img" className="h-max w-full object-contain" />
                  </div>
                </div>
        </div>
        {/* End of breadcrumb */}
        {/* Vertical tab section */}
        <div className="lg:max-w-screen-xl mx-auto">
        <div className="p-4 flex gap-4">
          {/* Sidebar for Tabs */}
          <div className="w-1/4 flex flex-col space-y-2">
            {studentTab.map((tab) => (
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

          {/* Tab Content */}
          <div className="w-3/4 p-4 border rounded-md">
            {getTabContent().map((item) => (
              <div key={item.id} className="border-b pb-4 mb-4">
                <Accordion>
                  <Accordion.Panel>
                    <Accordion.Title>{item.title}</Accordion.Title>
                    <Accordion.Content>
                      <p>{item.description}</p>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
     </>
  )
}

