import React from "react"
import InnovationCard from "./Cards/InnovationCard"

export default function InnovationFeature() {
  return (
    <div className=" lg:px-20 px-5 ">
      <p className=" rounded-lg bg-[#ebf8a3] px-3 py-1 inline-block mb-5">
        Innovative Features
      </p>

      <div className=" lg:w-2/3 font-semibold lg:text-5xl text-4xl leading-12  "> 
        Farming Solutions for Optimal 
        Yield And Sustainability 
      </div> 

      <div className=" grid lg:grid-cols-3 gap-5 lg:pt-10 pt-3">
        <InnovationCard title="Precision Farming Tools" imglink="https://images.unsplash.com/photo-1530541835461-dedaf9cf368a" />
        <InnovationCard title="Automation Solutions" imglink="https://images.unsplash.com/photo-1621490087833-96307b5d5620" />
        <InnovationCard title="Smart Irrigation System" imglink="https://images.unsplash.com/photo-1625246333195-78d9c38ad449" />
      </div>









    </div>
  )
}
