import Item from "./Item";

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
