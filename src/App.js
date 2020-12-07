import './App.css';
import {useState , useEffect} from 'react';
import {commerce} from './Lib/Commerce';
import Products from './Components/Products/Products'
import Navbar from './Components/Navbar/Navbar'
function App() {

  const [products, setProducts] = useState([]);


  const fetchProducts = async()=>{
    const {data} =await commerce.products.list();

    setProducts(data);
  }

  useEffect(()=>{
    fetchProducts();
  } , []);
  
  console.log(products);

  return (
    <div className="App">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
