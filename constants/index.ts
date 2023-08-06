export const SERVICE_NAME = '두데이';
export const SERVICE_URL = 'https://doday-nu.vercel.app';

export const LOCAL_STORAGE_KEY = 'doday-id';

export const DEFAULT_IMAGE = '/default-image.png';

export const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX;

export const ROUTES = {
  MAIN: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  WELCOME: '/welcome',
  ERROR: {
    NOT_FOUND: '/404',
  },
  REPORTS: {
    NEW: '/reports/new',
    REPORT: (reportId: number) => `/reports/${reportId}`,
  },
  SOLVES: {
    NEW: '/solves/new',
    SOLVE: (solveId: number) => `/solves/${solveId}`,
  },
  MY: {
    REPORTS: '/my/reports',
    SOLVES: '/my/solves',
    REWARD: {
      INDEX: '/my/reward',
      CHANGE: '/my/reward/change',
    },
  },
  ADMIN: {
    REPORTS: '/admin/reports',
    REPORT: (reportId: number) => `/admin/reports/${reportId}`,
    SOLVES: '/admin/solves',
    SOLVE: (solveId: number) => `/admin/solves/${solveId}`,
  },
};
