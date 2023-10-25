import chrissiVideo from '../assets/Chrissi.mp4';
import React, { useState, useEffect } from 'react';

const VideoHeader = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
    <div className='relative'>
    <div className="w-screen">
        <video className="w-screen videoPlayer min-h-screen" width="320" height="240" autoPlay muted loop>
            <source src={chrissiVideo} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    </div>
    <div className={`absolute top-[30%] w-screen ${scrolling ? 'scrollingVideo' : ''}`} >
        <h1 className='mx-auto text-6xl text-slate-100 font-bold'>DUO ELEVATION</h1>
        <h2 className='mx-auto text-3xl text-slate-200 font-bold'>Performance Duo</h2>
        <div className='flex-row py-3'>
        {/*<button className='px-12 mr-12 py-3 button2'>SHOWS</button>
        <button className='px-12 ml-12 py-3 button1'>KONTAKT</button>
        */}
        </div>
    </div>
    </div>

    
    )
}
//
export default VideoHeader;