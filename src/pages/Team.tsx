import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  type: 'founder' | 'senior-lead' | 'ambassador';
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  contact?: {
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Farrukh Ahmad",
    role: "Founder",
    type: "founder",
    image: "/media/farrukh-av.png",
    description: "I'm on a mission to make it easier for young professionals to find apprenticeships. Having faced the challenge myself of keeping up with the endless apprenticeships all on different websites, I'm determined to simplify the process and take the stress out of it for others. I'm not just talking about change—I'm here to try and make it happen.",
    links: {
      github: "https://github.com/HeyFarrukh?utm_source=apprentice-watch",
      linkedin: "https://www.linkedin.com/in/farrukh-ahmad-9547b1260?utm_source=apprentice-watch",
    },
    contact: {
      email: "farrukh@apprenticewatch.com"
    }
  },
  {
    name: "Jamal Mitchell",
    role: "Co-Founder",
    type: "founder",
    image: "/media/jamal-av.png",
    description: "As friends with similar career goals, I often shared my frustration that many attempts to inform and empower aspiring apprentices were lacking. When Farrukh shared his bold vision with me, I immediately recognised the potential for change and knew this was the opportunity to make a real impact.",
    links: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/jamal-mitchell-a7729428b?utm_source=apprentice-watch",
    },
    contact: {
      email: "jamal@apprenticewatch.com"
    }
  },
  {
    name: "Humza",
    role: "Chief Technical Officer",
    type: "senior-lead",
    image: "/media/humza-av.png",
    description: "As a friend of both founders, I sympathized with their vision and understood the current tenuous state of the apprenticeship application process. I joined the team to help build the platform and make their vision a reality utilising my experience in development and operations.",
    links: {
      github: "https://github.com/hhussain04",
      linkedin: "https://www.linkedin.com/in/humzahussain04/",
    },
    contact: {
      email: "humza@apprenticewatch.com"
    }
  },
];

const FounderCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
    <div className="absolute inset-0 bg-gradient-to-l from-orange-500/10 to-orange-600/10 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
    
    <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col items-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-spin-slow opacity-75 blur-sm" />
          <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-800">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-lg">
            {member.role}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {member.name}
        </h2>
        
        {member.contact?.email && (
          <a 
            href={`mailto:${member.contact.email}`}
            className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-medium mb-4 transition-colors"
          >
            {member.contact.email}
          </a>
        )}
        
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          {member.description}
        </p>
        <div className="flex items-center space-x-4">
          {member.links.github && (
            <motion.a
              href={member.links.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          {member.links.linkedin && (
            <motion.a
              href={member.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const SeniorLeadCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="relative group max-w-3xl mx-auto"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-600/5 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />

    <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        <div className="relative flex-shrink-0 mx-auto md:mx-0">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-orange-500">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-medium whitespace-nowrap shadow-md">
            {member.role}
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white overflow-hidden text-ellipsis">
              {member.name}
            </h3>

            {member.contact?.email && (
              <a
                href={`mailto:${member.contact.email}`}
                className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-medium block transition-colors overflow-hidden text-ellipsis"
              >
                {member.contact.email}
              </a>
            )}

            <p className="text-gray-600 dark:text-gray-300 text-sm">{member.description}</p>

            <div className="flex justify-center md:justify-start space-x-3 pt-2">
              {member.links.github && (
                <motion.a
                  href={member.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              )}
              {member.links.linkedin && (
                <motion.a
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);


const AmbassadorCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center space-x-4">
      <div className="relative flex-shrink-0">
        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-orange-500/20">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
          {member.name}
        </h3>
        <p className="text-sm text-orange-500 dark:text-orange-400 mb-1">
          {member.role}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {member.description}
        </p>
        <div className="flex space-x-2 mt-2">
          {member.links.linkedin && (
            <a
              href={member.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.links.twitter && (
            <a
              href={member.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export const Team = () => {
  const founders = teamMembers.filter(member => member.type === 'founder');
  const seniorLeads = teamMembers.filter(member => member.type === 'senior-lead');
  const ambassadors = teamMembers.filter(member => member.type === 'ambassador');

  return (
    <>
      <Helmet>
        <title>Our Team - Apprenticewatch</title>
        <meta name="description" content="Meet the visionary team behind ApprenticeWatch working to revolutionise how apprenticeships are discovered and accessed in the UK." />
        <meta name="keywords" content="ApprenticeWatch team, apprenticeship experts, UK apprenticeship leaders, apprenticeship innovators" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Team - Apprenticewatch" />
        <meta property="og:description" content="Meet the visionary team behind ApprenticeWatch working to revolutionise how apprenticeships are discovered and accessed in the UK." />
        <meta property="og:image" content="/media/team-og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Our Team - Apprenticewatch" />
        <meta name="twitter:description" content="Meet the visionary team behind ApprenticeWatch working to revolutionise how apprenticeships are discovered and accessed in the UK." />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ApprenticeWatch",
            "url": "https://apprenticewatch.com",
            "description": "The minds behind ApprenticeWatch, working to revolutionise how apprenticeships are discovered and accessed.",
            "employee": teamMembers.map(member => ({
              "@type": "Person",
              "name": member.name,
              "jobTitle": member.role,
              "image": member.image,
              "description": member.description,
              "sameAs": [
                member.links.linkedin,
                member.links.twitter,
                member.links.github
              ].filter(Boolean)
            }))
          })}
        </script>
      </Helmet>
      <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet the <span className="text-orange-500">Team</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The minds behind ApprenticeWatch, working to revolutionise how apprenticeships are discovered and accessed.
            </p>
          </motion.div>

          {/* Founders Section */}
          <div className="relative mb-24">
            <div className="grid md:grid-cols-2 gap-12">
              {founders.map((member, index) => (
                <FounderCard key={`${member.name}-${index}`} member={member} />
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 hidden md:block overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse" />
            </div>
          </div>

          {/* Senior Lead Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-24"
          >
            {seniorLeads.map((member, index) => (
              <SeniorLeadCard key={`${member.name}-${index}`} member={member} />
            ))}
          </motion.div>

          {/* Ambassadors Section */}
          {ambassadors.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Our <span className="text-orange-500">Brand Ambassadors</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ambassadors.map((member, index) => (
                  <AmbassadorCard key={`${member.name}-${index}`} member={member} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};