// "use client";
// import { useState } from "react";
// import React from "react";
// import Navigation from "../components/Navigation";
// import { Breadcrumb } from "flowbite-react";
// import Image from "next/image";
// import breadcrumbImg from "../../../public/assets/services/news_breadcrumb.png";

// export default function News() {
//   const [activeTab, setActiveTab] = useState("Profile");

//   const tabs = [
//     { id: "Profile", title: "All News" },
//     { id: "Dashboard", title: "Academic software" },
//   ];

//   return (
//     <>
//       <Navigation />
//       {/* Breadcrumb */}
//       <div className="w-full bg-[#f4e4c9] px-4">
//         <div className="container max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
//           <div className="flex flex-col">
//             <h1 className="text-[#a58255] text-lg">Services</h1>
//             <Breadcrumb aria-label="Default breadcrumb example">
//               <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
//               <Breadcrumb.Item href="/News">News</Breadcrumb.Item>
//               <Breadcrumb.Item href="">Academic software</Breadcrumb.Item>
//             </Breadcrumb>
//           </div>
//           <div className="h-[180px]">
//             <Image
//               src={breadcrumbImg}
//               alt="service_Img"
//               className="h-max w-full object-contain"
//             />
//           </div>
//         </div>
//       </div>
//       {/* End of Breadcrumb */}

//       {/* Vertical Tabs Section */}
//       <div className=" lg:max-w-screen-xl mx-auto">
//       <div className="p-4 flex gap-4 ">
//         {/* Sidebar for Tabs */}
//         <div className="w-1/4 flex flex-col space-y-2">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-4 py-2 rounded-md w-full text-left ${
//                 activeTab === tab.id ? "bg-blue-600 text-white" : "bg-gray-300"
//               }`}
//             >
//               {tab.title}
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className="w-3/4 p-4 border rounded-md">
//           {activeTab === "Profile" && <div>
//             <div>
//                 <div className="flex flex-row">
//                     <div>G-Curriculum</div>
//                     <div>Date</div>
//                 </div>
//                 <h1>Curriculum v2</h1>
//                 <p>We are super excited to announce the relaunch of G-Learn - our very own, home grown, organically built, learning management system (LMS) to run your academic engagements with your students. A pit stop break for G-Learn took little longer than expected, but yes, G-Learn is back on track now, only much bigger and better, with more features. 

// Starting first day of classes, faculty can go to G-Learn in their MyGITAM for all even semesters, and can start using it for posting attendance of all registered students. We will have a separate discussion session on attendance in a webinar later next week, when we launch G-Events, that will also provide event attendance data for factoring into academic attendance. Faculty can also post their content.</p>
//             </div>
//             </div>}
//           {activeTab === "Dashboard" && <p>This is the Dashboard tab content.</p>}
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }
"use client";
import { useState } from "react";
import React from "react";
import Navigation from "../components/Navigation";
import { Breadcrumb } from "flowbite-react";
import Image from "next/image";
import breadcrumbImg from "../../../public/assets/services/news_breadcrumb.png";

export default function News() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded item index

  const tabs = [
    { id: "Profile", title: "All News" },
    { id: "Dashboard", title: "Academic software" },
  ];

  const newsContent = [
    {
      title: "Curriculum v2",
      content:
        "We are super excited to announce the relaunch of G-Learn - our very own, home-grown, organically built learning management system (LMS) to run your academic engagements with your students. A pit stop break for G-Learn took little longer than expected, but yes, G-Learn is back on track now, only much bigger and better, with more features.",
    },
    {
      title: "New Research Initiative",
      content:
        "Our university has launched a new research program to encourage students and faculty members to participate in innovative projects. This initiative aims to bridge the gap between academic learning and real-world applications.",
    },
    {
      title: "Campus Development Update",
      content:
        "We are thrilled to announce the construction of a new state-of-the-art library and research center. This facility will be equipped with modern technology, collaborative spaces, and an extensive digital archive.",
    },
  ];

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
              <Breadcrumb.Item href="/News">News</Breadcrumb.Item>
              <Breadcrumb.Item href="">Academic software</Breadcrumb.Item>
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
            {activeTab === "Profile" && (
              <div>
                {newsContent.map((news, index) => (
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
            {activeTab === "Dashboard" && <p>This is the Dashboard tab content.</p>}
          </div>
        </div>
      </div>
    </>
  );
}

