import React from "react";

export default function ExportButton() {
  const handleExport = () => {
    window.open("http://localhost:5000/api/products/export", "_blank");
  };

  return <button onClick={handleExport}>Export CSV</button>;
}
