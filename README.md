# ⛏️ Minecraft Quiz App

Um divertido e interativo quiz sobre o universo do Minecraft, desenvolvido como um projeto prático para aprimorar habilidades em React.

O objetivo deste aplicativo é testar seus conhecimentos sobre mobs, itens, biomas e receitas do jogo, fornecendo feedback imediato e uma pontuação final.

## ✨ Funcionalidades Principais

* **Múltiplas Perguntas:** Apresenta uma série de perguntas sobre diferentes aspectos do Minecraft.
* **Feedback Imediato:** Indica se a resposta selecionada está correta ou incorreta.
* **Pontuação Dinâmica:** Calcula e exibe a pontuação do usuário em tempo real.
* **Tela de Resultado:** Mostra a pontuação final e uma mensagem personalizada.
* **Interface Simples e Responsiva:** Design otimizado para uso em dispositivos móveis e desktop.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

* **React:** Biblioteca JavaScript para construção da interface de usuário.
* **JavaScript (ES6+):** Linguagem principal de desenvolvimento.
* **CSS/Styled-Components (ou Sass, etc.):** Para estilização e design.
* **Create React App (CRA):** Ferramenta para inicialização e configuração do projeto.

## 🚀 Como Executar o Projeto Localmente

Siga estas instruções para configurar e rodar o aplicativo em sua máquina.

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (ou Yarn) instalados.

### 1. Clonar o Repositório

Abra seu terminal e clone o projeto:

```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd minecraft-quiz-app
2. Instalar Dependências
Instale as bibliotecas necessárias:

Bash

npm install
# ou yarn install
3. Iniciar o Servidor de Desenvolvimento
Execute o script de inicialização:

Bash

npm start
# ou yarn start
O aplicativo será iniciado e você poderá acessá-lo em http://localhost:3000.

📂 Estrutura de Arquivos
A estrutura de arquivos principal é organizada para fácil manutenção:

src/
├── components/           # Componentes reutilizáveis (Botão, Pergunta, Resultado)
├── data/                 # Arquivos de dados (perguntas.js, contendo o array de perguntas)
├── styles/               # Arquivos de estilos globais ou temas
├── App.js                # O componente principal que gerencia a lógica do quiz
└── index.js              # Ponto de entrada do React
📝 Como Adicionar Novas Perguntas
Você pode facilmente estender o quiz adicionando mais objetos de pergunta ao arquivo src/data/perguntas.js (ou o nome que você usou).

Cada pergunta deve seguir esta estrutura:

JavaScript

{
  id: 1,
  question: "Qual mob pode ser domesticado usando ossos?",
  options: ["Creeper", "Esqueleto", "Lobo", "Enderman"],
  correctAnswer: "Lobo"
},
// Adicione mais perguntas aqui
🤝 Contribuição
Contribuições são bem-vindas! Se você encontrou um bug ou tem uma sugestão de melhoria (ou novas perguntas!), sinta-se à vontade para abrir uma Issue ou enviar um Pull Request.

Faça um Fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/NovaFeature).

Commit suas alterações (git commit -m 'Adiciona Nova Feature').

Envie para o branch (git push origin feature/NovaFeature).

Abra um Pull Request.

Feito com 💙 e ⛏️ (React e Minecraft)
