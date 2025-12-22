import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';
import type { ViewType } from './NavigationContext';

interface TopNavbarProps {
  activeView: ViewType;
  onNavigate: (view: ViewType) => void;
  onLogoClick: () => void;
  onLoginClick?: () => void;
}

// Sections for navbar
const SECTIONS = [
  { id: 'campus', label: 'campus', view: 'map' as ViewType },
  { id: 'work', label: 'work', view: 'dashboard' as ViewType },
  { id: 'pitch', label: 'pitch', view: 'pitch' as ViewType },
  { id: 'explore', label: 'explore', view: 'portfolio' as ViewType },
  { id: 'connect', label: 'connect', view: 'collaborate' as ViewType }
];

export function TopNavbar({ activeView, onNavigate, onLogoClick, onLoginClick }: TopNavbarProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-dark-card/95 backdrop-blur-lg border-b border-dark-border"
    >
      <div className="h-full px-6 flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Logo - Left */}
        <button
          onClick={onLogoClick}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          {/* The Repo Logo SVG */}
          <svg
            width="48"
            height="44"
            viewBox="0 0 136 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-auto"
          >
            <path
              d="M88.4963 97.5264L61.8321 82.1318C60.2851 81.2386 59.3321 79.588 59.3321 77.8017V25.6603C59.3321 21.8112 63.4988 19.4056 66.8321 21.3301L93.4963 36.7247C95.0434 37.6179 95.9963 39.2685 95.9963 41.0549V93.1963C95.9963 97.0453 91.8297 99.4509 88.4963 97.5264Z"
              fill="#10101A"
              stroke="white"
              strokeWidth="10"
            />
            <path
              d="M70.1642 102.654L43.5 87.2593C41.953 86.3661 41 84.7155 41 82.9292V30.7878C41 26.9388 45.1667 24.5331 48.5 26.4576L75.1642 41.8522C76.7112 42.7454 77.6642 44.396 77.6642 46.1824V98.3238C77.6642 102.173 73.4976 104.578 70.1642 102.654Z"
              fill="#10101A"
              stroke="white"
              strokeWidth="10"
            />
          </svg>

          <span className="text-lg font-bold text-white tracking-wide">The Repo</span>
        </button>

        {/* Sections - Center */}
        <div className="flex items-center gap-8">
          {SECTIONS.map((section) => {
            const isActive = activeView === section.view;

            return (
              <button
                key={section.id}
                onClick={() => onNavigate(section.view)}
                className={`
                  relative font-light text-sm tracking-wide transition-colors duration-300 py-1
                  ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                `}
              >
                {section.label}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-[#00A9E0]"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Login - Right */}
        <button
          onClick={onLoginClick}
          className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
          aria-label="Login"
        >
          <LogIn className="w-5 h-5" />
        </button>
      </div>
    </motion.nav>
  );
}
