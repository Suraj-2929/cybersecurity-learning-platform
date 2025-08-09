export const ATTACK_CATEGORIES = {
  DOS: 'Denial of Service',
  WEB_VULNERABILITIES: 'Web Application Vulnerabilities',
  API_SECURITY: 'API Security',
  NETWORK_SECURITY: 'Network Security',
  MALWARE: 'Malware Analysis'
} as const;

export const DIFFICULTY_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
} as const;

export const SKILL_COLORS = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800'
} as const;

export const API_ENDPOINTS = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    REGISTER: '/api/v1/auth/register',
    LOGOUT: '/api/v1/auth/logout'
  },
  ATTACKS: {
    LIST: '/api/v1/attacks',
    CATEGORIES: '/api/v1/attacks/categories',
    DETAILS: (id: number) => `/api/v1/attacks/${id}`,
    TUTORIAL: (id: number) => `/api/v1/attacks/${id}/tutorial`
  },
  TESTING: {
    VALIDATE_TARGET: '/api/v1/testing/targets/validate',
    START_TEST: '/api/v1/testing/tests/start',
    TEST_STATUS: (id: string) => `/api/v1/testing/tests/${id}/status`,
    TEST_RESULTS: (id: string) => `/api/v1/testing/tests/${id}/results`
  }
} as const;
