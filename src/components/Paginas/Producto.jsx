import { Link } from 'react-router-dom';

function Producto({ nombre, precio, id, imagen }) {
  return (
    <div className="producto-card">
      <img src={imagen} alt={nombre} className="producto-imagen" />
      <div className="producto-detalles">
        <h2>{nombre}</h2>
        <p>Precio: ${precio.toLocaleString('es-CL')}</p>
        <Link to={`/NuestrasDonas/${id}`} className="boton-ver-mas">Ver más</Link>
      </div>
    </div>
  );
}

export default Producto;
