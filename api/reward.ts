import axios from 'axios';
import { API_PREFIX } from '@/constants';

axios.defaults.baseURL = API_PREFIX;

export const getReward = async (memberId: number) => {
  const res = await axios.get(`/reward/${memberId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};

export const changeReward = async ({
  memberId,
  amount,
}: {
  memberId: number;
  amount: number;
}) => {
  const res = await axios.post(`/reward/convert/${memberId}`, {
    amount: amount,
  });
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};

export const getTotalReward = async (memberId: number) => {
  const res = await axios.get(`/mypage/reward/${memberId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};
