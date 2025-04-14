import React from "react"

export default function OurAchievements() {
  return (
    <div className=" lg:p-20 px-5 pt-16 pb-5 ">
      <p className=" rounded-lg bg-[#ebf8a3] px-3 py-1 inline-block mb-5">
        Our Achievements
      </p>

      <div className=" lg:grid lg:grid-cols-2 gap-10 ">
        <p className=" font-semibold lg:text-5xl  text-4xl leading-12  ">
          The Relentless Efforts 
          And Achievements Of 
          Our Farmers
        </p>
        <p className=" flex items-end ">
          Mordern agriculture refers to the use of advance techonology, scientific research, and sustainable practices to enhance productivity, efficiency and environmental stewarship in farming.
        </p>
      </div>

      <div className=" grid lg:grid-cols-4 md:grid-cols-2 lg:pt-10 pt-5 ">

        <div>
          <p className=" lg:text-5xl text-4xl font-black pb-3">
            30+
          </p>
          <p>
            Supports 120 <br/>
            countries since 2008
          </p>
        </div>
        <div>
          <p className=" lg:text-5xl text-4xl font-black pb-3">
            200+
          </p>
          <p>
            Field in progress with <br/> 
            new technique
          </p>
        </div>
        <div>
          <p className=" lg:text-5xl text-4xl font-black pb-3">
            300+
          </p>
          <p>
            Agribusiness companies <br/>
            that have collabolated
          </p>
        </div>
        <div>
          <p className=" lg:text-5xl text-4xl font-black pb-3">
            $15 Billion
          </p>
          <p>
            Invested for crop analysis, and help <br/> 
            farmer around the world
          </p>
        </div>

      </div>













    </div>
  )
}
