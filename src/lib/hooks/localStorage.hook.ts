const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const localStorageValue = localStorage.getItem(key);
  const localValue = localStorageValue ? JSON.parse(localStorageValue) as T : defaultValue;

  const setLocalValue = (cb: (oldValue: T) => T) => {
    const localValue = localStorage.getItem(key);
    let toStore: T;
    if (localValue) {
      toStore = cb(JSON.parse(localValue));
    } else {
      toStore = cb(defaultValue);
    }
    localStorage.setItem(key, JSON.stringify(toStore));
  };

  return { localValue, setLocalValue };
};

export default useLocalStorage;
