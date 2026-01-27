import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { login, signup, logout, isAuthenticated, getToken } from "./auth/auth";

function makeBits(len: number) {
  let s = "";
  for (let i = 0; i < len; i++) s += Math.random() > 0.5 ? "1" : "0";
  return s;
}

function chunk(s: string, size = 12) {
  const out: string[] = [];
  for (let i = 0; i < s.length; i += size) out.push(s.slice(i, i + size));
  return out;
}

function BinaryBox({
  title = "SGEN",
  subtitle = "Bits rearranging into combinations of itself",
}: {
  title?: string;
  subtitle?: string;
}) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [bits, setBits] = useState<string[]>([]);
  const timerRef = useRef<number | null>(null);

  // Controls density of bits
  const baseLen = useMemo(() => 360, []);

  useEffect(() => {
    setBits(chunk(makeBits(baseLen), 18));
  }, [baseLen]);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
      return;
    }

    timerRef.current = window.setInterval(() => {
      setBits(chunk(makeBits(baseLen), 18));
    }, 65);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [active, baseLen]);

  return (
    <section className="bin-section">
      <div ref={boxRef} className={`bin-box ${active ? "is-active" : ""}`}>
        <div className="bin-head">
          <div className="bin-kicker">SCROLL MODULE</div>
          <h2 className="bin-title">{title}</h2>
          <p className="bin-subtitle">{subtitle}</p>
        </div>

        <div className="bin-screen" aria-hidden="true">
          {bits.map((line, i) => (
            <span className="bin-line" key={i}>
              {line}
            </span>
          ))}
        </div>

        <div className="bin-footer">
          <span className="bin-pill">{active ? "LIVE" : "IDLE"}</span>
          <span className="bin-hint">Scroll away to pause</span>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState<"create" | "rotate" | null>(null);
  // const [err, setErr] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");

  useEffect(() => {
    setAuthed(isAuthenticated());
  }, []);

  async function callApiKeyEndpoint(rotate: boolean) {
    // setErr("");
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

      if (!res.ok) {
        throw new Error(text);
      }
      setStatusMessage(rotate ? "Key regenerated!" : "API Key sent!");

    // } catch (e: any) {
    //   setErr(e?.message ?? String(e));
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="page">
      <main className="hero">
        <h1 className="title">
          Welcome to <span className="glint">SGEN</span>
        </h1>

        <p className="subtitle">
          {authed
            ? "You’re logged in via Keycloak"
            : "Log in or create an account through Keycloak."}
        </p>

        <div className="actions">
          {!authed ? (
            <>
              <button className="btn primary" onClick={() => login()}>
                Log in
              </button>
              <button className="btn ghost" onClick={() => signup()}>
                Sign up
              </button>
            </>
          ) : (
            <button className="btn ghost" onClick={() => logout()}>
              Log out
            </button>
          )}
        </div>

        {/* API key actions */}

        <div className="actions">
          {authed ? (
            <>
              <button
                className="btn primary" 
                disabled={!authed || loading !== null}
                onClick={() => callApiKeyEndpoint(false)}
              >
                {loading === "create" ? "Sending..." : "Send API Key"}
              </button>

              <button
                className="btn primary"
                disabled={!authed || loading !== null}
                onClick={() => callApiKeyEndpoint(true)}
              >
                {loading === "rotate" ? "Regenerating..." : "Regenerate"}
              </button>
            </>
          ) : (
            <p className="subtitle">Log in to get your API key</p>
          )}
        </div>
    {statusMessage && (
      <div
        style={{
          marginTop: 10,
          textAlign: "center",
          color: "rgba(255,255,255,0.75)",
          fontSize: 14,
        }}
        >
        {statusMessage}
      </div>
      )}
      </main>

      <div style={{ height: "60vh" }} />
      <BinaryBox />
      <div style={{ height: "70vh" }} />
    </div>
  );
}
