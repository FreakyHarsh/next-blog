import { Layout } from "antd";
import React from "react";
import { NavBar } from "../NavBar/NavBar";
import styles from "./layout.module.scss";

export const CustomLayout: React.FC = ({ children }) => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer}>
        Build with ❤️ by <strong>Harsh Boricha</strong>
      </Footer>
    </Layout>
  );
};
