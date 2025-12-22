import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';
import { NavigationSection } from '../components/Navigation/NavigationSection';

interface HomeProps {
  onNavigate: (sectionId: string) => void;
  onLoginClick?: () => void;
}

// Navigation sections data
const NAVIGATION_SECTIONS = [
  {
    id: 'campus',
    label: 'campus',
    subItems: ['austin', 'san antonio', 'dallas', 'houston', 'corpus cristi']
  },
  {
    id: 'work',
    label: 'work',
    subItems: ['2025', '2026']
  },
  {
    id: 'pitch',
    label: 'pitch',
    subItems: ['Lets GO!']
  },
  {
    id: 'explore',
    label: 'explore',
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
    subItems: ['research', 'work', 'confidential']
  }
];

export default function Home({ onNavigate, onLoginClick }: HomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col bg-dark-bg"
    >
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full px-12 py-8 flex items-center justify-between"
      >
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          {/* The Repo Logo SVG */}
          <svg
            width="68"
            height="62"
            viewBox="0 0 136 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-auto"
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

          {/* Title */}
          <h1 className="text-5xl font-bold text-white tracking-wider">
            The Repo
          </h1>
        </div>

        {/* Login Icon */}
        <button
          onClick={onLoginClick}
          className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
          aria-label="Login"
        >
          <LogIn className="w-6 h-6" />
        </button>
      </motion.header>

      {/* Navigation Sections - Centered */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex-1 flex items-start justify-center px-12 pt-[20vh]"
      >
        <div className="grid grid-cols-5 gap-16 w-[80%] items-start">
          {NAVIGATION_SECTIONS.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
            >
              <NavigationSection
                id={section.id}
                label={section.label}
                subItems={section.subItems}
                onClick={onNavigate}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-full px-12 py-8"
      >
        <p className="text-sm font-light text-white tracking-widest">
          pfluger research
        </p>
      </motion.footer>
    </motion.div>
  );
}
