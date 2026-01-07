import React, { useState } from "react";

import "/src/styles/admin.css";
import AdminOverview from "./Layout/AdminOverview";
import AdminUsers from "./Layout/AdminUsers";
import AdminTracks from "./Layout/AdminTracks";
import AdminProgress from "./Layout/AdminProgress";
import AdminCertificates from "./Layout/AdminCertificates";
import AdminEvents from "./Layout/AdminEvents";
import AdminRanking from "./Layout/AdminRanking";
import AdminSettings from "./Layout/AdminSettings";

type AdminPage =
  | "overview"
  | "users"
  | "tracks"
  | "progress"
  | "certificates"
  | "events"
  | "ranking"
  | "settings";

const AdminMain: React.FC = () => {
  const [activePage, setActivePage] = useState<AdminPage>("overview");

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <a className="navbar-brand fw-bold" href="/">
          <img
            src="/src/assets/logoRedeNave.png"
            alt="Rede Nave"
            style={{ width: "70px", height: "auto" }}
          />
        </a>

        <nav>
          <ul>
            <li
              className={activePage === "overview" ? "active" : ""}
              onClick={() => setActivePage("overview")}
            >
              <i className="bi bi-speedometer2" /> Visão Geral
            </li>

            <li
              className={activePage === "users" ? "active" : ""}
              onClick={() => setActivePage("users")}
            >
              <i className="bi bi-people" /> Usuárias
            </li>

            <li
              className={activePage === "tracks" ? "active" : ""}
              onClick={() => setActivePage("tracks")}
            >
              <i className="bi bi-diagram-3" /> Trilhas
            </li>
            <li
              className={activePage === "progress" ? "active" : ""}
              onClick={() => setActivePage("progress")}
            >
              <i className="bi bi-bar-chart" /> Progresso
            </li>
            <li
              className={activePage === "certificates" ? "active" : ""}
              onClick={() => setActivePage("certificates")}
            >
              <i className="bi bi-award" /> Certificados
            </li>
            <li
              className={activePage === "events" ? "active" : ""}
              onClick={() => setActivePage("events")}
            >
              <i className="bi bi-calendar-event" /> Eventos
            </li>
            <li
              className={activePage === "ranking" ? "active" : ""}
              onClick={() => setActivePage("ranking")}
            >
              <i className="bi bi-trophy" /> Ranking
            </li>
            <li
              className={activePage === "settings" ? "active" : ""}
              onClick={() => setActivePage("settings")}
            >
              <i className="bi bi-gear" /> Administração
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {activePage === "overview" && <AdminOverview />}
        {activePage === "users" && <AdminUsers />}
        {activePage === "tracks" && <AdminTracks />}
        {activePage === "progress" && <AdminProgress />}
        {activePage === "certificates" && <AdminCertificates />}
        {activePage === "events" && <AdminEvents />}
        {activePage === "ranking" && <AdminRanking />}
        {activePage === "settings" && <AdminSettings />}
      </main>
    </div>
  );
};

export default AdminMain;
