"use client";

import Search from "../search/search";
import styles from "./searchNav.module.css";
import Link from "next/link";

const SearchNav = ({ params, button }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Search placeholder={`Search for a ${params}...`} />
        {button && (
          <Link
            href={`/dashboard/${params.toLowerCase()}/add`}
            className={styles.addnew}
          >
            <button className={styles.addnewBtn}>Add New {params}</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SearchNav;
