import { motion } from 'framer-motion';

// Images with labels - representing research, innovation, architecture, collaboration
const IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
    alt: 'Modern workspace collaboration',
    label: 'mass timber'
  },
  {
    url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80',
    alt: 'Innovation and research',
    label: 'simulation'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
    alt: 'Modern architecture',
    label: 'immersive learning'
  },
  {
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80',
    alt: 'Creative workspace',
    label: 'campus life'
  },
  {
    url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80',
    alt: 'Team collaboration',
    label: 'collaboration'
  }
];

export function ImageCarousel() {
  return (
    <div className="w-full flex flex-col gap-5 pb-12">
      {IMAGES.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative w-full h-[60vh] overflow-hidden"
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          {/* Bold label in bottom left */}
          <div className="absolute bottom-4 left-4">
            <h3 className="text-8xl font-bold text-white drop-shadow-lg">
              {image.label}
            </h3>
          </div>

          {/* Learn more button in bottom right */}
          <div className="absolute bottom-4 right-4">
            <button className="px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300">
              explore
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
