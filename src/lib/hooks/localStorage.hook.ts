import { useState } from "react";

const useLocalStorage = <T>(key: string, defaultValue: T) => {
    const [value] = useState<T>(() => {
      const localValue = localStorage.getItem(key);
      if (localValue) {
        return JSON.parse(localValue);
      }
      return defaultValue;
    });
  
    const setLocalValue = (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
    };
  
    return { value, setLocalValue };
  };

  export default useLocalStorage;