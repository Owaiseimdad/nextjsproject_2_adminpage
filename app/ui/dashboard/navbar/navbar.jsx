"use client";

import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import Search from "../search/search";

const Navbar = () => {
  const path = usePathname().split("/").pop();

  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>{path}</div>
      <div className={styles.menuUI}>
        <Search placeholder={"Search..."} />
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
