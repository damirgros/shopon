"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Navigation.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartMenu from "./CartMenu";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Navigation = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
        </div>
        <div className={styles.center}>
          <h1>shopON</h1>
        </div>
        <div className={cartItems.length > 0 ? styles.cartIconFilled : styles.right}>
          <FaShoppingCart onClick={toggleCart} className={styles.cartIcon} />
          {isCartOpen && <CartMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
