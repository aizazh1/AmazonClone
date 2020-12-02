import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { CustomButton } from "../../Components/index";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { LinearProgress } from "@material-ui/core";

const Login = () => {
  const history = useHistory();

  const signIn = (data) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            signIn(values);
          }}
          render={({ submitForm, isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                placeholder="email@address.com"
                className="login__input"
              />
              <Field
                component={TextField}
                name="password"
                type="password"
                label="Password"
                className="login__input"
              />
              <CustomButton disabled={isSubmitting} onClick={submitForm}>
                <span>Sign In</span>
              </CustomButton>
              {isSubmitting && <LinearProgress />}
            </Form>
          )}
        />

        <p className="login__info">
          By signing-in you agree to AMAZON FAKE CLONE HAHA Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>

        <div className="login__registerButton">
          <CustomButton
            onClick={() => history.push("/register")}
            style={{ background: "white" }}
          >
            Create your Amazon Account
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
