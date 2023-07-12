import React, { useState } from 'react'

function Player({ player, deletePlayer, updatePlayer }) {
    const [playerScore, setPlayerScore] = useState('')

    const handleScoreChange = (e) => {
        setPlayerScore(e.target.value);
    }

    const handleUpdatePlayerScore = () => {
        updatePlayer(player.id, Number(playerScore));
        setPlayerScore(''); // Clear the input field after updating
    }

    return (
        <div key={player.id}>
            <h2 style={{color: player.liked ? "green": "red"}}>{player.name}</h2>
            <h4>Position: {player.position}</h4>
            <h4>Rating: {player.score}</h4>

            <button onClick={() => deletePlayer(player.id)}>Delete Player</button>

            <input 
                value={playerScore}
                onChange={handleScoreChange}
                placeholder='Enter new score...'
            />
            <button onClick={handleUpdatePlayerScore}>Edit Score</button>
        </div>
    )
}

export default Player;