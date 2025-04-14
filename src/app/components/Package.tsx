import React from "react" 
// import farmBg from "../../../public/img/markuswinklerunsplash.jpg"

export default function Package() {
  return (
    <div className=" grid lg:grid-cols-2 lg:gap-10 lg:p-20 gap-5 p-5 ">

        <div className=" bg-[url(/images/1.jpg)] bg-center bg-cover rounded-2xl lg:p-16 p-5 flex items-end ">
            <div className=" p-5 bg-white rounded-xl">
                <p className=" rounded-lg bg-[#ebf8a3] px-3 py-1 inline-block text-sm ">
                    Aggro Invest
                </p>
                <p className=" py-5 ">
                    Sustainable practices like no-till farming and cover
                    cropping improve soil health and reduce carbon
                    emissions. Enhance breeding techniques and 
                    controlled environment.
                </p>
                <div className=" bg-[#cef449] grow py-3 text-center rounded-lg ">
                    See More Packages
                </div>


            </div>
        </div>        

        <div className=" bg-[#022c23] rounded-2xl p-8 ">
            <p className=" rounded-lg bg-[#ebf8a3] px-3 py-1 inline-block mb-5 text-sm ">
                Result of Using
            </p>

            <div className=" gap-10 text-white ">
                <p className=" font-semibold lg:text-5xl text-4xl leading-12  ">
                    Enhancing Agriculture  
                    With Innovative Ideas For 
                    The Future
                </p>
                <p className=" inline-block align-text-bottom py-5 ">
                    Mordern agriculture refers to the use of advance techonology, scientific research, and sustainable practices to enhance productivity, efficiency and environmental stewarship in farming.
                </p>
                <div className=" grid lg:grid-cols-2 md:grid-cols-2 gap-5 ">
                    <div>
                        <div className=" bg-[#ebf8a3] text-[#022c23] h-12 w-12 rounded-lg flex items-center justify-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                            </svg> 
                        </div>
                        <p className=" font-bold text-2xl py-3 ">
                            65%
                        </p>
                        <p>
                            Boost Crop Production <br/>
                            with Our Aggrotech&apos;s Eco- <br/>
                            Friendly Solutions
                        </p>
                    </div>

                    <div>
                        <div className=" bg-[#ebf8a3] text-[#022c23] h-12 w-12 rounded-lg flex items-center justify-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                        <p className=" font-bold text-2xl py-3 ">
                            50%
                        </p>
                        <p>
                            Decrease in Water Consuption <br/>
                            with Aggrotech&apos;s Intelligent <br/>
                            Irrigation
                        </p>
                    </div>

                </div>

            </div>            
        </div>


    </div>
  )
}
