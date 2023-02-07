import React from "react";
import SingleProduct from "./SingleProduct";

const BigList = React.memo(({ products, addToCart }) => {
  // useEffect(() => {
  //   console.count('hello from big list');
  // });

  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct key={product.id} {...product} addToCart={addToCart} />
        );
      })}
    </section>
  );
});

export default BigList;
