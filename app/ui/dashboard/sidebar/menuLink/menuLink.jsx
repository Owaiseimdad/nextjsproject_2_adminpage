"use client";

import React from "react";
import style from "./menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ items }) => {
  const pathname = usePathname();
  return (
    <Link href={items.path}>
      <div
        className={`${style.container} ${
          pathname === items.path && style.active
        }`}
      >
        {items.icon}
        {items.title}
      </div>
    </Link>
  );
};

export default MenuLink;
