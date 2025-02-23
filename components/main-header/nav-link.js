"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Styles from "./nav-link.module.css";

const NavLink = ({ href, title }) => {
  const path = usePathname(); // this hook returns us the current active path

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${Styles.navlink} ${Styles.active}`
          : Styles.navlink
      }
    >
      {title}
    </Link>
  );
};

export default NavLink;
