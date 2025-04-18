import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      text: "MemoTag has revolutionized how I organize my marketing campaigns. I can quickly find inspiration and previous campaign assets with just a few tags. It's saved me countless hours!"
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      text: "As a developer, I need to keep track of snippets, solutions, and resources. MemoTag has become my external brain, making it effortless to recall complex information exactly when I need it."
    },
    {
      name: 'Emily Rodriguez',
      role: 'University Student',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      text: "I use MemoTag for all my study notes and research. The tagging system helps me connect ideas across different courses, which has improved my understanding and grades significantly."
    },
    {
      name: 'David Wilson',
      role: 'Project Manager',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      text: "Managing multiple projects with various stakeholders is challenging. MemoTag helps me keep everything organized by client, project phase, and priority. It has become indispensable to my workflow."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover how MemoTag is helping people stay organized and boost productivity.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors text-primary focus:outline-none"
            >
              <FaIcons.FaChevronLeft />
            </button>
            
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaIcons.FaStar key={i} className="text-yellow-400 mx-0.5" />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors text-primary focus:outline-none"
            >
              <FaIcons.FaChevronRight />
            </button>
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl p-8 md:p-12 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <FaIcons.FaQuoteLeft className="text-primary text-opacity-20 text-4xl mb-6 mx-auto" />
            
            <p className="text-gray-700 text-lg mb-8">
              {testimonials[currentIndex].text}
            </p>
            
            <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
            <p className="text-gray-600">{testimonials[currentIndex].role}</p>
          </motion.div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 