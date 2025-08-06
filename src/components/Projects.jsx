import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiActivity, FiCalendar, FiCode, FiExternalLink, FiGithub, FiLayers, FiShield, FiTrendingUp, FiUser, FiZap } from 'react-icons/fi';
import LightRays from './LightRays'; // Import the LightRays component

// 🎯 PROJECT DATA CONFIGURATION
// ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const projectsData = [
  {
    id: 1,
    title: 'Vietnam Airlines Lotusmiles',
    category: 'Travel & Lifestyle',
    period: 'Nov 2024 - Present',
    status: 'Completed',
    type: 'Academic',
    description: 'A comprehensive lifestyle mobile app for managing Lotusmiles frequent flyer accounts and accessing exclusive offers within the Vietnam Airlines ecosystem and its partners. Features seamless account management, exclusive rewards redemption, and engaging mile-earning games.',
    longDescription: 'Lotusmiles Mobile App is a dedicated digital platform crafted exclusively for Vietnam Airlines members. The app transforms every mile earned into a gateway to personalized experiences, exclusive rewards, and seamless travel benefits. Key features include membership account management, mileage accrual and redemption history tracking, miles redemption for vouchers and partner rewards, Lotus Walk game for earning bonus miles, buying and transferring bonus miles, extending or reinstating bonus miles, and receiving exclusive vouchers from growing partner network. The application is designed to evolve into a fully integrated digital ecosystem where members can accumulate and use miles across a wide range of products and services from Vietnam Airlines and partners.',
    technologies: ['Expo', 'Reanimated3', 'PushNotifi', 'Firebase', 'React Query', 'Redux Tooltip', 'React native skia', 'Ota hot update', 'Vision-camera'],
    skills: [
      { name: 'Expo', level: 70 },
      { name: 'Reanimated3', level: 80 },
      { name: 'PushNotifi', level: 92 },
      { name: 'Firebase', level: 60 },
      { name: 'React Query', level: 92 },
      { name: 'Redux Tooltip', level: 92 },
      { name: 'React native skia', level: 50 },
      { name: 'Ota hot update', level: 92 },
      { name: 'Vision-camera', level: 60 },
    ],
    achievements: ['Integrated with 500+ partner merchants for rewards redemption', 'Real-time mile tracking and instant notification system', 'Seamless OTA updates with 99.9% deployment success rate'],
    links: {
      github: null,
      demo: null,
      documentation: null,
    },
    color: '#8b5cf6', // Purple theme for ML
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    id: 2,
    title: 'V-Gate',
    category: 'Logistic',
    period: 'Nov 2023 - Oct 2024',
    status: 'Completed',
    type: 'Academic',
    description: 'With the SmartGate application, businesses and agents can conveniently register vehicle information and goods entering and leaving the customs clearance yard in a simple and convenient way; the clock monitors the process of managing goods information in a comprehensive way.',
    longDescription: 'With the SmartGate application, businesses and agents can conveniently register vehicle information and goods entering and leaving the customs clearance yard in a simple and convenient way; the clock monitors the process of managing goods information in a comprehensive way.',
    technologies: ['Expo', 'React hook form', 'React manager file', 'React Query', 'Redux Tooltip', 'Ota hot update'],
    skills: [
      { name: 'Expo', level: 70 },
      { name: 'React hook form', level: 80 },
      { name: 'React manager file', level: 92 },
      { name: 'React Query', level: 92 },
      { name: 'Redux Tooltip', level: 56 },
      { name: 'Ota hot update', level: 68 },
    ],
    achievements: ['Digitized customs clearance process for 200+ daily vehicle entries', 'Real-time cargo tracking and customs status monitoring system', 'Automated document processing reducing clearance time by 60%', 'Seamless OTA updates with 99.9% uptime for critical logistics operations'],
    links: {
      github: null,
      demo: null,
      documentation: null,
    },
    color: '#8b5c', // Purple theme for ML
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    id: 3,
    title: 'Viettel Post',
    category: 'Logistic',
    period: 'Feb 2022 - Nov 2023',
    status: 'Completed',
    type: 'Academic',
    description: "A comprehensive digital logistics platform for port operations management. Features real-time cargo tracking, automated documentation processing, and integrated supply chain visibility for Viettel's maritime logistics operations.",
    longDescription:
      "Viettel Post is an advanced mobile application designed to digitize and streamline port operations for Vietnam's leading telecommunications and logistics conglomerate. The platform provides end-to-end visibility of cargo movements, from vessel arrival notifications to final delivery confirmation. Built with React Native for cross-platform compatibility, the app incorporates sophisticated animations using Reanimated3 for smooth user interactions, real-time push notifications for critical logistics updates, Firebase for cloud-based data synchronization, and Redux-Saga for complex state management of logistics workflows. The application features native modules for hardware integration with port equipment, barcode scanning capabilities, and GPS tracking systems. Key functionalities include container tracking, vessel scheduling, documentation management, customs clearance workflows, and real-time communication between port authorities, shipping lines, and cargo owners.",
    technologies: ['Animation', 'PushNotifi', 'Firebase', 'Redux', 'Redux-Saga', 'Native module'],
    skills: [
      { name: 'Animation', level: 50 },
      { name: 'PushNotifi', level: 30 },
      { name: 'Firebase', level: 70 },
      { name: 'Redux', level: 89 },
      { name: 'Redux-Saga', level: 68 },
      { name: 'Native module', level: 80 },
    ],
    achievements: ['Complete CRUD operations implementation', 'Real-time inventory updates', 'Secure authentication system', 'Responsive design for all devices'],
    links: {
      github: null,
      demo: null,
      documentation: null,
    },
    color: '#10b981', // Green theme for healthcare
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 4,
    title: 'VIPO Mall',
    category: 'E-commerce',
    period: 'Aug 2022 - Jun 2023',
    status: 'In Production',
    type: 'Professional',
    description: 'VIPO Mall is a comprehensive, two-way online wholesale platform, directly connecting Vietnamese customers with international suppliers and vice versa, without intermediaries.',
    longDescription: 'VIPO Mall is a revolutionary B2B wholesale marketplace that eliminates traditional intermediaries by directly connecting Vietnamese businesses with international suppliers globally. The platform features advanced supplier verification, real-time inventory management, secure payment processing, multi-language support, and comprehensive order tracking. Built with React Native for cross-platform compatibility, the app incorporates sophisticated animations for enhanced user experience, push notifications for order updates, Firebase for real-time data synchronization, and Redux-Saga for complex state management. The platform also integrates in-app purchase capabilities for premium seller features and subscription services.',
    technologies: ['ReactNative', 'Animation', 'PushNotifi', 'Firebase', 'Redux', 'Redux-Saga', 'React Native In-App Purchases'],
    skills: [
      { name: 'ReactNative', level: 68 },
      { name: 'Animation', level: 92 },
      { name: 'PushNotifi', level: 30 },
      { name: 'Firebase', level: 50 },
      { name: 'Redux', level: 88 },
      { name: 'Redux-Saga', level: 88 },
      { name: 'React Native In-App Purchases', level: 70 },
    ],
    achievements: ['10,000+ verified international suppliers onboarded', 'Real-time multilingual chat system between buyers and sellers', '95% order fulfillment rate with automated tracking system', 'Integrated secure payment gateway supporting 15+ currencies'],
    links: {
      github: null, // Private/Professional
      demo: null,
      documentation: null,
    },
    color: '#f59e0b', // Amber theme for fintech
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 5,
    title: 'The Coach - English Learning App',
    category: 'Education',
    period: 'Apr 2021 - Jul 2022',
    status: 'In Development',
    type: ' Professional',
    description: 'A specialized English learning application designed to help Vietnamese learners master conversational English through practical phrase patterns. Users can confidently communicate in English within 30 days by mastering 1,500-3,000 essential phrases for real-world situations.',
    longDescription: 'The Coach is a revolutionary English communication tool from Step Up Education that transforms the way Vietnamese learners approach English conversation. Unlike traditional methods, the app focuses on pattern-based learning where users master essential phrase clusters for instant communication. The app features an AI assistant named Onion that provides personalized guidance, real-time conversation practice, and contextual learning reminders. With advanced React Native animations, real-time video calling through Jitsi integration, socket-based live chat features, and comprehensive progress tracking via Firebase, users develop natural English reflexes without grammar anxiety or translation delays. The platform offers structured learning paths from basic 1,500 phrases for daily communication to advanced 3,000 phrases for professional environments.',
    technologies: ['ReactNative', 'Reanimated2', 'PushNotifi', 'Firebase', 'Jitsi', 'Socket', 'Victory Chart', 'Redux-Saga'],
    skills: [
      { name: 'ReactNative', level: 92 },
      { name: 'Reanimated2', level: 92 },
      { name: 'PushNotifi', level: 92 },
      { name: 'Firebase', level: 88 },
      { name: 'Jitsi', level: 80 },
      { name: 'Socket', level: 80 },
      { name: 'Victory Chart', level: 92 },
      { name: 'Redux-Saga', level: 92 },
    ],
    achievements: ['AI-powered personalized learning assistant "Onion" integration', 'Real-time video conferencing with Jitsi for live conversation practice', 'Pattern-based learning system with 3,000+ phrase clusters', 'Advanced socket implementation for real-time chat and notifications'],
    links: {
      github: null, // Private/Professional
      demo: null,
      documentation: null,
    },
    color: '#ff00ff', // Amber theme for fintech
    gradient: 'from-amber-500 to-orange-600',
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0]);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Load fonts to match other sections
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'SF Pro Display';
        src: url('${import.meta.env.BASE_URL}fonts/SF-Pro-Display-Medium.otf') format('opentype');
        font-weight: 500;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Status badge component
  const StatusBadge = ({ status, type }) => {
    const getStatusColor = () => {
      switch (status) {
        case 'Completed':
          return 'bg-green-500/20 text-green-400 border-green-500/30';
        case 'In Progress':
          return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
        default:
          return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      }
    };

    const getTypeIcon = () => {
      switch (type) {
        case 'Academic':
          return '🎓';
        case 'Professional':
          return '💼';
        default:
          return '📋';
      }
    };

    return (
      <div className="flex items-center gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor()}`}>{status}</span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
          {getTypeIcon()} {type}
        </span>
      </div>
    );
  };

  // Skill bar component
  const SkillBar = ({ skill }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-white/80 font-medium">{skill.name}</span>
        <span className="text-white/60">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <motion.div className="h-full rounded-full" style={{ backgroundColor: activeProject.color }} initial={{ width: '0%' }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} />
      </div>
    </div>
  );

  // Project navigation item
  const ProjectNavItem = ({ project, isActive, onClick }) => (
    <motion.div className={`cursor-pointer p-4 rounded-lg transition-all duration-300 border ${isActive ? 'bg-white/10 border-white/20 shadow-lg' : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/15'}`} onClick={onClick} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.color }} />
        <h3 className="font-semibold text-white text-sm md:text-base">{project.title}</h3>
      </div>
      <p className="text-white/60 text-xs md:text-sm mb-2">{project.category}</p>
      <p className="text-white/50 text-xs">{project.period}</p>
    </motion.div>
  );

  return (
    <section id="projects" className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden" style={{ fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      {/* Light Rays Background - Positioned behind everything */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="right"
          raysColor="#f0abfc" // Purple color matching your theme
          raysSpeed={1.0} // Slower, more elegant speed
          lightSpread={1.5} // Wide spread for subtle effect
          rayLength={1.8} // Extended length
          pulsating={false} // No pulsating for professional look
          fadeDistance={1.5} // Smooth fade
          saturation={0.8} // Slightly desaturated
          followMouse={true} // Interactive mouse following
          mouseInfluence={0.15} // Subtle mouse influence
          noiseAmount={0.08} // Very light noise for texture
          distortion={0.03} // Minimal distortion
          className="custom-rays" // Low opacity to not overpower content
        />
      </div>

      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="left"
          raysColor="#fb923c" // Purple color matching your theme
          raysSpeed={1.0} // Slower, more elegant speed
          lightSpread={1.5} // Wide spread for subtle effect
          rayLength={1.5} // Extended length
          pulsating={false} // No pulsating for professional look
          fadeDistance={1.5} // Smooth fade
          saturation={0.5} // Slightly desaturated
          followMouse={true} // Interactive mouse following
          mouseInfluence={0.15} // Subtle mouse influence
          noiseAmount={0.08} // Very light noise for texture
          distortion={0.03} // Minimal distortion
          className="custom-rays" // Low opacity to not overpower content
        />
      </div>

      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {/* Gradient continuation from skills section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />

        {/* Enhanced tech grid pattern */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
          }}
        />

        {/* Dynamic color-changing particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full"
          style={{ backgroundColor: activeProject.color }}
          animate={{
            x: [0, 120, -60, 0],
            y: [0, -100, 80, 0],
            opacity: [0, 0.4, 0.2, 0],
            scale: [0.5, 1.2, 0.8, 0.5],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: activeProject.color, opacity: 0.3 }}
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 60, -40, 0],
            opacity: [0, 0.6, 0.1, 0],
            scale: [0.3, 1, 0.6, 0.3],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full"
          style={{ backgroundColor: '#10b981', opacity: 0.25 }}
          animate={{
            x: [0, 80, -120, 0],
            y: [0, -70, 40, 0],
            opacity: [0, 0.5, 0.15, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut', delay: 15 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Featured{' '}
            <motion.span
              className="bg-gradient-to-r from-purple-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              style={{
                backgroundSize: '200% 100%',
              }}>
              Projects
            </motion.span>
          </h2>
          <p className="text-center text-white/60 mt-4 max-w-2xl mx-auto">A showcase of my development journey from academic projects to professional implementations</p>
        </motion.div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto">
          {isMobile ? (
            // Mobile: Stacked Layout
            <div className="space-y-8">
              {/* Mobile Project Selector */}
              <div className="space-y-4">
                {projectsData.map(project => (
                  <ProjectNavItem key={project.id} project={project} isActive={activeProject.id === project.id} onClick={() => setActiveProject(project)} />
                ))}
              </div>

              {/* Mobile Project Details */}
              <AnimatePresence mode="wait">
                <motion.div key={activeProject.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: activeProject.color }} />
                      <h3 className="text-2xl font-bold text-white">{activeProject.title}</h3>
                    </div>
                    <StatusBadge status={activeProject.status} type={activeProject.type} />
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6">{activeProject.longDescription}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white/90 font-semibold mb-3 flex items-center gap-2">
                      <FiCode className="text-lg" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                      <FiTrendingUp className="text-lg" />
                      Skills Developed
                    </h4>
                    {activeProject.skills.map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white/90 font-semibold mb-3 flex items-center gap-2">
                      <FiActivity className="text-lg" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-white/80">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: activeProject.color }} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {activeProject.links.github && (
                      <a href={activeProject.links.github} className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 text-white/80 hover:text-white border border-white/20">
                        <FiGithub />
                        <span>Source Code</span>
                      </a>
                    )}
                    {activeProject.links.demo && (
                      <a
                        href={activeProject.links.demo}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 text-white border-2"
                        style={{
                          backgroundColor: `${activeProject.color}20`,
                          borderColor: activeProject.color,
                          color: activeProject.color,
                        }}>
                        <FiExternalLink />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            // Desktop: Split Screen Layout
            <div className="grid grid-cols-12 gap-8 min-h-[600px]">
              {/* Left Panel - Project Navigation */}
              <div className="col-span-4">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="sticky top-8">
                  <h3 className="text-xl font-semibold text-white/90 mb-6 flex items-center gap-2">
                    <FiLayers />
                    Project Archive
                  </h3>
                  <div className="space-y-4">
                    {projectsData.map(project => (
                      <ProjectNavItem key={project.id} project={project} isActive={activeProject.id === project.id} onClick={() => setActiveProject(project)} />
                    ))}
                  </div>

                  {/* Add New Project Placeholder */}
                  <motion.div className="mt-6 p-4 border-2 border-dashed border-white/20 rounded-lg text-center cursor-pointer hover:border-white/30 transition-colors duration-200" whileHover={{ scale: 1.02 }}>
                    <div className="text-white/50 text-sm">
                      <FiZap className="mx-auto mb-2" />
                      More projects coming soon...
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Panel - Project Details */}
              <div className="col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div key={activeProject.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }} className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm">
                    {/* Project Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: activeProject.color }} />
                        <h3 className="text-3xl font-bold text-white">{activeProject.title}</h3>
                      </div>
                      <StatusBadge status={activeProject.status} type={activeProject.type} />
                      <div className="flex items-center gap-4 text-white/60 text-sm">
                        <div className="flex items-center gap-2">
                          <FiCalendar />
                          {activeProject.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <FiUser />
                          {activeProject.category}
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="mb-8">
                      <p className="text-white/80 leading-relaxed text-lg">{activeProject.longDescription}</p>
                    </div>

                    {/* Two Column Layout for Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        {/* Technologies */}
                        <div>
                          <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                            <FiCode className="text-lg" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {activeProject.technologies.map((tech, index) => (
                              <motion.span key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} className="px-3 py-2 bg-white/10 rounded-lg text-sm text-white/80 border border-white/20 hover:bg-white/20 transition-colors duration-200">
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                            <FiActivity className="text-lg" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {activeProject.achievements.map((achievement, index) => (
                              <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-start gap-3 text-white/80">
                                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: activeProject.color }} />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        {/* Skills Developed */}
                        <div>
                          <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                            <FiTrendingUp className="text-lg" />
                            Skills Developed
                          </h4>
                          <div className="space-y-4">
                            {activeProject.skills.map((skill, index) => (
                              <SkillBar key={index} skill={skill} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex flex-wrap gap-4">
                        {activeProject.links.github && (
                          <motion.a href={activeProject.links.github} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 text-white/80 hover:text-white border border-white/20">
                            <FiGithub />
                            <span>Source Code</span>
                          </motion.a>
                        )}
                        {activeProject.links.demo && (
                          <motion.a
                            href={activeProject.links.demo}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-colors duration-200 text-white border-2"
                            style={{
                              backgroundColor: `${activeProject.color}20`,
                              borderColor: activeProject.color,
                              color: activeProject.color,
                            }}>
                            <FiExternalLink />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                        {activeProject.links.documentation && (
                          <motion.a href={activeProject.links.documentation} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white/60 hover:text-white/80 border border-white/10">
                            <FiShield />
                            <span>Documentation</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
