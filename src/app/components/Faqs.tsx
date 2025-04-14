import React from "react"

export default function Faqs() {
  return (
    <div className=" lg:p-20 p-5 ">

        <div className="py-5 lg:w-2/3 mx-auto"> 
            <div>
                <div className=" font-semibold text-5xl leading-12 text-center "> 
                    Frequently Asked Questions
                </div>   
                <p className=" text-center pt-5">
                    Explore common questions we frequently answer and hope you guys can understand our mission and goal
                </p>                 
            </div> 

            <div className="hs-accordion-group lgmt-10 mt-5">

                <div className="hs-accordion  bg-[#f2f3f3] border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent" id="hs-active-bordered-heading-one">
                    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-bold text-xl text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-active-bordered-collapse-one">
                    How do i buy from a country other than the UK?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hs-accordion-active:hidden block  bg-[#022c23] text-white rounded-full p-1 size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg>              
                      
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hs-accordion-active:block hidden bg-[#022c23] text-white rounded-full p-1 size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>  
                    </button>
                    <div id="hs-basic-active-bordered-collapse-one" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-active-bordered-heading-one">
                    <div className="pb-4 px-5"> <hr className=" mb-4" />
                        <p className="text-gray-800 dark:text-neutral-200">
                        At the Agriculture and Food Authority (AFA), we are passionate about driving Kenya’s agricultural transformation by fostering growth in the scheduled crops sector. 
                        </p>
                    </div>
                    </div>
                </div>

                <div className="mt-7 hs-accordion active bg-[#f2f3f3] border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent" id="hs-active-bordered-heading-two">
                    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-bold text-xl text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-two">
                    Do you have an Office and warehouse in Kenya?

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hs-accordion-active:hidden block  bg-[#022c23] text-white rounded-full p-1 size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg>   

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hs-accordion-active:block hidden bg-[#022c23] text-white rounded-full p-1 size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg> 

                    </button> 
                    <div id="hs-basic-active-bordered-collapse-two" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-active-bordered-heading-two">
                    <div className="pb-4 px-5">
                    <hr className=" mb-4" />
                        <p className="text-gray-800 dark:text-neutral-200">
                        At the Agriculture and Food Authority (AFA), we are passionate about driving Kenya’s agricultural transformation by fostering growth in the scheduled crops sector. 
                        </p>
                    </div>
                    </div>
                </div>

                <div className="mt-7 hs-accordion active bg-[#f2f3f3] border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent" id="hs-active-bordered-heading-three">
                    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-bold text-xl text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-three">
                    Do you have any guarantee?
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hs-accordion-active:hidden block  bg-[#022c23] text-white rounded-full p-1 size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hs-accordion-active:block hidden bg-[#022c23] text-white rounded-full p-1 size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg> 
                      
                    </button> 
                    <div id="hs-basic-active-bordered-collapse-two" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-active-bordered-heading-two">
                    <div className="pb-4 px-5">
                    <hr className=" mb-4" />
                        <p className="text-gray-800 dark:text-neutral-200">
                        At the Agriculture and Food Authority (AFA), we are passionate about driving Kenya’s agricultural transformation by fostering growth in the scheduled crops sector. 
                        </p>
                    </div>
                    </div>
                </div>

                <div className="mt-7 hs-accordion active bg-[#f2f3f3] border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent" id="hs-active-bordered-heading-four">
                    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-bold text-xl text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-four">
                    How do i know which machine in right for my business?
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hs-accordion-active:hidden block  bg-[#022c23] text-white rounded-full p-1 size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                             
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hs-accordion-active:block hidden bg-[#022c23] text-white rounded-full p-1 size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>  

                    </button> 
                    <div id="hs-basic-active-bordered-collapse-two" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-active-bordered-heading-two">
                    <div className="pb-4 px-5">
                    <hr className=" mb-4" />
                        <p className="text-gray-800 dark:text-neutral-200">
                        At the Agriculture and Food Authority (AFA), we are passionate about driving Kenya’s agricultural transformation by fostering growth in the scheduled crops sector. 
                        </p>
                    </div>
                    </div>
                </div>

                <div className="mt-7 hs-accordion active bg-[#f2f3f3] border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent" id="hs-active-bordered-heading-five">
                    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-bold text-xl text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-five">
                    Timeframe for product support? 

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hs-accordion-active:hidden block  bg-[#022c23] text-white rounded-full p-1 size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>              
                     
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hs-accordion-active:block hidden bg-[#022c23] text-white rounded-full p-1 size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>  

                    </button> 
                    <div id="hs-basic-active-bordered-collapse-two" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-active-bordered-heading-two">
                    <div className="pb-4 px-5">
                    <hr className=" mb-4" />
                        <p className="text-gray-800 dark:text-neutral-200">
                        At the Agriculture and Food Authority (AFA), we are passionate about driving Kenya’s agricultural transformation by fostering growth in the scheduled crops sector. 
                        </p>
                    </div>
                    </div>
                </div>

                               
            </div>
           
        </div>






















{/*  
        <div className="border-b border-gray-200 dark:border-neutral-700">
  <nav className="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active" id="tabs-with-underline-item-1" aria-selected="true" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
      Tab 1
    </button>
    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="tabs-with-underline-item-2" aria-selected="false" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
      Tab 2
    </button>
    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="tabs-with-underline-item-3" aria-selected="false" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
      Tab 3
    </button>
  </nav>
</div>

<div className="mt-3">
  <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
    <p className="text-gray-500 dark:text-neutral-400">
      This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">first</em> items tab body.
    </p>
  </div>
  <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
    <p className="text-gray-500 dark:text-neutral-400">
      This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">second</em> items tab body.
    </p>
  </div>
  <div id="tabs-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
    <p className="text-gray-500 dark:text-neutral-400">
      This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">third</em> items tab body.
    </p>
  </div>
</div> */}







      
    </div>
  )
}
