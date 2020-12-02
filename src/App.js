import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Header} from "./Components/index";
import {Home, Checkout, Login, Payment, Orders, Register} from './Pages/index';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./StateProvider/StateProvider";

const promise = loadStripe(
  "pk_test_51HPvYTDbBitagA1QF9HfL1134JVSioXHsuO2JnBtUqKlm91WQLxxNxiKPOBx4JDWcO6dhd67wKDbfLKniLged39O00EXs6GSqx"
);

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
