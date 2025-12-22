import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

import { ThemeProvider } from './components/System/ThemeManager';
import { AuthProvider } from './components/System/AuthContext';
import { TopNavbar } from './components/Navigation/TopNavbar';
import type { ViewType } from './components/Navigation/TopNavbar';

import Home from './views/Home';
import Dashboard from './views/Dashboard';
import TheRepo from './views/TheRepo';
import Schedule from './views/Schedule';
import Contacts from './views/Contacts';
import ResearchMap from './views/ResearchMap';
import PitchSubmission from './views/PitchSubmission';
import Portfolio from './views/Portfolio';
import Analytics from './views/Analytics';
import Collaborate from './views/Collaborate';
import AboutRB from './views/AboutRB';
import AboutProcess from './views/AboutProcess';
import AboutAI from './views/AboutAI';
import AboutTools from './views/AboutTools';
import AboutSources from './views/AboutSources';
import { ModulizerDashboard, Phase1Dashboard, MassTimberDashboard } from './views/projects';

function AppContent() {
  const [view, setView] = useState<ViewType>('home');

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home onNavigate={() => {}} />;
      case 'dashboard':
        return <Dashboard onNavigate={(v) => setView(v as ViewType)} />;
      case 'the-repo':
        return <TheRepo onNavigate={(v) => setView(v as ViewType)} />;
      case 'schedule':
        return <Schedule />;
      case 'contacts':
        return <Contacts />;
      case 'map':
        return <ResearchMap onOpenProjectDashboard={(id) => {
          if (id === 'X25-RB02') setView('project-rb02');
          if (id === 'X25-RB08') setView('project-rb08');
        }} />;
      case 'pitch':
        return <PitchSubmission />;
      case 'pitch-list':
        return <PitchSubmission initialViewMode="my-pitches" />;
      case 'pitch-new':
        return <PitchSubmission initialViewMode="new" />;
      case 'portfolio':
        return <Portfolio onOpenProjectDashboard={(id) => {
          if (id === 'X25-RB02') setView('project-rb02');
          else if (id === 'X25-RB05') setView('project-rb05');
          else if (id === 'X25-RB08') setView('project-rb08');
        }} />;
      case 'analytics':
        return <Analytics />;
      case 'collaborate':
        return <Collaborate />;
      case 'about':
      case 'about-rb':
        return <AboutRB />;
      case 'about-process':
        return <AboutProcess />;
      case 'about-ai':
        return <AboutAI />;
      case 'about-tools':
        return <AboutTools />;
      case 'about-sources':
        return <AboutSources />;
      case 'project-rb02':
        return <ModulizerDashboard onBack={() => setView('portfolio')} />;
      case 'project-rb05':
        return <MassTimberDashboard onBack={() => setView('portfolio')} />;
      case 'project-rb08':
        return <Phase1Dashboard onBack={() => setView('portfolio')} />;
      default:
        return <Home onNavigate={() => {}} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNavbar onNavigate={setView} onLogoClick={() => setView('home')} />

      <div className="h-20" />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
