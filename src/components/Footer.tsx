// components/Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="
        w-full
        bg-white/5 dark:bg-black/20
        backdrop-blur-md
        border-t border-white/10
        text-neutral-300
      "
    >
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex flex-col gap-3 items-center justify-between md:flex-row">
          {/* enlaces compactos */}
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <Link to="/types" className="hover:text-white/90">Tipos</Link>
            <span className="opacity-30">•</span>
            <Link to="/species" className="hover:text-white/90">Especies</Link>
            <span className="opacity-30">•</span>
            <Link to="/about" className="hover:text-white/90">Acerca</Link>
            <span className="opacity-30 hidden sm:inline">•</span>
            <Link to="/privacy" className="hover:text-white/90 hidden sm:inline">Privacidad</Link>
            <span className="opacity-30 hidden sm:inline">•</span>
            <Link to="/terms" className="hover:text-white/90 hidden sm:inline">Términos</Link>
          </nav>

          {/* copyright + créditos compactos */}
          <div className="text-xs md:text-sm text-neutral-400">
            © {new Date().getFullYear()} Terrarium Cards · 
            <a href="/credits" className="ml-2 underline decoration-white/20 underline-offset-4 hover:text-white">
              Créditos imágenes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
