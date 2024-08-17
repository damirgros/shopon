import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

import { CartProvider } from "../context/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
