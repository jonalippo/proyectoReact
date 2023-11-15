import ItemList from "./ItemList";
import { Box } from "@chakra-ui/react";
import "./Styles.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");

    getDocs(itemsCollection).then((response) => {
      // const docs = snapshot.docs.map((doc) => doc.data())
      setTimeout(() => {
        setLoading(false);
        setProductos(
          response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }, 1);
    });
  }, []);

  const filteredProduct = productos.filter(
    (producto) => producto.category === category
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="titleProductos">Nuestros productos</h1>
      <Box className="boxItemListContainer">
        {category ? (
          <ItemList productos={filteredProduct} />
        ) : (
          <ItemList productos={productos} />
        )}
      </Box>
    </>
  );
};
export default ItemListContainer;
