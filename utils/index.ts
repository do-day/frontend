import secureLocalStorage from 'react-secure-storage';

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  });
  return date;
};

export const formatOnlyDate = (rewardDate?: string) => {
  if (rewardDate === undefined) return;

  const month = rewardDate.slice(5, 7);
  const day = rewardDate.slice(8, 10);

  return `${month}.${day}`;
};

export const validateInput = (str: string) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,10}$/;
  return regex.test(str);
};

export const setLocalStorage = (key: string, value: string) => {
  secureLocalStorage.setItem(key, value);
};

export const removeLocalStorage = (key: string) =>
  secureLocalStorage.removeItem(key);

export const getLocalStorage = (key: string) => {
  return secureLocalStorage.getItem(key);
};
