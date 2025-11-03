export default function Showcase() {
  const projects = [
    {
      name: 'Enchanted Boutique',
      type: 'E‑commerce',
      result: '3.2x revenue in 90 days',
      glow: 'from-violet-500/40 via-fuchsia-400/30 to-cyan-400/30',
      gradient: 'from-violet-600/30 to-fuchsia-600/20',
    },
    {
      name: 'Wizardly CRM',
      type: 'CRM Platform',
      result: 'Automations cut ops by 52%',
      glow: 'from-indigo-400/40 via-sky-400/30 to-emerald-400/30',
      gradient: 'from-indigo-600/30 to-sky-600/20',
    },
    {
      name: 'Nebula Corp',
      type: 'Corporate Site',
      result: '+118% qualified leads',
      glow: 'from-purple-400/40 via-blue-400/30 to-teal-400/30',
      gradient: 'from-purple-600/30 to-blue-600/20',
    },
    {
      name: 'Arcane Academy',
      type: 'Learning Portal',
      result: 'Time‑to‑launch in 4 weeks',
      glow: 'from-pink-400/40 via-violet-400/30 to-amber-400/30',
      gradient: 'from-pink-600/30 to-violet-600/20',
    },
  ];

  return (
    <section id="work" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest text-violet-200">Showcase</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Selected spells in the wild</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">A glimpse of recent transformations across commerce, platforms, and corporate presence.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-6 transition hover:scale-[1.01]" style={{
              backgroundImage: undefined,
            }}>
              <div className={`absolute -inset-20 bg-gradient-to-r ${p.glow} opacity-30 blur-3xl`} />
              <div className={`relative z-10 rounded-xl bg-gradient-to-br ${p.gradient} p-5`}> 
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{p.type}</span>
                </div>
                <p className="text-sm text-slate-300">{p.result}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-200/90">
                  <Tag>Next.js</Tag>
                  <Tag>Headless CMS</Tag>
                  <Tag>Motion</Tag>
                  <Tag>Analytics</Tag>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">{children}</span>
  );
}
