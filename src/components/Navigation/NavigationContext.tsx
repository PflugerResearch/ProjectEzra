import { createContext, useContext, useState, ReactNode } from 'react';

// View types
export type ViewType =
  | 'home'
  | 'dashboard'
  | 'map'
  | 'pitch'
  | 'portfolio'
  | 'analytics'
  | 'collaborate'
  | 'project-rb02'
  | 'project-rb05'
  | 'project-rb08';

// Section to view mapping
export const SECTION_VIEW_MAP = {
  'campus': 'map',
  'work': 'dashboard',
  'pitch': 'pitch',
  'explore': 'portfolio',
  'connect': 'collaborate'
} as const;

export type SectionId = keyof typeof SECTION_VIEW_MAP;

// Navigation state interface
interface NavigationState {
  currentView: ViewType;
  isOnHomePage: boolean;
  navigationHistory: ViewType[];
}

// Navigation context interface
interface NavigationContextType {
  state: NavigationState;
  navigateTo: (view: ViewType) => void;
  goHome: () => void;
  goBack: () => void;
}

// Create context
const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

// Provider component
interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [state, setState] = useState<NavigationState>({
    currentView: 'home',
    isOnHomePage: true,
    navigationHistory: ['home']
  });

  const navigateTo = (view: ViewType) => {
    setState(prev => ({
      currentView: view,
      isOnHomePage: view === 'home',
      navigationHistory: [...prev.navigationHistory, view]
    }));
  };

  const goHome = () => {
    setState(prev => ({
      currentView: 'home',
      isOnHomePage: true,
      navigationHistory: [...prev.navigationHistory, 'home']
    }));
  };

  const goBack = () => {
    setState(prev => {
      const newHistory = [...prev.navigationHistory];
      if (newHistory.length > 1) {
        newHistory.pop(); // Remove current
        const previousView = newHistory[newHistory.length - 1];
        return {
          currentView: previousView,
          isOnHomePage: previousView === 'home',
          navigationHistory: newHistory
        };
      }
      return prev; // No history to go back to
    });
  };

  return (
    <NavigationContext.Provider value={{ state, navigateTo, goHome, goBack }}>
      {children}
    </NavigationContext.Provider>
  );
}

// Custom hook to use navigation
export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
