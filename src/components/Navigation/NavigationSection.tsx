import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationSectionProps {
  id: string;
  label: string;
  subItems: string[];
  onClick: (id: string) => void;
  icon?: React.ElementType;
}

export function NavigationSection({ id, label, subItems, onClick, icon: Icon }: NavigationSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="cursor-pointer group"
      onClick={() => onClick(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon (optional) */}
      {Icon && (
        <div className="flex justify-center mb-4">
          <Icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
        </div>
      )}

      {/* Section Label - CLICKABLE */}
      <h2 className="text-2xl font-light text-white mb-6 tracking-wide">
        {label}
      </h2>

      {/* Sub-items - VISUAL ONLY (not clickable) - Show on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3 pl-6 overflow-hidden"
          >
            {subItems.map((item) => (
              <p
                key={item}
                className="text-sm font-light text-gray-500 tracking-wide transition-all duration-300 hover:text-[#FF8A8A] hover:font-bold cursor-default"
              >
                {item}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
