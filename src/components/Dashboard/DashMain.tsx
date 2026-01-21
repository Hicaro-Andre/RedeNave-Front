import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";

import logo from "/src/assets/logoRedeNave.png";

import DashboardOverview from "./Layout/DashboardOverview";
import DashboardCourses from "./Layout/DashboardCourses";
import DashboardCertificados from "./Layout/DashboardCertificates";
import DashboardProfile from "./Layout/DashboardProfile";
import DashboardConfiguracoes from "./Layout/DashboardSettings";
import DashboardSidebar, { DashboardSection } from "./Layout/DashboardSidebar";

export default function DashMain() {
  const [nome, setNome] = useState<string>("");
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [section, setSection] = useState<DashboardSection>("overview");

  const navigate = useNavigate();

  /* ================= LOAD USER DATA ================= */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      setEmail(user.email || "");

      try {
        const ref = doc(db, "users", user.uid);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          const data = snapshot.data();

          const nomeFormatado = data.nomeCompleto
            ?.trim()
            .split(/\s+/)
            .slice(0, 2)
            .join(" ");

          setNome(nomeFormatado);

          setFotoPerfil(data.fotoPerfil || null);

          // cache opcional
          localStorage.setItem("nomeCompleto", data.nomeCompleto || "");
          if (data.fotoPerfil) {
            localStorage.setItem("fotoPerfil", data.fotoPerfil);
          }
        }
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
      }
    });

    return () => unsubscribe();
  }, []);

  /* ================= LOGOUT ================= */
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.clear();
    navigate("/login");
  };

  const closeMobileMenu = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar?.classList.contains("show")) navbar.classList.remove("show");
  };

  const handleSectionChange = (name: DashboardSection) => {
    setSection(name);
    closeMobileMenu();
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Rede Nave" style={{ width: 70 }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item d-none d-lg-block">
                <span className="nav-link active">Meu Painel</span>
              </li>

              {/* USER */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle d-flex align-items-center gap-2"
                  data-bs-toggle="dropdown"
                >
                  {fotoPerfil ? (
                    <img src={fotoPerfil} className="nav-profile-img" />
                  ) : (
                    <div className="nav-profile-img initials">
                      {nome
                        ? nome
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                        : "US"}
                    </div>
                  )}
                  <span className="nav-user-name">
                    {nome || "Usuário"}
                  </span>
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSectionChange("perfil")}
                    >
                      Meu Perfil
                    </button>
                  </li>

                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Sair
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* DASHBOARD */}
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block">
            <DashboardSidebar
              section={section}
              onChangeSection={setSection}
              fotoPerfil={fotoPerfil}
              onUploadFoto={setFotoPerfil}
              nomeCompleto={nome}
              email={email}
              nivel={3}
              membroDesde="Janeiro 2025"
            />
          </div>

          <div className="col-lg-9">
            {section === "overview" && <DashboardOverview />}
            {section === "cursos" && <DashboardCourses />}
            {section === "certificados" && <DashboardCertificados />}
            {section === "perfil" && (
              <DashboardProfile
                fotoPerfil={fotoPerfil}
                onChangeFoto={setFotoPerfil}
              />
            )}
            {section === "configuracoes" && <DashboardConfiguracoes />}
          </div>
        </div>
      </div>
    </>
  );
}
