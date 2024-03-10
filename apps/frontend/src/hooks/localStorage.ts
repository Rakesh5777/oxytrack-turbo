import { useState, useEffect } from "react";

// Define a type for the value that will be stored in localStorage
type LocalStorageValue<T> = T | null;

const useLocalStorage = <T>(
  key: string,
  initialValue: LocalStorageValue<T>,
): [LocalStorageValue<T>, (value: LocalStorageValue<T>) => void, () => void] => {
  // Retrieve the stored value from localStorage
  const storedValue = localStorage.getItem(key);

  // Initialize state with the stored value if it exists, otherwise use initialValue
  const [value, setValue] = useState<LocalStorageValue<T>>(storedValue ? JSON.parse(storedValue) : initialValue);

  // Update both the state and localStorage whenever the value changes
  const updateValue = (newValue: LocalStorageValue<T>) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Function to get the value from localStorage
  const getValueFromLocalStorage = () => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  };

  // Call the function to get the value from localStorage when the component mounts
  useEffect(() => {
    getValueFromLocalStorage();
  }, [key]); // Run only when the key changes

  return [value, updateValue, getValueFromLocalStorage];
};

export default useLocalStorage;
