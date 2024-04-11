"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  const basePath = process.env.basePath || "";
  const path = basePath ? `${basePath}${item.path}` : item.path;
  return (
    <Link
      href={path}
      className={`${styles.container} ${pathName === path && styles.active}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;