import React from 'react'
import {useRef,useEffect,useState}  from "react"
import thumbnailImage1 from '../assets/thumbnail1.png';
import thumbnailImage2 from '../assets/thumbnail2.png';
import thumbnailImage3 from '../assets/thumbnail3.png';
export default function SplitVideosliderAndText(props) {
    const headerText = props.args.headerText
    const bodyText = props.args.bodyText
    const reverse = props.args.reverse
    const bgColor= props.args.bgColor
    const videos = [
        props.args.link1,
        props.args.link2,
    ];

    const thumbnails =[
        thumbnailImage1,
        thumbnailImage2,
    ]
   
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [stopSlider, setStopSlider] = useState(false);

    const prevVideo = () => {
        setStopSlider(true)
        setCurrentVideoIndex(prevIndex => (prevIndex - 1 + videos.length) % videos.length);
    };

    const nextVideo = () => {
        setStopSlider(true)
        setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
    };
    const [isClicked, setIsClicked] = useState(false);

    // Funktion, die beim Klick aufgerufen wird
    const handleThumbnailClick = () => {
        setStopSlider(true)
        setIsClicked(true);
        
    };
    var effectCounter=0
    useEffect(() => {
        let interval;
    
        if (!stopSlider) { // Wenn stopSlider === false
            interval = setInterval(() => {
                var video = document.getElementById("video");
                
                effectCounter+=1;
    
                if(effectCounter===9){
                    video.classList.add("opacity-0");
                    video.classList.remove("opacity-1");
                }
                if (effectCounter===10){
                    setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
                    video.classList.remove("opacity-0");
                    video.classList.add("opacity-1");
                    effectCounter=0;
                }
                console.log("COUNTER",effectCounter);
    
            }, 500);
        }
    
        return () => {
            if (interval) {
                clearInterval(interval); // Den Timer löschen, wenn die Komponente unmountet oder sich die Abhängigkeiten ändern
            }
        };
    }, [videos, stopSlider]);
    


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
    <section name='home'  className={` w-full bg-${bgColor} flex ${props.args.reverse ? "md:flex-row-reverse" :"md:flex-row"} flex-col-reverse pb-[40px] px-2`}>
        
        <div ref={myRef2} className={` ${intersection2 ? "fadeinNoMove":"invisible" } md:p-0 h-full mx-auto md:mt-10`}>
        <div className="video-slider">
            <button className="slide-btn slide-left" onClick={prevVideo}>⟨</button>
            <div className='video-slider md:w-[50vw] w-[80vw] max-w-[560px] relative'>
            <iframe  
            
            className='z-0 videoIFrame'
                style={{ opacity: isClicked ? 1 : 0 }}
                width="560" 
                height="315" 
                src={videos[currentVideoIndex]} 
                title="YouTube video player" 
                allowFullScreen
            ></iframe>
            {!isClicked && (
                <div className='z-10 flex items-center justify-center bg-cover bg-center opactiy-0 thumbnail'
                    id="video"
                    onClick={handleThumbnailClick} 
                    style={{
                        backgroundImage: `url(${thumbnails[currentVideoIndex]})`,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer',
                    }}
                >
                    <button className="px-6 py-2 text-lg button1">ANSCHAUEN</button>
                </div>
            )}
            </div>
            <button className="slide-btn slide-right" onClick={nextVideo}>⟩</button>
            
        




        </div>
        </div>
        <div ref={myRef1} className={` ${intersection1 ? (reverse ? "fadeinLeft" : "fadeinRight") : "invisible" } w-full md:w-3/5 h-full mt-5 md:mt-20 pl-[5%] lg:pl-20 flex flex-col z-10 p-8 `}>
            <h2 className="text-2xl sm:text-3xl xl:text-[40px] lg:text-[30px] md:text-[20px] font-bold md:text-left text-center ">{props.args.headerText}</h2>
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