import { Layout } from "antd";
import React from "react";
import { wrapper } from "../redux/store";

const Home: React.FC = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header>Header here</Header>
      <Content>Content here</Content>
      <Footer>Footer here</Footer>
    </Layout>
  );
};

export default Home;

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  const store = context.store;
});
