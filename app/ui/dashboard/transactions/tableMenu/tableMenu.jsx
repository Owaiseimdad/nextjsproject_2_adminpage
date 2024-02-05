import styles from "./tableMenu.module.css";
import Image from "next/image";

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function randomStatus(status) {
  const randomIndex = Math.floor(Math.random() * status.length);
  return status[randomIndex];
}

const TableMenu = () => {
  const randomDateValue = randomDate(
    new Date(2012, 0, 1),
    new Date()
  ).toLocaleDateString();

  const status1 = randomStatus(["pending", "cancelled", "done"]);

  const number = Math.floor(Math.random() * 1000);

  return (
    <tr className={styles.container}>
      <td className={styles.rowvalue}>
        <div className={styles.uservalue}>
          <Image
            src="/noavatar.png"
            height={40}
            width={40}
            className={styles.userImage}
            alt=""
          />
          Owaise
        </div>
      </td>
      <td className={styles.rowvalue}>
        <span
          className={`${styles.status} ${
            (status1 === "done" && styles.done) ||
            (status1 === "pending" && styles.pending) ||
            (status1 === "cancelled" && styles.cancelled)
          }`}
        >
          {status1}
        </span>
      </td>
      <td className={styles.rowvalue}>{randomDateValue}</td>
      <td className={styles.rowvalue}>{number}</td>
    </tr>
  );
};

export default TableMenu;
