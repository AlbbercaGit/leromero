import { FaInstagram } from "react-icons/fa6";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

const Footer = () => {
    const { scrollYProgress } = useScroll();
    const clip1 = useTransform(scrollYProgress, [0, 1], [100, 100]);
    const clip2 = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const clipPath = useMotionTemplate`polygon(0% 0%, ${clip1}% 0%, ${clip1}% ${clip1}%, 0% ${clip1}%)`;
    
    return (
        <main>
            <div className='absolute bg-transparent w-full h-[100vh] z-30'>
                <motion.div className='absolute bg-blue-500 h-full w-full z-40' 
                    style={{ clipPath }}
                    initial={{ scale: 1 }}
                    animate={{  scale: 0 }}
                    transition={{
                        type: "spring",
                        damping: 20
                    }}>
                </motion.div>
            </div>
        </main>
    );
};

export default Footer;