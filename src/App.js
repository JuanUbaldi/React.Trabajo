import "./App.css";

import ItemListContainer from "./components/ItemListCointener/ItemListContainer";
import Navbar from "./components/NavBar/Navbar";
import ItemDetailCont from "./components/ItemDetailCont/ItemDetailCont";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./storage/CartContext";
import Cartview from "./components/Cartview/Cartview";
import { getItemFromAPI } from "./mockService/mockService";
import Gracias from "./components/Gracias";

function App() {
  getItemFromAPI();
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <Navbar />
          </header>

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainer />}
            />
            <Route path="/detalle/:id" element={<ItemDetailCont />} />
            <Route path="/cart" element={<Cartview />} />
            <Route path="*" element={<h1> Not Found</h1>} />
            <Route path="/checkout/:orderId" element={<Gracias />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      <footer className="footer">
        <div>
          <a href="https://es-la.facebook.com/">
            <img src="/Img/facebook.png" alt="facebook" target="_blank"></img>
          </a>
          <a href="https://www.instagram.com/">
            <img src="/Img/insta.png" alt="instagram" target="_blank"></img>
          </a>
          <h3>telefono:123456</h3>
          <h3>Email: ubaldijuan@gmail.com</h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
