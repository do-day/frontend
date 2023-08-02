import axios from 'axios';
import { API_PREFIX } from '@/constants';
import { Report, ReportForm } from '@/types';

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

export const getMyReports = async (memberId: number): Promise<Report[]> => {
  const res = await axios.get(`/mypage/report/${memberId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};
