import './App.css';
import {useState , useEffect} from 'react';
import {commerce} from './Lib/Commerce';
import Products from './Components/Products/Products'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Components/Cart/Cart';
function App() {

  const [cart, setCart] = useState({});

  const [products, setProducts] = useState([]);


  const fetchProducts = async()=>{
    const {data} =await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () =>{

    setCart(await commerce.cart.retrieve());

  }
  
  const handelAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);

  }

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  } , []);
  
  //console.log(products);
  console.log(cart)

  return (
    <div className="App">
      <Navbar totalItems = {cart.total_items} />
      {/*<Products products={products} onAddToCart={handelAddToCart}/>*/}
      <Cart cart={cart}/>
    </div>
  );
}

export default App;
