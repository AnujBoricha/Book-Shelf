import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import {commerce} from './lib/commerce';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import BookHolder from './components/Cart/Cart';
/* import Checkout from './components/CheckoutForm/Checkout/Checkout'; */
import ProductView from './components/ProductView/ProductView';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import JungleBook from './Shelf/JungleBook';


  const App = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
    const [book, setBook] = useState({});
    
  
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
  
      setProducts(data);
    };
  
    const fetchBook = async () => {
      setBook(await commerce.products.retrieve());
    };
  
    const handleAddToShelf = async (productId, quantity) => {
      const item = await commerce.book.add(productId, quantity);
  
      setBook(item.book);
    };
  
    const handleUpdateShelfQty = async (lineItemId, quantity) => {
      const response = await commerce.book.update(lineItemId, { quantity });
  
      setBook(response.book);
    };
  
    const handleRemoveFromShelf = async (lineItemId) => {
      const response = await commerce.book.remove(lineItemId);
  
      setBook(response.book);
    };
  
    const handleEmptyShelf = async () => {
      const response = await commerce.book.empty();
  
      setBook(response.book);
    };
  
    const refreshBook = async () => {
      const newBook = await commerce.book.refresh();
  
      setBook(newBook);
    };
  
    /* const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
      try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
  
        setOrder(incomingOrder);
  
        refreshCart();
      } catch (error) {
        setErrorMessage(error.data.error.message);
      }
    }; */
  
    useEffect(() => {
      fetchProducts();
      fetchBook();
    }, []);
  
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  
    return (
      <div>
      <Router>
        <div style={{ display: 'flex' }}>
          <CssBaseline />
          <Navbar totalItems={book.total_items} handleDrawerToggle={handleDrawerToggle} />
          <Switch>
            <Route exact path="/">
              <Products products={products} onAddToCart={handleAddToShelf} handleUpdateCartQty />
            </Route>
            <Route exact path="/cart">
              <BookHolder cart={book} onUpdateBookHolder={handleUpdateShelfQty} onRemoveFromBookHolder={handleRemoveFromShelf} onEmptyBookHolder={handleEmptyShelf} />
            </Route>
            {/* <Route path="/checkout" exact>
              <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
            </Route> */}
            <Route path="/product-view/:id" exact>
              <ProductView />
            </Route>
            <Route path="/JungleBook" exact>
              <JungleBook />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
      </div>
    );
  };
  
  export default App;
  