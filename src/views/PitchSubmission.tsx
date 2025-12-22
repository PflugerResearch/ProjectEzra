import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  Building,
  Target,
  Users,
  CheckCircle,
  Lightbulb,
  Send,
  AlertCircle,
  Clock,
  MessageSquare,
  Edit3,
  Zap
} from 'lucide-react';
import { ChatPanel } from '../components/Chat/ChatPanel';

interface FormData {
  projectIdentification: string;
  researchQuestion: string;
  explorationPlan: string;
  partners: string;
  successMeasurement: string;
  category: string;
  timeline: string;
  resources: string;
}

type PitchStatus = 'pending' | 'revise' | 'greenlit';

interface ReviewComment {
  author: string;
  date: string;
  message: string;
  isReviewer: boolean;
}

interface SubmittedPitch {
  id: string;
  title: string;
  category: string;
  submittedDate: string;
  status: PitchStatus;
  comments: ReviewComment[];
}

const MY_PITCHES: SubmittedPitch[] = [
  {
    id: 'P-2025-001',
    title: 'Biophilic Design Impact on Student Focus',
    category: 'Psychology',
    submittedDate: '2025-01-15',
    status: 'greenlit',
    comments: [
      { author: 'GreenLight Team', date: '2025-01-18', message: 'Great research question! We love the focus on measurable outcomes. Green Lit!', isReviewer: true }
    ]
  },
  {
    id: 'P-2025-002',
    title: 'Mass Timber Acoustic Performance',
    category: 'Sustainability',
    submittedDate: '2025-02-01',
    status: 'revise',
    comments: [
      { author: 'GreenLight Team', date: '2025-02-05', message: 'Interesting topic! Can you clarify the measurement methodology? How will you collect acoustic data?', isReviewer: true },
      { author: 'You', date: '2025-02-07', message: 'Updated methodology to include SPL measurements at 5 locations per space, pre and post occupancy.', isReviewer: false }
    ]
  },
  {
    id: 'P-2025-003',
    title: 'Wayfinding in K-12 Campuses',
    category: 'Campus Life',
    submittedDate: '2025-02-10',
    status: 'pending',
    comments: []
  }
];

const STATUS_CONFIG = {
  pending: { label: 'Pending Review', color: 'text-yellow-400', bg: 'bg-yellow-900/30', border: 'border-yellow-800', icon: Clock },
  revise: { label: 'Revise & Resubmit', color: 'text-blue-400', bg: 'bg-blue-900/30', border: 'border-blue-800', icon: Edit3 },
  greenlit: { label: 'Green Lit!', color: 'text-green-400', bg: 'bg-green-900/30', border: 'border-green-800', icon: Zap }
};

interface PitchSubmissionProps {
  initialViewMode?: 'my-pitches' | 'new';
}

const PitchSubmission: React.FC<PitchSubmissionProps> = ({ initialViewMode = 'my-pitches' }) => {
  const [viewMode, setViewMode] = useState<'my-pitches' | 'new'>(initialViewMode);
  const [expandedPitch, setExpandedPitch] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectIdentification: '',
    researchQuestion: '',
    explorationPlan: '',
    partners: '',
    successMeasurement: '',
    category: '',
    timeline: '',
    resources: ''
  });

  const steps = [
    { number: 1, title: 'Project Context', icon: Building },
    { number: 2, title: 'Research Question', icon: Target },
    { number: 3, title: 'Methodology', icon: Lightbulb },
    { number: 4, title: 'Partners & Resources', icon: Users },
    { number: 5, title: 'Success Metrics', icon: CheckCircle }
  ];

  const categories = [
    'Campus Life',
    'Fine Arts',
    'Health & Safety',
    'Immersive Learning',
    'Psychology',
    'Sustainability'
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('Submitting pitch:', formData);
    // Here you would typically send the data to your backend
    alert('Pitch submitted successfully! The GreenLight team will review within 2 weeks.');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Project Identification</h2>
              <p className="text-gray-400 mb-4 text-sm">
                Identify the current or future project you want to explore
              </p>
              <textarea
                value={formData.projectIdentification}
                onChange={(e) => handleInputChange('projectIdentification', e.target.value)}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 h-32 focus:outline-none focus:ring-1 focus:ring-white"
                placeholder="E.g., Kennedy Elementary School renovation focusing on experiential learning spaces..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Research Category</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {categories.map(cat => (
                  <motion.button
                    key={cat}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInputChange('category', cat)}
                    className={`p-3 rounded-lg text-sm transition-all ${
                      formData.category === cat
                        ? 'bg-white text-black'
                        : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Research Question</h2>
              <p className="text-gray-400 mb-4 text-sm">
                What is your research question under Experiential Learning?
              </p>

              <div className="bg-blue-900/30 border border-blue-800 p-3 rounded-lg mb-4">
                <AlertCircle className="inline w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-blue-400">
                  Frame your question as "How does X affect Y?" to ensure it's measurable and focused
                </span>
              </div>

              <textarea
                value={formData.researchQuestion}
                onChange={(e) => handleInputChange('researchQuestion', e.target.value)}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 h-32 focus:outline-none focus:ring-1 focus:ring-white"
                placeholder="E.g., How does biophilic design in elementary classrooms affect student attention span and emotional regulation?"
              />
            </div>

            <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
              <h3 className="font-medium text-white mb-3">Research Question Components</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span className="text-gray-300">Independent Variable (what you're changing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span className="text-gray-300">Dependent Variable (what you're measuring)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span className="text-gray-300">Connection to Experiential Learning</span>
                </li>
              </ul>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Exploration Plan</h2>
              <p className="text-gray-400 mb-4 text-sm">
                Describe your methodology, timeline, and resources needed
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Methodology</label>
                  <textarea
                    value={formData.explorationPlan}
                    onChange={(e) => handleInputChange('explorationPlan', e.target.value)}
                    className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 h-24 focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="E.g., Literature review of 5+ sources, post-occupancy evaluation survey, case study analysis..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="simple">Simple & Quick (20-60 hours)</option>
                    <option value="medium">Medium Intensity (60-120 hours)</option>
                    <option value="complex">Complex & Long-term (120+ hours)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Resources Needed</label>
                  <input
                    type="text"
                    value={formData.resources}
                    onChange={(e) => handleInputChange('resources', e.target.value)}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="E.g., Survey tools, site visits, publication costs..."
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Partners & Support</h2>
              <p className="text-gray-400 mb-4 text-sm">
                Identify Pfluger partners and supporting sources
              </p>

              <textarea
                value={formData.partners}
                onChange={(e) => handleInputChange('partners', e.target.value)}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 h-32 focus:outline-none focus:ring-1 focus:ring-white"
                placeholder="E.g., Senior architects with K-12 expertise, UTSA faculty collaborators, Wood Works for mass timber research..."
              />

              <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-800 rounded-lg">
                <p className="text-sm text-yellow-400">
                  <Lightbulb className="inline w-4 h-4 mr-2" />
                  The GreenLight team can help identify partners if you don't have specific ones in mind
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Success Measurement</h2>
              <p className="text-gray-400 mb-4 text-sm">
                How will you measure success and demonstrate project integration?
              </p>

              <textarea
                value={formData.successMeasurement}
                onChange={(e) => handleInputChange('successMeasurement', e.target.value)}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 h-32 focus:outline-none focus:ring-1 focus:ring-white"
                placeholder="E.g., Publication in Texas Architect, integration into 2 active projects, 80% positive feedback from POE survey..."
              />
            </div>

            <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
              <h3 className="font-medium text-white mb-3">Review Your Pitch</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-300">Category:</span>{' '}
                  <span className="text-white">{formData.category || 'Not selected'}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-300">Timeline:</span>{' '}
                  <span className="text-white">{formData.timeline || 'Not selected'}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-300">Research Question:</span>
                  <p className="mt-1 text-gray-400">
                    {formData.researchQuestion || 'Not provided'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  const renderMyPitches = () => (
    <div className="space-y-4">
      {MY_PITCHES.map((pitch, index) => {
        const isExpanded = expandedPitch === pitch.id;
        const status = STATUS_CONFIG[pitch.status];
        const StatusIcon = status.icon;

        return (
          <motion.div
            key={pitch.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-card border border-card rounded-xl overflow-hidden"
          >
            {/* Pitch Header */}
            <button
              onClick={() => setExpandedPitch(isExpanded ? null : pitch.id)}
              className="w-full p-4 flex items-center gap-4 hover:bg-gray-800/30 transition-colors"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </motion.div>

              <div className="flex-1 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-gray-500">{pitch.id}</span>
                  <span className="text-white font-medium">{pitch.title}</span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-gray-500">{pitch.category}</span>
                  <span className="text-xs text-gray-600">Submitted {pitch.submittedDate}</span>
                </div>
              </div>

              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs ${status.bg} ${status.border} border`}>
                <StatusIcon className={`w-3 h-3 ${status.color}`} />
                <span className={status.color}>{status.label}</span>
              </div>
            </button>

            {/* Expanded Content - Review Thread */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-2 border-t border-gray-800 ml-8">
                    {pitch.comments.length === 0 ? (
                      <p className="text-sm text-gray-500 italic">Awaiting review from GreenLight team...</p>
                    ) : (
                      <div className="space-y-3">
                        {pitch.comments.map((comment, i) => (
                          <div key={i} className={`flex gap-3 ${!comment.isReviewer ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                              comment.isReviewer ? 'bg-green-900/50' : 'bg-gray-700'
                            }`}>
                              {comment.isReviewer ? (
                                <Zap className="w-4 h-4 text-green-400" />
                              ) : (
                                <span className="text-xs text-white">You</span>
                              )}
                            </div>
                            <div className={`flex-1 max-w-[80%] ${!comment.isReviewer ? 'text-right' : ''}`}>
                              <div className={`inline-block rounded-xl p-3 ${
                                comment.isReviewer ? 'bg-gray-800' : 'bg-white text-black'
                              }`}>
                                <p className={`text-sm ${comment.isReviewer ? 'text-gray-300' : 'text-black'}`}>
                                  {comment.message}
                                </p>
                              </div>
                              <p className="text-xs text-gray-600 mt-1">{comment.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Reply input for revise status */}
                    {pitch.status === 'revise' && (
                      <div className="mt-4 pt-4 border-t border-gray-800">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Add a response..."
                            className="flex-1 bg-gray-800 text-white placeholder-gray-500 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white"
                          />
                          <button className="p-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors">
                            <Send className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <div className="px-12 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-white mb-2">Pitch</h1>
        <p className="text-gray-400">Submit and track your research ideas</p>
      </div>

      <div className="flex gap-8">
        {/* Left column - Content (2/3) */}
        <div className="flex-1 lg:w-2/3">
          {/* View Toggle */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setViewMode('my-pitches')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                viewMode === 'my-pitches'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              My Pitches
            </button>
            <button
              onClick={() => setViewMode('new')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                viewMode === 'new'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              + New Pitch
            </button>
          </div>

          {viewMode === 'my-pitches' ? (
            renderMyPitches()
          ) : (
            <>
              {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <div key={step.number} className="flex items-center flex-1">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                      isActive
                        ? 'bg-white'
                        : isCompleted
                        ? 'bg-green-500'
                        : 'bg-gray-700'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <Icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-gray-500'}`} />
                    )}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 transition-all ${
                        currentStep > step.number ? 'bg-green-500' : 'bg-gray-700'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step Title */}
          <div className="mb-6">
            <p className="text-sm text-gray-500">
              Step {currentStep} of {steps.length}
            </p>
            <h2 className="text-xl font-semibold text-white">{steps[currentStep - 1].title}</h2>
          </div>

          {/* Form Content */}
          <div className="bg-card border border-card rounded-xl p-6 mb-6">
            <AnimatePresence mode="wait">
              {renderStepContent()}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentStep === 1
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </motion.button>

            {currentStep === steps.length ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-lg text-sm font-medium"
              >
                Submit Pitch
                <Send className="w-4 h-4" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg text-sm font-medium"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
          </>
          )}
        </div>

        {/* Right column - Chat (1/3) - stays fixed */}
        <div className="hidden lg:block lg:w-1/3 shrink-0">
          <div className="fixed top-24 right-12 w-[calc((100vw-6rem-2rem)*0.333)] h-[calc(100vh-120px)]">
            <ChatPanel
              title="Ask"
              subtitle="Pitch assistant"
              placeholder="Ask about research ideas..."
              initialMessage="Hello! I can help you develop your research pitch. What's the topic you're exploring?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchSubmission;