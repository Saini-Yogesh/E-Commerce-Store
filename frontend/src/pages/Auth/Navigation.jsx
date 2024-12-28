import { useState, useRef, useEffect } from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/authSlice";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const favorites = useSelector((state) => state.favorites);
  const favoriteCount = favorites.length;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.navigationContainer}>
      <div className={styles.iconSection}>
        <Link to="/" className={styles.navLink}>
          <AiOutlineHome className={styles.icon} size={26} />
          <span className={styles.navItemName}>HOME</span>
        </Link>
        <Link to="/shop" className={styles.navLink}>
          <AiOutlineShopping className={styles.icon} size={26} />
          <span className={styles.navItemName}>SHOP</span>
        </Link>
        <Link to="/cart" className={`${styles.navLink} ${styles.relative}`}>
          <AiOutlineShoppingCart className={styles.icon} size={26} />
          <span className={styles.navItemName}>CART</span>
          {cartItems.length > 0 && (
            <span className={styles.Badge}>
              {cartItems.reduce((a, c) => a + c.qty, 0)}
            </span>
          )}
        </Link>
        <Link to="/favorite" className={`${styles.navLink} ${styles.relative}`}>
          <FaHeart className={styles.icon} size={20} />
          <span className={styles.navItemName}>FAVORITES</span>
          {favoriteCount > 0 && (
            <span className={styles.Badge}>{favoriteCount}</span>
          )}
        </Link>
      </div>

      <div className={styles.accountSection}>
        {userInfo ? (
          <div ref={dropdownRef}>
            <button onClick={toggleDropdown} className={styles.dropdownButton}>
              <AiOutlineUser className={styles.icon} size={45} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${styles.dropdownIcon} ${
                  dropdownOpen ? styles.rotateIcon : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className={styles.dropdownMenu}>
                {userInfo.isAdmin && (
                  <>
                    <li>
                      <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/admin/productlist">Products</Link>
                    </li>
                    <li>
                      <Link to="/admin/categorylist">Category</Link>
                    </li>
                    <li>
                      <Link to="/admin/orderlist">Orders</Link>
                    </li>
                    <li>
                      <Link to="/admin/userlist">Users</Link>
                    </li>
                  </>
                )}
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={logoutHandler}>Logout</button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className={styles.registerrLoginIcons}>
            <Link to="/login" className={styles.navLink}>
              <AiOutlineLogin className={styles.icon} size={26} />
              <span className={styles.navItemName}>LOGIN</span>
            </Link>
            <Link
              to="/register"
              className={[styles.navLink, styles.register].join(" ")}
            >
              <AiOutlineUserAdd size={26} />
              <span className={styles.navItemName}>REGISTER</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
