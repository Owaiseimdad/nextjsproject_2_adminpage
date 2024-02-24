"use client";

import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const ITEMS_PER_PAGE = 2;

  const params = new URLSearchParams(searchParams);
  const page = searchParams.get("page") || 1;

  const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext =
    ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count;

  const BtnClick = (event) => {
    if (event.target.textContent == "Next") {
      console.log(event.target.textContent);
      params.set("page", parseInt(page) + 1);
    } else {
      console.log(event.target.textContent);
      params.set("page", page - 1);
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={BtnClick} disabled={!hasPrev}>
        Previous
      </button>
      <button className={styles.button} onClick={BtnClick} disabled={!hasNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
