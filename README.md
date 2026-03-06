# Médicos & Dentistas - Portal de Saúde e Bem-estar 💙🦷💚

Este projeto é uma aplicação moderna e acolhedora desenvolvida como parte de um desafio técnico. O objetivo é criar um portal simples, fluido e agradável para apresentar informações e serviços relacionados à saúde e odontologia, conectando profissionais voluntários à comunidade.

A interface foi projetada para transmitir confiança, profissionalismo e bem-estar, utilizando uma paleta de cores focada em saúde e higiene.

## 🎯 Objetivo Geral

Criar o portal **Médicos & Dentistas**, contendo páginas informativas sobre cuidados com a saúde e a odontologia, acessíveis por meio de rotas e organizadas com componentes reutilizáveis. O foco é a construção de layout "na unha" (sem frameworks visuais), responsividade e boas práticas de código com React e SCSS.

## 🚀 Tecnologias Utilizadas

*   **React.js** (via Vite)
*   **React Router DOM** (Gerenciamento de rotas)
*   **Sass (SCSS)** (Estilização modular com variáveis e aninhamento)
*   **React Icons** (Ícones da interface)
*   **Google Fonts** (Fonte Inter)

## 🎨 Design e Estilização

O projeto segue rigorosamente as regras de estilização propostas:
*   **Cores**: Tons de Verde (#00745A, #005A45), Branco (#FFFFFF) e Cinza (#E5E5E5) para remeter a saúde, higiene e bem-estar.
*   **Tipografia**: Fonte *Inter* para leitura suave e moderna.
*   **Layout**: Construído inteiramente com **Flexbox**.
*   **Responsividade**: Uso de unidades relativas (`%`, `vh`, `vw`, `rem`) e Media Queries para adaptação mobile.
*   **Restrições (Hard Mode)**:
    *   ❌ Sem Grid Layout.
    *   ❌ Sem Position (`absolute`, `fixed`, etc, exceto onde estritamente necessário para ícones sobrepostos ou sticky header).
    *   ❌ Sem Frameworks CSS (Bootstrap, Tailwind).

## 📂 Estrutura do Projeto

O código está organizado de forma modular:

```text
src/
  ├── components/        # Componentes reutilizáveis
  │   ├── Header/        # Navegação responsiva (Menu Hambúrguer no Mobile)
  │   ├── Footer/        # Rodapé com informações e contato
  │   ├── MissionCard/   # Cards da seção de missão
  │   ├── StatCard/      # Cards de estatísticas de impacto
  │   ├── VolunteerCard/ # Cards de benefícios para voluntários
  │   └── FormVoluntario/# Formulário de inscrição
  │
  ├── pages/             # Páginas da aplicação
  │   ├── Home/          # Página Inicial (Hero, Missão, Impacto)
  │   └── QueroSerVoluntario/ # Página de cadastro (Benefícios, Formulário)
  │
  ├── styles/            # Estilos Globais
  │   ├── _variables.scss # Variáveis de cores e fontes
  │   └── GlobalStyles.scss # Reset e estilos base
  │
  ├── App.jsx            # Configuração de Rotas
  └── main.jsx           # Ponto de entrada
```

## 🔧 Como Rodar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Davisvasconcellos/vnw-medicos.git
    cd vnw-medicos
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Acesse no navegador:**
    Abra `http://localhost:5173` (ou a porta indicada no terminal).

---

Desenvolvido com 💙 por Davis Vasconcellos como parte do Desafio Vai na Web.
