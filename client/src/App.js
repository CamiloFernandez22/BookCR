import{BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/single_hotel_page/Hotel";
function App() {

  return (
    //Aqui vamos a crear las rutas para todas las paginas que se van a crear
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/> //Aqui se llama al componente de home 
      <Route path="/hotels" element={<List/>}/> //Aqui se llama al componente de list el cual se visulizara cuando se acceda al url de hotels.
      <Route path="/hotels/:id" element={<Hotel/>} />Aqui se llama al componente de hotel de manera singular por lo que se inlcuye el id unico del hotel en el URL.
    </Routes>
    </BrowserRouter>
  );
}

export default App;
