"use client";
import React,{useState} from 'react'
import Navigation from '../components/Navigation'
import { Accordion } from "flowbite-react";
import { Breadcrumb } from "flowbite-react";
import Image from "next/image";
import breadcrumbImg from "../../../public/assets/services/services_breadcrumb.png";

function page() {
     const [activeTab, setActiveTab] = useState("G-SIS"); 
     const [openAccordion, setOpenAccordion] = useState(null);
      
      const tabs=[
        {
            id:1,
            title:"G-SIS"
        },
        {
            id:2,
            title:"test"
        },
      ];
      const GSIS=[
        {
            id:1,
            title:"Test Question",
            description:"Test Content"
        },
        {
            id:2,
            title:"Test Question2",
            description:"Test Content2"
        },
      ];
      const test=[
        {
            id:1,
            title:"Test Question2",
            description:"Test Content"
        },
        {
            id:2,
            title:"Test Question3",
            description:"Test Content2"
        },
      ];
      const getTabContent=()=>{
        switch (activeTab) {
            case "G-SIS":
              return GSIS;
            case "test":
              return test;
            default:
              return [];
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
                        <Breadcrumb.Item href="/Staff">Staff</Breadcrumb.Item>
                    </Breadcrumb>
                    </div>
                    <div className="h-[180px]">
                    <Image src={breadcrumbImg} alt="service_Img" className="h-max w-full object-contain" />
                    </div>
                </div>
        </div>
        {/* End of breadcrumb */}
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

export default page