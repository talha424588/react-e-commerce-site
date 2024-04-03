import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Home from './components/Home';
import AddProduct from './components/product/AddProduct';
import UpdateProduct from './components/product/UpdateProduct';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/update-product' element={<UpdateProduct/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
