import { motion } from 'framer-motion';

interface Tool {
  name: string;
  category: string;
  description: string;
  capabilities: string[];
}

interface CustomTool {
  name: string;
  status: 'active' | 'development' | 'planned';
  description: string;
  features: string[];
}

const SOFTWARE: Tool[] = [
  {
    name: 'Custom Development',
    category: 'Intelligence Tools',
    description: 'In-house development of sector and topic intelligence tools, dashboards, and data modeling using modern web technologies.',
    capabilities: ['React', 'Python', 'D3.js', 'Mapbox', 'REST APIs', 'Interactive dashboards', 'Data modeling']
  },
  {
    name: 'Revit',
    category: 'BIM',
    description: 'Building Information Modeling for architectural design and documentation.',
    capabilities: ['3D modeling', 'Construction documentation', 'Clash detection', 'Scheduling']
  },
  {
    name: 'Rhino + Grasshopper',
    category: 'Computational Design',
    description: 'Parametric modeling and algorithmic design workflows.',
    capabilities: ['Parametric geometry', 'Data-driven design', 'Environmental analysis', 'Optimization']
  },
  {
    name: 'Enscape',
    category: 'Visualization',
    description: 'Real-time rendering and virtual reality experiences.',
    capabilities: ['Real-time rendering', 'VR walkthroughs', 'Material libraries', 'Sun studies']
  },
  {
    name: 'ArcGIS',
    category: 'GIS',
    description: 'Geographic information systems for spatial analysis.',
    capabilities: ['Site analysis', 'Demographic mapping', 'Spatial queries', 'Data visualization']
  },
  {
    name: 'Qualtrics',
    category: 'Research',
    description: 'Survey platform for post-occupancy and stakeholder research.',
    capabilities: ['Survey design', 'Data collection', 'Statistical analysis', 'Reporting']
  }
];

const CUSTOM_TOOLS: CustomTool[] = [
  {
    name: 'The Repo',
    status: 'active',
    description: 'This platform. A centralized hub for research project management, visualization, and collaboration.',
    features: ['Project tracking', 'Interactive campus map', 'Research portfolio', 'Team collaboration']
  },
  {
    name: 'Modulizer',
    status: 'active',
    description: 'A Grasshopper-based tool for analyzing and optimizing modular classroom configurations.',
    features: ['Space optimization', 'Cost analysis', 'Configuration comparison', 'Automated reporting']
  },
  {
    name: 'POE Dashboard',
    status: 'development',
    description: 'Post-occupancy evaluation data collection and visualization system.',
    features: ['Survey integration', 'Sensor data collection', 'Trend analysis', 'Benchmark comparison']
  },
  {
    name: 'Region Intel',
    status: 'development',
    description: 'Geographic intelligence tool for demographic and site analysis.',
    features: ['Demographic analysis', 'Growth projections', 'Site scoring', 'District mapping']
  },
  {
    name: 'Material Library',
    status: 'planned',
    description: 'Searchable database of sustainable materials with performance data.',
    features: ['Material specifications', 'Sustainability metrics', 'Cost data', 'Vendor information']
  }
];

const statusColors = {
  active: 'text-green-400',
  development: 'text-yellow-400',
  planned: 'text-gray-500'
};

const statusLabels = {
  active: 'Active',
  development: 'In Development',
  planned: 'Planned'
};

const AboutTools: React.FC = () => {
  return (
    <div className="px-12 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">Our Tools</h1>
        <p className="text-xl text-gray-400 mb-16">
          The software and custom tools we use to conduct research.
        </p>

        {/* Software Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Software</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOFTWARE.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="space-y-3"
              >
                <p className="text-xs text-gray-500 uppercase tracking-wide">{tool.category}</p>
                <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                <p className="text-sm text-gray-400">{tool.description}</p>
                <ul className="space-y-1">
                  {tool.capabilities.map((cap) => (
                    <li key={cap} className="text-sm text-gray-500">{cap}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom Tools Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Custom Tools</h2>
          <div className="space-y-10">
            {CUSTOM_TOOLS.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="max-w-2xl"
              >
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                  <span className={`text-xs uppercase tracking-wide ${statusColors[tool.status]}`}>
                    {statusLabels[tool.status]}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{tool.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tool.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs text-gray-400 border border-gray-700 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default AboutTools;
