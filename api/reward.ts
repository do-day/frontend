import axios from 'axios';
import { API_PREFIX } from '@/constants';
import { memo } from 'react';
import { ChangeReward } from '@/types';

axios.defaults.baseURL = API_PREFIX;

export const getReward = async (memberId: number) => {
  const res = await axios.get(`/reward/${memberId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};

