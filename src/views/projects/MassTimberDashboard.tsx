import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import {
  DonutChart,
  ScenarioBarChart,
  AlternatesBuilder,
} from '../../components/projects/masstimber';
import {
  projectInfo,
  baseBudget,
  alternates,
  scenarios,
} from '../../data/projects/massTimberData';

interface MassTimberDashboardProps {
  onBack?: () => void;
}

const tabs = [
  { id: 'breakdown', label: 'Budget Breakdown', icon: '🍩' },
  { id: 'scenarios', label: 'Scenarios', icon: '📊' },
  { id: 'builder', label: 'Alternate Builder', icon: '🛠️' },
];

export default function MassTimberDashboard({ onBack }: MassTimberDashboardProps) {
  const [activeTab, setActiveTab] = useState('breakdown');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                {onBack && (
                  <motion.button
                    onClick={onBack}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-2"
                    whileHover={{ x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                  </motion.button>
                )}
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">🪵</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-gray-900">
                      {projectInfo.name}
                    </h1>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {projectInfo.code}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{projectInfo.subtitle}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{projectInfo.contractor}</div>
                <div className="text-gray-500 text-xs">Contractor</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{projectInfo.area.toLocaleString()} SF</div>
                <div className="text-gray-500 text-xs">Project Area</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <nav className="flex gap-1 mt-4 -mb-px overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-3 text-sm font-medium rounded-t-xl transition-colors flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-600 bg-white border-t border-x border-gray-200/50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50/50'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="massTimberActiveTab"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-white"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'breakdown' && (
              <section>
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200/50 p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Base Budget Breakdown
                    </h2>
                    <p className="text-gray-500">
                      Hover over segments to see detailed cost breakdown
                    </p>
                  </div>
                  <DonutChart
                    data={baseBudget.categories}
                    total={baseBudget.total}
                  />
                </div>
              </section>
            )}

            {activeTab === 'scenarios' && (
              <section>
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200/50 p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Budget Scenarios
                    </h2>
                    <p className="text-gray-500">
                      Compare total cost and cost per SF across different alternate combinations
                    </p>
                  </div>
                  <ScenarioBarChart
                    scenarios={scenarios}
                    baseTotal={baseBudget.total}
                  />
                </div>
              </section>
            )}

            {activeTab === 'builder' && (
              <section>
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200/50 p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Interactive Alternate Builder
                    </h2>
                    <p className="text-gray-500">
                      Toggle alternates to see real-time budget impact
                    </p>
                  </div>
                  <AlternatesBuilder
                    alternates={alternates}
                    baseTotal={baseBudget.total}
                    area={projectInfo.area}
                  />
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
