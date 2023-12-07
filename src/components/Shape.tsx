import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import "./style.css";

const AmoebaShape = () => {
    const shapeRef = useRef(null);

    useEffect(() => {

        gsap.to(shapeRef.current, {
            duration: 2,
            scale: 1.1,
            borderRadius: '50%',
            repeat: -1, // infinite loop
            yoyo: true, // reverse the animation for each iteration
            ease: 'power1.inOut'
        });
    }, []);

    return (
        <motion.div
            ref={shapeRef}
            className="shape"
            whileHover={{ rotate: [0, 10, -10, 10, 0] }}
        >
            I need Urgent tukay!
        </motion.div>
    );
};

export default AmoebaShape;
