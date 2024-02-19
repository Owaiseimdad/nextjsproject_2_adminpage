import React from "react";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userprofile}
          src="/noavatar.png"
          alt="user profile"
          height="50"
          width="50"
        />
        <div className={styles.userDetails}>
          <span className={styles.username}>Owaise Imdad</span>
          <span className={styles.userRole}>Software Engineer</span>
        </div>
      </div>
      <ul className={styles.listMenu}>
        {menuItems.map((e) => (
          <li key={e.title} className={styles.eachList}>
            <span className={styles.cat}>{e.title}</span>
            {e.list.map((l) => (
              <MenuLink items={l} key={l.title} />
            ))}
          </li>
        ))}
      </ul>
      <Link href={`/login`} className={styles.addnew}>
        <button className={styles.logoutBtn}>
          <MdLogout />
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
