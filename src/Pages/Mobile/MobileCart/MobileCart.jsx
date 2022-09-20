import React from "react";
import CartItems from "./SC/CartItems";
import CartWrapper from "./SC/CartWrapper";
import Items from "./SC/Items";

const MobileCart = () => {
  return (
    <CartWrapper>
      <section className="container">
        <CartItems>
          <Items
            ProductImage="https://picsum.photos/201"
            ProducTitle="Product 1 of Product's"
            PriceAmount="2860"
            DiscountAmount="260"
          />
        </CartItems>
      </section>
    </CartWrapper>
  );
};

export default MobileCart;
