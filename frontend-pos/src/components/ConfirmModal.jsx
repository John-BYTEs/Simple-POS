import { useState } from "react";
import Modal from "react-modal";
import ReceiptModal from "./ReceiptModal";
import PrintReceipt from "./PrintReceipt";
import axios from "axios";

export default function ConfirmModal({ isOpen, onClose, cart, total}) {
  const [showModal, setShowModal] = useState(false);

  const confirmOrder = () => {
    axios.post("http://localhost:8000/api/sales", { items: cart }).then(() => {
      setShowModal(true);
    });
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="m-10 mt-50 bg-orange-400 p-6 w-[40%] rounded-lg border-0 outline-0 shadow-sm"
        overlayClassName="fixed inset-0 bg-opacity-10 backdrop-blur-xs flex justify-center items-start"
      >
        <div className=" grid grid-rows-2">
          <div className=" text-center m-5 font-bold text-white">
            Place Order?
          </div>
          <div className=" grid grid-cols-2 text-center m-5 font-bold gap-3">
            <div>
              <button onClick={confirmOrder} className="rounded-full bg-orange-700 text-white px-7">Confirm</button>
            </div>
            <div>
              <button className="rounded-full bg-white text-red-700 px-7" onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
        <ReceiptModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          cart={cart}
          total={total}
          onPrint={PrintReceipt}
        />
      </Modal>
    </>
  );
}
