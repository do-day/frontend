import axios from 'axios';
import { API_PREFIX } from '@/constants';
import { Report } from '@/types';
import { Solve } from '@/types';

axios.defaults.baseURL = API_PREFIX;

export const getAdminReports = async (): Promise<Report[]> => {
  const res = await axios.get('/report/admin');
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};

export const getAdminSolves = async (): Promise<Solve[]> => {
  const res = await axios.get(`/solution`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};

export const rejectReport = async ({
  reportId,
  adminId,
  content,
}: {
  reportId: number;
  adminId: number;
  content: string;
}) => {
  const res = await axios.post(
    `/report/reject/${reportId}`,
    {
      adminId: adminId,
      content: content,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
};

export const rejectSolve = async ({
  solutionId,
  adminId,
  content,
}: {
  solutionId: number;
  adminId: number;
  content: string;
}) => {
  const res = await axios.post(
    `/solution/reject/${solutionId}/${adminId}`,
    {
      content: content,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
};

export const postReportApprove = async ({ reportId }: { reportId: number }) => {
  const res = await axios.post(`/report/approval/${reportId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
};

export const postSolutionApprove = async ({
  solutionId,
  adminId,
}: {
  solutionId: number;
  adminId: number;
}) => {
  const res = await axios.post(`/solution/approval/${solutionId}/${adminId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
};
