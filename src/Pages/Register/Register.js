import React from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import {CustomButton} from "../../Components/index";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { LinearProgress } from "@material-ui/core";

const Register = () => {
  const history = useHistory();

  const register = (data, e) => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((auth) => {
        auth.user
          .updateProfile({ displayName: data.name })
          .catch((error) => alert(error));
        //success
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
          className="register__logo"
        />
      </Link>

      <div className="register__container">
        <h1>Register</h1>

        <Formik
          initialValues={{
            name: "",
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
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "Password must be greater that 5 characters";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
              setSubmitting(true);
              register(values);
            // }, 500);
          }}
          render={({ submitForm, isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                name="name"
                type="text"
                label="Name"
                className="register__input"
              />
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                placeholder="email@address.com"
                className="register__input"
              />
              <Field
                component={TextField}
                name="password"
                type="password"
                label="Password"
                className="register__input"
              />
              <CustomButton disabled={isSubmitting} onClick={submitForm}>
                <span>Register</span>
              </CustomButton>
              {isSubmitting && <LinearProgress/>}
            </Form>
          )}
        />

        <p className="register__info">
          By registering, you agree to AMAZON FAKE CLONE HAHA Conditions of Use
          & Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>
      </div>
    </div>
  );
};

export default Register;
