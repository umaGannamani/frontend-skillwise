import React, { useState } from "react";

export default function ProductRow({ product, fetchProducts, onViewHistory }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...product });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await fetch(`https://backend-skillwise.onrender.com/api/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setIsEditing(false);
    fetchProducts();
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure?")) return;
    await fetch(`https://backend-skillwise.onrender.com/api/products/${product.id}`, {
      method: "DELETE",
    });
    fetchProducts();
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        ) : (
          product.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        ) : (
          product.category
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
          />
        ) : (
          product.stock
        )}
      </td>
      <td style={{ color: product.stock === 0 ? "red" : "green" }}>
        {product.stock === 0 ? "Out of Stock" : "In Stock"}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={handleDelete}>Delete</button>
        <button onClick={onViewHistory}>History</button>
      </td>
    </tr>
  );
}
