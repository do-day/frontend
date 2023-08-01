export const SERVICE_NAME = 'DODAY';

export const ROUTES = {
  MAIN: '/',
  LOGIN: '/login',
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