import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className="order">
      <div className='order__head'>
        <h2>Order</h2>
        <p>
          <small>{order.id}</small>
        </p>
      </div>

      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

      {order.data.basket?.map((item, index) => (
        <CheckoutProduct
          key={`${item.id}${index}`}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
