import React from 'react';
import { motion } from 'framer-motion';
import PlayStore from "../assets/images/google_play_store.webp"
import AppStore from "../assets/images/app_store.webp";

const DownloadButtons = () => {
  return (
    <div className="flex justify-center items-center space-x-4 p-6 bg-blue-500 rounded-lg shadow-lg">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-white overflow-hidden text-blue-500 font-bold py-2 px-4 rounded inline-flex items-center">
        <img className="w-full" src={PlayStore.src} alt="download play store"/>
      </motion.button>
        {/* 
            
        */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-blue-500 overflow-hidden font-bold py-2 px-4 rounded inline-flex items-center">
        <img className="w-full" src={AppStore.src} alt="app store download" />
      </motion.button>
    </div>
  );
};

export default DownloadButtons;
