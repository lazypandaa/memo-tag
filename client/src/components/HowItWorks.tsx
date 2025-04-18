import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      number: '01',
      title: 'Create Tags',
      description: 'Easily create tags for any piece of information you want to remember. Use our suggestions or create custom tags.',
      icon: <FaIcons.FaTags />,
      color: 'bg-blue-50 text-blue-500 border-blue-200',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      number: '02',
      title: 'Organize Content',
      description: 'Group related information together with multiple tags, creating a powerful web of interconnected knowledge.',
      icon: <FaIcons.FaLayerGroup />,
      color: 'bg-purple-50 text-purple-500 border-purple-200',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      number: '03',
      title: 'Search & Filter',
      description: 'When you need to recall information, simply search by tags to quickly find exactly what you need.',
      icon: <FaIcons.FaSearch />,
      color: 'bg-green-50 text-green-500 border-green-200',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      number: '04',
      title: 'Access Anywhere',
      description: 'Use MemoTag on any device - your information syncs automatically across all your platforms.',
      icon: <FaIcons.FaMobileAlt />,
      color: 'bg-orange-50 text-orange-500 border-orange-200',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
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

  const numberCircleVariants = {
    inactive: { 
      scale: 1,
      background: "var(--color-light)",
      color: "var(--color-dark)",
      borderColor: "var(--color-gray-200)"
    },
    active: { 
      scale: 1.1,
      background: "var(--color-primary)",
      color: "var(--color-light)",
      borderColor: "var(--color-primary)"
    }
  };

  return (
    <section id="howItWorks" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            MemoTag's intuitive process makes organizing and recalling information effortless.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row mb-16">
          <motion.div 
            className="w-full md:w-1/2 pr-0 md:pr-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-light rounded-xl overflow-hidden shadow-xl"
              animate={{ y: activeStep === 0 ? [0, -5, 0] : 0 }}
              transition={{ duration: 2, repeat: activeStep === 0 ? Infinity : 0, ease: "easeInOut" }}
            >
              <img 
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{steps[activeStep].title}</h3>
                <p className="text-gray-700">{steps[activeStep].description}</p>
                <div className="mt-4 flex">
                  {React.createElement(
                    'div',
                    { className: `p-3 mr-3 rounded-full text-xl ${steps[activeStep].color.split(' ').slice(0, 2).join(' ')}` },
                    steps[activeStep].icon
                  )}
                  <p className="text-gray-500 text-sm flex items-center">
                    Swipe through the steps or click on the numbered circles to learn more
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="grid grid-cols-1 gap-6"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`flex items-start p-4 rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                    activeStep === index ? step.color : 'border-transparent hover:border-gray-200'
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold mr-4 ${
                      activeStep === index ? 'bg-primary text-white border-primary' : 'bg-light text-dark border-gray-200'
                    }`}
                    variants={numberCircleVariants}
                    animate={activeStep === index ? "active" : "inactive"}
                  >
                    {step.number}
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold">{step.title}</h4>
                    <p className="text-gray-600 mt-1">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 102, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
          >
            Start Organizing Today
          </motion.button>
          
          <motion.div 
            className="mt-12 p-8 bg-light rounded-xl max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
                  alt="People using MemoTag"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold mb-4">Join thousands of productive users</h3>
                <p className="text-gray-700 mb-4">
                  Our users report saving over 5 hours per week by using MemoTag to organize and recall important information.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      React.createElement(FaIcons.FaStar, {
                        key: i, 
                        className: "text-yellow-400 mr-1"
                      })
                    ))}
                  </div>
                  <span className="ml-2 text-gray-700 font-medium">4.9/5 from over 1,000 reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 