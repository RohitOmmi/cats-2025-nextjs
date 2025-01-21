"use client";
import React from 'react'
import { Breadcrumb } from "flowbite-react";
import Image from "next/image";
import breadcrumbImg from " ../../../public/assets/services/services_breadcrumb.png";
function BreadCrumb() {
  return (
    <>
    <div className="w-full bg-[#f4e4c9] px-4 py-2">
        <div className="container max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[#a58255] text-lg"> Services</h1>
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href="/">{}</Breadcrumb.Item>
              <Breadcrumb.Item href="/services">{}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="h-[180px]">
            <Image src={breadcrumbImg} alt="service_Img" className="h-max w-full object-contain" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BreadCrumb