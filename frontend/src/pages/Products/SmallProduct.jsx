import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";
import styles from "./SmallProduct.module.css";

const SmallProduct = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <HeartIcon product={product} />
      </div>

      <div className={styles.details}>
        <Link to={`/product/${product._id}`}>
          <h2 className={styles.productTitle}>
            <div>{product.name}</div>
            <span className={styles.priceTag}>₹{product.price}</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default SmallProduct;
