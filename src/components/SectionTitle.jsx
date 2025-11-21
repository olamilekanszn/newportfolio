function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-2 sm:gap-3 ${alignment}`}>
      {eyebrow && <span className="text-xs uppercase tracking-[0.3em] text-brand-primary">{eyebrow}</span>}
      <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>}
    </div>
  )
}

export default SectionTitle

