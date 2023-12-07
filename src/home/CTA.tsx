import { motion } from 'framer-motion';
import CTAImage from "../assets/images/tukay_oldman.png";
import "./home.css"
export default function CTA() {
  return (
    <div className="relative container mx-auto py-20 px-6">

        <section className="flex pl-0 md:pl-10 cta bg-[rgba(0,0,0,0.2)] flex-col  md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
            className="w-full h-full md:w-1/2">
            <h1 className="text-5xl  z-40  font-bold">Urgent 2K? No Problem!</h1>
            <p className="mt-4 text-xl">Get it with zero hassle.</p>
                  {/* CTA Button */}
          <button className="bg-[#11535c] my-5 p-3 rounded text-white hover:bg-green-900">Borrow 2k</button> 
      
          </motion.div>
          <motion.img 
            src={CTAImage.src}
            className="opacity-1 bg-[#13151a] w-full md:w-1/2"           
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          />
        </section>
    </div>
  );
}
