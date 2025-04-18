import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const Features: React.FC = () => {
  const features = [
    {
      icon: <FaIcons.FaTag size={36} />,
      title: 'Smart Tagging',
      description: 'Quickly tag any information with our intelligent system that suggests relevant tags.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <FaIcons.FaSearch size={36} />,
      title: 'Instant Recall',
      description: 'Find what you need in seconds with our powerful search and filtering capabilities.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: <FaIcons.FaSync size={36} />,
      title: 'Seamless Sync',
      description: 'Access your tags from any device with real-time synchronization across platforms.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: <FaIcons.FaMobile size={36} />,
      title: 'Mobile Ready',
      description: 'Take MemoTag with you anywhere with our fully responsive mobile apps.',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconAnimation = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { 
        duration: 0.3,
        type: "spring" 
      }
    }
  };

  return (
    <section id="features" className="section-padding bg-light relative">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-10 right-10 w-32 h-32 bg-primary opacity-5 rounded-full"
        animate={{ 
          x: [0, 20, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 left-10 w-20 h-20 bg-secondary opacity-5 rounded-full"
        animate={{ 
          x: [0, -20, 0],
          y: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            MemoTag comes packed with features designed to boost your productivity and help you never forget anything important.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -10,
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform"
            >
              <motion.div 
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} text-white flex items-center justify-center`}
                variants={iconAnimation}
                whileHover="hover"
              >
                {React.createElement(
                  'div',
                  null,
                  feature.icon
                )}
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
              
              <motion.div
                className="mt-4 inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <a href="#" className="text-primary font-medium flex items-center justify-center">
                  <span>Learn more</span>
                  {React.createElement(FaIcons.FaChevronRight, { className: "ml-1 text-xs" })}
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://storage.googleapis.com/gweb-cloudblog-publish/images/working_from_home_7.max-1100x1100.jpg" 
            alt="MemoTag Interface"
            className="rounded-lg shadow-xl mx-auto max-w-4xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 