import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <ToastContainer />
      <Navigation className={styles.navigation} />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
