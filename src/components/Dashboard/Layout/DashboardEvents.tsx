import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  arrayRemove,
  increment,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../../config/firebase";

interface Evento {
  id: string;
  titulo: string;
  data: string;
  horario: string;
  localOuLink: string;
  tipo: string;
  inscritos?: string[];
  inscricoes?: number;
}

const DashboardEvents: React.FC = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const user = auth.currentUser;

  // ================= LOAD EVENTS =================
  useEffect(() => {
    const carregarEventos = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const snapshot = await getDocs(collection(db, "eventos"));

        const lista = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...(doc.data() as Evento),
          }))
          // 🔥 apenas eventos inscritos
          .filter((evento) =>
            evento.inscritos?.includes(user.uid)
          );

        setEventos(lista);
      } catch (error) {
        console.error("Erro ao carregar eventos:", error);
      } finally {
        setLoading(false);
      }
    };

    carregarEventos();
  }, [user]);

  // ================= DESINSCRIÇÃO =================
  async function desinscreverEvento(eventoId: string) {
    if (!user) return;

    try {
      const ref = doc(db, "eventos", eventoId);

      await updateDoc(ref, {
        inscritos: arrayRemove(user.uid),
        inscricoes: increment(-1),
      });

      // remove da tela imediatamente
      setEventos((prev) =>
        prev.filter((evento) => evento.id !== eventoId)
      );
    } catch (error) {
      console.error("Erro ao desinscrever:", error);
    }
  }

  // ================= FILTRO =================
  const eventosFiltrados = eventos.filter((evento) =>
    evento.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  // ================= JSX =================
  return (
    <div className="container-fluid">
      {/* HEADER */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <h2 className="fw-bold mb-0">Meus Eventos</h2>

        <div className="input-group w-100" style={{ maxWidth: 350 }}>
          <span className="input-group-text bg-white">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar evento pelo nome"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>

      {/* CONTEÚDO */}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" />
        </div>
      ) : eventosFiltrados.length === 0 ? (
        <div className="alert alert-light text-center">
          <i className="bi bi-info-circle me-2"></i>
          Você ainda não está inscrito em nenhum evento
        </div>
      ) : (
        <div className="row g-3">
          {eventosFiltrados.map((evento) => {
            const data = new Date(evento.data);
            const dia = data.getDate();
            const mes = data
              .toLocaleString("pt-BR", { month: "short" })
              .replace(".", "")
              .toUpperCase();

            return (
              <div key={evento.id} className="col-12">
                <div
                  className="d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 shadow-sm rounded-4 bg-white gap-3"
                >
                  {/* DATA */}
                  <div
                    className="text-white text-center rounded-3 d-flex flex-column justify-content-center flex-shrink-0"
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: "#09cdd7"
                    }}
                  >
                    <span style={{ fontSize: 26, fontWeight: 700 }}>
                      {dia}
                    </span>
                    <span style={{ fontSize: 14 }}>{mes}</span>
                  </div>

                  {/* CONTEÚDO */}
                  <div className="flex-grow-1">
                    <span className="badge bg-info mb-1">Evento</span>

                    <h5 className="fw-bold mb-1 ">
                      {evento.titulo}
                    </h5>

                    <div className="text-muted small d-flex align-items-center gap-3 flex-wrap">
                      <span>
                        <i className="bi bi-clock me-1"></i>
                        {evento.horario}
                      </span>
                    </div>
                  </div>

                  {/* BOTÃO */}
                  <div className="w-100 text-md-end">
                    <button
                      className="btn text-white px-4 py-2 rounded-pill d-block d-md-inline-block"
                      onClick={() => desinscreverEvento(evento.id)}
                    >
                      Desinscrever
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      )}
    </div>
  );
};

export default DashboardEvents;
