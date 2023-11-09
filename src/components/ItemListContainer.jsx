import ItemList from './ItemList';
import { Box } from '@chakra-ui/react';
import "./Styles.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = ()  => {

  const [productos, setProductos] = useState([])

  useEffect(() =>{
    const db = getFirestore()
     const itemsCollection = collection(db, "productos")

     getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProductos(docs)
     })
  },[])
  
 const {category} =useParams()
 const filteredProduct = productos.filter((producto) => producto.category === category);

    return(
        <>
        <Box className= "boxItemListContainer">
          {category ? <ItemList productos={filteredProduct} /> : <ItemList productos={productos} />}
        </Box>
            
        </>
    )
 }
  export default ItemListContainer;