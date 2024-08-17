"use client";
import { FC } from "react";
import Image from "next/image";
import styles from "@/styles/Card.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";

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
  const dispatch = useDispatch();

  const onAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addToCart(item));
    const button = e.currentTarget;
    button.classList.add(styles.clicked);

    setTimeout(() => {
      button.classList.remove(styles.clicked);
    }, 600);
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
