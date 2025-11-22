import React, { useRef } from "react";

export default function ImportButton() {
  const inputRef = useRef();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("csvFile", file);

    const res = await fetch("http://localhost:5000/api/products/import", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    alert(`Added: ${data.added}, Skipped: ${data.skipped}`);
  };

  return (
    <>
      <button onClick={() => inputRef.current.click()}>Import CSV</button>
      <input
        ref={inputRef}
        type="file"
        accept=".csv"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </>
  );
}
