import React, { useEffect, useState } from 'react'
import Player from './Player';

function PlayerList({players,deletePlayer,updatePlayer}) {
    const [playerScore, setPlayerScore] = useState();
    // const [playerList, setPlayerList] = useState([]);
    // const playersRef = collection(db,"players")

    // const getPlayerList = async () =>{
    //     try{
    //     const data = await getDocs(playersRef);
    //     const filterData = data.docs.map((doc)=>({
    //         ...doc.data(),
    //         id: doc.id
    //     }))
    //     setPlayerList(filterData)
    //     console.log(filterData)
    //     }catch(err){
    //         console.error(err)
    //     }
    // }

    // useEffect(()=>{
        
    //     const getPlayers = async ()=>{

    //         const players = await getPlayerList();
    //         setPlayerList(players)
    //     }
    //     getPlayers();

    // },[]) 


    const updatePlayerHandler = (id ,score) =>{
      setPlayerScore("")
      updatePlayer(id, score);

    }

  return (
    <div>
        <h1>PlayerList</h1>

        {players.map((player) => (
             <Player 
             key={player.id} 
             player={player} 
             deletePlayer={deletePlayer} 
             updatePlayer={updatePlayer} 
         />
              
        ))}


    </div>
  )
}

export default PlayerList