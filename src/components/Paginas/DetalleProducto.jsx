import NuestrosProductos from './../../NuestrosProductos';
import { useParams, Link } from "react-router-dom";
import './DetalleProducto.css'; // Asegúrate de importar los estilos correctamente

function DetalleProducto() {
  const { id } = useParams(); // Obtiene el id del producto de los parámetros de la ruta
  const producto = NuestrosProductos.find(prod => prod.id === parseInt(id)); // Busca el producto por id

  if (!producto) {
    return <h2>El producto no existe!</h2>;
  }

  return (
    <div className="detalle-producto">
      <h2>Detalle del producto</h2>
      
      <div className="producto-card">
        <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio.toLocaleString('es-CL')}</p> {/* Formato con separación de miles para Chile */}
      </div>

      {/* Botón para volver a la página de donas fuera de la tarjeta */}
      <Link to="/NuestrasDonas">
        <button className="btn-volver">Volver a Donas</button>
      </Link>
    </div>
  );
}

export default DetalleProducto;
