function InfoKarte({ titel, text }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "20px",
        width: "280px",
        boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
        border: "1px solid #e5eefc"
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: "12px", color: "#1e3a8a" }}>{titel}</h3>
      <p style={{ margin: 0, lineHeight: "1.6", color: "#475569" }}>{text}</p>
    </div>
  );
}

export default InfoKarte;