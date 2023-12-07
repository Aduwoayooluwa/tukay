import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import TukayBoy from "../assets/images/tukay_boy_2.jpg"
import TukayGirl from "../assets/images/tukay_girl.png"
import TukayOldman from "../assets/images/tukay_oldman.png"
import "./home.css";
import { gsap } from 'gsap';

const HowItWorks = () => {

    const ref = useRef<any>(null);

    useEffect(() => {
        gsap.from(ref.current, {
            duration: 0.8,
            opacity: 0,
            y: 30,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, []);
    

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">How It Works</h2>
                </div>
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-6 justify-around items-center">
                    {/* Step 1 */}
                    <motion.div className="step" whileHover={{ scale: 1.05 }}>
                        <div className="step-content bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg">
                            <div className='w-full grid place-items-center rounded overflow-hidden'>
                                <img src={TukayBoy.src} alt="2k boy" className='w-[400px]' />
                            </div>
                            <h3 className="text-xl font-semibold my-2">Request 2k</h3>
                            <p>Start by sending a loan request through our platform.</p>
                        </div>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div className="step" whileHover={{ scale: 1.05 }}>
                        <div className="step-content bg-gradient-to-r from-green-500 to-blue-600 p-6 rounded-lg shadow-lg">
                             <div className='w-full grid place-items-center rounded overflow-hidden'>
                                <img src={TukayGirl.src} alt="2k boy" className='w-[400px]' />
                            </div>
                            <h3 className="text-xl font-semibold my-2">Approval</h3>
                            <p>Your request is quickly reviewed and approved.</p>
                        </div>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div className="step" whileHover={{ scale: 1.05 }}>
                        <div className="step-content bg-gradient-to-r from-orange-500 to-pink-600 p-6 rounded-lg shadow-lg">
                             <div className='w-full grid place-items-center rounded overflow-hidden'>
                                <img src={TukayOldman.src} alt="2k boy" className='w-[400px]' />
                            </div>
                            <h3 className="text-xl font-semibold my-2">Receive Funds</h3>
                            <p>Get the funds transferred directly to your account.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
