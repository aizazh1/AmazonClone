import React from "react";
import CustomButton from "./CustomButton";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Product = ({ id, title, image, price, rating, toastHandler }) => {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    toastHandler();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className="product__rating">
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
      </div>

      <img src={image} alt={title} />

      <CustomButton onClick={addToBasket}>Add to Basket</CustomButton>
    </div>
  );
};

export default Product;
