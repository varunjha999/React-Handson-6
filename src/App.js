import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/style.css'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './Component/Home';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Student from './Component/Student';



function App() {
  return (
    
  <BrowserRouter>
 <Navbar/>
  <Routes>
    <Route  path="/Home" element={<Home/>} />
    <Route path="/Student" element={<Student/>} />
    <Route path="/Contact" element={<Contact/>} />
  </Routes>
  </BrowserRouter>
  );
}export default App;