# 📋 Projeto React - P1 (30 pontos)

## 📝 Instruções

Crie um projeto React, e nesse projeto deve conter uma página principal com links para acessar as três questões descritas abaixo, cada uma representando uma página/rota diferente.

## 📦 Entrega

O trabalho deve ser entregue em um repositório público no GitHub. Envie o link do repositório na tarefa do classroom.

---

## 🏠 Página Principal (Home)

Crie uma tela inicial simples com três links ou botões:

- 🎨 **Ir para Questão 1** - Tema Claro/Escuro
- 👋 **Ir para Questão 2** - Mensagem de Boas-Vindas  
- ✅ **Ir para Questão 3** - Lista de Tarefas

---

## 🎯 Questões

### 1️⃣ Alterar Tema (Claro/Escuro)

Crie um componente com:

- ✨ Um botão com o texto que muda entre **"Tema Claro"** e **"Tema Escuro"**
- 🔄 Ao clicar, o fundo da tela e o texto do botão devem alternar entre os dois temas

### 2️⃣ Mudar Texto com Botão

Crie um componente com:

- 📄 Um parágrafo que exibe a mensagem inicial: **"Olá!"**
- 🔘 Um botão com o texto **"Entrar"**
- 🔀 Quando o botão for clicado, o texto do parágrafo deve mudar para **"Bem-vindo!"**

### 3️⃣ Lista de Tarefas

Crie um componente com:

- 📝 Um campo de input de texto onde o usuário digita uma tarefa
- ➕ Um botão **"Adicionar"** que adiciona o texto na lista
- 📋 Uma lista com todas as tarefas adicionadas

---

## 🚀 Como executar o projeto

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🛠️ Tecnologias utilizadas

- ⚛️ **React** 19.1.0
- 🛣️ **React Router DOM** - Para navegação entre páginas
- ⚡ **Vite** - Build tool e servidor de desenvolvimento
- 🎨 **CSS Modules** - Para estilização isolada de componentes

## 📂 Estrutura do projeto

```
src/
├── pages/
│   ├── home/
│   │   ├── Homepage.jsx
│   │   └── home.module.css
│   ├── questao1/
│   │   ├── Questao1.jsx
│   │   └── questao1.module.css
│   ├── questao2/
│   │   ├── Questao2.jsx
│   │   └── questao2.module.css
│   └── questao3/
│       ├── Questao3.jsx
│       └── questao3.module.css
├── App.jsx
└── main.jsx
```

## 🎨 Features implementadas

- ✅ **Navegação entre páginas** com React Router
- ✅ **Design responsivo** para mobile, tablet e desktop
- ✅ **Tema mágico** na Questão 1 com efeitos visuais
- ✅ **CSS Modules** para isolamento de estilos
- ✅ **Animações suaves** e efeitos hover
- ✅ **Estrutura organizada** de componentes
