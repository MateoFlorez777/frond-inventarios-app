import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoInventario from "./inventario/ListadoInventario";
import Navegacion from "./plantilla/Navegacion";
import AgregarProducto from "./inventario/AgregarProducto";
import EditarProducto from "./inventario/EditarProducto";
import AgregarCita from "./citas/AgregarCita";
import CrearCitas from "./citas/CrearCitas";
import EditarCitas from "./citas/EditarCitas";
import Login from "./autenticacion/login";
import Register from "./autenticacion/register";



function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route exact path='/' element={<ListadoInventario />}/>
        <Route exact path='/agregar' element={<AgregarProducto />}/>
        <Route exact path='/editar/:id_Producto' element={<EditarProducto/>}/>
        <Route exact path='/cita' element={<AgregarCita/>}/>
        <Route exact path='/crearcitas' element={<CrearCitas/>}/>
        <Route exact path='/editarcita/:id_Cita' element={<EditarCitas/>}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
