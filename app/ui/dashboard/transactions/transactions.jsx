import TableMenu from "./tableMenu/tableMenu";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.tabletitle}>Latest Transactions</h2>
      <table className={styles.transactionsTable}>
        <thead className={styles.transactionsTableHead}>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody className={styles.transactionsTableBody}>
          <TableMenu />
          <TableMenu />
          <TableMenu />
          <TableMenu />
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
