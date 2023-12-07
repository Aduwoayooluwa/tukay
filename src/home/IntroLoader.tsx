import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const IntroLoader = ({ onLoaded }: { onLoaded: () => void }) => {
    const svgRef = useRef<any>(null);

    useEffect(() => {
        // GSAP animation for SVG
        const tl = gsap.timeline();

        // Animate gradient
        tl.to(svgRef.current.querySelectorAll('stop'), {
            attr: { offset: '100%' },
            stagger: 0.2,
            duration: 2.0,
        });

        // Animate text and lines
        tl.fromTo(svgRef.current.querySelectorAll('line, text'), 
            { strokeDasharray: 500, strokeDashoffset: 500 },
            { strokeDashoffset: 0, duration: 2.0 },
            "-=0.5"
        );

        // Delay before calling onLoaded to start the door opening effect
        tl.to({}, { duration: 4, onComplete: onLoaded });
    }, [onLoaded]);

    return (
        <motion.div
            className="fixed inset-0 flex h-screen justify-center items-center bg-black"
            initial={{ opacity: 1, rotateY: 0, scale: 1 }}
            animate={{ opacity: 0, rotateY: 90, scale: 0, transition: { duration: 1, delay: 4 } }}
            exit={{ opacity: 0, rotateY: 0, scale: 1, transition: { duration: 1 } }}
        >
            <div className="px-20">
                <svg ref={svgRef} width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 0.9 }} />
                            <stop offset="100%" style={{ stopColor: 'rgb(0,0,0)', stopOpacity: 0.2 }} />
                        </linearGradient>
                    </defs>
                    <line x1="10" y1="10" x2="50" y2="50" stroke="url(#gradient)" strokeWidth="4"/>
                    <line x1="50" y1="50" x2="10" y2="90" stroke="url(#gradient)" strokeWidth="4"/>
                    <line x1="60" y1="10" x2="100" y2="50" stroke="url(#gradient)" strokeWidth="4"/>
                    <line x1="100" y1="50" x2="60" y2="90" stroke="url(#gradient)" strokeWidth="4"/>
                    <text x="110" y="60" fontFamily="Space Mono" fontSize="50" fill="url(#gradient)">tukay</text>
                </svg>
            </div>
        </motion.div>
    );
};

export default IntroLoader;
