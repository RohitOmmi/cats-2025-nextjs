import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import logo from "../../../public/assets/images/G-logo.png"
export default function Navigation() {
  return (
    <>
    <div className="mx-auto justify-center"></div>
        <Navbar fluid rounded>
            <Navbar.Brand as={Link} href="#">
              <Image src={logo} alt="Gitam_Logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Navbar.Link href="#" active>
                Home
              </Navbar.Link>
              <Navbar.Link href="/services">Services</Navbar.Link>
              <Navbar.Link href="https://www.gitam.edu/">News</Navbar.Link>
              <Navbar.Link href="#">Events</Navbar.Link>
              <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    </>
  )
}

