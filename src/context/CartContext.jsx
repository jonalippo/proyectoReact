import { createContext, useState } from "react";

//creo un contexto que se va llamar cartContext, que va tener un valor inicial de null
export const CartContext = createContext({cart:[]}); //proveedor


export const CartContextProvider = ({ children }) => {
  //Espacio para crear estados, variables, fucniones,etc.

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if(!isInCart(item.id)){
      setCart(prev => [prev, {item, quantity}])
    } else {
      alert ('El producto ya fue agregado')
    }
  }

  const removeItem =(itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (itemId) => {
    return cart.some(productos => productos.id === itemId)
  }

  return (
    //ejecuta el proveedor, y le pasa los valoresa al children
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}> 
        {children}
    </CartContext.Provider>
  )
};
export default CartContextProvider;
