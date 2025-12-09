import { motion } from 'framer-motion';
import type { KeyFindings, PrecedentStrategy, Option } from '../../../data/projects/modulizerData';

interface FindingsSummaryProps {
  keyFindings: KeyFindings;
  precedentStrategies: PrecedentStrategy[];
  options: Option[];
}

export default function FindingsSummary({ keyFindings, precedentStrategies, options }: FindingsSummaryProps) {
  const winnerColor = options.find(o => o.name === keyFindings.winner)?.color || '#10b981';

  return (
    <div className="space-y-8">
      {/* Winner Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative overflow-hidden rounded-3xl p-8 text-white"
        style={{
          background: `linear-gradient(135deg, ${winnerColor} 0%, ${winnerColor}dd 100%)`,
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🏆</span>
            <span className="text-white/80 font-medium">Recommended Option</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">{keyFindings.winner}</h2>
          <p className="text-white/90 text-lg max-w-2xl">
            Demonstrates superior performance across energy and lighting metrics,
            directly addressing campus CUP power constraints.
          </p>
        </div>
      </motion.div>

      {/* Why Option 2 */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Why {keyFindings.winner}?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {keyFindings.reasons.map((reason, i) => (
            <motion.div
              key={reason.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                <span className="text-xl">
                  {reason.category === 'Energy' ? '⚡' :
                   reason.category === 'Lighting' ? '💡' : '🌡️'}
                </span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{reason.category}</h4>
              <p className="text-sm text-gray-600 mb-2">{reason.detail}</p>
              <p className="text-xs text-emerald-600 font-medium">{reason.impact}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Next Steps for DD Phase</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {keyFindings.nextSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 p-4 bg-white rounded-xl"
            >
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-indigo-600 text-xs font-bold">{i + 1}</span>
              </div>
              <p className="text-sm text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Precedent Strategies */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Phase 1 Precedent Strategies Applied</h3>
        <div className="space-y-3">
          {precedentStrategies.map((strategy, i) => (
            <motion.div
              key={strategy.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{strategy.name}</h4>
                  <p className="text-sm text-gray-500">{strategy.precedent}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                    {strategy.impact}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium text-gray-700">CTE Application:</span> {strategy.application}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
