import React from "react"
import LightGreen from "./SiteButtons/LightGreen"

export default function ReadytoGrow() {
  return (
    <div className=" lg:p-28 p-5 bg-[url(/images/use-min.jpg)] bg-center bg-cover ">
     
        <p className=" rounded-lg bg-[#ebf8a3] px-3 py-1 inline-block ">
            Innovative Features
        </p>
        <div className=" lg:w-1/2 font-semibold lg:text-5xl text-4xl leading-12 lg:py-10 py-5 text-white "> 
            Are You Prepared To 
            Transform Your Farming
            Methods?
        </div>  

        <LightGreen title=" Join Our Online Community" />  




    </div>
  )
}
