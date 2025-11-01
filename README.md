# 🚀 Rede NAVE - Plataforma de Formação Empreendedora

Plataforma web para formação e capacitação de mulheres empreendedoras, com trilhas personalizadas, eventos, certificações e acompanhamento completo do progresso.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Funcionalidades](#funcionalidades)
- [Páginas](#páginas)
- [Contribuindo](#contribuindo)

## 🎯 Sobre o Projeto

A Rede NAVE é uma iniciativa dedicada à formação e capacitação de mulheres empreendedoras, oferecendo:

- 📚 **Trilhas de Aprendizagem**: Cursos estruturados em gestão financeira, marketing digital e liderança
- 📅 **Eventos**: Workshops, feiras e lives sobre empreendedorismo
- 🏆 **Certificações**: Certificados ao completar trilhas
- 📊 **Dashboard**: Acompanhamento de progresso e conquistas
- 👥 **Suporte**: Central de ajuda e FAQ

## 🛠 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização customizada
- **JavaScript (ES6+)** - Lógica e interatividade
- **Bootstrap 5.3.8** - Framework CSS responsivo
- **Bootstrap Icons 1.13.1** - Biblioteca de ícones

### Conceitos Utilizados

- ✅ Design Responsivo (Mobile-first)
- ✅ Animações CSS e JavaScript
- ✅ Intersection Observer API
- ✅ LocalStorage para persistência
- ✅ Bootstrap Components (Modals, Toasts, Tooltips)
- ✅ SEO Otimizado (Meta Tags)
- ✅ Acessibilidade (ARIA labels)

## 📁 Estrutura do Projeto

```
RedeNave-Front/
│
├── index.html              # Página inicial
│
├── pages/                  # Páginas internas
│   ├── login.html         # Login de usuários
│   ├── cadastro.html      # Cadastro multi-step
│   ├── dashboard.html     # Painel do aluno
│   ├── trilhas.html       # Lista de trilhas
│   ├── eventos.html       # Calendário de eventos
│   ├── sobre.html         # Sobre a Rede NAVE
│   ├── suporte.html       # Central de ajuda
│   └── admin.html         # Painel administrativo
│
├── styles/                # Arquivos CSS
│   ├── globals.css        # Estilos globais e variáveis
│   ├── components.css     # Componentes reutilizáveis
│   ├── animations.css     # Animações customizadas
│   └── pages.css          # Estilos específicos por página
│
├── js/                    # Arquivos JavaScript
│   ├── main.js           # Script principal (init, renderização)
│   └── advanced.js       # Recursos avançados (modals, toast, etc)
│
├── assets/               # Recursos estáticos
│   └── index/           # Imagens da página inicial
│
└── README.md            # Este arquivo
```

## 🚀 Como Usar

### Pré-requisitos

Apenas um navegador web moderno (Chrome, Firefox, Edge, Safari).

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Hicaro-Andre/RedeNave-Front.git
```

2. Abra o arquivo `index.html` no navegador ou use um servidor local:
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

3. Acesse no navegador:
```
http://localhost:8000
```

## ✨ Funcionalidades

### Para Alunas

- ✅ Cadastro multi-step com validação
- ✅ Login e autenticação (simulado)
- ✅ Dashboard personalizado
- ✅ Progresso em trilhas de aprendizagem
- ✅ Inscrição em eventos
- ✅ Sistema de conquistas e badges
- ✅ Download de certificados
- ✅ Central de suporte

### Para Administradores

- ✅ Painel administrativo
- ✅ Gerenciamento de usuários
- ✅ Criação de trilhas e eventos
- ✅ Estatísticas e relatórios
- ✅ Visualização de feedbacks

### Recursos Técnicos

- 🎨 **Animações suaves** ao scroll
- 📱 **100% Responsivo** (mobile, tablet, desktop)
- 🔔 **Notificações toast** Bootstrap
- 🎥 **Modal de vídeo** para aulas
- 📊 **Gráficos** de progresso
- 🌓 **Tema customizável**
- ♿ **Acessível** (WCAG)

## 📄 Páginas

| Página | Descrição | Rota |
|--------|-----------|------|
| **Home** | Landing page com informações gerais | `index.html` |
| **Login** | Autenticação de usuários | `pages/login.html` |
| **Cadastro** | Registro de novas alunas (3 steps) | `pages/cadastro.html` |
| **Dashboard** | Painel da aluna | `pages/dashboard.html` |
| **Trilhas** | Catálogo de cursos | `pages/trilhas.html` |
| **Eventos** | Calendário com workshops e lives | `pages/eventos.html` |
| **Sobre** | História e equipe | `pages/sobre.html` |
| **Suporte** | FAQ e contato | `pages/suporte.html` |
| **Admin** | Painel administrativo | `pages/admin.html` |

## 🎨 Guia de Estilos

### Cores Principais

- **Primário**: `#667eea` (Azul)
- **Secundário**: `#764ba2` (Roxo)
- **Warning**: `#ffc107` (Amarelo)
- **Sucesso**: `#198754` (Verde)
- **Perigo**: `#dc3545` (Vermelho)

### Tipografia

- **Font Family**: System UI (Bootstrap padrão)
- **Headings**: Peso 700 (Bold)
- **Body**: Peso 400 (Regular)

### Gradientes

```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📦 Dependências CDN

O projeto usa as seguintes bibliotecas via CDN:

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" rel="stylesheet">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
```

## 🔧 Customização

### Modificar Cores

Edite as variáveis CSS em `styles/globals.css`:

```css
:root {
    --gradient-primary: linear-gradient(135deg, #SUA-COR-1 0%, #SUA-COR-2 100%);
}
```

### Adicionar Nova Trilha

Edite o array em `js/main.js`:

```javascript
const trilhas = [
    {
        id: 4,
        titulo: "Nova Trilha",
        descricao: "Descrição da trilha",
        icone: "bi-star",
        cor: "info",
        duracao: "4 semanas",
        modulos: 6,
        nivel: "Iniciante",
        alunos: 0
    }
];
```

### Adicionar Novo Evento

Edite o array em `js/main.js`:

```javascript
const eventos = [
    {
        id: 4,
        titulo: "Novo Evento",
        descricao: "Descrição do evento",
        data: "30",
        mes: "DEZ",
        horario: "19:00",
        tipo: "Online",
        vagas: 50
    }
];
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👥 Autores

- **Hicaro André** - [@Hicaro-Andre](https://github.com/Hicaro-Andre)

## 📞 Contato

- **Email**: contato@redenave.org
- **WhatsApp**: (11) 98765-4321
- **Site**: https://redenave.org

---

⭐ **Desenvolvido com 💜 para empoderar mulheres empreendedoras**
