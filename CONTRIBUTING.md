# 🤝 Contribuindo para Rede NAVE

Obrigado por considerar contribuir com a Rede NAVE! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Código de Conduta

- Seja respeitoso e inclusivo
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade
- Mostre empatia com outros membros

## 🚀 Como Contribuir

### 1. Reportar Bugs

Se encontrou um bug, por favor abra uma issue com:

- **Título claro e descritivo**
- **Passos para reproduzir** o problema
- **Comportamento esperado** vs **comportamento atual**
- **Screenshots** se aplicável
- **Navegador e versão** usados

### 2. Sugerir Melhorias

Para sugestões de features:

- Verifique se já não existe uma issue similar
- Descreva o problema que a feature resolve
- Explique como deveria funcionar
- Inclua mockups se possível

### 3. Pull Requests

#### Processo

1. **Fork** o projeto
2. **Clone** seu fork
   ```bash
   git clone https://github.com/SEU-USUARIO/RedeNave-Front.git
   ```
3. **Crie uma branch** para sua feature
   ```bash
   git checkout -b feature/minha-feature
   ```
4. **Faça suas alterações** seguindo os padrões do projeto
5. **Commit** com mensagens claras
   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```
6. **Push** para seu fork
   ```bash
   git push origin feature/minha-feature
   ```
7. **Abra um Pull Request** na branch `main`

#### Padrões de Commit

Use commits semânticos:

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Alteração em documentação
- `style:` - Formatação, ponto e vírgula, etc
- `refactor:` - Refatoração de código
- `test:` - Adição/alteração de testes
- `chore:` - Alterações em build, configs, etc

**Exemplos:**
```bash
feat: adiciona modal de confirmação
fix: corrige erro no formulário de cadastro
docs: atualiza README com instruções de instalação
style: formata código JavaScript
refactor: reorganiza estrutura de pastas CSS
```

## 📝 Diretrizes de Código

### HTML

```html
<!-- ✅ BOM -->
<section class="hero-section py-5">
    <div class="container">
        <h1 class="fw-bold">Título</h1>
    </div>
</section>

<!-- ❌ RUIM -->
<section class="hero-section" style="padding: 3rem;">
    <div class="container"><h1 style="font-weight: bold;">Título</h1></div>
</section>
```

**Regras:**
- Use indentação de 4 espaços
- Use classes Bootstrap quando possível
- Evite inline styles
- Adicione comentários para seções complexas
- Use tags semânticas (`<section>`, `<article>`, `<nav>`)

### CSS

```css
/* ✅ BOM */
.card-custom {
    background: var(--bs-white);
    border-radius: var(--bs-border-radius-lg);
    box-shadow: var(--bs-box-shadow);
    transition: var(--bs-transition);
}

/* ❌ RUIM */
.card-custom {
    background: white;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: all 0.3s;
}
```

**Regras:**
- Use variáveis CSS do Bootstrap
- Organize por seções com comentários
- Mobile-first approach
- Prefira classes utilitárias do Bootstrap
- Evite !important

### JavaScript

```javascript
// ✅ BOM
/**
 * Renderiza os cards de trilhas na página
 * @param {Array} trilhas - Array de objetos trilha
 */
function renderizarTrilhas(trilhas) {
    if (!trilhas || trilhas.length === 0) return;
    
    const container = document.getElementById('trilhasContainer');
    // ... resto do código
}

// ❌ RUIM
function renderizarTrilhas(trilhas) {
    var container = document.getElementById('trilhasContainer');
    // ... código sem validação
}
```

**Regras:**
- Use `const` e `let`, nunca `var`
- Use arrow functions quando apropriado
- Adicione JSDoc comments
- Valide inputs
- Use `'use strict';`
- Nomes descritivos em português
- Evite console.logs (exceto errors)

## 🧪 Testando

Antes de enviar seu PR, teste em:

- ✅ Chrome (última versão)
- ✅ Firefox (última versão)
- ✅ Safari (se possível)
- ✅ Edge (última versão)
- ✅ Mobile (Chrome Android / Safari iOS)

### Checklist de Testes

- [ ] A página carrega sem erros no console
- [ ] Todas as funcionalidades estão operacionais
- [ ] Design é responsivo (mobile, tablet, desktop)
- [ ] Formulários validam corretamente
- [ ] Animações funcionam suavemente
- [ ] Links estão corretos
- [ ] Imagens carregam corretamente
- [ ] Acessibilidade (tab navigation, ARIA)

## 📁 Estrutura de Arquivos

Ao adicionar novos arquivos:

```
pages/          → Novas páginas HTML
styles/         → Estilos CSS organizados
js/             → Scripts JavaScript
assets/         → Imagens, fontes, etc
  └── pagina/   → Assets específicos por página
```

## 🎨 Design System

### Cores

Use as variáveis CSS definidas:
- `--bs-primary` - Azul (#667eea)
- `--bs-warning` - Amarelo (#ffc107)
- `--bs-success` - Verde
- `--bs-danger` - Vermelho
- `--gradient-primary` - Gradiente principal

### Componentes

Reutilize componentes existentes:
- `.card` - Cards do Bootstrap
- `.btn` - Botões customizados
- `.modal` - Modais Bootstrap
- `.toast` - Notificações

### Ícones

Use Bootstrap Icons:
```html
<i class="bi bi-star-fill"></i>
```

[Lista completa](https://icons.getbootstrap.com/)

## ❓ Dúvidas

Se tiver dúvidas:

1. Verifique a [documentação](README.md)
2. Pesquise nas [issues existentes](https://github.com/Hicaro-Andre/RedeNave-Front/issues)
3. Abra uma nova issue com a tag `question`

## 📞 Contato

- **GitHub**: [@Hicaro-Andre](https://github.com/Hicaro-Andre)
- **Email**: contato@redenave.org

---

**Obrigado por contribuir! 💜**
