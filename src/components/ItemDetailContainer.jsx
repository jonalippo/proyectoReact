import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { Box } from "@chakra-ui/react";
import "./Styles.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

const { id } = useParams()
const [producto, setProducto] = useState([])

useEffect(() => {
  const db = getFirestore()
  const oneItem = doc(db, "productos", `${id}`)

  getDoc(oneItem).then((response) => {
    const docs = snapshot.docs.map((doc) => doc.data())
    setProducto(response.docs((doc) => ({ id: doc.id, ...doc.data() })));

  })
},[])

    return (
        <>
        <Box className= "boxItemDetailContainer">
            <ItemDetail productos = {producto}/>
        </Box>
        </>
    )
}

export default ItemDetailContainer;