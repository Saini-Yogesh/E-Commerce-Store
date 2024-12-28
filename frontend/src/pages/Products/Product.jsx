import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  return (
    <div className="w-[30rem] ml-[2rem] p-3 relative">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-[30rem] rounded"
        />
        <HeartIcon product={product} />
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div className="text-lg">{product.name}</div>
            <span
              style={{
                backgroundColor: "#ffe4e6", // bg-pink-100
                color: "#db2777", // text-pink-800
                fontSize: "0.875rem", // text-sm
                fontWeight: 500, // font-medium
                padding: ".1rem .8rem", // px-3.5 py-0.5
                borderRadius: "50px", // rounded-full
                minWidth: "6rem", // min-w-[5rem]
                textAlign: "center", // Ensure text is centered
              }}
            >
              ₹ {product.price}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
