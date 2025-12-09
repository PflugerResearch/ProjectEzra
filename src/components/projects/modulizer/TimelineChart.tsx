import { motion } from 'framer-motion';
import type { TimelinePhase } from '../../../data/projects/modulizerData';

interface TimelineChartProps {
  timeline: TimelinePhase[];
  totalHours: number;
}

export default function TimelineChart({ timeline, totalHours }: TimelineChartProps) {
  const completedHours = timeline
    .filter(t => t.status === 'complete')
    .reduce((sum, t) => sum + t.hours, 0);

  const inProgressHours = timeline
    .filter(t => t.status === 'in-progress')
    .reduce((sum, t) => sum + t.hours, 0);

  const progressPercent = ((completedHours + inProgressHours * 0.5) / totalHours) * 100;

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'complete': return '#10b981';
      case 'in-progress': return '#6366f1';
      case 'pending': return '#d1d5db';
      default: return '#d1d5db';
    }
  };

  const getStatusBg = (status: string): string => {
    switch (status) {
      case 'complete': return 'bg-emerald-50 border-emerald-200';
      case 'in-progress': return 'bg-indigo-50 border-indigo-200';
      case 'pending': return 'bg-gray-50 border-gray-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="bg-gray-900 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-gray-400 text-sm">Research Progress</p>
            <p className="text-3xl font-bold">{progressPercent.toFixed(0)}%</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm">Hours Allocated</p>
            <p className="text-xl font-semibold">{completedHours} / {totalHours} hrs</p>
          </div>
        </div>

        <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-400 to-indigo-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        <div className="flex gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full" />
            <span className="text-gray-300">Complete ({completedHours} hrs)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-indigo-400 rounded-full" />
            <span className="text-gray-300">In Progress ({inProgressHours} hrs)</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-200" />

        <div className="space-y-4">
          {timeline.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative pl-16 pr-4 py-4 rounded-xl border ${getStatusBg(phase.status)}`}
            >
              {/* Status dot */}
              <div
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-white shadow-sm z-10"
                style={{ backgroundColor: getStatusColor(phase.status) }}
              >
                {phase.status === 'complete' && (
                  <svg className="w-full h-full text-white p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {phase.status === 'in-progress' && (
                  <motion.div
                    className="w-full h-full rounded-full bg-white/30"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-semibold ${
                    phase.status === 'pending' ? 'text-gray-400' : 'text-gray-900'
                  }`}>
                    {phase.phase}
                  </h4>
                  <p className={`text-sm ${
                    phase.status === 'pending' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {phase.dates}
                  </p>
                </div>
                <div className="text-right">
                  <span className={`text-lg font-bold ${
                    phase.status === 'pending' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {phase.hours}
                  </span>
                  <span className={`text-sm ml-1 ${
                    phase.status === 'pending' ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    hrs
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
