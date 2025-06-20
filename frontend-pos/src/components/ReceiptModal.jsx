import Modal from "react-modal";

export default function ReceiptModal({isOpen, onClose, cart, total, onPrint}){
  
  return (
    <>
      <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className="m-10 bg-blue-900 p-6 w-[50%] rounded-lg"
    overlayClassName="fixed inset-0 bg-opacity-10 backdrop-blur-xs flex justify-center items-start"
  >
    <div className="bg-white rounded">
      
      <div id="receipt">
        <div className="grid grid-cols-2 pt-4 m-2">
        <div>
          <h1 className="text-xl font-semibold text-gray-800 mb-4 text-start pl-5">Simple POS</h1>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-end pr-5">Receipt</h2>
        </div>
      </div>
      
    <div className="space-y-2 p-5">
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between pl-7">
          <span>{item.name} x {item.quantity}</span>
          <span>₱{(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <hr className="my-2" />
      <div className="flex justify-between font-bold text-gray-900 pl-5">
        <span>Total:</span>
        <span>₱{total.toFixed(2)}</span>
      </div>
    </div>
      </div>

    <div className="mt-6 flex justify-between p-5">
      <button
        onClick={onPrint}
        className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
      >
        Print
      </button>
      <button
        onClick={onClose}
        className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800"
      >
        Close
      </button>
    </div>
    </div>
  </Modal>
    </>
  )
}
