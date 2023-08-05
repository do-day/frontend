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
