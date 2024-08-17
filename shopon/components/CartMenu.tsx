"use client";
import styles from "@/styles/CartMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

const CartMenu = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className={styles.cartMenu}>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul className={styles.cartItemsList}>
          {cartItems.map((item) => (
            <li key={item._id} className={styles.cartItem}>
              <Image src={item.image} alt={item.name} width={50} height={50} />
              <div className={styles.itemDetails}>
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <button
                className={styles.removeButton}
                onClick={() => dispatch(removeFromCart(item._id))}
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className={styles.checkoutButtonDiv}>
        <Link href="/checkout" passHref>
          <button className={styles.checkoutButton}>Go To Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartMenu;
