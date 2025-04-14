import React from "react"

type btnText ={
  title: string
}

export default function LightGreen({title}:btnText) {
  return (
    <button className=" bg-[#cef449] py-3 px-10 rounded-lg text-black font-semibold ">
      {title}
    </button>    
  )
}
