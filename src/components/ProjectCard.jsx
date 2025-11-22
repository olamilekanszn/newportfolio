function ProjectCard({ title, description, stack, link, image }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-brand-primary/50 hover:bg-white/[0.04] hover:shadow-glow">
      <div className=" rounded sm:rounded shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1 sm:hover:-translate-y-2 duration-300">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-50 sm:h-48 object-contain"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12 text-slate-500 sm:h-16 sm:w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="mt-2 text-xs text-slate-400">Project Image</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:mt-4">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300 sm:mt-6">
          {stack.map((item) => (
            <li key={item} className="rounded-full border border-white/10 px-2.5 py-1 sm:px-3">
              {item}
            </li>
          ))}
        </ul>
        <a
          href={link}
          className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-brand-primary transition hover:text-white sm:mt-6 sm:text-sm"
        >
          Visit project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L17 7M8 7h9v9" />
          </svg>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard

