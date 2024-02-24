import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "../../ui/dashboard/products/products.module.css";
import SearchNav from "@/app/ui/dashboard/searchNav/searchNav";
import Action from "@/app/ui/utils/action/action";
import Randomyear from "@/app/ui/utils/randomYear/randomyear";
import Image from "next/image";
import { fetchProduct } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";

const ProductPage = async ({ searchParams }) => {
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const product = await fetchProduct(query, page);

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
          {product[0].map((prod) => (
            <tr className={styles.userRow}>
              <td>
                <div className={styles.userData}>
                  <Image
                    className={styles.userProfilePic}
                    src="/noproduct.jpg"
                    height={40}
                    width={40}
                  />
                  {prod.title}
                </div>
              </td>
              <td>{prod.desc}</td>
              <td>{prod.price}</td>
              <td>{prod.createdAt.toString().slice(4, 16)}</td>
              <td>{prod.stock}</td>
              <td>
                <Action userId={prod._id} actionFunction={deleteProduct} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.paginationType}>
        <Pagination count={product[1]} />
      </div>
    </div>
  );
};

export default ProductPage;
