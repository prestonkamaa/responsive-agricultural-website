import React from "react"
import Nav from "./NavBar/Nav"
import LightGreen from "./SiteButtons/LightGreen"
import Image from "next/image"

export default function PageHeader() {
  return (
    <div className=" bg-[#022c23] lg:h-screen md:h-[850px] h-screen pt-5 lg:px-10 px-3 ">
        <Nav />

        <div className=" lg:px-10 py-10 grid lg:grid-cols-2 lg:gap-20 gap-8 items-center ">

            <div className="text-white">

                <p className=" lg:text-6xl text-4xl font-bold lg:leading-16 lg:text-left text-center ">
                    Revolutionizing
                    Agriculture with 
                    <span className="text-[#cef449]"> New Technology </span>                      
                </p>
                <p className="py-5 lg:text-left text-center ">
                    Mordern agriculture refers to the use of advance techonology, scientific 
                    research, and sustainable practices to enhance productivity, efficiency 
                    and environmental stewarship in farming.

                </p>
                <div className=" flex lg:items-start items-center lg:justify-start justify-center  ">
                   <LightGreen title="Get Started" /> 
                </div>
                
            </div>

            <div>
                <Image
                    src="https://images.unsplash.com/photo-1593288653045-7ed55242d70a"
                    alt=""
                    width={500}
                    height={410}
                    className=" w-full lg:h-[410px] rounded-2xl "
                />
            </div>



        </div>

    </div>
  )
}
