import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import CustomButton from "./CustomButton";
import { useStateValue } from "./StateProvider";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from '@material-ui/icons/StarBorder';

const CheckoutProduct = (props, ref) => {
  const { id, image, title, price, rating, hideButton } = props;
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct" ref={ref}>
      <img src={image} alt={title} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="rating_emoji" key={i}>
                <StarIcon style={{ fill: "#E1E15C" }} />
              </span>
            ))}
          {rating < 5 &&
            Array(5 - rating)
              .fill()
              .map((_, i) => (
                <span role="img" aria-label="rating_emoji" key={i}>
                  <StarBorderIcon style={{ fill: "#E1E15C" }}/>
                </span>
              ))}
        </div>
        {!hideButton && (
          <CustomButton onClick={removeFromBasket}>
            Remove from basket
          </CustomButton>
        )}
      </div>
    </div>
  );
};

export default forwardRef(CheckoutProduct);
