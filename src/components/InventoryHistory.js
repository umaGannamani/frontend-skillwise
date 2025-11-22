import React, { useEffect, useState } from "react";

export default function InventoryHistory({ product, onClose }) {
  const [history, setHistory] = useState([]);
  
  useEffect(() => {
  const fetchHistory = async () => {
    const res = await fetch(
      `http://localhost:5000/api/products/${product.id}/history`
    );
    const data = await res.json();
    setHistory(data);
  };

  
    fetchHistory();
  }, [product.id]);

  return (
    <div className="sidebar">
      <h3>Inventory History: {product.name}</h3>
      <button onClick={onClose}>Close</button>
      <ul>
        {history.map((h) => (
          <li key={h.id}>
            {h.change_date}: {h.old_quantity} → {h.new_quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
