"use client";
import React,{useState} from 'react'
import Navigation from '../components/Navigation'
import { Breadcrumb } from 'flowbite-react'
import Image from 'next/image'
import breadcrumbImg from "../../../public/assets/services/bell-cats-breadcrumb.png";

function page() {
    const [activeTab,setActiveTab]=useState("About");
    const tabs=[
        {
            id:1,
            title:"About",
        },
        {
            id:2,
            title:"Key features",
        },
        {
            id:3,
            title:"How to access",
        },
        {
            id:4,
            title:"Support areas",
        },
    ];
    const About=[
        {
            id:1,
            title:"Bell the CATS – Service ticket management system",
            description:"Bell the CATS is GITAM's dedicated service ticket management system designed to streamline to support across all 4 campuses. This platform enables staff, faculty, and students to raise service requests efficiently, ensuring prompt resolution and effective communication with the support teams.",
        },
    ]
    const Keyfeatures=[
        {
            id:2,
            title:"Key features",
            description:"Bell the CATS is GITAM's dedicated service ticket management system designed to streamline to support across all 4 campuses. This platform enables staff, faculty, and students to raise service requests efficiently, ensuring prompt resolution and effective communication with the support teams.",
        },
    ]
    const Howtoaccess=[
        {
            id:3,
            title:"How to access",
            description:"Bell the CATS is GITAM's dedicated service ticket management system designed to streamline to support across all 4 campuses. This platform enables staff, faculty, and students to raise service requests efficiently, ensuring prompt resolution and effective communication with the support teams.",
        }];
        const Supportareas=[
        {
            id:4,
            title:"Support areas covered",
            description:"Bell the CATS is GITAM's dedicated service ticket management system designed to streamline to support across all 4 campuses. This platform enables staff, faculty, and students to raise service requests efficiently, ensuring prompt resolution and effective communication with the support teams.",
        }
    ];
    const getTabContent=()=>{
        switch(activeTab){
            case "About":
            return About;
            case "Key features":
            return Keyfeatures;
            case "How to access":
            return Howtoaccess;
            case "Support areas":
                return Supportareas;
                default:
                return[];
        }
    }
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
                    <Breadcrumb.Item href="/BellTheCATS">Bell The CATS</Breadcrumb.Item>
                </Breadcrumb>
                </div>
                <div className="h-[180px]">
                <Image src={breadcrumbImg} alt="service_Img" className="h-max w-full object-contain" />
                </div>
            </div>
        </div>
    { /* End Bread crumb */}
            <div className="lg:max-w-screen-xl mx-auto">
                    <div className="p-4 flex gap-4">
                      {/* Sidebar for Tabs */}
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
            
                      {/* Tab Content */}
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
            </div>
    </>
  )
}

export default page