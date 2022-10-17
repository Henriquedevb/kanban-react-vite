import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sideBarContainer}>
        <SideBar />
      </div>
      <NavBar />
    </div>
  );
}
