import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';



const Footer = () => {
    gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.from('.footer-content', {
      duration: 1,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.footer-content',
        start: 'top bottom',
      },
    });
  }, []);

  return (
    <footer className="footer-content py-20 bg-[#11535c] w-full text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 footer-content">
        {/* Column 1 - Contact Info */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <div>
            <h5 className="text-lg font-semibold mb-4">Get in Touch</h5>
            <p className="text-sm">Phone: +123 456 7890</p>
            <p className="text-sm">Email: support@tukayApp.com.ng</p>
            <p className="text-sm">Address: 123 Finance Street, Akure, Nigeria</p>
            </div>
        </motion.div>

        {/* Column 2 - Navigation Links */}
        <motion.div whileHover={{ scale: 1.05 }}>
           <div >
          <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
          <ul className="text-sm">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">How it Works</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>
        </motion.div>

        {/* Column 3 - Social Media Icons */}
        
        {/* Column 4 - About the Service */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <div>
          <h5 className="text-lg font-semibold mb-4">About Tukay</h5>
          <p className="text-sm">Beg for Urgent 2Kay now!! You are not bigger than 2kay..</p>
        </div>

            <motion.div whileHover={{ scale: 1.05 }}>
            {/* Content */}
            <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4 text-sm">
            <a href="https://facebook.com" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="https://twitter.com" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="https://instagram.com" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="https://linkedin.com" className="hover:text-gray-300"><FaLinkedinIn /></a>
            </div>
        `   </div>
        </motion.div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
