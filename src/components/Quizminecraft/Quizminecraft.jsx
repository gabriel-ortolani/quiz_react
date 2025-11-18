import React, { useState, useEffect, useRef } from 'react';
import '../../App.css'; // caminho corrigido para o App.css na raiz do src

const questions = [
  {
    questionText: '1. Qual bloco é necessário para criar um portal para o Nether?',
    answerOptions: [
      { answerText: 'Pedregulho', isCorrect: false },
      { answerText: 'Obsidiana', isCorrect: true },
      { answerText: 'Bloco de Ferro', isCorrect: false },
      { answerText: 'Lã', isCorrect: false },
    ],
  },
  {
    questionText: '2.Quanto de vida tem o jogador no modo padrão?',
    answerOptions: [
      { answerText: '10', isCorrect: false },
      { answerText: '20', isCorrect: true },
      { answerText: '30', isCorrect: false },
      { answerText: '5', isCorrect: false },
    ],
  },
  {
    questionText: '3. Qual destes mobs não queima sob a luz do sol?',
    answerOptions: [
      { answerText: 'Zumbi', isCorrect: false },
      { answerText: 'Esqueleto', isCorrect: false },
      { answerText: 'Creeper', isCorrect: true },
      { answerText: 'Afogado', isCorrect: false },
    ],
  },
  {
    questionText: '4. Qual item é dropado ao minerar um minério de diamante com uma picareta de ferro?',
    answerOptions: [
      { answerText: 'Um Bloco de Diamante', isCorrect: false },
      { answerText: 'Um Diamante', isCorrect: true },
      { answerText: 'Uma pepita de Diamante', isCorrect: false },
      { answerText: 'Um Bloco de Minério de Diamante', isCorrect: false },
    ],
  },
  {
    questionText: '5. Qual é o item principal necessário para domar um cavalo?',
    answerOptions: [
      { answerText: 'Trigo', isCorrect: false },
      { answerText: 'Cenoura', isCorrect: false },
      { answerText: 'Maçã', isCorrect: false },
      { answerText: 'Nenhum, apenas suba nele repetidamente', isCorrect: true },
    ],
  },
  {
    questionText: '6. Qual mob pode pegar e colocar blocos?',
    answerOptions: [
      { answerText: 'Ghast', isCorrect: false },
      { answerText: 'Enderman', isCorrect: true },
      { answerText: 'Bruxa', isCorrect: false },
      { answerText: 'Shulker', isCorrect: false },
    ],
  },
  {
    questionText: '7. Qual é o encantamento que permite que o tridente puxe o jogador durante a chuva?',
    answerOptions: [
      { answerText: 'Lealdade', isCorrect: false },
      { answerText: 'Penetrância', isCorrect: false },
      { answerText: 'Correnteza', isCorrect: true },
      { answerText: 'Condutor', isCorrect: false },
    ],
  },
  {
    questionText: '8. O que é necessário para invocar um Golem de Ferro?',
    answerOptions: [
      { answerText: '4 Blocos de Ferro e 1 Lanterna de Abóbora', isCorrect: false },
      { answerText: '4 Blocos de Ferro e 1 Abóbora Esculpida', isCorrect: true },
      { answerText: '3 Blocos de Ferro e 1 Abóbora Esculpida', isCorrect: false },
      { answerText: '5 blocos de Ferro e 1 Lanterna de Abóbora', isCorrect: false },
    ],
  },
  {
    questionText: '9. Qual é o minério mais raro de ser encontrado nas camadas do jogo (em média)?',
    answerOptions: [
      { answerText: 'Diamante', isCorrect: false },
      { answerText: 'Ouro', isCorrect: false },
      { answerText: 'Esmeralda', isCorrect: true },
      { answerText: 'Redstone', isCorrect: false },
    ],
  },
  {
    questionText: '10. Qual é o único bloco que pode ser destruído no modo Sobrevivência?',
    answerOptions: [
      { answerText: 'Obsidiana', isCorrect: true },
      { answerText: 'Pedra Matriz', isCorrect: false },
      { answerText: 'Bloco de Comando', isCorrect: false },
      { answerText: 'Barreira', isCorrect: false },
    ],
  },
  {
    questionText: '11. Qual dos seguintes itens pode ser usado como combustível em uma fornalha?',
    answerOptions: [
      { answerText: 'Pá de Ferro', isCorrect: false },
      { answerText: 'Balde de lava', isCorrect: true },
      { answerText: 'Pena', isCorrect: false },
      { answerText: 'Teia de Aranha', isCorrect: false },
    ],
  },
  {
    questionText: '12. Qual é o medo do Creeper?',
    answerOptions: [
      { answerText: 'Lava', isCorrect: false },
      { answerText: 'Gatos', isCorrect: true },
      { answerText: 'Enderman', isCorrect: false },
      { answerText: 'Golem de ferro', isCorrect: false },
    ],
  },
  {
    questionText: '13. Quantas barras de ferro são necessárias para criar um balde?',
    answerOptions: [
      { answerText: '2', isCorrect: false },
      { answerText: '3', isCorrect: true },
      { answerText: '4', isCorrect: false },
      { answerText: '5', isCorrect: false },
    ],
  },
  {
    questionText: '14. Qual é o nome do criador original do Minecraft?',
    answerOptions: [
      { answerText: 'Jens Bergensten', isCorrect: false },
      { answerText: 'Markus "Notch" Persson', isCorrect: true },
      { answerText: 'Phil Spencer', isCorrect: false },
      { answerText: 'Satya Nadella', isCorrect: false },
    ],
  },
  {
    questionText: '15. Onde você pode encontrar uma Cidadela Antiga (Ancient City)?',
    answerOptions: [
      { answerText: 'Em Pântanos', isCorrect: false },
      { answerText: 'No Nether', isCorrect: false },
      { answerText: 'Em Biomas de Neve', isCorrect: false },
      { answerText: 'Nas Profundezas Escuras', isCorrect: true },
    ],
  },
  {
    questionText: '16. Qual mob dropa a casca de Shulker?',
    answerOptions: [
      { answerText: 'Endermite', isCorrect: false },
      { answerText: 'Guardian', isCorrect: false },
      { answerText: 'Shulker', isCorrect: true },
      { answerText: 'Vex', isCorrect: false },
    ],
  },
  {
    questionText: '17. Para qual dimensão você usa o Olho do Fim?',
    answerOptions: [
      { answerText: 'Nether', isCorrect: false },
      { answerText: 'The End', isCorrect: true },
      { answerText: 'Aether', isCorrect: false },
      { answerText: 'Overworld', isCorrect: false },
    ],
  },
  {
    questionText: '18. Qual das ferramentas tem a menor durabilidade?',
    answerOptions: [
      { answerText: 'Picareta de Pedra', isCorrect: false },
      { answerText: 'Pá de Ouro', isCorrect: true },
      { answerText: 'Machado de Madeira', isCorrect: false },
      { answerText: 'Enxada de Diamante', isCorrect: false },
    ],
  },
  {
    questionText: '19. Qual é o efeito de status que você ganha ao ser atingido por um Wither Skeleton?',
    answerOptions: [
      { answerText: 'Fadiga de Mineração', isCorrect: false },
      { answerText: 'Náusea', isCorrect: false },
      { answerText: 'Murchar', isCorrect: true },
      { answerText: 'Lentidão', isCorrect: false },
    ],
  },
  {
    questionText: '20. Qual animal não pode ser equipado com uma sela?',
    answerOptions: [
      { answerText: 'Porco', isCorrect: false },
      { answerText: 'Mula', isCorrect: false },
      { answerText: 'Lhama', isCorrect: true },
      { answerText: 'Cavalo', isCorrect: false },
    ],
  },
];

function Quizminecraft({ onScoreSubmit }) {
  // Estados do Quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Form / save state
  const [playerName, setPlayerName] = useState('');
  const [saved, setSaved] = useState(false);

  // Novos estados para melhorar UX
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // Avança para a próxima pergunta (ou fim)
  const advanceQuestion = () => {
    setSelectedAnswer(null);
    setButtonsDisabled(false);
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  // Ao clicar numa resposta: mostra feedback e avança depois de um pequeno delay
  const handleAnswerOptionClick = (index, isCorrect) => {
    if (buttonsDisabled) return;
    setSelectedAnswer(index);
    setButtonsDisabled(true);

    if (isCorrect) {
      setScore((s) => s + 1);
    }

    // delay para mostrar feedback visual antes de avançar
    timeoutRef.current = setTimeout(() => {
      advanceQuestion();
    }, 700);
  };

  const resetQuiz = () => {
    clearTimeout(timeoutRef.current);
    setCurrentQuestion(0);
    setScore(0);
    setPlayerName('');
    setShowScore(false);
    setSaved(false);
    setSelectedAnswer(null);
    setButtonsDisabled(false);
  };

  const handleSubmitScore = (e) => {
    e.preventDefault();
    const newScoreEntry = {
      name: playerName || 'Anônimo',
      score: score,
      id: Date.now()
    };

    if (typeof onScoreSubmit === 'function') {
      onScoreSubmit(newScoreEntry);
    } else {
      const existing = JSON.parse(localStorage.getItem('minecraftHighScores')) || [];
      const updated = [...existing, newScoreEntry].sort((a,b)=>b.score-a.score).slice(0,10);
      localStorage.setItem('minecraftHighScores', JSON.stringify(updated));
    }

    setSaved(true);
  };

  // --- RENDERIZAÇÃO ---
  return (
    <div className='quiz-app'>

      {/* Barra de progresso */}
      <div className="progress" aria-hidden="true">
        <div
          className="progress-bar"
          style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
        />
      </div>

      {showScore ? (
        <div className='score-section'>
          <h2>Fim do Jogo!</h2>
          <p>Você marcou <b>{score}</b> de <b>{questions.length}</b> pontos!</p>
          <p>{score >= questions.length / 2 ? 'Parabéns, Minerador(a) Veterano(a)!' : 'Tente de novo, Iniciante!'}</p>

          {!saved ? (
            <form onSubmit={handleSubmitScore} className="score-submission-form">
              <h4>Insira seu nome para o ranking:</h4>
              <input
                type="text"
                placeholder="Seu nome (máx. 10 caracteres)"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value.substring(0, 10))}
                maxLength={10}
                required
                aria-label="Nome para o ranking"
              />
              <button type="submit">Salvar Pontuação</button>
            </form>
          ) : (
            <div style={{ marginTop: 12 }}>
              <p><b>Pontuação salva!</b> Veja o ranking ao lado.</p>
              <button onClick={() => setSaved(false)} style={{ marginRight: 8 }}>Editar nome</button>
            </div>
          )}

          <button onClick={resetQuiz} className="restart-button" style={{ marginTop: 12 }}>
            Reiniciar Quiz
          </button>
        </div>
      ) : (
        <div className='question-section'>
          <div className='question-count' aria-live="polite">
            <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
          </div>

          <div className='question-text'>
            {questions[currentQuestion].questionText}
          </div>

          <div
            className='answer-section'
            role="radiogroup"
            aria-label={`Opções para pergunta ${currentQuestion + 1}`}
          >
            {questions[currentQuestion].answerOptions.map((answerOption, index) => {
              const isSelected = selectedAnswer === index;
              const classes = [
                'answer-button',
                isSelected && (answerOption.isCorrect ? 'correct' : 'wrong')
              ].filter(Boolean).join(' ');

              return (
                <button
                  key={index}
                  role="radio"
                  aria-checked={isSelected}
                  className={classes}
                  disabled={buttonsDisabled}
                  onClick={() => handleAnswerOptionClick(index, answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quizminecraft;