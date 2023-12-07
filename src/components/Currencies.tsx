import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TukayImage from "../assets/images/tukay_money_1.jpg";
import TukayImage2 from "../assets/images/tukay_money_2.jpg";
import { motion } from 'framer-motion';
import { Mousewheel } from 'swiper/modules';
import "swiper/css/mousewheel"
import "./style.css"
import DownloadButtons from './DownloadApp';

type Props = {}

const Currencies = () => {
    return (
        <main className="flex items-center space-y-8 md:space-y-0 py-20 flex-col md:flex-row justify-between container">
            <div className='w-full md:w-[40%]'>
                <h1 className='text-3xl md:text-5xl mb-4 font-semibold '>Get your 2k App</h1>
                <div>
                    <DownloadButtons />
                </div>
            </div>

            <div className='w-full md:w-[40%]'>
                 <Swiper
            direction={"horizontal"}
            slidesPerView={"auto"}
            spaceBetween={30}
            mousewheel={true}
            modules={[Mousewheel]}
            className="mySwiper"
        >
            <SwiperSlide>
                <motion.img
                    src={TukayImage2.src}
                    alt="tukay currency 1"
                    // initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </SwiperSlide>
            <SwiperSlide>
                <motion.img
                    src={TukayImage.src}
                    alt="tukay currency 2"
                    // initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </SwiperSlide>
        </Swiper>
            </div>
       </main>
    );
};

export default Currencies;
