'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogoScroll } from './logos/LogoScroll';
import { StatCard } from './stats/StatCard';
import { vacancyService } from '@/services/supabase/vacancyService';

export const CompanyLogos = () => {
  const [totalVacancies, setTotalVacancies] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTotalVacancies = async () => {
      try {
        setLoading(true);
        const count = await vacancyService.getTotalActiveVacancies();
        setTotalVacancies(count);
        setError(null);
      } catch (error) {
        console.error('Error fetching total vacancies:', error);
        setError('Failed to load vacancy count');
      } finally {
        setLoading(false);
      }
    };

    fetchTotalVacancies();
  }, []);

  const stats = [
    {
      value: loading ? "Loading..." : error ? "Error" : `${totalVacancies}+`,
      label: "Active Apprenticeships",
      description: "Updated in real-time with opportunities from companies across the UK."
    },
    {
      value: "FREE",
      label: "AI CV Optimisation",
      description: "Get instant feedback in under 20 seconds!"
    },
    {
      value: "24/7",
      label: "Real-Time Notifications",
      description: "Get instant alerts on new apprenticeships anytime, anywhere."
    },
  ];

  return (
    <div className="mt-16">
      <motion.h3 
        className="text-center text-2xl font-bold text-gray-800 dark:text-white mb-8 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Top Companies Hiring Apprentices
      </motion.h3>

      <div className="relative w-full overflow-hidden bg-transparent py-8">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-orange-50 dark:from-gray-900 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-orange-50 dark:from-gray-900 to-transparent z-10" />
        
        <div className="flex overflow-hidden whitespace-nowrap">
          <LogoScroll />
        </div>
      </div>
      
      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            {...stat}
            delay={1.2 + (index * 0.1)}
          />
        ))}
      </motion.div>
    </div>
  );
};