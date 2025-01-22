"use client";
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { Breadcrumb } from "flowbite-react";
import Image from "next/image";
import breadcrumbImg from "../../../public/assets/services/events_breadcrumb.png";

function Page() {
  const [activeTab, setActiveTab] = useState(1); // Store tab as number
  const tabs = [
    { id: 1, title: "Visakhapatnam" },
    { id: 2, title: "Hyderabad" },
    { id: 3, title: "Bangalore" },
    { id: 4, title: "GIMSR" },
    { id: 5, title: "Bell the CATS" },
  ];

  const infoData = {
    1: {
      address: "CATS department 8th floor, ICT bhavan GITAM Deemed to be University, Gandhi Nagar Rushikonda, Visakhapatnam - 530045, Andhra Pradesh India",
      timings: "9 AM to 6 PM Monday to Friday",
      email: "catsoffice@gitam.edu",
      landline: "Landline - 0891-2840555 IP Phone - 4800",
    },
    2: {
      address: "CATS department-block 3rd floor GITAM Deemed to be University Rudraram Patancheru mandal Hyderabad - 502329 Telangana India",
      timings: "9 AM to 6 PM Monday to Friday",
      email: "catsoffice@gitam.edu",
      landline: "Landline - 9703409652 IP Phone - 1500",
    },
    3: {
      address: "CATS department 6th floor, Shivaji bhavan GITAM Deemed to be University, NH 207, Nagadenehalli Doddaballapur taluk, Bengaluru - 561203, Karnataka India",
      timings: "9 AM to 6 PM Monday to Friday",
      email: "catsoffice@gitam.edu",
      landline: "Landline - 7348960606 IP Phone - 2824",
    },
    4: {
      address: "CATS department 8th floor, ICT bhavan GITAM Deemed to be University, Gandhi Nagar Rushikonda, Visakhapatnam - 530045, Andhra Pradesh India",
      timings: "9 AM to 6 PM Monday to Friday",
      email: "catsoffice@gitam.edu",
      landline: "Landline - 0891-2840555 IP Phone - 4800",
    },
    5: {
      title: "Bell the CATS",
      description: "Bell the CATS is GITAM's dedicated service ticket management system designed to streamline to support across all 4 campuses. This platform enables staff, faculty, and students to raise service requests efficiently, ensuring prompt resolution and effective communication with the support teams.",
    },
  };

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
              <Breadcrumb.Item href="/Contact">Contact</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="h-[180px]">
            <Image src={breadcrumbImg} alt="service_Img" className="h-max w-full object-contain" />
          </div>
        </div>
      </div>
      {/* End of Breadcrumb */}

        <div className="lg:max-w-screen-xl mx-auto   ">
            <div className="flex flex-row">
                <div className="w-2/3 flex flex-row items-center mt-[24px]">
                    {/* Sidebar for Tabs */}
                    <div className="flex flex-col gap-4 items-center">
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

                    {/* Display Selected Tab Info */}
                    <div className="p-4 w-full ">
                        {infoData[activeTab] && (
                        <div className="border-b pb-4 mb-4">
                            <h2 className="text-md font-semibold">{infoData[activeTab].address || infoData[activeTab].title}</h2>
                            <p>{infoData[activeTab].timings}</p>
                            <p>{infoData[activeTab].email}</p>
                            <p>{ infoData[activeTab].landline||infoData[activeTab].description}</p>
                        </div>
                        )}
                    </div>
                </div>
                <div className="w-1/3 mt-[24px]">
  <form className="col-12 flex flex-col bg-[#a58255] px-4 py-6 rounded-md shadow-md">
    <div className="text-lg font-semibold text-white mb-3">Get in Touch</div>

    {/* Name Input */}
    <div className="mb-3">
      <input
        type="text"
        placeholder="Name"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      />
    </div>

    {/* Mobile and Email Row */}
    <div className="flex flex-row gap-2 mb-3">
      <input
        type="number"
        placeholder="Mobile number"
        className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      />
    </div>

    {/* Query Textarea */}
    <div className="mb-3">
      <textarea
        placeholder="Enter Query"
        className="w-full px-3 py-2 border rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-white"
      ></textarea>
    </div>

    {/* Submit Button */}
    <button className="w-full bg-white text-[#a58255] py-2 font-semibold rounded-md hover:bg-gray-200 transition">
      Submit
    </button>
  </form>
</div>

            </div>
        </div>

      
    </>
  );
}

export default Page;
