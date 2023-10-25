import React from 'react'
import {useRef,useEffect,useState}  from "react"

export default function SplitBoxImgAndText(props) {
    const headerText = props.args.headerText
    const bodyText = props.args.bodyText
    const reverse = props.args.reverse
    const bgColor= props.args.bgColor

    //FADEIN 
    const [intersection1,setIntersection1]=useState(false)
    const [intersection2,setIntersection2]=useState(false)
    const [intersection3,setIntersection3]=useState(false)
    const myRef1=useRef()
    const myRef2=useRef()
    useEffect(()=>{
        const observer1 = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            
            {entry.isIntersecting && setIntersection1(true)} 

        })
        const observer2 = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            
            {entry.isIntersecting && setIntersection2(true)} 

        })
        const observer3 = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            
            {entry.isIntersecting && setIntersection3(true)} 
            

        },{
            threshold:0.5
        })
        observer1.observe(myRef1.current)
        observer2.observe(myRef2.current)
        observer3.observe(myRef1.current)
      })
    //FADIN END

  return (
    <section name='non'  className={` w-full bg-${props.args.bgColor} flex ${props.args.reverse ? "md:flex-row-reverse" :"md:flex-row"} flex-col-reverse pb-[40px] px-3`}>
        
        <div ref={myRef2} className={` ${intersection2 ? "fadeinNoMove":"invisible" } md:bg-transparent p-[10%] md:pl-[2%] md:p-0 w-full md:w-2/5 h-full  md:mt-10 z-10 flex justify-center`}>
          <div className="w-full h-full">
            <img alt="self-Logo w-1/4 md:w-1/2" src={props.args.imagePath}/>
          </div>
        </div>
        <div ref={myRef1} className={` ${intersection1 ? (reverse ? "fadeinLeft" : "fadeinRight") : "invisible" } w-full md:w-3/5 h-full mt-5 md:mt-20 pl-[5%] lg:pl-20 flex flex-col z-10 p-8 `}>
            <h2 className="text-2xl sm:text-5xl xl:text-[60px] lg:text-[40px] md:text-[30px] font-bold md:text-left text-center ">{props.args.headerText}</h2>
            <div className={` ${intersection3 && "underline-animation-scroll"} mt-2`}></div>
            <p className=" text-m sm:text-l lg:text-xl  mt-4 md:text-left text-center">
            {props.args.bodyText}
            </p>
            {props.args.buttonText &&
            <div className='flex flex-col my-4'>
                <button className='px-8 py-3 mt-5 mx-[20%]'>{props.args.buttonText}</button>
            </div>
            }
        </div>
  
    </section>
     )
    }