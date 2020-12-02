import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider/StateProvider";
import { getBasketTotal } from "../../StateProvider/reducer";
import { useHistory } from "react-router-dom";
import {CustomButton} from "../index";

const Subtotal = () => {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <CustomButton
        onClick={() => {
          history.push("/payment");
        }}
        disabled={basket.length <= 0||!user}
      >
        {!user ? "Sign In First!" : "Proceed to Checkout"}
      </CustomButton>
    </div>
  );
};

export default Subtotal;
