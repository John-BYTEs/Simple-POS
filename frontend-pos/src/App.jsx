import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ReceiptModal from "./components/ReceiptModal";
import "./App.css";
import Modal from "react-modal";
import * as Sentry from "@sentry/react";

Modal.setAppElement("#root");

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res) => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) => item.id === product.id
        ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const subToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) => item.id === product.id
        ? { ...item, quantity: item.quantity - 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleSubmit = () => {
    axios.post("http://localhost:8000/api/sales", { items: cart }).then(() => {
      setShowModal(true);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
    <Sentry.ErrorBoundary fallback={"Something went wrong!"}>
      <div className="min-h-screen p-6 bg-gray-200 font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
        <ProductList products={products} onAdd={addToCart} onSub={subToCart} />
        <Cart cart={cart} total={total} onCheckout={handleSubmit} />
      </div>
      <ReceiptModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        cart={cart}
        total={total}
        onPrint={handlePrint}
      />
      </div>
    </Sentry.ErrorBoundary>
    </>
  );
};

export default App;
