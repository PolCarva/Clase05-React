import { useState, useEffect } from "react";

const Counter = ({ stock, initial }) => {
  const [contador, setContador] = useState(initial);

  const [color, setColor] = useState("black");

  useEffect(() => {
    console.log("Use Effect");
    if (contador > 5) {
      setColor("red");
    } else {
      setColor("black");
    }
  }, [contador]);

  const decrementarContador = () => {
    if (contador > 1) {
      setContador(contador - initial);
    }
  };

  const incrementarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const agregarAlCarrito = () => {
    console.log(`Agregados ${contador} items`);
  };
  return (
    <div>
      <button onClick={decrementarContador}> - </button>
      <strong> {contador} </strong>
      <button onClick={incrementarContador}> + </button>
      <br />
      <br />
      <button onClick={agregarAlCarrito} style={{ color: color }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
