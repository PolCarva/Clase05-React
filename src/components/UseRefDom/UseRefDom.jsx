import { useRef } from "react";

const UseRefDom = () => {
  const ref = useRef(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.textContent = "Este Texto Fue Modificado con useRef";
    }
  };

  return (
    <div>
      <h3>UseRef DOM</h3>
      <p ref={ref}>
        Este Hook nos permite acceder a elementos del DOM y modificarlos
      </p>
      <button onClick={handleClick}>Click para modificar el Dom</button>
    </div>
  );
};

export default UseRefDom;
