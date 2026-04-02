import { useState } from "react";
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [mode, setMode] = useState("login");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setMessage("");
    setLoading(true);

    try {
      if (mode === "register") {
        if (!inviteCode.trim()) {
          throw new Error("Du må skrive inn en invite code.");
        }

        const inviteRef = doc(db, "inviteCodes", inviteCode.trim());
        const inviteSnap = await getDoc(inviteRef);

        if (!inviteSnap.exists()) {
          throw new Error("Ugyldig invite code.");
        }

        const inviteData = inviteSnap.data();

        if (!inviteData.active) {
          throw new Error("Denne invite-koden er ikke aktiv.");
        }

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await setDoc(doc(db, "users", userCredential.user.uid), {
          email,
          inviteCode: inviteCode.trim(),
          createdAt: serverTimestamp(),
          role: "user",
        });

        setMessage("Bruker opprettet!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Innlogget!");
      }
    } catch (error) {
      setMessage(error.message || "Noe gikk galt.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 420 }}>
      <h1>IPSC Insight Coach</h1>

      <input
        placeholder="E-post"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 12 }}
      />

      <input
        placeholder="Passord"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 12 }}
      />

      {mode === "register" && (
        <input
          placeholder="Invite code"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 12 }}
        />
      )}

      <button onClick={handleSubmit} disabled={loading} style={{ padding: 10 }}>
        {loading
          ? "Jobber..."
          : mode === "login"
          ? "Logg inn"
          : "Registrer"}
      </button>

      <div style={{ height: 12 }} />

      <button
        onClick={() => setMode(mode === "login" ? "register" : "login")}
        disabled={loading}
        style={{ padding: 10 }}
      >
        Bytt til {mode === "login" ? "Registrer" : "Login"}
      </button>

      <p>{message}</p>
    </div>
  );
}
