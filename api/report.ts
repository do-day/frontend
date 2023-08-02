import axios from 'axios';
import { API_PREFIX } from '@/constants';
import { ReportForm } from '@/types';

axios.defaults.baseURL = API_PREFIX;

export const createReport = async (reportForm: ReportForm) => {
  const res = await axios.post('/report', reportForm, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res;
};
