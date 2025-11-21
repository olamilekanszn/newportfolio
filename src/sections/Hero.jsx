
function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-white/5 bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,rgba(2,6,23,0.9)_55%)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[length:24px_24px] opacity-30" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:gap-8 sm:px-6 sm:py-24 md:py-28 lg:py-32">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-primary">A Front-End Developer</span>
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">Hi, I'm <br />Olamilekan Egbeyemi.</h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">Crafting beautiful, responsive web experiences with modern technologies</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href='#projects'
            className="inline-flex w-full items-center justify-center rounded bg-brand-primary px-6 py-3 text-sm font-medium text-slate-900 shadow-glow transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
          >View Projects
          </a>
          <a
            href='#contact'
            className="inline-flex w-full items-center justify-center rounded border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white sm:w-auto"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

