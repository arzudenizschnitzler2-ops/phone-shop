"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  icon: string;
};

const products: Product[] = [
  { id: 1, name: "iPhone Case", price: 19.99, description: "Stylische Schutzhülle für dein Smartphone.", icon: "📱" },
  { id: 2, name: "Panzerglas", price: 9.99, description: "Extra Schutz für dein Display.", icon: "🛡️" },
  { id: 3, name: "USB-C Ladekabel", price: 14.99, description: "Schnelles Laden für dein Handy.", icon: "🔌" },
  { id: 4, name: "Smart Ring Charger", price: 39.99, description: "Kabelloses Ladegerät für Smart Rings.", icon: "💍" },
  { id: 5, name: "Magnetic Phone Grip", price: 19.99, description: "Magnetischer Handyhalter für besseren Halt.", icon: "🧲" },
];

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function handleLogin() {
    if (email === "test@test.de" && password === "123456") {
      setLoggedIn(true);
    } else {
      alert("Falsche E-Mail oder Passwort.");
    }
  }

  function handlePay() {
    setShowThanks(true);
    setShowPayment(false);
  }

  return (
    <main style={styles.main}>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>Phone Shop</h2>

        <div style={styles.navLinks}>
          <button style={styles.navButton} onClick={() => goTo("startseite")}>
            Startseite
          </button>
          <button style={styles.navButton} onClick={() => goTo("warenkorb")}>
            Warenkorb
          </button>
          <button style={styles.navButton} onClick={() => goTo("login")}>
            Login
          </button>
        </div>
      </nav>

      <header id="startseite" style={styles.header}>
        <h1 style={styles.title}>Phone Shop</h1>
        <p style={styles.subtitle}>Modernes Zubehör für dein Smartphone</p>
      </header>

      <section style={styles.container}>
        <div id="login" style={styles.loginBox}>
          <h2>Login</h2>

          <p style={styles.demoText}>
            Demo Login: test@test.de | Passwort: 123456
          </p>

          <input
            style={styles.input}
            type="email"
            placeholder="test@test.de"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="123456"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button style={styles.primaryButton} onClick={handleLogin}>
            Einloggen
          </button>

          {loggedIn && (
            <div style={styles.welcomeBox}>
              <h3>Willkommen bei Phone Shop 💙</h3>
              <p>Du kannst jetzt Produkte in den Warenkorb legen.</p>
            </div>
          )}
        </div>

        <h2 style={styles.productTitle}>Produkte</h2>

        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <div style={styles.icon}>{product.icon}</div>
              <h3>{product.name}</h3>
              <p style={styles.desc}>{product.description}</p>
              <h2 style={styles.price}>{product.price.toFixed(2)} €</h2>

              <button
                style={styles.cartButton}
                onClick={() => {
                  setCart([...cart, product]);
                  setShowThanks(false);
                }}
              >
                In den Warenkorb
              </button>
            </div>
          ))}
        </div>

        <div id="warenkorb" style={styles.cartBox}>
          <h2>🛒 Warenkorb ({cart.length})</h2>

          {cart.length === 0 ? (
            <p style={styles.desc}>Dein Warenkorb ist leer.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} style={styles.cartItem}>
                  <span>{item.icon}</span>
                  <strong>{item.name}</strong>
                  <span>{item.price.toFixed(2)} €</span>
                </div>
              ))}

              <div style={styles.total}>
                <strong>Gesamt:</strong>
                <strong>{total.toFixed(2)} €</strong>
              </div>

              <button
                style={styles.clearButton}
                onClick={() => {
                  setCart([]);
                  setShowPayment(false);
                  setShowThanks(false);
                }}
              >
                Warenkorb leeren
              </button>

              <button
                style={styles.checkoutButton}
                onClick={() => {
                  setShowPayment(true);
                  setShowThanks(false);
                }}
              >
                Zur Kasse gehen
              </button>

              {showPayment && (
                <div style={styles.paymentBox}>
                  <h3>Zahlung</h3>
                  <p style={styles.desc}>
                    Bitte bestätige deine Bestellung.
                  </p>

                  <button style={styles.payButton} onClick={handlePay}>
                    Jetzt bezahlen
                  </button>
                </div>
              )}

              {showThanks && (
                <div style={styles.thanksBox}>
                  Vielen Dank für Ihren Einkauf! 🎉
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <footer style={styles.footer}>© 2026 Phone Shop</footer>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f8fafc, #dbeafe)",
    fontFamily: "Arial, sans-serif",
    color: "#0f172a",
  },
  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    background: "white",
    padding: "18px 55px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 18px rgba(15,23,42,0.08)",
  },
  logo: {
    margin: 0,
    color: "#2563eb",
  },
  navLinks: {
    display: "flex",
    gap: 14,
  },
  navButton: {
    border: "none",
    background: "#eff6ff",
    color: "#1e3a8a",
    padding: "10px 16px",
    borderRadius: 12,
    fontWeight: "bold",
    cursor: "pointer",
  },
  header: {
    padding: "55px",
    background: "linear-gradient(135deg, #0f172a, #2563eb)",
    color: "white",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  title: {
    fontSize: 52,
    margin: 0,
  },
  subtitle: {
    fontSize: 19,
    opacity: 0.9,
  },
  container: {
    padding: "35px 55px",
  },
  loginBox: {
    background: "white",
    padding: 30,
    borderRadius: 24,
    boxShadow: "0 15px 35px rgba(15,23,42,0.12)",
    marginBottom: 35,
  },
  demoText: {
    color: "#64748b",
    fontSize: 14,
    marginBottom: 12,
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    border: "1px solid #cbd5e1",
    fontSize: 16,
    background: "white",
    color: "black",
  },
  primaryButton: {
    width: "100%",
    padding: 15,
    borderRadius: 12,
    border: "none",
    background: "#2563eb",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  welcomeBox: {
    marginTop: 18,
    padding: 18,
    borderRadius: 16,
    background: "#eff6ff",
    color: "#1e3a8a",
  },
  productTitle: {
    fontSize: 34,
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 24,
  },
  card: {
    background: "white",
    width: 250,
    padding: 25,
    borderRadius: 24,
    boxShadow: "0 15px 30px rgba(15,23,42,0.10)",
  },
  icon: {
    fontSize: 38,
  },
  desc: {
    color: "#64748b",
  },
  price: {
    color: "#2563eb",
  },
  cartButton: {
    padding: "12px 16px",
    borderRadius: 12,
    border: "none",
    background: "#0f172a",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  cartBox: {
    marginTop: 40,
    background: "white",
    padding: 30,
    borderRadius: 24,
    boxShadow: "0 15px 35px rgba(15,23,42,0.12)",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 14,
    background: "#f8fafc",
    marginBottom: 10,
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
    padding: 16,
    background: "#dbeafe",
    borderRadius: 14,
    marginTop: 16,
    marginBottom: 16,
  },
  clearButton: {
    padding: 13,
    borderRadius: 12,
    marginRight: 10,
    border: "1px solid #cbd5e1",
    background: "white",
    cursor: "pointer",
  },
  checkoutButton: {
    padding: 13,
    borderRadius: 12,
    border: "none",
    background: "#2563eb",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  paymentBox: {
    marginTop: 20,
    background: "#eff6ff",
    padding: 20,
    borderRadius: 16,
    border: "1px solid #bfdbfe",
  },
  payButton: {
    padding: 14,
    borderRadius: 12,
    border: "none",
    background: "#16a34a",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  thanksBox: {
    marginTop: 20,
    background: "#dcfce7",
    padding: 20,
    borderRadius: 16,
    color: "#166534",
    fontWeight: "bold",
  },
  footer: {
    textAlign: "center",
    padding: 25,
    color: "#64748b",
  },
};

