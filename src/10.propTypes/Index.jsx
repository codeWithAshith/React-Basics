import React from "react";
import Product from "./Product";
import { useFetch } from "../09.customHooks/UseFetch";
// import defaultImage from '../../../assets/default-image.jpeg';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { data } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      {/* <img src={defaultImage} /> */}
      <section className="products">
        {data.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
