import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { EnergyData, Option } from '../../../data/projects/modulizerData';

interface EnergyComparisonChartProps {
  energyData: EnergyData;
  options: Option[];
}

export default function EnergyComparisonChart({ energyData, options }: EnergyComparisonChartProps) {
  const [selectedMetric, setSelectedMetric] = useState('total');
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const metrics = [
    { id: 'heating', label: 'Heating', icon: '🔥' },
    { id: 'cooling', label: 'Cooling', icon: '❄️' },
    { id: 'lighting', label: 'Lighting', icon: '💡' },
    { id: 'electric', label: 'Electric', icon: '⚡' },
    { id: 'total', label: 'Total EUI', icon: '📊' },
  ];

  const getOptionColor = (optionId: number): string => {
    return options.find(o => o.id === optionId)?.color || '#6b7280';
  };

  const maxValue = Math.max(
    ...energyData.options.map(o => {
      const metric = o[selectedMetric];
      return typeof metric === 'object' && 'value' in metric ? metric.value : 0;
    })
  );

  const getWinner = (): number => {
    const sorted = [...energyData.options].sort((a, b) => {
      const aMetric = a[selectedMetric];
      const bMetric = b[selectedMetric];
      const aValue = typeof aMetric === 'object' && 'value' in aMetric ? aMetric.value : 0;
      const bValue = typeof bMetric === 'object' && 'value' in bMetric ? bMetric.value : 0;
      return aValue - bValue;
    });
    return sorted[0].option;
  };

  const winner = getWinner();

  return (
    <div className="space-y-6">
      {/* Metric Selector */}
      <div className="flex flex-wrap gap-2">
        {metrics.map((metric) => {
          const insight = energyData.insights.find(i =>
            i.metric.toLowerCase() === metric.label.toLowerCase() ||
            (metric.id === 'total' && i.metric === 'Total EUI')
          );
          const isWinnerMetric = insight?.winner === 2;

          return (
            <motion.button
              key={metric.id}
              onClick={() => setSelectedMetric(metric.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                selectedMetric === metric.id
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{metric.icon}</span>
              {metric.label}
              {isWinnerMetric && selectedMetric !== metric.id && (
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Chart Area */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMetric}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Average Line Reference */}
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
              <div className="w-8 h-0.5 bg-gray-400 border-dashed border-t-2 border-gray-400" />
              <span>Average: {energyData.average[selectedMetric].toFixed(2)} kBtu/sf</span>
            </div>

            {/* Bars */}
            <div className="space-y-4">
              {energyData.options.map((opt, i) => {
                const metricData = opt[selectedMetric];
                const data = typeof metricData === 'object' && 'value' in metricData ? metricData : { value: 0, delta: 0 };
                const percentage = (data.value / maxValue) * 100;
                const isWinner = opt.option === winner;
                const color = getOptionColor(opt.option);

                return (
                  <motion.div
                    key={opt.option}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onMouseEnter={() => setHoveredOption(opt.option)}
                    onMouseLeave={() => setHoveredOption(null)}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <span className="font-medium text-gray-900">
                          Option {opt.option}
                        </span>
                        {isWinner && (
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                            Best
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-gray-900">
                          {data.value.toFixed(2)}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">kBtu/sf</span>
                        <span className={`ml-3 text-sm font-medium ${
                          data.delta < 0 ? 'text-emerald-600' : data.delta > 0 ? 'text-red-500' : 'text-gray-400'
                        }`}>
                          {data.delta > 0 ? '+' : ''}{data.delta.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="h-12 bg-white rounded-xl overflow-hidden relative shadow-sm">
                      {/* Average reference line */}
                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-gray-300 z-10"
                        style={{ left: `${(energyData.average[selectedMetric] / maxValue) * 100}%` }}
                      />

                      <motion.div
                        className="h-full rounded-xl relative overflow-hidden"
                        style={{ backgroundColor: color }}
                        initial={{ width: 0 }}
                        animate={{
                          width: `${percentage}%`,
                          filter: hoveredOption === opt.option ? 'brightness(1.1)' : 'brightness(1)',
                        }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-medium">Negative Δ</span>
                <span>= Better (lower energy)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-medium">Positive Δ</span>
                <span>= Worse (higher energy)</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Key Insight */}
      {selectedMetric === 'cooling' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-blue-50 rounded-xl border border-blue-100"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">❄️</span>
            <div>
              <p className="font-semibold text-blue-900">Cooling is Critical</p>
              <p className="text-sm text-blue-700 mt-1">
                Cooling represents ~70% of total energy use in Climate Zone 2A.
                Option 2's 4.1% cooling advantage directly reduces peak power demand on campus CUP infrastructure.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
