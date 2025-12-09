import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import {
  EnergyComparisonChart,
  LightingPerformanceChart,
  TimelineChart,
  ClimateWindRose,
  FindingsSummary,
} from '../../components/projects/modulizer';
import {
  projectInfo,
  timeline,
  options,
  climateData,
  lightingData,
  energyData,
  keyFindings,
  precedentStrategies,
} from '../../data/projects/modulizerData';

interface ModulizerDashboardProps {
  onBack?: () => void;
}

const tabs = [
  { id: 'summary', label: 'Key Findings', icon: '🏆' },
  { id: 'energy', label: 'Energy', icon: '⚡' },
  { id: 'lighting', label: 'Lighting', icon: '💡' },
  { id: 'climate', label: 'Climate', icon: '🌡️' },
  { id: 'timeline', label: 'Timeline', icon: '📅' },
];

export default function ModulizerDashboard({ onBack }: ModulizerDashboardProps) {
  const [activeTab, setActiveTab] = useState('summary');

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
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">☀️</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-gray-900">
                      {projectInfo.name}
                    </h1>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                      {projectInfo.code}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{projectInfo.subtitle} — {projectInfo.context}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-emerald-600">Option 2</div>
                <div className="text-gray-500 text-xs">Recommended</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{projectInfo.totalHours} hrs</div>
                <div className="text-gray-500 text-xs">Research Allocation</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <nav className="flex gap-1 mt-4 -mb-px overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-3 text-sm font-medium rounded-t-xl transition-colors flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-amber-600 bg-white border-t border-x border-gray-200/50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50/50'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="modulizerActiveTab"
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
            {activeTab === 'summary' && (
              <section className="space-y-6">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200/50 p-8">
                  <FindingsSummary
                    keyFindings={keyFindings}
                    precedentStrategies={precedentStrategies}
                    options={options}
                  />
                </div>
              </section>
            )}

            {activeTab === 'energy' && (
              <section className="space-y-6">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200/50 p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Energy Performance Comparison
                    </h2>
                    <p className="text-gray-500">
                      EUI by end use (kBtu/sf-year) with delta from average
                    </p>
                  </div>
                  <EnergyComparisonChart
                    energyData={energyData}
                    options={options}
                  />
                </div>
              </section>
            )}

            {activeTab === 'lighting' && (
              <section className="space-y-6">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200/50 p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Daylighting Performance
                    </h2>
                    <p className="text-gray-500">
                      LEED v4 BD+C Schools compliance analysis
                    </p>
                  </div>
                  <LightingPerformanceChart
                    lightingData={lightingData}
                    options={options}
                  />
                </div>
              </section>
            )}

            {activeTab === 'climate' && (
              <section className="space-y-6">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200/50 p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Climate Analysis
                    </h2>
                    <p className="text-gray-500">
                      Corpus Christi, TX (Climate Zone 2A) — Heating/Cooling loads and wind patterns
                    </p>
                  </div>
                  <ClimateWindRose climateData={climateData} />
                </div>
              </section>
            )}

            {activeTab === 'timeline' && (
              <section className="space-y-6">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200/50 p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Research Timeline
                    </h2>
                    <p className="text-gray-500">
                      {projectInfo.researchType} — {projectInfo.totalHours} hours allocated
                    </p>
                  </div>
                  <TimelineChart
                    timeline={timeline}
                    totalHours={projectInfo.totalHours}
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
