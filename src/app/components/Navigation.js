import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../public/assets/images/G-logo.png";
export default function Navigation() {
  // const [search,setSearch]=useState("");
  // const data=[
  //   {name:"G-Course",link:"innerPage"},
  //   {name:"G-Learn",link:"innerPage"},
  //   {name:"G-Exams",link:"innerPage"},
  //   {name:"G-Coding",link:"innerPage"},
  // ]
  // const [filter,setFilter]=useState("")
  // console.log(filter)
  // useEffect(() => {
  //   if (search=== "") {
  //     setFilter([]);
  //     return;
  //   }
  //   const results = data.filter((item) =>
  //     item.name.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setFilter(results);
  // }, [search]);
  return (
    <>
      <div className="mx-auto justify-center"></div>
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="/" className="px-auto lg:pl-[145px]">
          <Image src={logo} alt="Gitam_Logo" />
        </Navbar.Brand>
        {/* <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>

            {filter.length > 0 && (
          <ul
            style={{
              display: "block",
              zIndex: 1000,
              position: "absolute",
              top: 50,
              right: 50,
              left: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {filter.map((item, index) => (
              <li
                key={index}
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: 3,
                }}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => setSearch(item.name)} 
              >
               
               <Navbar.Link href={`/${item.link}`}>
                  {item.name}
                </Navbar.Link>
              </li>
            ))}
          </ul>
        )} */}
        <Navbar.Toggle />
        <Navbar.Collapse className="px-auto lg:pr-[145px] font-inter">
          <Navbar.Link href="/" className="font-inter  text-base">
            Home
          </Navbar.Link>
          <Navbar.Link href="/services" className="font-inter text-base">
            Services
          </Navbar.Link>
          <Navbar.Link href="/News" className="font-inter text-base">
            News
          </Navbar.Link>
          <Navbar.Link href="/Events" className="font-inter text-base">
            Events
          </Navbar.Link>
          <Navbar.Link href="/Contact" className="font-inter text-base">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
