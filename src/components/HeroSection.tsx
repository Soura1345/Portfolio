import { motion } from 'framer-motion'
import { FloatingCard } from './FloatingCard'
import { TypingEffect } from './TypingEffect'
import { Button } from '@/components/ui/button'
import { Download, Github, Linkedin, Instagram } from 'lucide-react'

const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/Soura1345', 
    label: 'GitHub',
    color: 'hover:text-cosmic-purple'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/iamsourashis', 
    label: 'LinkedIn',
    color: 'hover:text-cosmic-blue'
  },
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/nobi.07', 
    label: 'Instagram',
    color: 'hover:text-cosmic-pink'
  },
]

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <FloatingCard delay={0.8} className="max-w-sm">
            <div className="text-center space-y-4">
              <motion.div
                whileHover={{ scale: 1.1, rotateY: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative mx-auto w-48 h-48 rounded-full overflow-hidden shadow-glow"
              >
                <img
                  src="/lovable-uploads/profile.png"
                  alt="Sourashis Pal Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-cosmic opacity-20 mix-blend-overlay" />
              </motion.div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Sourashis Pal</h3>
                <div className="flex justify-center space-x-4 pt-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotateZ: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 rounded-full glass transition-colors ${social.color}`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </FloatingCard>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8 text-center md:text-left"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Hi, I'm{' '}
              <span className="bg-transparent text-primary font-extrabold">
                Sourashis Pal
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-3xl font-semibold text-muted-foreground"
            >
              I'm {' '}
              <TypingEffect
                words={['a Data Scientist', 'an Innovator', 'a Problem Solver']}
                className="text-primary font-bold"
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              A passionate developer who loves building impactful projects in Data Science, 
              Web Development, AI, and open-source. Always try to learn something unique.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button
              size="lg"
              className="gradient-cosmic text-white border-0 hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass border-2 hover:shadow-glow transition-all duration-300"
              asChild
            >
                <a href="/lovable-uploads/Resume.pdf" download="Sourashis_Resume.pdf" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}