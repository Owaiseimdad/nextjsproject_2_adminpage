import styles from "../../ui/dashboard/users/users.module.css";
import SearchNav from "@/app/ui/dashboard/searchNav/searchNav";
import Action from "@/app/ui/utils/action/action";
import Randomyear from "@/app/ui/utils/randomYear/randomyear";
import Image from "next/image";

const Users = () => {
  return (
    <div className={styles.container}>
      <SearchNav params={"User"} button={true} />
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.userRow}>
            <td>
              <div className={styles.userData}>
                <Image src="/noavatar.png" height={50} width={50} />
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
                <Image src="/noavatar.png" height={50} width={50} />
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
    </div>
  );
};

export default Users;
