import { useRef } from "react";

const UseRef = () => {
  const contadorCarrito = useRef(0);

  function agregarAlCarrito() {
    contadorCarrito.current = contadorCarrito.current + 1;
    console.log(contadorCarrito.current);
  }

  return (
    <div>
      <h3>Productos Drop en el Carrito: {contadorCarrito.current}</h3>
      <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
    </div>
  );
};

export default UseRef;
