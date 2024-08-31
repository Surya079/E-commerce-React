import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Products } from "./pages/Products";
import Footer from "./components/Footer";
import { ScrollTop } from "./components/ScrollTop";
// Import Images

import menbanner from "./assets/men-banner.jpg";
import womenbanner from "./assets/woemn-banner.jpg";
import kidbanner from "./assets/kids-banner.jpg";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <ScrollTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mens"
            element={<Category Category="men" banner={menbanner} />}
          />
          <Route
            path="/womens"
            element={<Category Category="womens" banner={womenbanner} />}
          />
          <Route
            path="/kids"
            element={<Category Category="kids" banner={kidbanner} />}
          />
          <Route path="/products/:productId" element={<Products />}></Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
