import React from "react"
import FeaturesCard from "./Cards/FeaturesCard"  

const featureslist = [

 { 
  title:"Sustainability",
  description: "Eco-friendly minimize environmental impact and promote long term soil health", 
 }, 
 { 
  title:"Real-time Monitoring",
  description: "Smart irrigation and sensor-based farming reduce water and fertilizers waste.", 
 }, 
 { 
  title:"Improved Food Security",
  description: " Higher productivity ensures a steady food supply for growing population.", 
 }, 
 { 
  title:"Climate Resilience",
  description: "Innovation like drought-resistant crop help farmers adapt to changingng wartherconditions.", 
 }, 
 { 
  title:"Smart Farming",
  description: "Use of Ai, IoT, and big data enables informed decision-making for better farm managment.", 
 }, 
 { 
  title:"Economic Growth",
  description: "Agri-tech advancements create new job opprtunities and boost rural economics.", 
 }, 

]

export default function WhyChooseUs() {
  return (
    <div className=" lg:px-20 lg:pb-10 px-5 pb-5 ">
      <p className=" rounded-lg bg-[#ebf8a3] px-3 py-1 inline-block mb-5">
        Innovative Features
      </p>

      <div className=" lg:w-2/3 font-semibold lg:text-5xl text-4xl leading-12  "> 
        Benefits Gained From Using 
        Our Aggrotech&apos;s Solution
      </div>  

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 lg:py-16 grid-cols-1 gap-5 py-5">
        {
          featureslist.map(( items, i) => {
              return <div key={i}><FeaturesCard title={items.title} description={items.description} /></div>
          })
        }
      </div>  

    </div>
  )
}
