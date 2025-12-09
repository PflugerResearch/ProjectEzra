import { useState } from 'react';
import { motion } from 'framer-motion';
import type { LightingData, Option } from '../../../data/projects/modulizerData';

interface LightingPerformanceChartProps {
  lightingData: LightingData;
  options: Option[];
}

export default function LightingPerformanceChart({ lightingData, options }: LightingPerformanceChartProps) {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const target = lightingData.targets.sda.target;
  const maxSDA = Math.max(...lightingData.results.map(r => r.sda), target + 10);

  const getOptionColor = (optionId: number): string => {
    return options.find(o => o.id === optionId)?.color || '#6b7280';
  };

  return (
    <div className="space-y-6">
      {/* SDA Chart */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-semibold text-gray-900">Spatial Daylight Autonomy (SDA)</h4>
            <p className="text-sm text-gray-500">% of floor area receiving ≥300 lux for ≥50% of occupied hours</p>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500">LEED Target:</span>
            <span className="ml-2 font-bold text-emerald-600">≥ 55%</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <div className="space-y-4">
            {lightingData.results.map((result, i) => {
              const percentage = (result.sda / maxSDA) * 100;
              const targetPosition = (target / maxSDA) * 100;
              const color = getOptionColor(result.option);
              const isPassing = result.sda >= target;

              return (
                <motion.div
                  key={result.option}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredBar(result.option)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span className="font-medium text-gray-900">Option {result.option}</span>
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        isPassing
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {isPassing ? 'PASS' : 'FAIL'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">{result.sda}%</span>
                      <span className={`text-sm ${
                        result.sda - target > 0 ? 'text-emerald-600' : 'text-red-500'
                      }`}>
                        ({result.sda - target > 0 ? '+' : ''}{result.sda - target} pts)
                      </span>
                    </div>
                  </div>

                  <div className="h-10 bg-white rounded-xl overflow-hidden relative shadow-sm">
                    {/* Target line */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-emerald-400 z-20"
                      style={{ left: `${targetPosition}%` }}
                    >
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-emerald-600 font-medium whitespace-nowrap">
                        55%
                      </div>
                    </div>

                    <motion.div
                      className="h-full rounded-xl relative overflow-hidden"
                      style={{
                        backgroundColor: isPassing ? color : '#f87171',
                      }}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${percentage}%`,
                        filter: hoveredBar === result.option ? 'brightness(1.1)' : 'brightness(1)',
                      }}
                      transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Observations */}
      <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <h4 className="font-semibold text-amber-900 mb-3">Spatial Distribution Challenges</h4>
            <ul className="space-y-2">
              {lightingData.observations.map((obs, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-sm text-amber-800 flex items-start gap-2"
                >
                  <span className="text-amber-500 mt-1">•</span>
                  {obs}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Winner Callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="p-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-emerald-100 text-sm">Best Lighting Performance</p>
            <p className="text-2xl font-bold">Option 2 — 61% SDA</p>
          </div>
          <div className="text-right">
            <p className="text-emerald-100 text-sm">Exceeds LEED target by</p>
            <p className="text-3xl font-bold">+6 pts</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
