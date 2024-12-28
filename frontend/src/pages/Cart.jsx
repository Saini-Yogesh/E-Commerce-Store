import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";
import styles from "./Cart.module.css";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <div className={styles.container}>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          Your cart is empty <Link to="/shop">Go To Shop</Link>
        </div>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.cartItemsWrapper}>
            <h1 className={styles.heading}>Shopping Cart</h1>

            {cartItems.map((item) => (
              <div key={item._id} className={styles.cartItem}>
                <div className={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.image}
                  />
                </div>

                <div className={styles.itemDetails}>
                  <Link to={`/product/${item._id}`} className={styles.itemName}>
                    {item.name}
                  </Link>

                  <div className={styles.itemBrand}>{item.brand}</div>
                  <div className={styles.itemPrice}>$ {item.price}</div>
                </div>

                <div className={styles.quantityWrapper}>
                  <select
                    className={styles.quantitySelect}
                    value={item.qty}
                    onChange={(e) =>
                      addToCartHandler(item, Number(e.target.value))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCartHandler(item._id)}
                >
                  <FaTrash className={styles.trashIcon} />
                </button>
              </div>
            ))}

            <div className={styles.cartSummary}>
              <h2 className={styles.summaryHeading}>
                Items ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              </h2>

              <div className={styles.totalPrice}>
                ${" "}
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </div>

              <button
                className={styles.checkoutButton}
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
