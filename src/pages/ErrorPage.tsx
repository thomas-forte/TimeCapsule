import styles from "./ErrorPage.module.css";
import { Door } from "../components/Door";
import outOfOrder from "../assets/out-of-order.jpg";

export const ErrorPage = () => {
  return (
    <>
      <Door />
      <div className={styles.outOfOrder}>
        <img src={outOfOrder} />
      </div>
    </>
  );
};
