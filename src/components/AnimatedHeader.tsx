import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedHeader = ({ text }: {text: string}) => {
    const headerRef = useRef(null);

    useEffect(() => {
        gsap.from(headerRef.current, { duration: 1, y: -30, opacity: 0 });
    }, []);

    return <h1 className='text-red-400' ref={headerRef}>{text}</h1>;
};

export default AnimatedHeader;
