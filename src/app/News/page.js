"use client";
import { useEffect, useState } from "react";
import React from "react";
import Navigation from "../components/Navigation";
import { Breadcrumb, Pagination } from "flowbite-react";
import Image from "next/image";
import breadcrumbImg from "../../../public/assets/services/news_breadcrumb.png";
import Footer from "../components/Footer";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function News() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded item index

  const tabs = [
    { id: "Profile", title: "All News" },
    { id: "Dashboard", title: "Academic software" },
  ];

  const newsContent = [
    {
      badgeTitle: "G-Course Registration",
      title: "Thank you note for G-courses",
      content:
        "We are super excited to announce the relaunch of G-Learn - our very own, home-grown, organically built learning management system (LMS) to run your academic engagements with your students. A pit stop break for G-Learn took little longer than expected, but yes, G-Learn is back on track now, only much bigger and better, with more features.",
    },
    {
      badgeTitle: "New Research Initiative",
      title: "G-Learn: Unified teaching and learn",

      content:
        "Our university has launched a new research program to encourage students and faculty members to participate in innovative projects. This initiative aims to bridge the gap between academic learning and real-world applications.",
    },
    {
      badgeTitle: "Campus Development Update",
      title: "Mirror, mirroe on the wall..",

      content:
        "We are thrilled to announce the construction of a new state-of-the-art library and research center. This facility will be equipped with modern technology, collaborative spaces, and an extensive digital archive.",
    },
    {
      badgeTitle: "Campus Development Update",
      title: "Mirror, mirroe on the wall..",

      content:
        "We are thrilled to announce the construction of a new state-of-the-art library and research center. This facility will be equipped with modern technology, collaborative spaces, and an extensive digital archive.",
    },
    {
      badgeTitle: "Campus Development Update",
      title: "Mirror, mirroe on the wall..",

      content:
        "We are thrilled to announce the construction of a new state-of-the-art library and research center. This facility will be equipped with modern technology, collaborative spaces, and an extensive digital archive.",
    },
  ];

  const [clientDate, setClientDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setClientDate(new Date().toLocaleDateString());
  }, []);

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
      <div className="w-full bg-[#f4e4c9] px-4 py-2 font-inter">
        <div className="container max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[#a58255] text-3xl font-medium my-4">
              G-Courses
            </h1>
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/services">New</Breadcrumb.Item>
              <Breadcrumb.Item href="/subCategory">
                Academic software
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

      {/* End of Breadcrumb */}

      {/* Vertical Tabs Section */}
      <div className="lg:max-w-screen-xl mx-auto py-10 ">
        <div className=" flex justify-between gap-20 ">
          {/* Sidebar for Tabs */}
          <div className="w-1/4 flex flex-col space-y-2 font-inter">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 w-full text-left flex justify-between items-center border  ${
                  activeTab === tab.id
                    ? "bg-[#a58255] text-white border-[#a58255]"
                    : "bg-white border-gray-300"
                }`}
              >
                {tab.title}
                <span className="text-xl">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-3/4 font-inter h-[56vh] overflow-auto scrollbar-thin scrollbar-hidden hover:scrollbar-show">
            {activeTab === "Profile" && (
              <div>
                {paginatedNews.map((news, index) => (
                  <div key={index} className="border border-gray-300 p-4 mb-4">
                    <div className="flex justify-between items-center  pb-2">
                      <h2 className="text-xs font-[400] bg-[#f4e4c9] p-1 rounded-md">
                        {news.badgeTitle}
                      </h2>
                      <div className="text-xs font-[400] bg-[#f4e4c9] p-1 rounded-md flex justify-evenly gap-2">
                        <FaRegCalendarAlt color="#a58255" fontSize={14} />{" "}
                        {clientDate}
                      </div>
                    </div>

                    <h1 className="text-2xl text-[#a58255]">{news.title}</h1>

                    <p className="mt-2 text-gray-700">
                      {expandedIndex === index
                        ? news.content
                        : `${news.content.substring(0, 150)}...`}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "Dashboard" && (
              <div>
                {newsContent.map((news, index) => (
                  <div key={index} className="border-b pb-4 mb-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <h2 className="text-lg font-semibold">{news.title}</h2>
                      <span className="text-gray-500">Date: {clientDate}</span>
                    </div>

                    <p className="mt-2 text-gray-700">
                      {expandedIndex === index
                        ? news.content
                        : `${news.content.substring(0, 150)}...`}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pagination Component */}
        <div className="flex justify-center  mb-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            previousLabel=""
            nextLabel=""
            showIcons
            theme={{
              base: "",
              layout: {
                table: {
                  base: "text-sm text-gray-700 dark:text-gray-400",
                  span: "font-semibold text-gray-900 dark:text-white",
                },
              },
              pages: {
                base: "xs:mt-0 mt-2 inline-flex items-center ",
                showIcon: "inline-flex",
                previous: {
                  base: " rounded-none border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 ",
                  icon: "h-5 w-5",
                },
                next: {
                  base: "ml-2  rounded-none border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700",
                  icon: "h-5 w-5",
                },
                selector: {
                  base: "ml-2 w-8 h-10  border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 ",
                  active:
                    "bg-[#a58255] text-white hover:bg-transparent hover:text-black hover:border hover:border-black",
                  disabled: "cursor-not-allowed opacity-50",
                },
              },
            }}
          />
        </div>
      </div>

      <Footer />

      <style jsx>{`
        /* Hide scrollbar by default */
        .scrollbar-hidden::-webkit-scrollbar {
          width: 0px;
        }

        /* Show scrollbar on hover */
        .hover\:scrollbar-show:hover::-webkit-scrollbar {
          width: 7px;
        }

        .hover\:scrollbar-show:hover::-webkit-scrollbar-track {
          background: #fff;
          border-radius: 10px;
        }

        .hover\:scrollbar-show:hover::-webkit-scrollbar-thumb {
          background: gray;
          border-radius: 13px;
        }
      `}</style>
    </>
  );
}
