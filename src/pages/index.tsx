import React from "react";
import { CustomLayout } from "../components/Layout/CustomLayout";
import { wrapper } from "../redux/store";
interface IEvent {
  title: string;
  imageUrl: string;
  description: string;
}
const Home: React.FC<IEvent> = (props: IEvent) => {
  return (
    <CustomLayout>
      <div>This is content</div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </CustomLayout>
  );
};

export default Home;

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  const store = context.store;
  const initialData = [
    {
      title: "Rcoe events",
      imageUrl: "imageurlhere",
      description: "some short description",
    },
    {
      title: "Rcoe events",
      imageUrl: "imageurlhere",
      description: "some short description",
    },
  ];
  return {
    props: { events: initialData },
  };
});
