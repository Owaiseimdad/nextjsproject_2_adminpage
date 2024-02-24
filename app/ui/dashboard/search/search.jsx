import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchText = (event) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    if (event.target.value) {
      params.set("q", event.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  };
  return (
    <div className={styles.searchui}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={searchText}
      />
    </div>
  );
};

export default Search;
