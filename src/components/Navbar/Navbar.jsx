import Image from "next/image";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.navPng} src="/navbar.png" width={700} height={200} alt="prova" />
    </div>
  );
};

export default Navbar;
