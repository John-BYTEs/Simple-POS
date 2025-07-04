import { useEffect, useState } from "react";

import ProductList from "./ProductList";
import Cart from "./Cart";
import "../App.css";
import * as Sentry from "@sentry/react";
import PrintReceipt from "./PrintReceipt";
import ConfirmModal from "./ConfirmModal";
import api from "./axiosAPI/axiosapi";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = () => {
    setLoading(true);
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  };

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
    setShowConfirm(true);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Sentry.ErrorBoundary fallback={"Something went wrong!"}>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-cyan-100 border-t-transparent"></div>
          </div>
        ) : (
          <div className="pt-10 font-mono grid grid-cols-1">
            <div className="mx-auto mt-15 grid grid-cols-3 gap-6">
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
            <ConfirmModal
              isOpen={showConfirm}
              onClose={() => {
                setShowConfirm(false);
              }}
              setCart={setCart}
              setTotal={total}
              cart={cart}
              total={total}
              onPrint={PrintReceipt}
              fetchStocks={fetchStocks}
            />
          </div>
        )}
      </Sentry.ErrorBoundary>
    </>
  );
};

export default Home;
