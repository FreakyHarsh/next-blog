import React from "react";
import styles from "./navbar.module.scss";

export const NavBar = () => {
  return (
    <ul className={styles.navbar}>
      <li>SignUp</li>
      <li>Login</li>
    </ul>
  );
};
