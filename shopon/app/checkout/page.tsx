"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import { clearCart } from "@/redux/slices/cartSlice";
import styles from "@/styles/checkout.module.css";
import Navigation from "@/components/Navigation";
import Image from "next/image";

interface FormData {
  name: string;
  address: string;
  cardNumber: string;
}

const Checkout: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    cardNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const calculateTotalPrice = (): number => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormData({
      name: "",
      address: "",
      cardNumber: "",
    });
    dispatch(clearCart());

    alert("Thank you for your purchase!");
    router.push("/men");
  };

  return (
    <div>
      <Navigation />
      <div className={styles.checkoutContainer}>
        <h1>Checkout</h1>
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item._id} className={styles.cartItem}>
              <Image src={item.image} alt={item.name} width={50} height={50} />
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
        <div className={styles.total}>
          <h3>Total: ${calculateTotalPrice()}</h3>
        </div>
        <form onSubmit={handleSubmit} className={styles.checkoutForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cardNumber" className={styles.label}>
              Credit Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.confirmButton}>
            Confirm Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
