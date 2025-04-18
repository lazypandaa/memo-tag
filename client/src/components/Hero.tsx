import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import * as FaIcons from 'react-icons/fa';

const Hero: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 102, 255, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95 
    }
  };

  const floatAnimation = {
    hidden: { y: 0 },
    float: {
      y: [-10, 10],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-light to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <motion.div 
            className="w-full lg:w-1/2 text-left mb-12 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={fadeIn}
            >
              Remember Everything with <span className="text-primary">Memo</span><span className="text-secondary">Tag</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg"
              variants={fadeIn}
            >
              The smart tagging system that helps you organize and recall information instantly. Never forget important details again!
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={fadeIn}
            >
              <Link
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-8 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition-colors flex items-center"
                >
                  <span>Get Started</span>
                  {React.createElement(FaIcons.FaArrowRight, { className: "ml-2" })}
                </motion.button>
              </Link>
              <Link
                to="howItWorks"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-8 py-3 bg-white text-primary font-medium rounded-lg shadow-lg hover:bg-gray-50 transition-colors border border-primary"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex items-center mt-8"
              variants={fadeIn}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(num => (
                  <img 
                    key={num}
                    src={`https://randomuser.me/api/portraits/men/${num}.jpg`}
                    alt={`User ${num}`}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="ml-3 text-sm text-gray-600">
                <strong>1,000+</strong> users already organized
              </span>
            </motion.div>
          </motion.div>
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="relative"
            >
              <motion.div
                initial="hidden"
                animate="float"
                variants={floatAnimation}
                className="relative z-10"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                  <img 
                    src="https://storage.googleapis.com/gweb-cloudblog-publish/images/knowledge_management.max-1100x1100.jpg" 
                    alt="MemoTag in action" 
                    className="w-full h-auto rounded-xl"
                  />
                  
                  <motion.div 
                    className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {React.createElement(FaIcons.FaTag, { className: "text-primary text-xl" })}
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Decorative floating elements */}
              <motion.div 
                className="absolute -top-10 -left-10 w-20 h-20 bg-primary opacity-10 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-secondary text-white p-4 rounded-full shadow-lg flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <span className="text-lg font-bold">New!</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 left-10 w-12 h-12 bg-green-400 opacity-20 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 