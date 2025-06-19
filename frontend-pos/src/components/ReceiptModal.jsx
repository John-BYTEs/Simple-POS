import Modal from "react-modal";

const ReceiptModal = ({ isOpen, onClose, cart, total, onPrint }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className="max-w-md mx-auto mt-24 bg-white rounded-lg p-6 shadow-xl outline-none"
    overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50"
  >
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Receipt</h2>
    <div id="receipt" className="space-y-2">
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between">
          <span>{item.name} x {item.quantity}</span>
          <span>₱{(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <hr className="my-2" />
      <div className="flex justify-between font-bold text-gray-900">
        <span>Total:</span>
        <span>₱{total.toFixed(2)}</span>
      </div>
    </div>

    <div className="mt-6 flex justify-between">
      <button
        onClick={onPrint}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Print
      </button>
      <button
        onClick={onClose}
        className="px-4 py-2 text-red-500 hover:underline"
      >
        Close
      </button>
    </div>
  </Modal>
);
export default ReceiptModal;
