import { useState } from "react";
import Modal from "react-modal";
import ReceiptModal from "./ReceiptModal";
import PrintReceipt from "./PrintReceipt";
import api from "./axiosAPI/axiosapi";

export default function ConfirmModal({ isOpen, onClose, cart, total, setCart, setTotal, fetchStocks}) {
  const [showModal, setShowModal] = useState(false);

  const confirmOrder = () => {
    api.post("/sales", { items: cart }).then(() => {
      setShowModal(true);
      onClose();
    });
  };

  const handleReceiptClose = () => {
  setShowModal(false);
  setCart([]);
  fetchStocks();
};

  return (
    <>
      <Modal
        isOpen={isOpen}
        className="m-10 mt-64 bg-cyan-400 p-6 w-[40%] rounded-lg border-0 outline-0 shadow-sm transition-all duration-100 transform -translate-y-2"
        overlayClassName="fixed inset-0 bg-opacity-10 backdrop-blur-xs flex justify-center items-start"
      >
        <div className=" grid grid-rows-2 font-mono">
          <div className=" text-center m-5 font-extrabold text-white ">
            Place Order?
          </div>
          <div className=" grid grid-cols-2 text-center m-5 font-bold gap-3">
            <div>
              <button onClick={confirmOrder} className="rounded-full bg-cyan-600 hover:bg-cyan-700 text-white px-7">Confirm</button>
            </div>
            <div>
              <button className="rounded-full bg-cyan-50 hover:bg-white text-red-600 px-7" onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
      </Modal>
      <ReceiptModal
          isOpen={showModal}
          onClose={handleReceiptClose}
          cart={cart}
          total={total}
          onPrint={PrintReceipt}
        />
    </>
  );
}
