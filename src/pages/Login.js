import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fehler, setFehler] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "test@test.de" && password === "123456") {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/");
    } else {
      setFehler("E-Mail oder Passwort ist falsch.");
    }
  }

  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
      }}
    >
      <div
        style={{
          width: "430px",
          background: "rgba(255,255,255,0.95)",
          padding: "38px",
          borderRadius: "28px",
          boxShadow: "0 22px 45px rgba(37,99,235,0.16)",
          border: "1px solid #dbeafe",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "26px" }}>
          <div style={{ fontSize: "46px", marginBottom: "8px" }}>🔐</div>
          <h1 style={{ margin: 0, color: "#1e3a8a", fontSize: "34px" }}>
            Willkommen zurück
          </h1>
          <p style={{ color: "#64748b", marginTop: "10px" }}>
            Melde dich in deinem Phone Shop an
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "14px",
              borderRadius: "14px",
              border: "1px solid #cbd5e1",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "14px",
              borderRadius: "14px",
              border: "1px solid #cbd5e1",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          {fehler && (
            <p style={{ color: "#ef4444", fontWeight: "bold" }}>{fehler}</p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "16px",
              background: "linear-gradient(90deg, #2563eb, #3b82f6)",
              color: "white",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 12px 25px rgba(37,99,235,0.3)",
              marginTop: "6px",
            }}
          >
            Einloggen
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "18px",
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            Demo: test@test.de / 123456
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;