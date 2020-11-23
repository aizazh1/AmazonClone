import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt="ad"
          className="checkout__ad"
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.length > 0 ? (
            <FlipMove enterAnimation="none" leaveAnimation="accordionVertical">
              {basket.map((item, index) => (
                <CheckoutProduct
                  key={`${item.id}${index}`}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </FlipMove>
          ) : (
            <h3>Your basket is empty!</h3>
          )}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
