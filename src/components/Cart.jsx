import React from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { background } from "@chakra-ui/react";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = CartContext;

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay productos en el carrito</h1>
        <link to="/"  backgroundColor="red">
          Productos
        </link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()}>Limpiar carrito</button>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
};

export default Cart;
