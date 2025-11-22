import React from "react";

export default function ExportButton() {
  const handleExport = () => {
    window.open("https://backend-skillwise.onrender.com/api/products/export", "_blank");
  };

  return <button onClick={handleExport}>Export CSV</button>;
}
