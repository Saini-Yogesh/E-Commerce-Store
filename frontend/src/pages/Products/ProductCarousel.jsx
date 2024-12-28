import { useGetTopProductsQuery } from "../../redux/api/productApiSlice";
import Message from "../../components/Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import styles from "./ProductCarousel.module.css";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className={styles.carouselWrapper}>
      {isLoading ? null : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Slider {...settings} className={styles.slider}>
          {products.map(
            ({
              image,
              _id,
              name,
              price,
              description,
              brand,
              createdAt,
              numReviews,
              rating,
              quantity,
              countInStock,
            }) => (
              <div key={_id} className={styles.slide}>
                <img src={image} alt={name} className={styles.productImage} />

                <div className={styles.productDetails}>
                  <div className={styles.basicInfo}>
                    <p>{name}</p>
                    <p className={styles.price}>₹{price}</p>
                  </div>
                  <p className={styles.description}>
                    {description.substring(0, 170)}...
                  </p>
                  <div className={styles.additionalInfo}>
                    <div className={styles.infoColumn}>
                      <h1 className={styles.infoItem}>
                        <FaStore className={styles.icon} /> Brand: {brand}
                      </h1>
                      <h1 className={styles.infoItem}>
                        <FaClock className={styles.icon} /> Added:{" "}
                        {moment(createdAt).fromNow()}
                      </h1>
                      <h1 className={styles.infoItem}>
                        <FaStar className={styles.icon} /> Reviews: {numReviews}
                      </h1>
                    </div>

                    <div className={styles.infoColumn}>
                      <h1 className={styles.infoItem}>
                        <FaStar className={styles.icon} /> Ratings:{" "}
                        {Math.round(rating)}
                      </h1>
                      <h1 className={styles.infoItem}>
                        <FaShoppingCart className={styles.icon} /> Quantity:{" "}
                        {quantity}
                      </h1>
                      <h1 className={styles.infoItem}>
                        <FaBox className={styles.icon} /> In Stock:{" "}
                        {countInStock}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      )}
    </div>
  );
};

export default ProductCarousel;
