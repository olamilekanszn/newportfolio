import SectionTitle from "../components/SectionTitle";
import { aboutContent } from "../data/content";
import { FaLaptopCode, FaUsers, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="border-b border-white/5 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 md:gap-12 md:py-20 md:grid-cols-[3fr_2fr] md:items-center">
        <SectionTitle
          eyebrow="About Me"
          title={aboutContent.title}
          description={aboutContent.paragraphs[0]}
        />
        <div className="space-y-4 text-sm text-slate-300 sm:space-y-6">
          <p className="leading-relaxed">{aboutContent.paragraphs[1]}</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {aboutContent.highlights.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-semibold text-white sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Highlights */}
        <div className="mt-2 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 max-w-3xl mx-auto text-left px-2">
          <div className="border border-white/20 p-4 sm:p-6 rounded-lg shadow hover:shadow-md transition">
            <FaLaptopCode className=" text-brand-primary text-2xl sm:text-3xl mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Code with Purpose
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              I build fast, accessible, and user-friendly applications using
              modern tools like React and TailwindCSS.
            </p>
          </div>

          <div className="border border-white/20 p-4 sm:p-6 rounded-lg shadow hover:shadow-md transition">
            <FaUsers className=" text-brand-primary text-2xl sm:text-3xl mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Team Collaboration
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              I enjoy working with others developers, designers, or product
              managers to turn ideas into interactive solutions.
            </p>
          </div>

          <div className="border border-white/20 p-4 sm:p-6 rounded-lg shadow hover:shadow-md transition">
            <FaLightbulb className=" text-brand-primary text-2xl sm:text-3xl mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Always Learning
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              I believe in lifelong learning and regularly explore new
              tools,frameworks, and best practices to sharpen my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
