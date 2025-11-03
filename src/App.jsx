import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <SiteNav />
      <Hero />
      <Services />
      <Showcase />
      <FooterCTA />
    </div>
  );
}

function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
          <a href="#home" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-violet-400" />
            <span className="font-semibold tracking-wide">Techweb Wizards</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-200 sm:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="rounded-lg bg-white px-3 py-1.5 font-medium text-black transition hover:bg-slate-100">Start a project</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
