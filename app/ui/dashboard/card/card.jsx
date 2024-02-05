import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  const number = Math.floor(Math.random() * 1000 + 1);
  const percent = Math.floor((number / 1000) * 100);
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={30} />
      <div className={styles.usertext}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>{number}</span>
        <span className={styles.detail}>
          <span
            className={`${styles.percent}  ${
              percent >= 35 ? styles.positive : styles.negative
            }`}
          >
            {percent}%
          </span>{" "}
          more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
