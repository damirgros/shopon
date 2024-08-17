"use client";
import { FC } from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

interface Item {
  _id: string;
  name: string;
  price: number;
  image: string;
}

interface CardProps {
  item: Item;
}

const Card: FC<CardProps> = ({ item }) => {
  const { addToCart } = useCart();

  const onAddToCart = () => {
    addToCart(item);
    console.log("Adding to cart:", item);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={item.image} alt={item.name} width={300} height={300} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h2>{item.name}</h2>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <button onClick={onAddToCart} className={styles.addToCart}>
        <FaShoppingCart />
      </button>
    </div>
  );
};

export default Card;
