import SectionTitle from '../components/SectionTitle'
import { techSkills } from '../data/content'

function Skills() {
  return (
    <section id="skills" className="border-b border-white/5 bg-slate-950/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 md:gap-12 md:py-20">
        <SectionTitle
          eyebrow="Tech Stacks"
          title="Technical Expertise"
          description="A comprehensive overview of my technical skills and proficiencies."
        />
        <div className="grid grid-cols-3 gap-4">
          {techSkills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-white/20 bg-white/[0.02] transition hover:border-brand-primary/50 hover:bg-white/[0.04] hover:shadow-glow sm:p-6"
            >
              <div className="flex h-8 w-8 items-center justify-center sm:h-16 sm:w-16">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span className="text-center text-xs font-medium text-slate-300 sm:text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

