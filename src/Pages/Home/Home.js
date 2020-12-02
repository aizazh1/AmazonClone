import React, { useState } from "react";
import "./Home.css";
import {Product, Toast} from "../../Components/index";
import Carousel from "react-material-ui-carousel";
import bg1 from "../../images/bg1.jpg";
import bg2 from "../../images/bg2.jpg";
import bg3 from "../../images/bg3.jpg";
import bg4 from "../../images/bg4.jpg";
import bg5 from "../../images/bg5.jpg";

const products = [
  [
    {
      id: "12311211",
      title:
        "Maxboost Screen Protector for Apple iPhone Xs & iPhone X & iPhone 11 Pro (3 Packs, Clear) 0.25mm Tempered Glass Screen Protector with Advanced Clarity [3D Touch] Work w/Most Case 99% Touch Accurate",
      price: 11.85,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71zW4NXBIXL._AC_SL1500_.jpg",
      rating: 5,
    },
    {
      id: "12311215",
      title:
        "iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones",
      price: 56.63,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/718NVofDrCL._AC_UY218_.jpg",
    },
  ],
  [
    {
      id: "12311212",
      title: "Bose A20 Aviation Headset with Bluetooth Dual Plug Cable, Black",
      price: 11.98,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71ekWFCunfL._AC_UY218_.jpg",
    },
    {
      id: "12311213",
      title:
        "Samsung Galaxy Buds+ Plus, True Wireless Earbuds w/improved battery and call quality(Wireless Charging Case included), Black – US Version",
      price: 11.98,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/51ryw1he7xL._AC_UY218_.jpg",
    },
    {
      id: "12311214",
      title:
        "Sony Noise Cancelling Headphones WH1000XM3: Wireless Bluetooth Over the Ear Headset with Mic for Phone-Call and Alexa Voice Control - Industry Leading Active Noise ",
      price: 122.98,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51IdLe-+6kL._AC_UY218_.jpg",
    },
  ],
  [
    {
      id: "12311216",
      title:
        "Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way  Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC2",
      price: 545.55,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71sesDsw95L._AC_UY218_.jpg",
    },
  ],
];

const bgImages = [bg1, bg2, bg3, bg4, bg5];

const Home = () => {
  const [right, setRight] = useState(-300);

  const toastHandler = () => {
    setRight(0);
    setTimeout(() => {
      setRight(-300);
    }, 1000);
  };
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          autoPlay={false}
          indicators={false}
          className="home__carousel"
          navButtonsAlwaysVisible={true}
          navButtonsAlwaysInvisible={false}
        >
          {bgImages.map((item, i) => (
            <img
              key={i}
              src={item}
              alt={`Amazon Background ${i}`}
              className="home__image"
            />
          ))}
        </Carousel>
      </div>
      <div className="home__products">
        {products.map((row, index1) => (
          <div className="home__row" key={`${row}${index1}`}>
            {row.map((product, index2) => (
              <Product
                key={`${product.id}${index1}${index2}`}
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
                toastHandler={toastHandler}
              />
            ))}
          </div>
        ))}
      </div>
      <Toast right={right} />
    </div>
  );
};

export default Home;
