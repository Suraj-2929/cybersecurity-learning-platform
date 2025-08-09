import { create } from 'zustand';
import { User, Attack, TestResult } from '@/types';

interface AppState {
  // User state
  user: User | null;
  setUser: (user: User | null) => void;

  // Attacks state
  attacks: Attack[];
  setAttacks: (attacks: Attack[]) => void;
  selectedAttacks: number[];
  toggleAttackSelection: (attackId: number) => void;
  clearAttackSelection: () => void;

  // Testing state
  currentTest: {
    targetUrl: string;
    testId: string | null;
    isRunning: boolean;
    progress: number;
  };
  setTargetUrl: (url: string) => void;
  startTest: (testId: string) => void;
  updateTestProgress: (progress: number) => void;
  completeTest: () => void;

  // Results state
  testResults: TestResult[];
  setTestResults: (results: TestResult[]) => void;
  addTestResult: (result: TestResult) => void;
}

export const useStore = create<AppState>((set, get) => ({
  // User state
  user: null,
  setUser: (user) => set({ user }),

  // Attacks state
  attacks: [],
  setAttacks: (attacks) => set({ attacks }),
  selectedAttacks: [],
  toggleAttackSelection: (attackId) => set((state) => ({
    selectedAttacks: state.selectedAttacks.includes(attackId)
      ? state.selectedAttacks.filter(id => id !== attackId)
      : [...state.selectedAttacks, attackId]
  })),
  clearAttackSelection: () => set({ selectedAttacks: [] }),

  // Testing state
  currentTest: {
    targetUrl: '',
    testId: null,
    isRunning: false,
    progress: 0
  },
  setTargetUrl: (targetUrl) => set((state) => ({
    currentTest: { ...state.currentTest, targetUrl }
  })),
  startTest: (testId) => set((state) => ({
    currentTest: { ...state.currentTest, testId, isRunning: true, progress: 0 }
  })),
  updateTestProgress: (progress) => set((state) => ({
    currentTest: { ...state.currentTest, progress }
  })),
  completeTest: () => set((state) => ({
    currentTest: { ...state.currentTest, isRunning: false, testId: null, progress: 0 }
  })),

  // Results state
  testResults: [],
  setTestResults: (testResults) => set({ testResults }),
  addTestResult: (result) => set((state) => ({
    testResults: [...state.testResults, result]
  }))
}));
