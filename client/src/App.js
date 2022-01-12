import { Routes, Route } from "react-router-dom";
import {
  Home,
  Lifestyle,
  Loyalty,
  Cart,
  Product,
  ProductDetail,
  PaymentSuccess,
  PaymentCancel,
} from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="lifestyle" element={<Lifestyle />} />
          <Route path="loyalty" element={<Loyalty />} />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<PaymentSuccess />} />
          <Route path="cancel" element={<PaymentCancel />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
