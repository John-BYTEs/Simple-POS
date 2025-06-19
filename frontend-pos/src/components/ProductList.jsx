import ProductCard from "./ProductCard";

const ProductList = ({ products, onAdd, onSub }) => (
  <div className="col-span-2 bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Products</h2>
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} onSub={onSub}/>
      ))}
    </div>
  </div>
);
export default ProductList;
