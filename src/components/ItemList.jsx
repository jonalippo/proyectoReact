import Item from "./Item";

//Agregar el boton descripion para redireccionar al componente IntemDetail
const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((p) => {
        return <Item 
            key={p.id}
            id={p.id}
            name={p.name}
            description={p.description}
            price={p.price}
            category={p.category}   
        />;
      })}
    </>
  );
};

export default ItemList;
