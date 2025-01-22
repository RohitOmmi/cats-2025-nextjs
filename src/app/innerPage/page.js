"use client";
import React from 'react'
import { useState } from "react";
import Navigation from "../components/Navigation";
import { Breadcrumb } from "flowbite-react";
import Image from "next/image";
import breadcrumbImg from "../../../public/assets/services/news_breadcrumb.png";
import Footer from '../components/Footer';
function page() {
    const [activeTab, setActiveTab] = useState("About");
      const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded item index
    

      const tabs = [
        { id: "About", title: "About" },
        { id: "Often asked", title: "Often asked" },
        { id: "Request for service", title: "Request for service" },
      ];

        const newsContent = [
        {
          title: "About G-courses",
          content:"G-Courses is a centralized platform designed to streamline and manage the academic lifecycle of courses offered across various programs. It serves as the backbone of academic administration, ensuring detailed, accurate, and accessible course data for smooth functioning.",
        },]
        const newsContent1=[
        {
          title: "Often asked",
          content:
            "Our university has launched a new research program to encourage students and faculty members to participate in innovative projects. This initiative aims to bridge the gap between academic learning and real-world applications.",
        },]
        const newsContent2=[
        {
          title: "Campus Development Update",
          content:
            "We are thrilled to announce the construction of a new state-of-the-art library and research center. This facility will be equipped with modern technology, collaborative spaces, and an extensive digital archive.",
        },
      ];
  return (

    // <div>inner page</div>
    <>
          <Navigation />
          {/* Breadcrumb */}
          <div className="w-full bg-[#f4e4c9] px-4">
            <div className="container max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
              <div className="flex flex-col">
                <h1 className="text-[#a58255] text-lg">Services</h1>
                <Breadcrumb aria-label="Default breadcrumb example">
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="/services">service</Breadcrumb.Item>
                  <Breadcrumb.Item href="/subCategory">Academic software</Breadcrumb.Item>
                  <Breadcrumb.Item href="/innerPage">G-Courses</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="h-[180px]">
                <Image src={breadcrumbImg} alt="service_Img" className="h-max w-full object-contain" />
              </div>
            </div>
          </div>
          {/* End of Breadcrumb */}
    
          {/* Vertical Tabs Section */}
          <div className="lg:max-w-screen-xl mx-auto">
            <div className="p-4 flex gap-4">
              {/* Sidebar for Tabs */}
              <div className="w-1/4 flex flex-col space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-md w-full text-left ${
                      activeTab === tab.id ? "bg-[#a58255] text-white" : "bg-gray-300"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
    
              {/* Tab Content */}
              <div className="w-3/4 p-4 border rounded-md">
                {activeTab === "About" && (
                  <div>
                    {newsContent.map((news, index) => (
                      <div key={index} className="border-b pb-4 mb-4">
                        <div className="flex justify-between items-center border-b pb-2">
                          <h2 className="text-lg font-semibold">{news.title}</h2>
                          {/* <span className="text-gray-500">Date: {new Date().toLocaleDateString()}</span> */}
                        </div>
    
                        <p className="mt-2 text-gray-700">
                          {expandedIndex === index ? news.content : `${news.content.substring(0, 150)}...`}
                        </p>
    
                        <button
                          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                          className="mt-2 text-blue-500 font-medium"
                        >
                          {expandedIndex === index ? "Read Less" : "Read More"}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "Often asked" && 
                (
                    <div>
                      {newsContent1.map((news, index) => (
                        <div key={index} className="border-b pb-4 mb-4">
                          <div className="flex justify-between items-center border-b pb-2">
                            <h2 className="text-lg font-semibold">{news.title}</h2>
                            {/* <span className="text-gray-500">Date: {new Date().toLocaleDateString()}</span> */}
                          </div>
      
                          <p className="mt-2 text-gray-700">
                            {expandedIndex === index ? news.content : `${news.content.substring(0, 150)}...`}
                          </p>
      
                          <button
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            className="mt-2 text-blue-500 font-medium"
                          >
                            {expandedIndex === index ? "Read Less" : "Read More"}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                {activeTab === "Request for service" && 
                (
                    <div>
                      {newsContent2.map((news, index) => (
                        <div key={index} className="border-b pb-4 mb-4">
                          <div className="flex justify-between items-center border-b pb-2">
                            <h2 className="text-lg font-semibold">{news.title}</h2>
                            <span className="text-gray-500">Date: {new Date().toLocaleDateString()}</span>
                          </div>
      
                          <p className="mt-2 text-gray-700">
                            {expandedIndex === index ? news.content : `${news.content.substring(0, 150)}...`}
                          </p>
      
                          <button
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            className="mt-2 text-blue-500 font-medium"
                          >
                            {expandedIndex === index ? "Read Less" : "Read More"}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>

         
        </>
  )
}

export default page