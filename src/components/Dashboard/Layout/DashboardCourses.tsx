

type Course = {
  id: number;
  title: string;
  module: string;
  progress: number;
  lastAccess: string;
  status: "in-progress" | "completed";
};

const courses: Course[] = [
  {
    id: 1,
    title: "Marketing Digital",
    module: "Módulo 4 de 10",
    progress: 48,
    lastAccess: "Último acesso há 5 dias",
    status: "in-progress",
  },
  {
    id: 2,
    title: "Gestão Financeira",
    module: "Módulo 6 de 10",
    progress: 67,
    lastAccess: "Último acesso há 5 dias",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Redação Empresarial",
    module: "Concluído",
    progress: 100,
    lastAccess: "Concluído em Abr 2024",
    status: "completed",
  },
];

export default function DashboardCourses() {
  return (
    <div className="dashboard-courses container-fluid">
      {/* Header */}
      <div className="courses-header d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Meus Cursos</h2>

        <select className="form-select order-select">
          <option>Último acesso</option>
          <option>Nome do curso</option>
          <option>Progresso</option>
        </select>
      </div>

      {/* Filtros */}
      <div className="courses-filters mb-4">
        <button className="filter-btn active">Todos</button>
        <button className="filter-btn">
          Em Progresso <span className="badge">2</span>
        </button>
        <button className="filter-btn">Concluídos</button>
      </div>

      {/* Busca */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Buscar cursos..."
        />
      </div>

      {/* Cards */}
      <div className="row g-4">
        {courses.map((course) => (
          <div key={course.id} className="col-xl-4 col-lg-6">
            <div className="course-card shadow-sm">
              <div className="course-image" />

              <div className="course-content">
                <h5 className="fw-semibold">{course.title}</h5>
                <p className="text-muted small mb-2">{course.module}</p>

                {/* Progress */}
                <div className="progress mb-2">
                  <div
                    className={`progress-bar ${course.status === "completed"
                      ? "bg-success"
                      : "bg-primary"
                      }`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>

                <div className="course-footer d-flex justify-content-between align-items-center">
                  <span className="text-muted small">
                    {course.lastAccess}
                  </span>

                  {course.status === "completed" ? (
                    <button className="btn btn-outline-success btn-sm">
                      📜 Certificado
                    </button>
                  ) : (
                    <button className="btn btn-primary btn-sm">
                      Continuar →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
