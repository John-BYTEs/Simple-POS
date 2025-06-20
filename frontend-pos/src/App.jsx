import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ReceiptModal from "./components/ReceiptModal";
import "./App.css";
import * as Sentry from "@sentry/react";
import PrintReceipt from "./components/PrintReceipt";
import Header from "./components/Layout/Header";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    const stockAvailable = product.stock - (existing?.quantity || 0);

    if (stockAvailable <= 0) return;

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const subToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (!existing || existing.quantity <= 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleSubmit = () => {
    axios.post("http://localhost:8000/api/sales", { items: cart }).then(() => {
      setShowModal(true);
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Sentry.ErrorBoundary fallback={"Something went wrong!"}>
        <Header />
        <div className="min-h-screen pt-10 bg-gray-200 font-mono">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
            <ProductList
              products={products}
              onAdd={addToCart}
              onSub={subToCart}
            />
            <Cart
              products={products}
              cart={cart}
              total={total}
              onCheckout={handleSubmit}
            />
          </div>
          <ReceiptModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            cart={cart}
            total={total}
            onPrint={PrintReceipt}
          />
        </div>
      </Sentry.ErrorBoundary>
    </>
  );
};

export default App;
