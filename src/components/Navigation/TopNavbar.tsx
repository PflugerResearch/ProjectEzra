import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../System/AuthContext';

export type ViewType =
  | 'home'
  | 'dashboard'
  | 'the-repo'
  | 'schedule'
  | 'contacts'
  | 'map'
  | 'pitch'
  | 'portfolio'
  | 'analytics'
  | 'collaborate'
  | 'project-rb02'
  | 'project-rb05'
  | 'project-rb08';

interface SubItem {
  label: string;
  view?: ViewType;
}

interface NavSection {
  id: string;
  label: string;
  view: ViewType;
  subItems: (string | SubItem)[];
}

interface TopNavbarProps {
  onNavigate: (view: ViewType) => void;
  onLogoClick: () => void;
}

const NAV_SECTIONS: NavSection[] = [
  {
    id: 'campus',
    label: 'campus',
    view: 'map',
    subItems: ['austin', 'san antonio', 'dallas', 'houston', 'corpus christi']
  },
  {
    id: 'work',
    label: 'work',
    view: 'portfolio',
    subItems: ['2025', '2026']
  },
  {
    id: 'pitch',
    label: 'pitch',
    view: 'pitch',
    subItems: ['Lets GO!']
  },
  {
    id: 'explore',
    label: 'explore',
    view: 'project-rb02',
    subItems: [
      'Mass Timber',
      'Immersive Learning',
      'Post Occ',
      'Tech',
      'Artificial Intelligence',
      'Region Intelligence',
      'ArchVis'
    ]
  },
  {
    id: 'connect',
    label: 'connect',
    view: 'collaborate',
    subItems: ['research', 'work', 'confidential']
  }
];

const DASHBOARD_SECTION: NavSection = {
  id: 'dashboard',
  label: 'dashboard',
  view: 'dashboard',
  subItems: [
    { label: 'The Repo', view: 'the-repo' },
    'My Projects',
    { label: 'Schedule', view: 'schedule' },
    { label: 'Contacts', view: 'contacts' }
  ]
};

export function TopNavbar({ onNavigate, onLogoClick }: TopNavbarProps) {
  const { login, logout, isAuthenticated } = useAuth();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login('apps@pflugerarchitects.com', '123456');
    }
  };

  const visibleSections = isAuthenticated
    ? [...NAV_SECTIONS.slice(0, 2), DASHBOARD_SECTION, ...NAV_SECTIONS.slice(2)]
    : NAV_SECTIONS.filter(s => s.id !== 'pitch');

  const isExpanded = hoveredId !== null;
  const activeSection = visibleSections.find(s => s.id === hoveredId);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Nav container */}
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-card"
        onMouseLeave={() => setHoveredId(null)}
      >
        {/* Main nav row */}
        <div className="px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={onLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0"
          >
            <svg
              viewBox="0 0 136 125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-auto"
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
            <span className="text-xl font-bold text-white tracking-wide">The Repo</span>
          </button>

          {/* Nav items - centered */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
            {visibleSections.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.view)}
                onMouseEnter={() => setHoveredId(section.id)}
                className={`text-sm transition-colors py-2 ${
                  hoveredId === section.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Auth button */}
          <button
            onClick={handleAuthClick}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            {isAuthenticated ? <LogOut className="w-5 h-5" /> : <LogIn className="w-5 h-5" />}
          </button>
        </div>

        {/* Mega menu dropdown */}
        <AnimatePresence>
          {isExpanded && activeSection && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-card"
            >
              <div className="px-12 py-8">
                {/* Section title */}
                <p className="text-xs text-gray-500 mb-4 tracking-wide">
                  {activeSection.label}
                </p>

                {/* Big bold items */}
                <div className="flex flex-col gap-1">
                  {activeSection.subItems.map((item, i) => {
                    const isSubItem = typeof item === 'object';
                    const label = isSubItem ? item.label : item;
                    const targetView = isSubItem && item.view ? item.view : activeSection.view;

                    return (
                      <motion.button
                        key={label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                        onClick={() => onNavigate(targetView)}
                        className="text-2xl font-bold text-white hover:text-gray-300 transition-colors text-left py-1"
                      >
                        {label}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
