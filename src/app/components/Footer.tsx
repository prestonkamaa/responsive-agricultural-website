import React from "react"
import LightGreen from "./SiteButtons/LightGreen"
import Link from "next/link"

export default function Footer() {
  return (
    <div className=" bg-[#022c23] lg:p-20 p-5 ">

      <div className=" flex lg:flex-row flex-col text-white lg:gap-10 gap-5 ">
        <div className="lg:w-2/3">
          <div className=" font-semibold lg:text-4xl text-3xl lg:leading-12 lg:mb-10 mb-5 "> 
            Isn&apos;t It Time To Embrace Agricultural 
            Technology For A Sustainable Future?
          </div>
          <LightGreen title="Join With Us" />           
        </div>
        <div className=" lg:w-1/3 grid lg:grid-cols-2 md:grid-cols-2 gap-5 ">
          <div>
            <h1 className=" font-bold text-xl mb-5">
              Company
            </h1>
            <div className=" space-y-2  ">
              <p className="cursor-pointer"> Security</p>
              <p className="cursor-pointer">Career</p>

            </div>
          </div>
          <div>
            <h1 className=" font-bold text-xl mb-5">
              Legal Information
            </h1>
            <div className=" space-y-2">
              <p className="cursor-pointer"> Privacy Policy</p>
              <p className="cursor-pointer"> Terms of Service </p>
              <p className="cursor-pointer"> Cookie Policy </p>
              <p className="cursor-pointer"> Policy Shield </p>
            </div>
          </div>

        </div>

      </div>

      <div className=" flex lg:flex-row md:flex-row flex-col lg:mt-16 mt-5">
        <p className=" mr-auto text-white">
          © Copyright 2025. Aggrotech All Rights Reserved. Designed by <span className=" text-[#cef449]  hover:text-[#ebf8a3] "> <Link href={"https://dribbble.com/shots/25689961-Aggrotech-Agriculture-Landing-Page-Agriculture-Drone"}> Firqah Lab-UX UI</Link> </span>
        </p>
        <div className=" flex gap-3 lg:mt-0 md:mt-0 mt-5 ">
          <Link href={""} className="rounded-full bg-[#cef449] p-1 w-6 h-6 flex items-center justify-center text-[#022c23] ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
            </svg>
 
          </Link>
          <Link href={""} className="rounded-full bg-[#cef449] p-1 w-6 h-6 flex items-center justify-center text-[#022c23] ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
            </svg>
 
          </Link>
          <Link href={""} className="rounded-full bg-[#cef449] p-1 w-6 h-6 flex items-center justify-center text-[#022c23] ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
            </svg>
 
          </Link>
          <Link href={""} className="rounded-full bg-[#cef449] p-1 w-6 h-6 flex items-center justify-center text-[#022c23] ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
            </svg>
 
          </Link>
        </div>

      </div>
    </div>
  )
}
