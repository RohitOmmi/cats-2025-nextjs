"use client";
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { Breadcrumb } from "flowbite-react";
import Image from "next/image";
import breadcrumbImg from "../../../public/assets/services/news_breadcrumb.png";
import Footer from "../components/Footer";
import { MdKeyboardArrowRight } from "react-icons/md";

function Page() {
  const [activeTab, setActiveTab] = useState("About");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const tabs = [
    { id: "About", title: "About" },
    { id: "Often asked", title: "Often asked" },
    { id: "Request for service", title: "Request for service" },
  ];

  const contentData = {
    About: {
      title: `<h1 class="text-[#007367] font-[500] text-2xl mb-4">About</h1>`,
      content: `<h2 class="text-[#212529] my-10 text-base font-[500] ">G-Courses is a centralized platform designed to streamline and manage the academic lifecycle of courses offered across various programs. It serves as the backbone of academic administration, ensuring detailed, accurate, and accessible course data for smooth functioning.</h2>
     
      <h3 class="text-[#212529] my-4 text-base font-[600] ">1. Centralized Database of Courses</h3>
      <ul class="text-[#212529] my-2 text-base font-[500] list-disc pl-6">
        <li>New types of regulation will be added according to the course types, grades, pass grades, etc.</li>
        <li>Repository for all courses across programs and academic years.</li>
        <li>Stores key attributes like course codes, titles, credits, marks, pass criteria, and types (core, elective, etc.).</li>
        <li>Groups courses by program, semester, and specialization for easier access and management.</li>
      </ul>
      <h3  class="text-[#212529] my-4 text-base font-[600] ">2. Course Attributes</h3>
      <ul  class="text-[#212529] my-2 text-base font-[500] list-disc pl-6">
        <li>Course Code: A special number assigned to every course.</li>
        <li>Course Title: The course's name for convenience.</li>
        <li>Type of course: Fits program criteria, such as project-based, lab, or theory.</li>
        <li>Credits: Shows how important the course is to the overall framework of the program.</li>
        <li>Course category: Includes Core, Elective, Open Elective (OE), Minor (MI), and Mandatory Basket (MB) classifications.</li>
        <li>Prerequisites/Co-requisites: Describes any courses or prior knowledge needed.</li>
        <li>Distribution of Marks: A breakdown of grades for exams, practicals, and internal assessments.</li>
        <li>Pass Marks: The minimum amount of marks needed to pass.</li>
      </ul>
      <h3  class="text-[#212529] my-4 text-base font-[600] ">3. Courses Mapping to the Program</h3>
      <ul  class="text-[#212529] my-2 text-base font-[500] list-disc pl-6">
        <li>Links courses with specific specializations, semesters, and programs.</li>
        <li>Defines the structure of the program, including credit requirements, electives, baskets, and core courses.</li>
      </ul>
      <h3  class="text-[#212529] my-4 text-base font-[600] ">4. Course Offerings</h3>
                <ul  class="text-[#212529] my-2 text-base font-[500] list-disc pl-6">
        <li>Links courses with specific specializations, semesters, and programs.</li>
        <li>Defines the structure of the program, including credit requirements, electives, baskets, and core courses.</li>
      </ul> `,
    },
    "Often asked": {
      title: `<h1 class="text-[#007367] font-[500] text-2xl mb-4">Often asked</h1>`,
      content: `<ul class="text-[#212529] my-2 text-base font-[500] list-disc pl-6">
      <li>Broadcast services cater to requirements of communications conducted in bulk to reach a larger number of recipients.</li>
      <li>The broadcasts are typically sent by email but can also be sent via SMS, desktop notifications, digital signages, MyGITAM pop-ups, and in-class projector notifications.</li>
      <li>Broadcast services are available to senior leadership teams who wish to send communications to a campus, institute (and its constituent schools), or all campuses.</li>
      </ul> `,
    },
    "Request for service": {
      title: `<h1 class="text-[#007367] font-[500] text-2xl mb-4">Request for service</h1>`,
      content: `<ul class="text-[#212529] my-2 text-base font-[500] list-disc pl-6">
      <li>Broadcast services cater to requirements of communications conducted in bulk to reach a larger number of recipients.</li>
      <li>The broadcasts are typically sent by email but can also be sent via SMS, desktop notifications, digital signages, MyGITAM pop-ups, and in-class projector notifications.</li>
      <li>Broadcast services are available to senior leadership teams who wish to send communications to a campus, institute (and its constituent schools), or all campuses.</li>
      </ul> `,
    },
  };

  return (
    <>
      <Navigation />

      <div className="w-full bg-[#f4e4c9] px-4 py-2 font-inter">
        <div className="container max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[#a58255] text-3xl font-medium my-4">
              G-Courses
            </h1>
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/services">Services</Breadcrumb.Item>
              <Breadcrumb.Item href="/subCategory">
                Academic software
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/innerPage">G-Courses</Breadcrumb.Item>
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

      <div className="lg:max-w-screen-xl mx-auto font-inter pt-10 ">
        <div className="flex gap-20">
          <div className="w-1/4 flex flex-col space-y-2">
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

          <div className="w-3/4 font-inter h-[60vh] overflow-auto scrollbar-thin scrollbar-hidden hover:scrollbar-show">
            {contentData[activeTab] && (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentData[activeTab].title,
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentData[activeTab].content,
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>

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

export default Page;
