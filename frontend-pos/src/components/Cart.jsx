
export default function Cart({cart, total, onCheckout}){

  return(
    <>
      <div className="bg-white rounded-lg shadow p-6">
      <span className="material-symbols-outlined">shopping_cart</span>
      <div className="space-y-2">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <span>{item.name}</span>
            <span>
              {item.quantity > 0 && (
                <>
                  {item.quantity} x ₱{item.price.toFixed(2)} = ₱
                  {(item.quantity * item.price).toFixed(2)}
                </>
              )}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t pt-4 text-right">
        <span className="font-bold text-lg text-gray-800">
          Total: ₱{total.toFixed(2)}
        </span>
      </div>
      <button
        onClick={onCheckout}
        className="mt-6 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
      >
        Checkout
      </button>
    </div>
    </>
  )
}
