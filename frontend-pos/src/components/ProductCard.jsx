
export default function ProductCard({product, onAdd, onSub}) {
  return (
    <>
      <div className="rounded-lg p-4 shadow-xl bg-amber-50 hover:shadow-md transition">
        <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
        <p className="text-green-600 font-semibold">
          ₱{product.price.toFixed(2)}
        </p>
        <button
          onClick={() => onAdd(product)}
          className="mt-3 px-3 pt-1 bg-green-500 text-white text-sm rounded-full hover:bg-green-600 mr-1"
        >
          <span class="material-symbols-outlined">add</span>
        </button>
        <button
          onClick={() => (product ? onSub(product) : disable())}
          className="mt-3 px-3 pt-1 bg-red-500 text-white text-sm rounded-full hover:bg-red-600"
        >
          <span class="material-symbols-outlined">remove</span>
        </button>
      </div>
    </>
  );
}
