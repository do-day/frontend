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

import { useRef } from 'react';

export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  time: number,
) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  return (...params: Parameters<T>) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      callback(...params);
      timer.current = null;
    }, time);
  };
}
