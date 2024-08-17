"use client";
import styles from "../styles/CartMenu.module.css";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

const CartMenu = () => {
  const { cartItems, removeFromCart } = useCart();

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
              <button className={styles.removeButton} onClick={() => removeFromCart(item._id)}>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartMenu;
