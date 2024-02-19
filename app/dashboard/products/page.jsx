import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "../../ui/dashboard/products/products.module.css";
import SearchNav from "@/app/ui/dashboard/searchNav/searchNav";
import Action from "@/app/ui/utils/action/action";
import Randomyear from "@/app/ui/utils/randomYear/randomyear";
import Image from "next/image";

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <SearchNav params={"Products"} button={true} />
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          <tr className={styles.userRow}>
            <td>
              <div className={styles.userData}>
                <Image
                  className={styles.userProfilePic}
                  src="/noproduct.jpg"
                  height={40}
                  width={40}
                />
                Owaise
              </div>
            </td>
            <td>owaise@gmail.com</td>
            <td>
              <Randomyear />
            </td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <Action />
            </td>
          </tr>
          <tr className={styles.userRow}>
            <td>
              <div className={styles.userData}>
                <Image
                  className={styles.userProfilePic}
                  src="/noproduct.jpg"
                  height={40}
                  width={40}
                />
                Joe
              </div>
            </td>
            <td>joe@gmail.com</td>
            <td>
              <Randomyear />
            </td>
            <td>Chief</td>
            <td>Active</td>
            <td>
              <Action />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.paginationType}>
        <Pagination />
      </div>
    </div>
  );
};

export default ProductPage;
