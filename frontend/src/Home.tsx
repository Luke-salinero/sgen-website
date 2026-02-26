import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { isAuthenticated, getToken } from "./auth/auth";
import SgenDocs from "./components/SgenDocs";
import { Link } from "react-router-dom";


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

export default function Home() {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState<"create" | "rotate" | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");

  useEffect(() => {
    setAuthed(isAuthenticated());
  }, []);

  async function callApiKeyEndpoint(rotate: boolean) {
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
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="page">
      {/* background layers */}
      <div className="bg-grid" />
      <div className="bg-glow" />

      <main className="hero">
        <h1 className="title">
          Welcome to <span className="glint">SGEN</span>
        </h1>

        <p className="subtitle">
          {authed
            ? "You’re logged in"
            : "Log in or create an account."}
        </p>

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
            <p className="subtitle"> </p>
          )}
        </div>
        <div style={{ height: "10vh" }} />
        <div className="actions">
            <Link className="btn ghost" to="/docs">
                Documentation
            </Link>
        </div>


        {statusMessage && (
          <div className="statusMessage">{statusMessage}</div>
        )}
      </main>

      <BinaryBox />

      <section className="docs">
        <div className="docs-inner">
          {/* If SgenDocs already includes a section wrapper, remove this outer section */}
          <SgenDocs />
        </div>
      </section>

      <div style={{ height: "6vh" }} />
    </div>
  );
}
