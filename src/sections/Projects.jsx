import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/content'

function Projects() {
  return (
    <section id="projects" className="border-b border-white/5 bg-slate-950/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-16 md:gap-12 md:py-20">
        <SectionTitle
          eyebrow="Work"
          title="Selected Projects"
          description="Here are some of my recent projects that showcase my skills in modern web development."
        />
        <div className="grid gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

