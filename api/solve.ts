import axios from 'axios';
import { API_PREFIX } from '@/constants';
import { Solve, SolveForm } from '@/types';

axios.defaults.baseURL = API_PREFIX;

export const getMySolves = async (memberId: number): Promise<Solve[]> => {
  const res = await axios.get(`/mypage/solution/${memberId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};

export const applySolve = async (
  reportId: number,
  memberId: number,
): Promise<Solve> => {
  const res = await axios.post(`/solution/${reportId}/${memberId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};

export const createSolve = async ({
  solutionId,
  memberId,
  solveForm,
}: {
  solutionId: number;
  memberId: number;
  solveForm: SolveForm;
}) => {
  const res = await axios.post(
    `/solution/${solutionId}/${memberId}`,
    solveForm,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res;
};

export const getSolve = async (solutionId: number): Promise<Solve> => {
  const res = await axios.get(`/solution/${solutionId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};
