export default function FooterCTA() {
  return (
    <footer id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-64 max-w-3xl rounded-full bg-violet-500/20 blur-3xl" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/20 to-indigo-900/10 p-8">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">Ready to summon your next big idea?</h3>
              <p className="mt-2 max-w-xl text-sm text-slate-300">Tell us about your goals and we’ll craft a roadmap—no obligations, just clarity and a touch of wizardry.</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2"><Wand /> Tailored strategy</span>
                <span className="inline-flex items-center gap-2"><Star /> Transparent pricing</span>
                <span className="inline-flex items-center gap-2"><Shield /> Secure & reliable</span>
              </div>
            </div>
            <div className="flex w-full max-w-md flex-col gap-3">
              <a href="mailto:hello@techwebwizards.com" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-slate-100">
                Email: hello@techwebwizards.com
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
                Book a discovery call
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Techweb Wizards. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#home" className="hover:text-white">Top</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function Wand() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-violet-300">
      <path d="M3 21l9-9 3 3-9 9H3zm10.5-9.5l2-2 3 3-2 2-3-3zM18 2l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
    </svg>
  );
}

function Star() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-violet-300">
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.173L12 18.897l-7.336 3.872 1.402-8.173L.132 9.21l8.2-1.192L12 .587z" />
    </svg>
  );
}

function Shield() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-violet-300">
      <path d="M12 2l7 3v6c0 5.25-3.438 9.938-7 11-3.562-1.062-7-5.75-7-11V5l7-3z" />
    </svg>
  );
}
