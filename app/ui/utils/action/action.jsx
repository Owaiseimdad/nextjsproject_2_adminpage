import { deleteProduct } from "@/app/lib/actions";
import styles from "./action.module.css";
import Link from "next/link";

const Action = ({ userId, actionFunction }) => {
  return (
    <div className={styles.container}>
      <Link href={`/dashboard/users/${userId}`}>
        <button className={`${styles.button} ${styles.view}`}>View</button>
      </Link>
      <form action={actionFunction}>
        <input name="id" value={userId} type="hidden" />
        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
      </form>
    </div>
  );
};

export default Action;
