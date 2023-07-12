import React, { useState } from 'react'



function PlayerForm({addPlayer}) {

    const [playerName, setPlayerName] = useState("");
    const [playerPosition, setPlayerPosition] = useState("");
    const [playerScore, setPlayerScore] = useState();
    const [playerLiked, setPlayerLiked] = useState(false);

    // const playerRef = collection(db, "players")
    const addPlayerHandler = async () =>{
        try{
          await addPlayer(playerName, playerPosition, playerScore, playerLiked);
          setPlayerLiked(false)
          setPlayerName("")
          setPlayerPosition("")
          setPlayerScore("")
        }catch(err){
            console.error(err)
        }
    }

  return (
    <div>PlayerForm
        <input value={playerName} onChange={(e)=>{setPlayerName(e.target.value)}} placeholder='Enter player Name'/>
        <input value={playerPosition} onChange={(e)=>{setPlayerPosition(e.target.value)}} placeholder='Enter player Position'/>
        <input value={playerScore} onChange={(e)=>{setPlayerScore(Number(e.target.value))}} placeholder='Enter player Score'/>
        <input checked={playerLiked} onChange={(e)=> setPlayerLiked(e.target.checked)} type='checkbox'/>
        <label>Like this player</label>
        <button onClick={addPlayerHandler}>Add Player</button>



    </div>
  )
}

export default PlayerForm