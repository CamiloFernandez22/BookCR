import{BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
function App() {
  
  return (
    //Aqui vamos a crear las rutas para todas las paginas que se van a crear
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/> //Aqui se llama al componente de home 
      <Route path="/hotels" element={<List/>}/> //Aqui se llama al componente de list el cual se visulizara cuando se acceda al url de hotels.
    </Routes>
    </BrowserRouter>
  );
}

export default App;
