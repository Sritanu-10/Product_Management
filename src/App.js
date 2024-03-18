
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Layout from './Layout';

import Home from './Components/Home'
import AddProduct from './Components/AddProduct';
import About from './Components/About';
import Contact from './Components/Contact';
import Allproduct from './Components/Allproduct';
import EditProduct from './Components/EditProduct';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='AddProduct' element={<AddProduct/>}/>
      <Route path='Allproduct' element={<Allproduct/>}/>
      <Route path='editProduct/:id' element={<EditProduct/>}/>
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
