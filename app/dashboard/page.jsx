import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import RightCard from "../ui/dashboard/rightCard/rightCard";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainSection}>
        <div className={styles.card}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.transactions}>
          <Transactions />
        </div>
        <div className={styles.chart}>
          <Chart />
        </div>
      </div>
      <div className={styles.rightSec}>
        <RightCard />
      </div>
    </div>
  );
};

export default Dashboard;
