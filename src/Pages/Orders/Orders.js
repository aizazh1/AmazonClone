import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { db } from "../../firebase/firebase";
import Order from "./Order/Order";
import "./Orders.css";
import { useStateValue } from "../../StateProvider/StateProvider";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ user }] = useStateValue();
  const [empty, setEmpty] = useState(false);

  let displayOrders = null;

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          if (snapshot.empty) {
            setEmpty(true);
          } else {
            setOrders(
              snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
            );
            setEmpty(false);
          }
        });
    } else {
      setOrders([]);
      setEmpty(true);
    }
  }, [user]);

  if (orders.length > 0 && !empty) {
    displayOrders = (
      <React.Fragment>
        {
          <CurrencyFormat
            renderText={(value) => (
              <h3 className="orders__total">Total Spent: {value}</h3>
            )}
            decimalScale={2}
            value={orders.reduce(
              (prev, curr) => prev + curr.data.amount / 100,
              0
            )}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"$"}
          />
        }
        <div className="orders__order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </React.Fragment>
    );
  } else {
    displayOrders = (
      <h3 className="orders__progress">
        <CircularProgress />
      </h3>
    );
  }

  if (empty) {
    displayOrders = <h3 className="orders__total">No orders!</h3>;
  }

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      {displayOrders}
    </div>
  );
};

export default Orders;
