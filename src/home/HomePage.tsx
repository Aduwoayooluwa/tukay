import React from 'react';
// Import your Navbar and Shape components
import Navbar from './Navbar'; 
import Shape from "../components/Shape"
// Import your image
import TukayBoyChristmas from '../assets/images/tukay_boy_2_no.png'; 

const HeroSection = () => {
    return (
        <section className="relative container hero">
            <div className="w-full py-0 md:py-3 grid place-items-center">
                <Navbar />
            </div>
            <div className="px-20 absolute w-full top-28">
                <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet" />
                <svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "rgb(255,255,255)", stopOpacity: 0.9 }} />
                            <stop offset="100%" style={{ stopColor: "rgb(0,0,0)", stopOpacity: 0.2 }} />
                        </linearGradient>
                    </defs>
                    <line x1="10" y1="10" x2="50" y2="50" stroke="url(#gradient)" strokeWidth="4"/>
                    <line x1="50" y1="50" x2="10" y2="90" stroke="url(#gradient)" strokeWidth="4"/>
                    <line x1="60" y1="10" x2="100" y2="50" stroke="url(#gradient)" strokeWidth="4"/>
                    <line x1="100" y1="50" x2="60" y2="90" stroke="url(#gradient)" strokeWidth="4"/>
                    <text x="110" y="60" fontFamily="Space Mono" fontSize="50" fill="url(#gradient)">tukay</text>
                </svg>
            </div>
            <section className="w-full -mt-0 md:-mt-10 flex flex-col md:flex-row items-center justify-between">
                <div>
                    <h1 className="w-full md:w-[600px] text-start">Do you want to beg for <span className="text-gradient">tukay?</span></h1>
                </div>

                <div>
                    <div className="absolute left-20 bottom-0">
                        <Shape /> 
                    </div>
                    <img className="w-full md:w-[600px] lg:w-[800px]" src={"../assets/images/tukay_boy_2.jpg"} alt="tukay boy" />
                </div>
            </section>
        </section>
    );
};

export default HeroSection;
