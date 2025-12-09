import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as d3 from 'd3';
import type { BudgetCategory } from '../../../data/projects/massTimberData';

interface DonutChartProps {
  data: BudgetCategory[];
  total: number;
}

interface ArcData {
  path: string;
  hoverPath: string;
  color: string;
  name: string;
  amount: number;
}

export default function DonutChart({ data, total }: DonutChartProps) {
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);
  const [arcs, setArcs] = useState<ArcData[]>([]);

  const width = 400;
  const height = 400;
  const radius = Math.min(width, height) / 2 - 20;
  const innerRadius = radius * 0.6;

  useEffect(() => {
    const pie = d3.pie<BudgetCategory>()
      .value(d => d.amount)
      .sort(null)
      .padAngle(0.02);

    const arcGenerator = d3.arc<d3.PieArcDatum<BudgetCategory>>()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .cornerRadius(4);

    const arcHover = d3.arc<d3.PieArcDatum<BudgetCategory>>()
      .innerRadius(innerRadius)
      .outerRadius(radius + 10)
      .cornerRadius(4);

    const pieData = pie(data);
    setArcs(pieData.map((d, i) => ({
      path: arcGenerator(d) || '',
      hoverPath: arcHover(d) || '',
      color: data[i].color,
      name: data[i].name,
      amount: data[i].amount,
    })));
  }, [data, radius, innerRadius]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return ((value / total) * 100).toFixed(1) + '%';
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="relative">
        <svg width={width} height={height}>
          <g transform={`translate(${width / 2}, ${height / 2})`}>
            {arcs.map((arc, i) => (
              <motion.path
                key={arc.name}
                d={hoveredSlice === i ? arc.hoverPath : arc.path}
                fill={arc.color}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hoveredSlice === null || hoveredSlice === i ? 1 : 0.4,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                onMouseEnter={() => setHoveredSlice(i)}
                onMouseLeave={() => setHoveredSlice(null)}
                className="cursor-pointer"
                style={{ filter: hoveredSlice === i ? 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' : 'none' }}
              />
            ))}
          </g>
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredSlice ?? 'total'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              {hoveredSlice !== null ? (
                <>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(arcs[hoveredSlice]?.amount)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatPercent(arcs[hoveredSlice]?.amount)}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(total)}
                  </p>
                  <p className="text-sm text-gray-500">Total Budget</p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {arcs.map((arc, i) => (
          <motion.div
            key={arc.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: hoveredSlice === i ? 1.02 : 1,
            }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            onMouseEnter={() => setHoveredSlice(i)}
            onMouseLeave={() => setHoveredSlice(null)}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
              hoveredSlice === i ? 'bg-gray-100' : 'bg-transparent'
            }`}
          >
            <div
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: arc.color }}
            />
            <div>
              <p className="font-medium text-gray-900 text-sm">{arc.name}</p>
              <p className="text-gray-500 text-sm">
                {formatCurrency(arc.amount)} ({formatPercent(arc.amount)})
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
