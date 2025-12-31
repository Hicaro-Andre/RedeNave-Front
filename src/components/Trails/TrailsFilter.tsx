import { useState } from "react";

type TrilhasFilterProps = {
  blok: {
    button_section_filter: string
  };
};


const TrailsFilter = ({ blok }: TrilhasFilterProps) => {
  const [busca, setBusca] = useState("");
  const [nivel, setNivel] = useState("");
  const [area, setArea] = useState("");

  const aplicarFiltros = () => {
    console.log("Filtro aplicado:", { busca, nivel, area });
    // Aqui você pode disparar um evento, atualizar estado pai, etc.
  };

  return (
    <section className="py-4 ">
      <div className="container">
        <div className="row g-3">

          <div className="col-md-4">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar trilha..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-3">
            <select
              className="form-select"
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
            >
              <option value="">Todos os Níveis</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>

          <div className="col-md-3">
            <select
              className="form-select"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="">Todas as Áreas</option>
              <option value="Gestão">Gestão</option>
              <option value="Marketing">Marketing</option>
              <option value="Vendas">Vendas</option>
              <option value="Liderança">Liderança</option>
            </select>
          </div>

          <div className="col-md-2">
            <button className="btn w-100" onClick={aplicarFiltros}>
              <i className="bi bi-funnel"></i> {blok.button_section_filter}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrailsFilter;
