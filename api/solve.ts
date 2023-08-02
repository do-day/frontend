import axios from 'axios';
import { API_PREFIX } from '@/constants';
import { Solve } from '@/types';

axios.defaults.baseURL = API_PREFIX;

export const getMySolves = async (memberId: number): Promise<Solve[]> => {
  const res = await axios.get(`/mypage/solution/${memberId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};

export const applySolve = async (reportId: number, memberId: number) => {
  const res = await axios.post(`/solution/${reportId}/${memberId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res;
};
