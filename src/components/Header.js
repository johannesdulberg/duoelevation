import React from 'react'
import {useRef,useEffect,useState}  from "react"

export default function SplitBoxImgAndText(props) {
    const headerText = props.args.headerText
    const name = props.args.name

  return (
    <section name={name}  className="w-full">
       <h2 className="text-4xl sm:text-6xl xl:text-[80px] lg:text-[55px] md:text-[45px] font-bold text-center pt-10">{headerText}</h2>
        
  
    </section>
     )
    }