import React, { useEffect, useState } from 'react';

export default function Leaderboard({ latestScoreEntry }) {
	const [highScores, setHighScores] = useState([]);

	// Função para carregar scores do localStorage
	const loadScores = () => {
		const savedScores = JSON.parse(localStorage.getItem('minecraftHighScores')) || [];
		setHighScores(savedScores);
	};

	// Carrega scores na montagem e sempre que o prop 'latestScoreEntry' mudar (indicando que um novo score foi submetido no quiz)
	useEffect(() => {
		loadScores();
	}, [latestScoreEntry]); 

	if (!highScores || highScores.length === 0) {
		return (
			<div className="leaderboard" aria-live="polite">
				<h3>🏆 Ranking - Top 10 🏆</h3>
				<p className="no-scores">Sem pontuações ainda. Jogue e salve seu nome!</p>
			</div>
		);
	}

	const medal = (i) => {
		if (i === 0) return '🥇';
		if (i === 1) return '🥈';
		if (i === 2) return '🥉';
		return null;
	};

	return (
		<div className="leaderboard" aria-live="polite">
			<h3>🏆 Top {highScores.length} Pontuações</h3>
			<ol className="high-scores-list" aria-label="Lista de pontuações">
				{highScores.map((entry, index) => (
					<li
						key={entry.id}
						className={`score-entry ${entry.id === latestScoreEntry?.id ? 'highlight-score' : ''}`}
						role="listitem"
					>
						<span className="rank-name">
							{medal(index)} <b>{index + 1}. {entry.name}</b>
						</span>
						<span className="rank-score">
							{entry.score} pts
						</span>
					</li>
				))}
			</ol>
		</div>
	);
}