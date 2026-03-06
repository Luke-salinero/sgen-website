import { NavLink, Outlet } from "react-router-dom";
import { sgenNav } from "./ExamplesNav";
import "../App.css"; // <-- make sure your styles are available

export default function ExamplesLayout() {
  return (
    <div className="page">
      {/* reuse your existing background layers */}
      <div className="bg-grid" />
      <div className="bg-glow" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 24,
          padding: 24,
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <aside style={{ position: "sticky", top: 24, alignSelf: "start" }}>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>Examples</div>

          {sgenNav.map((group) => (
            <div key={group.section} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 8 }}>
                {group.section}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {group.items.map((item) => (
                  <li key={item.path} style={{ marginBottom: 6 }}>
                    <NavLink
                      to={item.path}
                      style={({ isActive }) => ({
                        textDecoration: "none",
                        fontWeight: isActive ? 700 : 500,
                        opacity: isActive ? 1 : 0.85,
                        color: "rgba(255,255,255,0.9)", // ensure visible on dark bg
                      })}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <main style={{ maxWidth: 920 }}>
          <div className="docs-prose"
          style={{
            paddingLeft:  16,
            paddingRight: 16,
          }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
