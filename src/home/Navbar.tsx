"use client"
import React, { useState } from 'react';
import { navLinks, sideBarVariants, linkAnimationVariants } from "./utils"
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react"
import Logo from '../assets/icons/logo';

const Navigation: React.FC = () => {
    const [isHamburgerNavOpen, setIsHamburgerNavOpen] = useState(false)

    return (
        <div className="z-20 absolute bg-[#13151a] w-full text-white grid border-b place-items-center  ">
            <nav className="py-4 px-4  md:px-0 flex items-center justify-between w-full md:w-4/5">
                {/* logo */}
                <div>
                    <Logo />
                </div>

                {/* navigation links for medium screen size and desktop*/}
                <div className="md:flex hidden items-center justify-evenly w-1/2">

                    {
                        navLinks.map((link) => {
                            return (
                                <a className="p-2 hover:underline" key={link.id} href={link?.link}>
                                    <p className="text-sm">{link?.title.toUpperCase()}</p>
                                </a>
                            )
                        })
                    }

                    <span className="mx-3"></span>
                    <button>Cart</button>

                </div>
                
                {/* hamburger will only show on mobile screen */}
              <Hamburger toggle={setIsHamburgerNavOpen} toggled={isHamburgerNavOpen} />
                
            </nav>

            {/* aside/navigation for mobile screen */}
            <AnimatePresence>
                    {
                    isHamburgerNavOpen && (                      
                        <motion.aside className=" w-full z-20 h-[80vh]"
                            initial={{ width: 0 }}
                            animate={{ width:"100%" }}
                            exit={{
                                    width: 0,
                                    transition: { delay: 0.7, duration: 0.3 }
                                }}
                            >
                                <motion.div className="flex flex-col justify-center w-full"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={sideBarVariants}
                                
                                >

                                    {
                                        navLinks.map((link) => {
                                            return (
                                                <a className="p-3 my-3  hover:underline" key={link.id} href="">
                                                    <motion.p
                                                        whileHover={{ scale: 1.1 }}
                                                        variants={linkAnimationVariants}
                                                        className="text-center hover:underline text-sm">
                                                        {link?.title.toUpperCase()}
                                                    </motion.p>
                                                </a>
                                            )
                                        })
                                    }
                                    <button className="mx-3 bg-[#11535c] text-white p-3 rounded">Register</button>

                                </motion.div>
                        </motion.aside>                        
                        )
                    }
            </AnimatePresence>
        </div>
        
    )
}

export default Navigation