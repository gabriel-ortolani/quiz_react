# Quiz Minecraft (React)

Pequeno aplicativo de quiz sobre Minecraft criado com Create React App.  
O projeto exibe perguntas à esquerda e uma tabela de melhores pontuações (leaderboard) à direita — as pontuações são salvas no `localStorage`.

## Principais características
- 20 perguntas sobre Minecraft com múltipla escolha.
- Interface responsiva: perguntas à esquerda, leaderboard fixa à direita (cai abaixo em telas pequenas).
- Salvar nome e pontuação ao finalizar o quiz; top 10 pontuações são mantidas no `localStorage`.
- Componentes principais: `Quizminecraft` (quiz) e `Leaderboard`.

## Pré-requisitos
- Node.js >= 14
- npm ou yarn

## Instalação
1. Clone o repositório
   - git clone <url-do-repo>
2. Instale dependências
   - npm install
   - ou
   - yarn

## Scripts úteis
- `npm start` — inicia o modo de desenvolvimento (http://localhost:3000)
- `npm run build` — gera build de produção em `build/`
- `npm test` — executa testes (se houver)
- `npm run eject` — expõe configurações do Create React App (irreversível)

## Como usar / jogar
1. Execute `npm start`.
2. Responda as perguntas mostradas no painel esquerdo.
3. Ao final, insira seu nome (máx. 10 caracteres) e clique em "Salvar Pontuação".
4. A leaderboard à direita será atualizada automaticamente exibindo o Top 10.

## Estrutura dos arquivos
- Localização de arquivos importantes:
  - `src/components/Quizminecraft/Quizminecraft.jsx` — lógica do quiz e formulário de submissão.
  - `src/components/Leaderboard/Leaderboard.jsx` — mostra as pontuações lidas do `localStorage`.
  - `src/App.js` — componente principal que conecta `Quizminecraft` e `Leaderboard`. Recebe `onScoreSubmit` para persistência.
  - `src/App.css` — estilos globais e layout (quiz à esquerda, leaderboard à direita).

## Comportamento do leaderboard
- As pontuações são salvas em `localStorage` sob a chave `minecraftHighScores` como array de entradas { id, name, score }.
- O App mantém as responsabilidades de ordenar e limitar ao Top 10.

## Customização rápida
- Para alterar perguntas, edite o array `questions` em `Quizminecraft.jsx`.
- Para ajustar layout/cores, edite `src/App.css`.
- Para alterar lógica de persistência (por exemplo salvar em backend), modifique `handleScoreSubmit` em `App.js` para enviar ao servidor.

## Contribuindo
- Abra issues para bugs/sugestões.
- Para PRs: crie branch, faça alterações, comummente rode `npm start` para testar localmente, e submeta Pull Request com descrição clara.

## Licença
- Adicione a licença desejada ou mantenha para uso pessoal/educacional.

## Observações
- Este README é um guia rápido; o código contém comentários que ajudam na compreensão das partes mais importantes do quiz e do leaderboard.

## Contribuidores
Gabriel Ortolani
Gustavo da Silva Rodrigues
Miguel Mernick
Pedro da Silva Rodrigues
