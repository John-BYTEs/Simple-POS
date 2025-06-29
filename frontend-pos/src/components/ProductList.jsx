import ProductCard from "./ProductCard";

export default function ProductList({products, onAdd, onSub}) {
  return (
    <>
      <div className="col-span-2 bg-white rounded-lg shadow p-6 max-w-[850px]">
        <h2 className="text-2xl mb-4 text-gray-700 font-extrabold">Products</h2>
        <div className="max-h-[400px] overflow-y-auto">
          <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              key={`${product.id}-${product.stock}`}
              product={product}
              onAdd={onAdd}
              onSub={onSub}
            />
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
