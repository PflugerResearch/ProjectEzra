import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

// Import theme and auth providers
import { ThemeProvider } from './components/System/ThemeManager';
import { AuthProvider, useAuth } from './components/System/AuthContext';
import { LoginModal } from './components/System/LoginModal';

// Import navigation
import { NavigationProvider, useNavigation, SECTION_VIEW_MAP } from './components/Navigation/NavigationContext';
import type { ViewType } from './components/Navigation/NavigationContext';
import { TopNavbar } from './components/Navigation/TopNavbar';

// Import views
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import ResearchMap from './views/ResearchMap';
import PitchSubmission from './views/PitchSubmission';
import Portfolio from './views/Portfolio';
import Analytics from './views/Analytics';
import Collaborate from './views/Collaborate';
import { ModulizerDashboard, Phase1Dashboard, MassTimberDashboard } from './views/projects';

function AppContent() {
  const { isAuthenticated } = useAuth();
  const { state, navigateTo, goHome } = useNavigation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const isHome = state.currentView === 'home';

  const handleSectionClick = (sectionId: string) => {
    const viewId = SECTION_VIEW_MAP[sectionId as keyof typeof SECTION_VIEW_MAP];
    navigateTo(viewId);
  };

  const renderView = () => {
    if (state.currentView === 'home') {
      return <Home onNavigate={handleSectionClick} onLoginClick={() => setIsLoginModalOpen(true)} />;
    }

    switch (state.currentView) {
      case 'dashboard':
        return <Dashboard onNavigate={(view) => navigateTo(view as ViewType)} />;
      case 'map':
        return <ResearchMap onOpenProjectDashboard={(projectId) => {
          if (projectId === 'X25-RB02') navigateTo('project-rb02');
          if (projectId === 'X25-RB08') navigateTo('project-rb08');
        }} />;
      case 'pitch':
        return <PitchSubmission />;
      case 'portfolio':
        return <Portfolio onOpenProjectDashboard={(projectId) => {
          if (projectId === 'X25-RB02') navigateTo('project-rb02');
          else if (projectId === 'X25-RB05') navigateTo('project-rb05');
          else if (projectId === 'X25-RB08') navigateTo('project-rb08');
        }} />;
      case 'analytics':
        return <Analytics />;
      case 'collaborate':
        return <Collaborate />;
      case 'project-rb02':
        return <ModulizerDashboard onBack={() => navigateTo('portfolio')} />;
      case 'project-rb05':
        return <MassTimberDashboard onBack={() => navigateTo('portfolio')} />;
      case 'project-rb08':
        return <Phase1Dashboard onBack={() => navigateTo('portfolio')} />;
      default:
        return <Home onNavigate={handleSectionClick} onLoginClick={() => setIsLoginModalOpen(true)} />;
    }
  };

  return (
    <>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

      <div className="min-h-screen bg-dark-bg">
        {/* Top Navbar - Only show when not on home */}
        {!isHome && (
          <TopNavbar
            activeView={state.currentView}
            onNavigate={navigateTo}
            onLogoClick={goHome}
            onLoginClick={() => setIsLoginModalOpen(true)}
          />
        )}

        {/* Main Content */}
        <main className={!isHome ? 'pt-16' : ''}>
          <AnimatePresence mode="wait">
            <motion.div
              key={state.currentView}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationProvider>
          <AppContent />
        </NavigationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;