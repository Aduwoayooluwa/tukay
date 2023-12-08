import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import { useInView } from 'react-intersection-observer';
import Shape from "../components/Shape"
import GroupBeg from "../assets/images/group_beg.png"

type Props = {};

const Hero = (props: Props) => {
  const headingRef = useRef<any>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  useEffect(() => {
    if (headingRef.current && inView) {
      // Split the text to characters for individual animation
      const chars: any = gsap.utils.toArray('.char', headingRef.current);

      // Animate each character
      chars.forEach((char: Element, i: number) => {
        gsap.fromTo(char, 
          { autoAlpha: 0, y: -20 },
          { duration: 1, autoAlpha: 1, y: 0, delay: i * 0.05 }
        );

        // Flip a specific letter, for example, the second 'a' in 'Sapa'
        if (char.textContent === 'a' && i === 4) {
          gsap.to(char, { duration: 1, rotateY: 180, delay: i * 0.05 });
        }
      });
    }
  }, [inView]);

  return (
    <main ref={ref} className='bg_texture h-screen relative grid place-items-center w-full md:h-[700px] lg-h-screen'>
      <div className='container px-10    justify-between flex flex-col md:flex-row items-center'>
              <section className=' h-full w-full md:w-1/2  py-20    '>
                    <div className=' '>
                      <h1 ref={headingRef} className="text-start text-6xl my-4 md:my-5 font-semibold">
                      {Array.from("Sapa moment?").map((char, index) => (
                          <span key={index} className="char">
                          {char}
                          </span>
                      ))}
                      </h1>

                      <p className="text-start">Quickly ask for urgent 2k</p>

                        <div className="w-full grid place-items-start">
                          <button className=' mt-20 z-10 bg-[#11535c]  rounded-full font-semibold w-[300px] md:w-[400px] h-[70px]'>Beg NOW!</button>   
                        </div>

                      <div className="mt-10 flex md:hidden absolute bottom-28 opacity-50 md:opacity-30 left-40">
                            <Shape />
                        </div>
                        
                        <div className="mt-10 hidden md:flex inherit md:absolute -top-10 opacity-0.5 md:opacity-30 left-40">
                            <Shape />
                        </div>
            </div>
            </section>

            <div className='pt-10 w-full md:w-[50%] md:py-20'>
              <img src={GroupBeg.src} alt='Begging meme' />
            </div>
         </div>
    </main>
  );
}

export default Hero;
