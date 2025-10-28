import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image alt="logo" src="/logo.png" width={100} height={50} />
      </Link>
      <nav>
        <ul className={styles["nav-list"]}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/men">Men</Link>
          </li>
          <li>
            <Link href="/women">Women</Link>
          </li>
          <li>
            <Link href="/jewelery">Jewelery</Link>
          </li>
          <li>
            <Link href="/electronics">Electronics</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <Link href="/cart">Cart</Link>
    </header>
  );
};
export default Header;
