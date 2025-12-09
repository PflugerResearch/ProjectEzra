import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ClimateData } from '../../../data/projects/modulizerData';

interface ClimateWindRoseProps {
  climateData: ClimateData;
}

interface Season {
  id: string;
  label: string;
  color: string;
  icon: string;
}

export default function ClimateWindRose({ climateData }: ClimateWindRoseProps) {
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);

  const seasons: Season[] = [
    { id: 'spring', label: 'Spring', color: '#84cc16', icon: '🌱' },
    { id: 'summer', label: 'Summer', color: '#f59e0b', icon: '☀️' },
    { id: 'fall', label: 'Fall', color: '#f97316', icon: '🍂' },
    { id: 'winter', label: 'Winter', color: '#3b82f6', icon: '❄️' },
  ];

  const getDirectionRotation = (direction: string): number => {
    if (direction.includes('SE')) return 135;
    if (direction.includes('N')) return 0;
    if (direction.includes('S')) return 180;
    if (direction.includes('E')) return 90;
    return 0;
  };

  return (
    <div className="space-y-6">
      {/* Climate Summary Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔥</span>
            <span className="font-semibold text-gray-900">Heating Demand</span>
          </div>
          <p className="text-sm text-gray-600">{climateData.summary.heatingDemand}</p>
          <p className="text-xs text-blue-600 mt-2 font-medium">~3% of total energy</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-5 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">❄️</span>
            <span className="font-semibold text-gray-900">Cooling Demand</span>
          </div>
          <p className="text-sm text-gray-600">{climateData.summary.coolingDemand}</p>
          <p className="text-xs text-red-600 mt-2 font-medium">~70% of total energy</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">💨</span>
            <span className="font-semibold text-gray-900">Natural Ventilation</span>
          </div>
          <p className="text-sm text-gray-600">{climateData.summary.naturalVentilation}</p>
          <p className="text-xs text-emerald-600 mt-2 font-medium">Good potential</p>
        </motion.div>
      </div>

      {/* Wind Rose Section */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Seasonal Wind Patterns</h4>

        {/* Season Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {seasons.map((season) => (
            <motion.button
              key={season.id}
              onClick={() => setSelectedSeason(
                selectedSeason === season.id ? null : season.id
              )}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                selectedSeason === season.id
                  ? 'shadow-lg text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
              style={{
                backgroundColor: selectedSeason === season.id ? season.color : undefined,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{season.icon}</span>
              {season.label}
            </motion.button>
          ))}
        </div>

        {/* Wind Data Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {climateData.windRose.map((wind, i) => {
            const season = seasons.find(s =>
              s.label.toLowerCase() === wind.season.toLowerCase()
            );
            const isSelected = selectedSeason === season?.id;
            const isFiltered = selectedSeason !== null && !isSelected;

            return (
              <motion.div
                key={wind.season}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: isFiltered ? 0.3 : 1,
                  scale: isSelected ? 1.02 : 1,
                }}
                transition={{ delay: i * 0.1 }}
                className={`p-4 bg-white rounded-xl border-2 transition-all ${
                  isSelected ? 'shadow-lg' : 'shadow-sm'
                }`}
                style={{
                  borderColor: isSelected ? season?.color : '#e5e7eb',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{season?.icon}</span>
                  <span className="font-semibold text-gray-900">{wind.season}</span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Direction</span>
                    <span className="font-medium text-gray-900">{wind.direction}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Speed</span>
                    <span className="font-medium text-gray-900">{wind.speed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Calm %</span>
                    <span className={`font-medium ${
                      wind.calm < 3 ? 'text-emerald-600' : 'text-amber-600'
                    }`}>
                      {wind.calm}%
                    </span>
                  </div>
                </div>

                {/* Mini compass visual */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="relative w-full h-12">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border-2 border-gray-200 relative">
                        {/* Direction arrow based on primary direction */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 w-0.5 h-4 origin-bottom"
                          style={{
                            backgroundColor: season?.color,
                            transform: `translate(-50%, -100%) rotate(${getDirectionRotation(wind.direction)}deg)`,
                          }}
                          initial={{ height: 0 }}
                          animate={{ height: 16 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        />
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] text-gray-400">N</span>
                        <span className="absolute top-1/2 -right-2 -translate-y-1/2 text-[8px] text-gray-400">E</span>
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[8px] text-gray-400">S</span>
                        <span className="absolute top-1/2 -left-3 -translate-y-1/2 text-[8px] text-gray-400">W</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100"
        >
          <p className="text-sm text-emerald-800">
            <strong>Design Opportunity:</strong> Prevailing SE winds during hot months (Spring, Summer, Winter)
            provide consistent air movement for natural ventilation. Orient operable openings to capture SE breezes
            in fabrication/maker spaces to reduce cooling loads.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
