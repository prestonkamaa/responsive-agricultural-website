import React from "react"
import Image from "next/image"

type innovationProps = {
    title: string,
    imglink: string,

}

export default function InnovationCard({title, imglink}:innovationProps) {
  return (
    <div className=" px-4 bg-gray-100 rounded-xl hover:bg-[#022c23]  hover:text-white  ">
        <div className=" flex items-center py-5">
            <p className=" font-semibold text-xl leading-6 mr-auto w-36">
            {title}  
            </p>
            <div className=" border rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#eaf8a7] hover:text-black ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg> 
            </div> 
        </div>

        <Image
            src={imglink}
            // src={"https://images.unsplash.com/photo-1621490087833-96307b5d5620"}
            alt=""
            width={500}
            height={0}
            className=" w-full h-[280px] rounded-2xl mb-5 object-center object-cover "
        />        
    </div>
  )
}
