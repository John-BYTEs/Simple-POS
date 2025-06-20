
export default function ProductCard({product, onAdd, onSub}) {
  return (
    <>
      <div className="rounded-lg p-4 shadow-xl bg-amber-50 hover:shadow-md transition grid grid-rows4">

        <div className="row-span-3">
          <p className="text-lg font-medium text-gray-800">
          Item: <span className="text-blue-900 font-extrabold">{product.name}</span>
        </p>
        </div>

        <div className="row-span-3">
          <p className="text-green-600 font-semibold">
          Price: ₱{product.price.toFixed(2)}
        </p>
        </div>

        <div className="row-span-3">
          <p>
          Stocks: <span className="text-orange-500">{product.stock}</span>
        </p>
        </div>

        <div className="row-span-3">
          <button
          disabled={product.stock <= 0}
          onClick={() => onAdd(product)}
          className="mt-3 px-3 pt-1 bg-green-500 text-white text-sm rounded-full hover:bg-green-600 mr-1"
        >
          <span className="material-symbols-outlined">add</span>
        </button>

        <button
          onClick={() => onSub(product)}
          className="mt-3 px-3 pt-1 bg-red-500 text-white text-sm rounded-full hover:bg-red-600"
        >
          <span className="material-symbols-outlined">remove</span>
        </button>
        </div>

      </div>
    </>
  );
}
