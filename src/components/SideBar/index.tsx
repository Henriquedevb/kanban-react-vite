import { BiBook } from "react-icons/bi";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";

import styles from "./SideBar.module.css";
import { useState } from "react";

export default function SideBar() {
  const [dark, setDark] = useState(false);

  const handleClickDarkMode = () => {
    setDark(!dark);
  };

  return (
    <div data-testid="side-bar-component" className={styles.container}>
      <section id="title-sidebar" className={styles.titlePage}>
        <div className={styles.pointers}>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
        <h1>kanban</h1>
      </section>

      <section>
        <p className={styles.subTitle}>ALL BOARDS (8)</p>

        <div id="boards-button" className={styles.containerButtonsSideBar}>
          <button className={styles.buttonSideBarActive}>
            <BiBook width={80} /> Platform Launch
          </button>
          <span className={styles.buttonSideBarInactive}>
            <BiBook /> Marketing Plan
          </span>
          <span className={styles.buttonSideBarInactive}>
            <BiBook /> Roadmap
          </span>
          <span className={styles.buttonSideBarCreateNewBoard}>
            <BiBook /> + Create New Board
          </span>
        </div>
      </section>

      <span id="dark-mode-theme" className={styles.containerDarkMode}>
        <input
          onClick={handleClickDarkMode}
          type="checkbox"
          className={styles.checkBox}
          id="checkbox"
        />
        <BsSunFill />
        <label htmlFor="checkbox" className={styles.label}>
          <div className={styles.ball}></div>
        </label>
        <BsFillMoonStarsFill />
      </span>
      <span className={styles.hideSideBar}>
        <AiOutlineEyeInvisible />
        Hide Sidebar
      </span>
    </div>
  );
}
