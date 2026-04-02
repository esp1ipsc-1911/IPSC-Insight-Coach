import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      if (mode === "register") {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Bruker opprettet!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Innlogget!");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>IPSC Insight Coach</h1>

      <input
        placeholder="E-post"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Passord"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>
        {mode === "login" ? "Logg inn" : "Registrer"}
      </button>

      <br /><br />

      <button onClick={() => setMode(mode === "login" ? "register" : "login")}>
        Bytt til {mode === "login" ? "Registrer" : "Login"}
      </button>

      <p>{message}</p>
    </div>
  );
}
