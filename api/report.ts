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

export const getReports = async (): Promise<Report[]> => {
  const res = await axios.get('/report');
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};

export const getMyReports = async (memberId: number): Promise<Report[]> => {
  const res = await axios.get(`/mypage/report/${memberId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};

export const getReport = async (reportId: number): Promise<Report> => {
  const res = await axios.get(`/report/${reportId}`);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};
