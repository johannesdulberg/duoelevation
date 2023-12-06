// src/components/VideoSlider.js
import React, { useState } from 'react';

const videos = [
    "https://www.youtube.com/embed/QcBzquLR16k?si=RGguD9WxDGA2GUIP",
    "https://www.youtube.com/embed/UpL76i_WL_U?si=siq5rEn56uUagqEh",
];

function VideoSlider() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const prevVideo = () => {
        setCurrentVideoIndex(prevIndex => (prevIndex - 1 + videos.length) % videos.length);
    };

    const nextVideo = () => {
        setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
    };

    return (
        <div className="video-slider">
            <button className="slide-btn slide-left" onClick={prevVideo}>⟨</button>
            <iframe 
                width="560" 
                height="315" 
                src={videos[currentVideoIndex]} 
                title="YouTube video player" 
                allowFullScreen
            ></iframe>
            <button className="slide-btn slide-right" onClick={nextVideo}>⟩</button>
        </div>
    );
}

export default VideoSlider;

