import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, Award, Briefcase, GraduationCap, Code, ChevronDown, Globe } from 'lucide-react';
import Profile from "./assets/image.png"

const translations = {
  de: {
    nav: {
      about: 'Über mich',
      experience: 'Erfahrung',
      education: 'Bildung',
      projects: 'Projekte',
      achievements: 'Erfolge',
      contact: 'Kontakt'
    },
    hero: {
      greeting: 'Hallo, ich bin',
      title: 'Shubha Mahesh',
      subtitle: 'Engagierte Masterstudentin in IoT und Smart Systems an der Westsächsischen Hochschule Zwickau mit praktischer Erfahrung in UI/UX-Design, Mobile-App-Entwicklung und digitalem Prototyping. Kompetent in der Erstellung benutzerzentrierter Designs mit Figma und Balsamiq, Mentoring von Studenten und Unterstützung von Softwareprojekten.',
      cta: 'Kontaktieren Sie mich'
    },
    about: {
      title: 'Wer bin ich?',
      content: 'Hallo, ich bin Shubha — eine Entwicklerin, Designerin und Problemlöserin, die gerne an der Schnittstelle von Technologie und Benutzererfahrung arbeitet. Meine Reise begann mit der Neugier, wie Apps gebaut werden, nicht nur wie sie aussehen. Im Laufe der Zeit habe ich Fähigkeiten in UI/UX-Design, Android-Entwicklung, Prototyping und Workflow-Automatisierung entwickelt, zusammen mit dem Mentoring von Studenten und der Zusammenarbeit an forschungsorientierten akademischen Projekten. Ich bin begeistert von Projekten, die Kreativität und Engineering verbinden, besonders wenn sie einen realen Einfluss haben oder jemandem helfen, etwas Neues zu lernen. Ich glaube, dass Technologie am mächtigsten ist, wenn sie einfach, zugänglich und benutzerfreundlich ist.',
      button: 'Mehr über mich'
    },
    experience: {
      title: 'Berufserfahrung',
      description: 'Ich entwerfe und implementiere innovative Lösungen zur Optimierung von Arbeitsabläufen und zur Unterstützung der Entscheidungsfindung. Vom Aufbau von Text-zu-SQL-Systemen für nahtlose Datenbankabfragen bis zur Automatisierung der CAD-Dimensionserkennung mit maschinellem Lernen, spezialisiere ich mich auf die Entwicklung datengetriebener Produkte, die die Produktivität steigern und Kosten für Unternehmen senken.',
      download: 'Lebenslauf herunterladen',
      jobs: [
        {
          title: 'Studentische Hilfskraft',
          company: 'Westsächsische Hochschule Zwickau',
          duration: '06/2025 - Heute'
        },
        {
          title: 'Technische Beraterin',
          company: 'Hewlett Packard Enterprise',
          duration: '11/2022 - 09/2024'
        },
        {
          title: 'Associate Software Engineer Trainee',
          company: 'Sysfore Technologies Private Limited',
          duration: '06/2022 - 09/2022'
        }
      ]
    },
    education: {
      title: 'Bildung',
      items: [
        {
          university: 'Westsächsische Hochschule Zwickau',
          year: '2024 - Heute',
          degree: 'Master in Internet der Dinge und Smart Systems'
        },
        {
          university: 'Visvesvaraya Technological University',
          year: '2018 - 2022',
          degree: 'Bachelor in Informatik'
        }
      ]
    },
    projects: {
      title: 'Projekte',
      items: [
        {
          title: 'Schumann Citywalk',
          description: 'Eine Android-App zur Erkundung bemerkenswerter Sehenswürdigkeiten rund um Schumann, Musik und Architektur in Zwickau.',
          button: 'GitHub Repository'
        },
        {
          title: 'Lebensmittelklassifizierung und -empfehlung',
          description: 'Viele Forscher haben kürzlich über Lebensmittelklassifizierung und -empfehlung separat veröffentlicht, aber die Kombination von Lebensmittelklassifizierung und -empfehlung mit Deep Learning ist selten. Der CNN-Algorithmus wird in dieser Arbeit vorgestellt, weil er eine höhere Genauigkeit als andere Algorithmen aufweist. Dieses Papier klassifiziert indische Lebensmittelbilder mit einer durchschnittlichen Genauigkeit von 86,33 Prozent.',
          button: 'Website'
        }
      ]
    },
    achievements: {
      title: 'Freiwilligenarbeit, Auszeichnungen und Mitgliedschaften',
      items: [
        {
          title: 'Studentenvertreterin, WHZ',
          year: '2025',
          description: 'Als Studentenvertreterin an der WHZ gewählt, aktiv zur Studentenwohlfahrt, akademischen Koordination und Hochschul-Studenten-Kommunikation beitragend.'
        },
        {
          title: 'Website-Managerin & Event-Koordinatorin, Pint of Science',
          year: '2024',
          description: 'Verwaltung von Website-Inhalten und Aktualisierungen für die Pint of Science Deutschland-Veranstaltung, Koordination von Logistik, Zeitplanung und Kommunikation.'
        },
        {
          title: '1. Platz - 24-Stunden-Innovations-Hackathon',
          year: '2024',
          description: 'Ersten Platz in einem 24-Stunden-Hackathon erreicht, der sich auf den Aufbau innovativer, realer Problemlösungen konzentrierte.'
        },
        {
          title: 'Vorbildliche Leistung, HPE',
          year: '2023',
          description: 'Als vorbildliche Mitarbeiterin in Anerkennung herausragender Arbeitsqualität, Zuverlässigkeit und Beitrag zur Teamleistung ausgezeichnet.'
        }
      ]
    },
    contact: {
      title: 'Kontaktieren Sie Shubha',
      phone: 'Telefonnummer',
      email: 'E-Mail',
      location: 'Standort',
      locationValue: 'Chemnitz, Deutschland',
      button: 'Nachricht senden'
    }
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      achievements: 'Achievements',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      title: 'Shubha Mahesh',
      subtitle: 'Driven master\'s student in IoT and Smart Systems at West Saxon University of Applied Sciences Zwickau with hands-on experience in UI/UX design, Mobile App development, and digital prototyping. Skilled in creating user-centered designs using Figma and Balsamiq, mentoring students, and supporting software projects.',
      cta: 'Contact Me'
    },
    about: {
      title: 'Who am I?',
      content: 'Hi, I\'m Shubha — a developer, designer, and problem solver who enjoys working at the intersection of technology and user experience. My journey began with a curiosity for how apps are built, not just how they look. Over time, I have developed skills in UI/UX design, Android development, prototyping, and workflow automation, along with mentoring students and collaborating on research-driven academic projects. I am energized by projects that blend creativity + engineering, especially when they have real-world impact or help someone learn something new. I believe technology is most powerful when it is simple, accessible, and easy to use.',
      button: 'More About Me'
    },
    experience: {
      title: 'Professional Experience',
      description: 'Dynamic and user-centric software professional with expertise in mobile app development, UI/UX design, and workflow automation. Experienced in mentoring large student groups, leading design-to-development, and delivering functional prototypes within academic settings. At Hewlett-Packard Enterprise, contributed to Android app development, CRM customization, process automation, while also serving as Scrum Master for multiple Agile teams. Strong background in front-end engineering, data analysis, and ML-powered insights from work at Sysfore Technologies. Known for improving system performance, reducing manual workloads, and creating smooth user experiences across both web and mobile applications.',
      download: 'Download Resume',
      jobs: [
        {
          title: 'Student Assistant ',
          company: 'West Saxon University of Applied Sciences Zwickau',
          duration: '06/2025 - Present'
        },
        {
          title: 'Technical Consultant',
          company: 'Hewlett Packard Enterprise',
          duration: '11/2022 - 09/2024'
        },
        {
          title: 'Associate Software Engineer Trainee',
          company: 'Sysfore Technologies Private Limited',
          duration: '06/2022 - 09/2022'
        }
      ]
    },
    education: {
      title: 'Education',
      items: [
        {
          university: 'West Saxon University of Applied Sciences Zwickau',
          year: '2024 - Present',
          degree: 'Master of Internet of Things and Smart Systems'
        },
        {
          university: 'Visvesvaraya Technological University',
          year: '2018 - 2022',
          degree: 'Bachelor of Computer Science Engineering'
        }
      ]
    },
    projects: {
      title: 'Projects',
      items: [
        {
          title: 'Schumann Citywalk',
          description: 'An Android app to explore notable sights related to Schumann, music, and architecture in Zwickau.',
          button: 'GitHub Repository'
        },
        {
          title: 'Food Classification and Recommendation',
          description: 'Many researchers have been published recently on food classification and recommendation separately, but combination of food classification and recommendation using deep learning is rare. The CNN algorithm is presented in this work because it has higher accuracy than other algorithms. This paper classifies Indian food images with an average accuracy of 86.33 percent.',
          button: 'Website'
        }
      ]
    },
    achievements: {
      title: 'Volunteer Work, Awards and Membership',
      items: [
        {
          title: 'Student Representative, WHZ',
          year: '2025',
          description: 'Elected as Student Representative at WHZ, actively contributing to student welfare, academic coordination, and university–student communication.'
        },
        {
          title: 'Website Manager & Event Coordinator, Pint of Science',
          year: '2024',
          description: 'Managed website content and updates for the Pint of Science Germany event, coordinating logistics, scheduling, and communication.'
        },
        {
          title: '1st Place Winner - 24-Hour Innovation Hackathon',
          year: '2024',
          description: 'Achieved first place in a 24-hour hackathon focused on building innovative, real-world problem-solving solutions.'
        },
        {
          title: 'Exemplary Performer, HPE',
          year: '2023',
          description: 'Awarded Exemplary Performer in recognition of outstanding work quality, reliability, and contribution to team performance.'
        }
      ]
    },
    contact: {
      title: 'Contact Shubha',
      phone: 'Phone Number',
      email: 'Email',
      location: 'Location',
      locationValue: 'Chemnitz, Germany',
      button: 'Send Message'
    }
  }
};

export default function Portfolio() {
  const [language, setLanguage] = useState('de');
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();
  const t = translations[language];

  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Fixed Header */}
      <motion.header
        style={{ opacity: headerOpacity, backgroundColor: headerBackground }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-900"
            >
              SM
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value], index) => (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => scrollToSection(key === 'about' ? 'about' : key)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === key ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {value}
                </motion.button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-all duration-300"
            >
              <Globe size={16} />
              {language === 'de' ? 'EN' : 'DE'}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.p
                variants={itemVariants}
                className="text-blue-600 font-medium mb-4"
              >
                {t.hero.greeting}
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
              >
                {t.hero.title}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex gap-4"
              >
                <a
                  href="mailto:shubhabm8@gmail.com"
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  {t.hero.cta}
                </a>
                <a
                  href="https://www.linkedin.com/in/shubha-mahesh-615045216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  LinkedIn
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex gap-4 mt-8"
              >
                <a
                  href="https://www.linkedin.com/in/shubha-mahesh-615045216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} className="text-gray-700" />
                </a>
                <a
                  href="https://github.com/ShubhaMahesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} className="text-gray-700" />
                </a>
                <a
                  href="mailto:shubhabm8@gmail.com"
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} className="text-gray-700" />
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full max-w-md mx-auto"
              >
             <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
  <div className="w-full h-full p-4 flex items-center justify-center">
    <div className="w-full h-full rounded-2xl overflow-hidden">
      <img 
        src={Profile} 
        alt="Profilbild" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={32} className="text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">{t.about.title}</h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              {t.about.content}
            </motion.p>
            <motion.a
              variants={fadeInUpVariants}
              href="https://www.linkedin.com/in/shubha-mahesh-615045216/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              {t.about.button}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              {t.experience.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-12 leading-relaxed"
            >
              {t.experience.description}
            </motion.p>

            <div className="space-y-8">
              {t.experience.jobs.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Briefcase size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.duration}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex gap-4"
            >
              <a
                href="https://drive.google.com/drive/folders/1PUp4Y4LWM_FjJQYXIlnvUKb-ljYhKi03"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                {t.experience.download}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            >
              {t.education.title}
            </motion.h2>

            <div className="space-y-8">
              {t.education.items.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <GraduationCap size={24} className="text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-purple-600 font-medium mb-2">{edu.university}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            >
              {t.projects.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {t.projects.items.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Code size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <a
                    href={index === 0 ? "https://github.com/ShubhaMahesh/SchumannCitywalk" : "https://drive.google.com/drive/folders/1UJMpLxyGm5_xuH5lllj1EMlMEaoAoCTA"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all duration-300"
                  >
                    {project.button} →
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            >
              {t.achievements.title}
            </motion.h2>

            <div className="space-y-6">
              {t.achievements.items.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-100 rounded-xl">
                      <Award size={24} className="text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
              >
                {t.contact.title}
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t.contact.email}</p>
                    <a
                      href="mailto:shubhabm8@gmail.com"
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      shubhabm8@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <MapPin size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t.contact.location}</p>
                    <p className="text-lg font-medium text-gray-900">{t.contact.locationValue}</p>
                  </div>
                </div>
              </motion.div>

              <motion.a
                variants={itemVariants}
                href="mailto:shubhabm8@gmail.com"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                {t.contact.button}
              </motion.a>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full max-w-md mx-auto"
              >
               <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
  <div className="w-full h-full p-4 flex items-center justify-center">
    <div className="w-full h-full rounded-2xl overflow-hidden">
      <img 
        src={Profile} 
        alt="Profilbild" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-gray-900 mb-2">Shubha Mahesh</p>
              <p className="text-gray-600">
                {language === 'de' 
                  ? 'Entwicklerin, Designerin & Problemlöserin' 
                  : 'Developer, Designer & Problem Solver'}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/shubha-mahesh-615045216/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Linkedin size={20} className="text-gray-700" />
              </a>
              <a
                href="https://github.com/ShubhaMahesh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Github size={20} className="text-gray-700" />
              </a>
              <a
                href="mailto:shubhabm8@gmail.com"
                className="p-3 bg-white hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Mail size={20} className="text-gray-700" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm"
          >
            <p>© 2025 Shubha Mahesh. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}