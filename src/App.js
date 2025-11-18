// App.js (Exemplo de componente principal que usa o Quiz e a Leaderboard)

import React, { useState, useEffect } from 'react';
import Background from './components/assets/Minecraft.jpg';
import Quizminecraft from './components/Quizminecraft/Quizminecraft';
import Leaderboard from './components/Leaderboard/Leaderboard';
import './App.css'; // Para os estilos de layout e quiz

function App() {
    // Estado para forçar a atualização da Leaderboard
    const [latestScoreEntry, setLatestScoreEntry] = useState(null);

    // Função que será passada para o MinecraftQuiz para salvar o score
    const handleScoreSubmit = (newScoreEntry) => {
        // 1. Carrega scores existentes
        const savedScores = JSON.parse(localStorage.getItem('minecraftHighScores')) || [];
        
        // 2. Adiciona, ordena e limita
        const updatedScores = [...savedScores, newScoreEntry];
        updatedScores.sort((a, b) => b.score - a.score);
        const topScores = updatedScores.slice(0, 10);
        
        // 3. Salva no Local Storage
        localStorage.setItem('minecraftHighScores', JSON.stringify(topScores));

        // 4. Atualiza o estado para forçar a Leaderboard a recarregar
        setLatestScoreEntry(newScoreEntry);
    };

    return (
        <div className='main-layout' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', height: '92vh' }}>
            {/* O Quiz Ocupa o Lado Esquerdo */}
            <div className="quiz-area">
                <Quizminecraft onScoreSubmit={handleScoreSubmit} />
            </div>
            
            {/* A Leaderboard Ocupa o Lado Direito */}
            <div className="leaderboard-area">
                <Leaderboard latestScoreEntry={latestScoreEntry} />
            </div>
        </div>
    );
}

export default App;