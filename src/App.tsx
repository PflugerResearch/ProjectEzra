import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

import { ThemeProvider } from './components/System/ThemeManager';
import { AuthProvider } from './components/System/AuthContext';
import { TopNavbar } from './components/Navigation/TopNavbar';
import type { ViewType } from './components/Navigation/TopNavbar';

import Home from './views/Home';
import Dashboard from './views/Repo/Dashboard';
import TheRepo from './views/Repo/TheRepo';
import Schedule from './views/Repo/Schedule';
import Contacts from './views/Repo/Contacts';
import Analytics from './views/Repo/Analytics';
import ResearchMap from './views/Campus/ResearchMap';
import Portfolio from './views/Explore/Portfolio';
import PitchSubmission from './views/Pitch/PitchSubmission';
import Collaborate from './views/Connect/Collaborate';
import AboutRB from './views/About/AboutRB';
import AboutProcess from './views/About/AboutProcess';
import AboutAI from './views/About/AboutAI';
import AboutTools from './views/About/AboutTools';
import AboutSources from './views/About/AboutSources';
import { ModulizerDashboard, Phase1Dashboard, MassTimberDashboard, ProjectDashboard } from './views/projects';
import { modulizer2Config } from './data/projects/X25RB02-modulizer2/project/modulizer2Config';

// Project overlay types
type ProjectOverlay = 'project-rb02' | 'project-rb02-blocks' | 'project-rb05' | 'project-rb08' | null;

function AppContent() {
  const [view, setView] = useState<ViewType>('home');
  const [projectOverlay, setProjectOverlay] = useState<ProjectOverlay>(null);

  const handleNavigate = (newView: ViewType) => {
    // Close project overlay when navigating away
    setProjectOverlay(null);
    setView(newView);
  };

  const openProject = (projectId: string) => {
    if (projectId === 'X25-RB02') setProjectOverlay('project-rb02');
    else if (projectId === 'X25-RB02-blocks') setProjectOverlay('project-rb02-blocks');
    else if (projectId === 'X25-RB05') setProjectOverlay('project-rb05');
    else if (projectId === 'X25-RB08') setProjectOverlay('project-rb08');
  };

  const closeProject = () => {
    setProjectOverlay(null);
  };

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (projectOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [projectOverlay]);

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home onNavigate={() => {}} />;
      case 'dashboard':
        return <Dashboard onNavigate={(v) => handleNavigate(v as ViewType)} />;
      case 'the-repo':
        return <TheRepo onNavigate={(v) => handleNavigate(v as ViewType)} />;
      case 'schedule':
        return <Schedule />;
      case 'contacts':
        return <Contacts />;
      case 'map':
        return <ResearchMap onOpenProjectDashboard={openProject} />;
      case 'pitch':
        return <PitchSubmission />;
      case 'pitch-list':
        return <PitchSubmission initialViewMode="my-pitches" />;
      case 'pitch-new':
        return <PitchSubmission initialViewMode="new" />;
      case 'portfolio':
        return <Portfolio onOpenProjectDashboard={openProject} />;
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
      default:
        return <Home onNavigate={() => {}} />;
    }
  };

  const renderProjectOverlay = () => {
    switch (projectOverlay) {
      case 'project-rb02':
        return <ModulizerDashboard onBack={closeProject} />;
      case 'project-rb02-blocks':
        return <ProjectDashboard config={modulizer2Config} onBack={closeProject} />;
      case 'project-rb05':
        return <MassTimberDashboard onBack={closeProject} />;
      case 'project-rb08':
        return <Phase1Dashboard onBack={closeProject} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNavbar onNavigate={handleNavigate} onLogoClick={() => handleNavigate('home')} />

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

      {/* Project Overlay */}
      <AnimatePresence>
        {projectOverlay && (
          <>
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={closeProject}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-0 z-50 overflow-hidden"
            >
              <div className="h-full bg-background/80 backdrop-blur-xl overflow-y-auto">
                {renderProjectOverlay()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
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
