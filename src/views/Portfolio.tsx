import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useProjects } from '../context/ProjectsContext';

const PROJECTS_WITH_DASHBOARDS = ['X25-RB02', 'X25-RB05', 'X25-RB08'];

interface PortfolioProps {
  onOpenProjectDashboard?: (projectId: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onOpenProjectDashboard }) => {
  const { projects, loading } = useProjects();
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterPhase, setFilterPhase] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'immersive', label: 'Immersive Learning' },
    { id: 'health-safety', label: 'Health & Safety' },
    { id: 'psychology', label: 'Psychology' },
    { id: 'fine-arts', label: 'Fine Arts' },
    { id: 'campus-life', label: 'Campus Life' },
  ];

  const phases = [
    { id: 'all', label: 'All Phases' },
    { id: 'Completed', label: 'Completed' },
    { id: 'Developmental', label: 'In Progress' },
    { id: 'Pre-Research', label: 'Pre-Research' },
  ];

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesPhase = filterPhase === 'all' || p.phase === filterPhase;
      const matchesCategory = filterCategory === 'all' || p.category === filterCategory;
      return matchesPhase && matchesCategory;
    });
  }, [projects, filterPhase, filterCategory]);

  // Group projects by year
  const projectsByYear = useMemo(() => {
    const grouped: { [year: string]: typeof projects } = {};

    filteredProjects.forEach(project => {
      const year = project.startDate
        ? new Date(project.startDate).getFullYear().toString()
        : 'Upcoming';

      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(project);
    });

    // Sort years descending (newest first), with 'Upcoming' at the end
    const sortedYears = Object.keys(grouped).sort((a, b) => {
      if (a === 'Upcoming') return 1;
      if (b === 'Upcoming') return -1;
      return parseInt(b) - parseInt(a);
    });

    return sortedYears.map(year => ({
      year,
      projects: grouped[year]
    }));
  }, [filteredProjects]);

  const handleProjectClick = (project: any) => {
    if (PROJECTS_WITH_DASHBOARDS.includes(project.id) && onOpenProjectDashboard) {
      onOpenProjectDashboard(project.id);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-12 py-8">
      {/* Apple-style filters */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        {/* Phase filters */}
        {phases.map(phase => (
          <button
            key={phase.id}
            onClick={() => setFilterPhase(phase.id)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filterPhase === phase.id
                ? 'bg-white text-black'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
          >
            {phase.label}
          </button>
        ))}

        <div className="w-px h-6 bg-gray-700 mx-2" />

        {/* Category filters */}
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilterCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filterCategory === cat.id
                ? 'bg-white text-black'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects grouped by year */}
      <div className="space-y-16">
        {projectsByYear.map(({ year, projects: yearProjects }) => (
          <section key={year}>
            {/* Year header */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl font-bold text-white mb-8"
            >
              {year}
            </motion.h2>

            {/* Projects grid - 3 wide */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {yearProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Card with background image */}
                  <div className="relative h-72 rounded-2xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {project.title}
                      </h3>

                      {/* Explore button */}
                      <button className="self-start px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors">
                        explore
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Empty state */}
      {projectsByYear.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No projects match your filters</p>
          <button
            onClick={() => {
              setFilterCategory('all');
              setFilterPhase('all');
            }}
            className="mt-4 px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
