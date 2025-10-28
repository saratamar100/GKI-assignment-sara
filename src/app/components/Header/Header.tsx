import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Link href="/">Shop</Link>
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
