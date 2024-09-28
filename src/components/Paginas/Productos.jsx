import Producto from './Producto';
import NuestrosProductos from './../../NuestrosProductos';
import './Productos.css'; 

function Productos() {
  return (
    <div id="productos-container">
      {NuestrosProductos.map(prod => (
        <Producto key={prod.id} {...prod} />
      ))}
    </div>
  );
}

export default Productos;
