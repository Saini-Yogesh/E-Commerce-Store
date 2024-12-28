import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-4 mt-10">
            <h1 className="text-[3rem] text-center">Special Products</h1>

            <Link
              to="/shop"
              className="bg-pink-600 font-bold rounded-full py-2 px-10"
            >
              Shop
            </Link>
          </div>

          <div>
            <div className="flex flex-wrap justify-center items-center">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
