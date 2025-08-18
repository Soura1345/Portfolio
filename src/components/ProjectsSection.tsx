import { motion } from 'framer-motion'
import { FloatingCard } from './FloatingCard'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Star, GitFork } from 'lucide-react'
import { useState, useEffect } from 'react'

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage?: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
}

const featuredProjects = [
  {
    title: "3D Portfolio Website",
    description: "Interactive 3D portfolio built with React Three Fiber featuring cosmic themes and smooth animations.",
    technologies: ["React", "Three.js", "Framer Motion", "TypeScript"],
    github: "https://github.com/Soura1345/portfolio",
    demo: "https://sourashispal.dev",
    image: "/api/placeholder/400/300"
  },
  {
    title: "AI Data Analytics Dashboard",
    description: "Real-time data visualization dashboard with machine learning insights and predictive analytics.",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    github: "https://github.com/Soura1345/ai-dashboard",
    demo: "https://ai-dashboard-demo.com",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Open Source CLI Tool",
    description: "Command-line utility for developers to streamline workflow and automate repetitive tasks.",
    technologies: ["Node.js", "TypeScript", "Commander.js", "Chalk"],
    github: "https://github.com/Soura1345/dev-cli",
    demo: "https://npmjs.com/package/dev-cli-tool",
    image: "/api/placeholder/400/300"
  }
]

export function ProjectsSection() {
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Soura1345/repos?sort=updated&per_page=6')
        const repos = await response.json()
        setGithubRepos(repos.filter((repo: GitHubRepo) => !repo.name.includes('Soura1345')))
      } catch (error) {
        console.error('Error fetching GitHub repos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGithubRepos()
  }, [])

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-transparent text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I've built to solve real-world problems and explore new technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FloatingCard delay={index * 0.1} className="h-full">
                  <div className="space-y-4">
                    { <div className="aspect-video bg-gradient-card rounded-lg flex items-center justify-center">
                      <div className="text-4xl opacity-20">🚀</div>
                    </div> }
                    
                    <div>
                      <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full glass"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="glass border-2 flex-1"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="gradient-cosmic text-white border-0 flex-1"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </FloatingCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Repository Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Recent GitHub Activity</h3>
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="glass rounded-lg p-6 animate-pulse">
                  <div className="h-4 bg-muted rounded mb-4"></div>
                  <div className="h-3 bg-muted rounded mb-2"></div>
                  <div className="h-3 bg-muted rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FloatingCard delay={index * 0.1} className="h-full">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h4 className="text-lg font-semibold truncate flex-1">
                          {repo.name}
                        </h4>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Star size={12} className="mr-1" />
                            {repo.stargazers_count}
                          </div>
                          <div className="flex items-center">
                            <GitFork size={12} className="mr-1" />
                            {repo.forks_count}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {repo.description || "No description available"}
                      </p>

                      {repo.language && (
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                          <span className="text-xs text-muted-foreground">{repo.language}</span>
                        </div>
                      )}

                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-1 text-xs rounded-full glass"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}

                      <Button
                        size="sm"
                        variant="outline"
                        className="glass border-2 w-full"
                        asChild
                      >
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Repository
                        </a>
                      </Button>
                    </div>
                  </FloatingCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}