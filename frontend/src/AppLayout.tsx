import { Outlet, Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  login,
  signup,
  logout,
  isAuthenticated,
  getToken,
} from "./auth/auth";
import "./App.css";

export default function AppLayout() {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState<"create" | "rotate" | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");

  useEffect(() => {
    setAuthed(isAuthenticated());
  }, []);

  async function callApiKeyEndpoint(rotate: boolean) {
    const ok = window.confirm(
      rotate
        ? "Are you sure you want to regenerate your API key? This may invalidate the previous key."
        : "Are you sure you want to send your API key?"
    );
    if (!ok) return;

    setLoading(rotate ? "rotate" : "create");
    setStatusMessage("");

    try {
      const token = await getToken();
      if (!token) throw new Error("Missing Keycloak token. Log in again.");

      const res = await fetch("http://127.0.0.1:8000/v1/keys", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rotate }),
      });

      const text = await res.text();
      if (!res.ok) throw new Error(text);

      setStatusMessage(rotate ? "Key regenerated!" : "API Key sent!");
    } catch (e: any) {
      setStatusMessage(e?.message ?? "Request failed");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand">
          <span>SGEN</span>
        </Link>

        <nav className="topbar-nav">
          <NavLink to="/docs" className={({ isActive }) => `topbar-link ${isActive ? "is-active" : ""}`}>
            Documentation
          </NavLink>
          <NavLink to="/examples" className={({ isActive }) => `topbar-link ${isActive ? "is-active" : ""}`}>
            Examples
          </NavLink>
          <NavLink to="/privacy" className={({ isActive }) => `topbar-link ${isActive ? "is-active" : ""}`}>
            Privacy
          </NavLink>
          <NavLink to="/terms" className={({ isActive }) => `topbar-link ${isActive ? "is-active" : ""}`}>
            Terms
          </NavLink>
          <NavLink to="/licensing" className={({ isActive }) => `topbar-link ${isActive ? "is-active" : ""}`}>
            Licensing
          </NavLink>
        </nav>

        <div className="topbar-right">
          {/* API key buttons (left of auth buttons) */}
          {authed && (
            <div className="topbar-actions">
              <button
                className="btn ghost topbar-btn"
                disabled={loading !== null}
                onClick={() => callApiKeyEndpoint(false)}
              >
                {loading === "create" ? "Sending..." : "Send API Key"}
              </button>

              <button
                className="btn ghost topbar-btn"
                disabled={loading !== null}
                onClick={() => callApiKeyEndpoint(true)}
              >
                {loading === "rotate" ? "Regenerating..." : "Regenerate API Key"}
              </button>
            </div>
          )}

          {/* Auth buttons */}
          {!authed ? (
            <>
              <button className="btn ghost topbar-btn" onClick={() => login()}>
                Log in
              </button>
              <button className="btn ghost topbar-btn" onClick={() => signup()}>
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

      {/* optional status line (so success message isn't lost) */}
      {statusMessage && <div className="topbar-status">{statusMessage}</div>}

      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
}