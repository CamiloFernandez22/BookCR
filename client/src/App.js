import{browserRouter, Routes, Route,} from "react-router-dom";
import Home from "./pages/home/Home";
function App() {
  return (
    <browserRouter>
    //Aqui vamos a crear las rutas para todas las paginas que se van a crear
    <Routes>
      <Route path="/" element={<Home/>}/> //Aqui se llama al componente de home 
    </Routes>
    </browserRouter>
  );
}

export default App;
