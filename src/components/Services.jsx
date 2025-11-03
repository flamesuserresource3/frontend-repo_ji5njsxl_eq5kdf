export default function Services() {
  const services = [
    {
      title: 'Enchanting Websites',
      desc: 'Lightning‑fast, SEO‑ready sites woven with modern frameworks and delightful micro‑interactions.',
      icon: GlobeIcon,
      highlights: ['Performance first', 'SEO & accessibility', 'Custom animations'],
    },
    {
      title: 'Wizardly CRM Systems',
      desc: 'Tailored pipelines, automation spells, and dashboards that reveal the hidden patterns in your data.',
      icon: UsersIcon,
      highlights: ['Workflow automation', 'Sales pipelines', 'Actionable analytics'],
    },
    {
      title: 'Magical Online Stores',
      desc: 'Conversion‑focused storefronts with secure checkout and growth‑ready integrations.',
      icon: ShoppingCartIcon,
      highlights: ['Optimized checkout', 'Subscriptions & bundles', 'Inventory sync'],
    },
  ];

  return (
    <section id="services" className="relative w-full bg-gradient-to-b from-black to-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest text-violet-200">Our Craft</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Spells we cast for your growth</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">From first impression to final conversion, we blend strategy, design, and engineering into results.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                <s.icon />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {s.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <StarIcon />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm7.938 9h-3.11a15.69 15.69 0 00-2.04-6.017A8.007 8.007 0 0119.938 11zM12 4c.89 0 2.31 1.788 3.11 5H8.89C9.69 5.788 11.11 4 12 4zM6.212 7.983A15.69 15.69 0 004.172 11h-3.11a8.007 8.007 0 015.15-6.017zM4.062 13h3.11a15.69 15.69 0 002.04 6.017A8.007 8.007 0 014.062 13zM12 20c-.89 0-2.31-1.788-3.11-5h6.22C14.31 18.212 12.89 20 12 20zm5.788-2.017A15.69 15.69 0 0019.828 13h3.11a8.007 8.007 0 01-5.15 6.017z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M16 11c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4zm-8 0c1.657 0 3-1.79 3-4S9.657 3 8 3 5 4.79 5 7s1.343 4 3 4zm0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-1.05.41-2.04 1.108-2.861C9.997 13.393 7.926 13 8 13zm8 0c-.839 0-1.622.103-2.335.288A5.005 5.005 0 0119 18v2h5v-2c0-2.66-5.33-5-8-5z" />
    </svg>
  );
}

function ShoppingCartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M7 4h-2l-1 2H0v2h2l3.6 7.59-1.35 2.45A2.002 2.002 0 006 21h12v-2H6.42a.25.25 0 01-.22-.37L7.1 16h7.45a2 2 0 001.79-1.11L21 7H7l-.94-2zM7 22a2 2 0 104 0 2 2 0 10-4 0zm8 0a2 2 0 104 0 2 2 0 10-4 0z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-violet-300">
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.173L12 18.897l-7.336 3.872 1.402-8.173L.132 9.21l8.2-1.192L12 .587z" />
    </svg>
  );
}
