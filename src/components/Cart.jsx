import { useContext } from "react";
import { useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Cart = () => {
  const { cart, clearCart, quantity, removeItem } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let totalAux = 0;
      cart.forEach((product) => {
        totalAux = product.price * product.quantity + totalAux;
      });
      setTotal(totalAux);
    };
    calculateTotal();
  }, [cart]);

  if (quantity === 0) {
    return (
      <div className="boxPagDefault">
        <h1 className="titlePagDefault">No hay productos en el carrito</h1>
        <Link to="/" className="buttonPageDefault">
          Productos
        </Link>
      </div>
    );
  } else {
    return (
      <div className="boxPagCart">
        <div className="containerGeneral">
          {cart.map((p) => (
            <div key={p.id} className="containerProducts">
              <ul className="itemProduct">
                <li>
                  {" "}
                  - {p.name} x {p.quantity} Unidades $ {p.price} = Subtotal $
                  {p.price * p.quantity}{" "}
                </li>
                <Button
                  onClick={() => {
                    removeItem(p.id);
                  }}
                  className="buttonTacho"
                >
                  {" "}
                  <DeleteIcon w={8} h={8} />
                </Button>
              </ul>
            </div>
          ))}

          <h3 className="totalCart">TOTAL: $ {total}</h3>
          <div className="containerBotones">
            <Button onClick={() => clearCart()} className="buttonInf">
              Limpiar carrito
            </Button>
            <Link to={"/form"}>
              <Button onClick={() => clearCart()} className="buttonInf">
                Terminar compra
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};
export default Cart;
