const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id } = producto;
  // Agregar producto
  const seleccionarProducto = id => {
    const producto = productos.find(producto => producto.id === id);
    agregarProducto([...carrito, producto]);
  };

  // Eliminar Producto
  const eliminarProducto = id => {
    const productos = carrito.filter(producto => producto.id !== id);
    agregarProducto(productos);
  };
  return (
    <div>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
