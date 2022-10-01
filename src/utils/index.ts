export * from "./env";

export const limitArray = <T>(arr: T[], limit = 100) => {
  return arr.slice(0, limit);
};

export function debounce<T extends (...args: any[]) => any>(
  ms: number,
  callback: T
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timer: NodeJS.Timeout | undefined;

  return (...args: Parameters<T>) => {
    if (timer) {
      clearTimeout(timer);
    }
    return new Promise<ReturnType<T>>((resolve) => {
      timer = setTimeout(() => {
        const returnValue = callback(...args) as ReturnType<T>;
        resolve(returnValue);
      }, ms);
    });
  };
}

export const throttle = (fn: Function, wait: number = 300) => {
  let inThrottle: boolean,
    lastFn: ReturnType<typeof setTimeout>,
    lastTime: number;
  return function (this: any) {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
