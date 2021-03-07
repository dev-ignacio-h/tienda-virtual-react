import './carrito.css';
import Producto from './Producto';

const Carrito = ({ carrito, agregarProducto }) => (
  <div className="carrito">
    <h2>Tu carrito de compras</h2>
    {carrito.length ? (
      carrito.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))
    ) : (
      <p>No hay nada en el carrito</p>
    )}
  </div>
);

export default Carrito;
