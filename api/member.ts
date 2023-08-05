import axios from 'axios';
import { API_PREFIX } from '@/constants';
import { MemberForm, MemberResult } from '@/types';

axios.defaults.baseURL = API_PREFIX;

export const signup = async (signupForm: MemberForm): Promise<MemberResult> => {
  const res = await axios.post('/signup', signupForm);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};

export const login = async (loginForm: MemberForm): Promise<MemberResult> => {
  const res = await axios.post('/login', loginForm);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};
