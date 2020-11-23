import React from "react";
import "./Toast.css";
import DoneIcon from "@material-ui/icons/Done";

const Toast = ({ right }) => {
  return (
    <div className="toast" style={{ right: right }}>
      <div className="toast__iconContainer">
        <DoneIcon className='toast__icon' />
      </div>
      <p>Item Added to Basket!</p>
    </div>
  );
};

export default Toast;
