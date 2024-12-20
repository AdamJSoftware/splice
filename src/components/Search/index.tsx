import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const useDebounce = <T,>(bounce: T, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(bounce);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(bounce);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [bounce, delay]);
  return debounceValue;
}


const Search = ({ setSearch }: {
  setSearch(val?: string): void
}) => {

  const [rawInput, setRawInput] = useState("");

  const debouncedInput = useDebounce(rawInput, 200);
  useEffect(() => {
    console.log("Debounced:", rawInput);
    setSearch(rawInput);
  }, [debouncedInput]);
  return <input placeholder="Book title..."  className={styles.input} type="text" value={rawInput} onChange={(e) => setRawInput(e.target.value)} />
}

export default Search;
