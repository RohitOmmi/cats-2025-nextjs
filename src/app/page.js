// import Image from "next/image";
"use client";
import Navbar from "./components/Navigation";
import DynamicSlider from "./components/DynamicSlider";

import Faq from "../app/components/Faq";
import Services from "./services/page";
export default function Home() {
  return (
    <>
      <Navbar />
      <DynamicSlider />
      {/* <Services /> */}
    </>
  );
}
