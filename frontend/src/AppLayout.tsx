// src/AppLayout.tsx
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { login, signup, logout, isAuthenticated } from "./auth/auth";
import "./App.css";

export default function AppLayout() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    setAuthed(isAuthenticated());
  }, []);

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand">
          <span className="glint">SGEN</span>
        </Link>

        {/* right side */}
        <div className="topbar-right">
          {!authed ? (
            <>
              <button className="btn ghost topbar-btn" onClick={() => login()}>
                Log in
              </button>
              <button className="btn primary topbar-btn" onClick={() => signup()}>
                Sign up
              </button>
            </>
          ) : (
            <button className="btn ghost topbar-btn" onClick={() => logout()}>
              Log out
            </button>
          )}
        </div>
      </header>

      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
}