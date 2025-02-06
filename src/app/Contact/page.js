"use client";
import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { Breadcrumb } from "flowbite-react";
import Image from "next/image";
import breadcrumbImg from "../../../public/assets/services/contact_breadcrumb.png";
import location from "../../../public/assets/images/location.png";
import mail from "../../../public/assets/images/Mail.png";
import clock from "../../../public/assets/images/Clock.png";
import phone from "../../../public/assets/images/phone.png";

import { MdKeyboardArrowRight } from "react-icons/md";
import "./page.css";

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
      address: `<p class="text-base font-normal text-[#212529] ">CATS department  <br /> 8th floor <br /> ICT bhavan <br /> GITAM Deemed to be University <br /> Gandhi Nagar <br /> Rushikonda <br /> Visakhapatnam - 530045 <br /> Andhra Pradesh <br /> India</p>`,
      timings: "9 AM to 6 PM ",
      day: "Monday to Friday",
      email: "catsoffice@gitam.edu",
      landline: "Landline - 0891-2840555 IP Phone - 4800",
    },
    2: {
      address: `<p class="text-base font-normal text-[#212529]">CATS department  <br />  A-block  <br /> 3rd floor  <br /> GITAM Deemed to be University  <br /> Rudraram Patancheru mandal  <br /> Hyderabad - 502329 <br /> Telangana  <br /> India</p>`,
      timings: "9 AM to 6 PM ",
      day: "Monday to Friday",
      email: "catsoffice@gitam.edu",
      landline: "Landline - 9703409652 IP Phone - 1500",
    },
    3: {
      address: `<p class="text-base font-normal text-[#212529]">CATS department  <br />  6th floor  <br />  Shivaji bhavan  <br />  GITAM Deemed to be University  <br />  NH 207  Nagadenehalli <br />  Doddaballapur taluk  <br />  Bengaluru - 561203  <br />  Karnataka   <br /> India</p>`,
      timings: "9 AM to 6 PM ",
      day: "Monday to Friday",
      email: "catsoffice@gitam.edu",
      landline: "Landline - 7348960606 IP Phone - 2824",
    },
    4: {
      address: `<p class="text-base font-normal text-[#212529]">CATS department <br /> 8th floor <br /> ICT bhavan <br /> GITAM Deemed to be University <br /> Gandhi Nagar <br /> Rushikonda <br /> Visakhapatnam - 530045 <br /> Andhra Pradesh <br /> India</p>`,
      timings: "9 AM to 6 PM ",
      day: "Monday to Friday",
      email: "catsoffice@gitam.edu",
      landline: "Landline - 0891-2840555 IP Phone - 4800",
    },
    5: {
      title: "Bell the CATS",
      description:
        "Bell the CATS is GITAM's dedicated service ticket management system designed to streamline to support across all 4 campuses. This platform enables staff, faculty, and students to raise service requests efficiently, ensuring prompt resolution and effective communication with the support teams.",
    },
  };

  const [captchaError, setCaptchaError] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  useEffect(() => {
    // Load Google reCAPTCHA script dynamically
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      setCaptchaError("Please complete the CAPTCHA verification");
      return;
    }

    setCaptchaToken(recaptchaResponse);
    setCaptchaError("");

    // Proceed with form submission logic (e.g., API call)
    console.log("Form submitted with reCAPTCHA token:", recaptchaResponse);
  };

  return (
    <>
      <Navigation />
      {/* Breadcrumb */}

      <div className="w-full bg-[#f4e4c9] px-4 py-2 font-inter">
        <div className="container max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[#a58255] text-3xl font-medium my-4">
              Contact
            </h1>
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/services">Contact</Breadcrumb.Item>
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

      <div className="max-w-screen-xl p-10">
        <div className="w-full border border-black box flex items-center justify-center">
          <h1 className="text-white text-lg font-bold">
            Inverted Radius Content
          </h1>
        </div>
      </div>

      <div className="lg:max-w-screen-xl mx-auto  font-inter">
        <div className="flex flex-row items-start">
          <div className="w-[70%] flex flex-row items-center mt-[24px]">
            {/* Sidebar for Tabs */}
            <div className="w-[25%] flex flex-col gap-2 items-center space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 w-full text-left flex justify-between items-center border font-medium  ${
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

            {/* Display Selected Tab Info */}
            <div className="w-[75%] p-4  m-4 font-normal">
              {infoData[activeTab] && (
                <div className="flex flex-row items-start pb-4 mb-4 w-full ">
                  {/* If activeTab is "Bell the CATS", show only title & description */}
                  {activeTab === 5 ? (
                    <div className="w-full">
                      <h2 className="text-md font-semibold">
                        {infoData[activeTab].title}
                      </h2>
                      <p>{infoData[activeTab].description}</p>
                    </div>
                  ) : (
                    <>
                      {/* Left Section: Address */}
                      <div className="flex flex-col justify-start  space-y-2 font-normal w-1/2">
                        <div className="flex items-center gap-2">
                          <Image
                            src={location}
                            alt="location_icon"
                            width={30}
                            height={30}
                            className="self-start"
                          />
                          <div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: infoData[activeTab].address,
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Right Section: Icons & Details */}
                      <div className="flex flex-col space-y-4  w-1/2 ml-4">
                        {/* Timing */}
                        <div className="flex items-center gap-2">
                          <Image
                            src={clock}
                            alt="Clock Icon"
                            width={30}
                            height={30}
                            className="self-start"
                          />
                          <div>
                            <p>{infoData[activeTab].timings}</p>
                            <p>{infoData[activeTab].day}</p>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2">
                          <Image
                            src={mail}
                            alt="Mail Icon"
                            width={30}
                            height={30}
                            className="self-start"
                          />
                          <p>{infoData[activeTab].email}</p>
                        </div>

                        {/* Landline / Description */}
                        <div className="flex items-center gap-2">
                          <Image
                            src={phone}
                            alt="Phone Icon"
                            width={30}
                            height={30}
                            className="self-start"
                          />
                          <p>{infoData[activeTab].landline}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* form */}
          <div className="w-[30%] mt-[24px] m-8">
            <form
              className="col-12 flex flex-col bg-[#f4e4c9] px-4 py-6  shadow-md"
              onSubmit={handleSubmit}
            >
              <div className="text-xl font-medium text-[#a58255] mb-3">
                Get in Touch
              </div>

              {/* Name Input */}
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border focus:border-gray-400 focus:ring-0 "
                />
              </div>

              {/* Mobile and Email Row */}
              <div className="flex flex-row gap-2 mb-3">
                <input
                  type="number"
                  placeholder="Mobile number"
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border focus:border-gray-400 focus:ring-0 "
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border focus:border-gray-400 focus:ring-0 "
                />
              </div>

              {/* Query Textarea */}
              <div className="mb-3">
                <textarea
                  placeholder="Enter Query"
                  className="w-full px-3 py-2 border  border-gray-300 rounded-md resize-none h-24 focus:outline-none focus:ring-0 focus:border focus:border-gray-400"
                ></textarea>
              </div>

              {/* Google reCAPTCHA */}
              <div className="mb-3 flex justify-center">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LfOYLMqAAAAAJ4EiOBGwKslIhag6VlO1vZC-EAI"
                ></div>
                <span id="captcha_error" className="text-red-500 text-sm">
                  {captchaError}
                </span>
              </div>

              {/* Submit Button */}
              <button className="max-w-fit self-center bg-[#00716a] text-[#ffffff] py-2 px-3 font-normal rounded-none hover:bg-gray-200 transition">
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
