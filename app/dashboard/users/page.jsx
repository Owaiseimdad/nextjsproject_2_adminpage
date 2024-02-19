import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "../../ui/dashboard/users/users.module.css";
import SearchNav from "@/app/ui/dashboard/searchNav/searchNav";
import Action from "@/app/ui/utils/action/action";
import Randomyear from "@/app/ui/utils/randomYear/randomyear";
import Image from "next/image";
import { fetchUser } from "@/app/lib/data";

const Users = async ({ searchParams }) => {
  const query = searchParams?.q || "";
  const users = await fetchUser(query);
  return (
    <div className={styles.container}>
      <SearchNav params={"Users"} button={true} />
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {users?.map((e) => {
            return (
              <tr className={styles.userRow}>
                <td>
                  <div className={styles.userData}>
                    <Image
                      className={styles.userProfilePic}
                      src={e.img || "/noavatar.png"}
                      height={40}
                      width={40}
                    />
                    {e.username}
                  </div>
                </td>
                <td>{e.email || "none"}</td>
                <td>{e.createdAt.toString().slice(4, 16)}</td>
                <td>{(e.isAdmin && "Admin") || "User"}</td>
                <td>{e.isActive && "Active"}</td>
                <td>
                  <Action userId={e.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.paginationType}>
        <Pagination />
      </div>
    </div>
  );
};

export default Users;
