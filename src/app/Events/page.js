"use client";
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { Breadcrumb, Pagination } from "flowbite-react";
import Image from "next/image";
import breadcrumbImg from "../../../public/assets/services/events_breadcrumb.png";
import Footer from "../components/Footer";

function Page() {
  const [activeTab, setActiveTab] = useState("All Events"); 
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded item index
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = [{ id: 1, title: "All Events" }];

  const newsContent = [
    {
      title: "Email Generation",
      content: "We are super excited to announce the relaunch of G-Learn...",
    },
    {
      title: "Student ID Card Issues Program",
      content: "Our university has launched a new research program...",
    },
    {
      title: "Campus Development Update",
      content: "We are thrilled to announce the construction of a new library...",
    },
    {
      title: "Testing Cats",
      content: "We are thrilled to announce the construction of a new center...",
    },
  ];

  // Pagination logic
  const itemsPerPage = 2; // Show 2 items per page
  const totalPages = Math.ceil(newsContent.length / itemsPerPage);

  // Get current page's news items
  const paginatedNews = newsContent.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navigation />

      {/* Breadcrumb */}
      <div className="w-full bg-[#f4e4c9] px-4">
        <div className="container max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[#a58255] text-lg">Services</h1>
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/Events">Events</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="h-[180px]">
            <Image src={breadcrumbImg} alt="service_Img" className="h-max w-full object-contain" />
          </div>
        </div>
      </div>
      {/* End of Breadcrumb */}

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

          {/* Tab Content with Pagination */}
          <div className="w-3/4 p-4 border rounded-md">
            {activeTab === "All Events" && ( 
              <div>
                {paginatedNews.map((news, index) => (
                  <div key={index} className="border-b pb-4 mb-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <h2 className="text-lg font-semibold">{news.title}</h2>
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

                    <div>
                      <span className="text-gray-500">Date: {new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pagination Component */}
        <div className="flex justify-center mt-4">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Page;
