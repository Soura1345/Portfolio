import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { ContactSection } from '@/components/ContactSection'
import ThreeBackground from '@/components/ThreeBackground'
import { motion } from 'framer-motion'

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      <ThreeBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 py-8 text-center glass backdrop-blur-xl border-t"
      >
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-muted-foreground">
            © 2024 Sourashis Pal. Built with ❤️ using React, Three.js & Framer Motion.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed & Developed with cosmic inspiration ✨
          </p>
        </div>
      </motion.footer>
    </div>
  )
}