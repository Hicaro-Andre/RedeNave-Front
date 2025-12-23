# Rede Nave – Front-End

Interface web da plataforma Rede Nave, focada em educação, trilhas de aprendizagem
e eventos, com design moderno, responsivo e acessível.

## 🚀 Aplicação Online

A aplicação está disponível e pode ser acessada através do seguinte link:

🔗 **[https://rede-nave-front.vercel.app/](https://rede-nave-front.vercel.app/)** 

---

## 📸 Preview

Abaixo uma captura de tela da interface para uma prévia visual:

![Preview da aplicação](./src/assets/preview.png)


## 🧰 Tecnologias

- React + TypeScript
- React Router DOM
- Bootstrap 5 (Offcanvas, Grid, Utilities)
- CSS Custom Properties (Design System)
- Vite
- Storyblok (CMS Headless)

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/rede-nave-front.git
```
```bash
# Entre na pasta
cd rede-nave-front
```
```bash
# Instale as dependências
npm install
```
```bash
# Rode o projeto
npm run dev
```
---

## 📁 Estrutura do projeto

```md
src/
├── assets/          # Imagens, ícones e logos
├── components/      # Componentes reutilizáveis
│   └── Navbar.tsx
├── pages/           # Páginas da aplicação (rotas)
├── styles/          # CSS global e temas
├── hooks/           # Hooks customizados
├── App.tsx          # Composição principal
└── main.tsx         # Ponto de entrada
```

## 🧠 Decisões técnicas

- CSS organizado com variáveis globais (`:root`) para facilitar temas
- Navbar com efeitos de scroll otimizados usando `requestAnimationFrame`
- Componentes documentados diretamente no código
- Sem uso de bibliotecas desnecessárias para manter leve


---
## 🧩 Componentes principais

### Navbar
Responsável por:
- Navegação principal
- Destaque de rota ativa
- Menu mobile (Offcanvas)
- Barra de progresso de scroll

Arquivo:
src/components/Navbar.tsx

---

## 🎨 Design System

As cores e estilos globais ficam centralizados em variáveis CSS:

```css
:root {
  --bg-color-navbar: linear-gradient(90deg, #4a077c, #6a0dad);
  --bg-color-button: #c77dff;
}
```

---

## 👤 Autores

Hicaro André 
Desenvolvedor Front-end / Full Stack  

Luana Reis
Desenvolvedor Front-end 

Rosélia Cristina
Desenvolvedor Front-end 

## 📄 Licença
Este projeto está sob a licença MIT.

---


## 🎓 Contexto Educacional (Softex)

Este projeto foi desenvolvido como parte do programa da Softex,
com foco em boas práticas de front-end, organização de código,
responsividade e experiência do usuário.


