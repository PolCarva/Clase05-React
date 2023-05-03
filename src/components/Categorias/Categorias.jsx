import { useState, useEffect } from "react";

const Categorias = () => {
  const [categoria, setCategoria] = useState("Productos");
  useEffect(() => {
    document.title = `Categoría: ${categoria}`
  }, [categoria]);

  const handleClick = (categoria) => {
    setCategoria(categoria)
  }

  return (
    <div>
      <h2>Categoría de Productos:</h2>
      <button onClick={() => handleClick('Verduras')}> Verduras </button>
      <button onClick={() => handleClick('Carnes')}> Carnes </button>
      <button onClick={() => handleClick('Lácteos')}> Lácteos </button>
      <button onClick={() => handleClick('Limpieza')}> Limpieza </button>
    </div>
  );
};

export default Categorias;
