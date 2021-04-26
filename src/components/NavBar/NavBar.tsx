import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

export const NavBar = () => {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href='/signup'>SignUp</Link>
      </li>
      <li>
        <Link href='/login'>Login</Link>
      </li>
    </ul>
  );
};
