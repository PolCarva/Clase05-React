import "./App.css";
import Counter from "./components/Counter/Counter";
import Categorias from "./components/Categorias/Categorias";
import UseRef from "./components/UseRef/UseRef";
import UseRefDom from "./components/UseRefDom/UseRefDom";
function App() {
  return (
    <>
      <h1>Clase 05</h1>
      <Counter stock={11} initial={1}/>
      <Categorias />
      <UseRef />
      <UseRefDom />
    </>
  );
}

export default App;
