import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { CustomLayout } from "../components/Layout/CustomLayout";
import { testAsync } from "../redux/actions";
import { wrapper } from "../redux/store";
interface IEvent {
  id: any;
  title: string;
  imageUrl: string;
  description: string;
}
const Home: React.FC<{ events: IEvent[] }> = ({ events }) => {
  return (
    <CustomLayout>
      {events.map((event) => {
        return (
          <Card
            key={event.id}
            hoverable
            style={{ width: 240 }}
            cover={<img alt='example' src={event.imageUrl} />}
          >
            <Meta title={event.title} description={event.description} />
          </Card>
        );
      })}
      ,
    </CustomLayout>
  );
};

export default Home;

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  const store = context.store;
  store.dispatch({ type: "INCREMENT" });
  console.log("YE SERVER SIDE KA CODE HAI");
  const initialData: IEvent[] = [
    {
      id: 1,
      title: "Fashion events",
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description: "some short description",
    },
    {
      id: 2,
      title: "Rcoe events",
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description: "some short description",
    },
  ];
  return {
    props: { events: initialData },
  };
});
