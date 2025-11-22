import React, { useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import InventoryHistory from "./InventoryHistory";

export default function ProductTable({ searchQuery }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await fetch("https://backend-skillwise.onrender.com/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p) => (
            <ProductRow
              key={p.id}
              product={p}
              fetchProducts={fetchProducts}
              onViewHistory={() => setSelectedProduct(p)}
            />
          ))}
        </tbody>
      </table>
      {selectedProduct && (
        <InventoryHistory
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
