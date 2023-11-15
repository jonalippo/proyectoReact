import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { Box } from "@chakra-ui/react";
import "./Styles.css";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState();

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "productos", `${id}`);

    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setProducto({ id, ...docs });
      }
    });
  }, []);

  return (
    <>
      <Box className="boxItemDetailContainer">
        {producto ? <ItemDetail producto={producto} /> : <Loader />}
      </Box>
    </>
  );
};

export default ItemDetailContainer;
