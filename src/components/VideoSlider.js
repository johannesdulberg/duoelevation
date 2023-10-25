// src/components/VideoSlider.js
import React, { useState } from 'react';

const videos = [
    "https://www.youtube.com/embed/aLw7s9xAHh4?si=4Lnzhrx--on9-8Ih",
    "https://www.youtube.com/embed/Q57CGxFNCgc?si=42d6l7keDik5yEth",
    "https://www.youtube.com/embed/-hwK6fTlU9Q?si=bH4cvNVs7HwqZfrP",
    // ... füge hier weitere Video-Links hinzu
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
