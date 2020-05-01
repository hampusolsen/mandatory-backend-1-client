import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
   const [debouncedValue, setDebouncedValue] = useState(value);

   useEffect(() => {
      const debouncer = setTimeout(() => {
         setDebouncedValue(value);
      }, delay);

      return () => clearTimeout(debouncer);
   }, [value, delay]);

   return debouncedValue;
};