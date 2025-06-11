// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setChecking(false);
    });

    return () => unsub();
  }, []);

  if (checking) return <div className="text-center p-5">Loading...</div>;

  return user ? children : <Navigate to="/sign-in" />;
}
