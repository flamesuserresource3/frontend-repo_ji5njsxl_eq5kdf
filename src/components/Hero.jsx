import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients to boost readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      <div
        className="pointer-events-none absolute -inset-32 opacity-40 [mask-image:radial-gradient(closest-side,white,transparent)]"
        style={{
          background:
            'conic-gradient(from 90deg at 50% 50%, rgba(168,85,247,0.25), rgba(59,130,246,0.25), rgba(168,85,247,0.25))',
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
          <span className="text-xs uppercase tracking-widest text-violet-200">Crafted with modern magic</span>
        </div>

        <h1 className="font-display bg-gradient-to-b from-white to-violet-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Techweb Wizards
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-sm text-slate-200 sm:text-lg">
          We conjure immersive websites, powerful CRMs, and high‑conversion online stores.
          Blending code and creativity to enchant your audience and scale your business.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
          >
            Cast a Project Spell
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            See Our Work
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300/90">
          <span className="inline-flex items-center gap-2"><SparklesIcon /> Fast, scalable, secure</span>
          <span className="inline-flex items-center gap-2"><WandIcon /> Pixel‑perfect craft</span>
          <span className="inline-flex items-center gap-2"><ShieldIcon /> Enterprise‑grade quality</span>
        </div>
      </div>
    </section>
  );
}

function SparklesIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-violet-300"
    >
      <path d="M5 3l1.546 3.454L10 8l-3.454 1.546L5 13l-1.546-3.454L0 8l3.454-1.546L5 3zm12 2l1.03 2.3L20.3 8.33 17.03 9.7 16 12l-1.03-2.3L11.7 8.33l3.27-1.37L16 5zm-3 7l1.546 3.454L17 17l-3.454 1.546L12 22l-1.546-3.454L7 17l3.454-1.546L12 12z" />
    </svg>
  );
}

function WandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-violet-300"
    >
      <path d="M3 21l9-9 3 3-9 9H3zm10.5-9.5l2-2 3 3-2 2-3-3zM18 2l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-violet-300"
    >
      <path d="M12 2l7 3v6c0 5.25-3.438 9.938-7 11-3.562-1.062-7-5.75-7-11V5l7-3z" />
    </svg>
  );
}
