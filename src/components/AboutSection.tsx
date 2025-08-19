import { motion } from 'framer-motion'
import { FloatingCard } from './FloatingCard'
import { Code, Database, Brain, Zap } from 'lucide-react'

const skills = [
  {
    category: 'Frontend',
    icon: Code,
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js'],
    color: 'text-cosmic-blue'
  },
  {
    category: 'Backend',
    icon: Database,
    technologies: ['Node.js', 'Python', 'Django', 'MongoDB', 'Anaconda'],
    color: 'text-cosmic-purple'
  },
  {
    category: 'AI/ML',
    icon: Brain,
    technologies: ['TensorFlow', 'PyTorch', 'Numpy', 'Pandas'],
    color: 'text-cosmic-pink'
  },
  {
    category: 'Tools',
    icon: Zap,
    technologies: ['Git', 'GitHub', 'AWS', 'VS_Code', 'Canva'],
    color: 'text-cosmic-cyan'
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-transparent text-primary ">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Data Scientist and aso have interest in Web Development with a love for creating innovative solutions. 
            My journey in tech spans across web development, data science, and AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FloatingCard delay={index * 0.1} className="h-full">
                <div className="text-center space-y-4">
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className={`mx-auto w-16 h-16 rounded-full glass flex items-center justify-center ${skill.color}`}
                  >
                    <skill.icon size={32} />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                  
                  <div className="flex flex-wrap justify-center gap-3">
                    {skill.technologies.map((tech, techIndex) =>
                      tech === 'React' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/React.png"
                        alt="React"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'TypeScript' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/TypeScript.png"
                        alt="TypeScript"
                        className="h-9 w-auto mx-auto"
                      />
                      ) : tech === 'Next.js' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/NextJS.png"
                        alt="Next.js"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'Tailwind CSS' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/TailwindCSS.png"
                        alt="Tailwind CSS"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'Three.js' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/ThreeJS.png"
                        alt="Three.js"
                        className="h-12 w-auto mx-auto"
                      />
                      ) : tech === 'Node.js' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/NodeJS.png"
                        alt="Node.js"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'Python' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/Python.png"
                        alt="Python"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'Django' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/Django.png"
                        alt="Django"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'MongoDB' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/MongoDB.png"
                        alt="MongoDB"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'Anaconda' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/Anaconda.png"
                        alt="Anaconda"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'TensorFlow' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/TensorFlow.png"
                        alt="TensorFlow"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'PyTorch' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/PyTorch.png"
                        alt="PyTorch"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'Numpy' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/NumPy.png"
                        alt="Numpy"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'Pandas' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/Pandas.png"
                        alt="Pandas"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'Git' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/Git.png"
                        alt="Git"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'GitHub' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/GitHub.png"
                        alt="GitHub"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'AWS' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/AWS.png"
                        alt="AWS"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'VS_Code' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/VSCode.png"
                        alt="VS_Code"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : tech === 'Canva' ? (
                      <motion.img
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        src="/assets/Canva.png"
                        alt="Canva"
                        className="h-10 w-auto mx-auto"
                      />
                      ) : (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        className="text-sm text-muted-foreground"
                      >
                        {tech}
                      </motion.div>
                      )
                    )}
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FloatingCard className="text-center">
            <h3 className="text-3xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-gradient-cosmic rounded-full mt-1 shadow-glow" />
                <div>
                  <h4 className="font-semibold">Computer Science Student</h4>
                  <p className="text-muted-foreground text-sm">
                    Currently pursuing my degree with focus on AI and Software Development
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-gradient-cosmic rounded-full mt-1 shadow-glow" />
                <div>
                  <h4 className="font-semibold">Data Scientist</h4>
                  <p className="text-muted-foreground text-sm">
                    Active contributor to various open-source projects and communities
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-gradient-cosmic rounded-full mt-1 shadow-glow" />
                <div>
                  <h4 className="font-semibold">Web Developer</h4>
                  <p className="text-muted-foreground text-sm">
                    Building modern web applications with cutting-edge technologies
                  </p>
                </div>
              </div>
            </div>
          </FloatingCard>
        </motion.div>
      </div>
    </section>
  )
}