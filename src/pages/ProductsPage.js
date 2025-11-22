import React, { useState } from "react";
import ProductTable from "../components/ProductTable";
import ImportButton from "../components/ImportButton";
import ExportButton from "../components/ExportButton";
import "../styles.css";


export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="products-page">
      <h1>Inventory Management</h1>
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ImportButton />
        <ExportButton />
      </div>
      <ProductTable searchQuery={searchQuery} />
    </div>
  );
}
