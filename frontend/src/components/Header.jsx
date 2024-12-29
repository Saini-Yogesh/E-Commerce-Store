import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";
import styles from "./Header.module.css";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1 className={styles.error}>ERROR</h1>;
  }

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.smallProducts}>
        <div className={styles.grid}>
          {data.slice(0, 2).map((product) => (
            <SmallProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
      <ProductCarousel />
    </div>
  );
};

export default Header;
