import {Route , Routes} from 'react-router-dom';
import "./App.css";
import Home from './pages/Home';
import Products from './pages/Products';
import CreateProduct from './pages/CreateProduct';
import NotFound from './pages/NotFound';

const App = () => {
  return (
   <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/products' element = {<Products/>} />
        <Route path='/products/create' element = {<CreateProduct/>} />
        <Route path='/notfound' element = {<NotFound/>} />
        <Route path='*' element = {<h1 style={{color: "red"}}> Not found </h1>} /> 
   </Routes>
  )
}
export default App