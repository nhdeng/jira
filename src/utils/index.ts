import { useEffect, useState } from "react";

export const isFalsy = (value: unknown): boolean => {
  return value === 0 ? false : !value;
};

export const clearObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeOut = setTimeout(() => setDebounceValue(value), delay);
    // React 会在执行当前 effect 之前对上一个 effect 进行清除
    return () => clearTimeout(timeOut);
  }, [value, delay]);
  return debounceValue;
};

export const useArray = <T>(initValue: T[]) => {
  const [value, setValue] = useState(initValue);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
