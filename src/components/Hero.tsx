import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CompanyLogos } from './CompanyLogos';
import { SearchBar } from './search/SearchBar';

export const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/apprenticeships');
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Let AI <span className="line-through">Replace</span>{' '}
            <motion.span 
              className="font-serif italic text-orange-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Help
            </motion.span> You
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We Track Apprenticeships So You Don't Have to.
          </motion.p>
          
          <div className="max-w-3xl mx-auto mb-12">
            <SearchBar onSubmit={handleSearch} />
          </div>
          
          <CompanyLogos />
        </motion.div>
      </div>
    </div>
  );
};