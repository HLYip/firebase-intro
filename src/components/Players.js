import React, { useEffect, useState } from 'react'
import PlayerList from './PlayerList';
import PlayerForm from './PlayerForm';
import { getPlayerList, deletePlayer,addPlayer,updatePlayer } from '../service/playerService';

const Players = () => {

    const [playerList, setPlayerList] = useState([])

    const getPlayers = async ()=>{

        const players = await getPlayerList();
        console.log("update players")
        setPlayerList(players)
    }

    const deleteplayerHandler = async (id) =>{
        await deletePlayer(id);
        getPlayers()
    }

    const addPlayerHandler = async (playerName, playerPosition, playerScore, playerLiked) => {
        try {
          await addPlayer(playerName, playerPosition, playerScore, playerLiked);
          getPlayers();
        } catch (err) {
          console.error(err)
        }
      }


    const updatePlayerHandler = async(id,score) =>{

        try {
            await updatePlayer(id,score);
            console.log(score)
            getPlayers();
          } catch (err) {
            console.error(err)
          }

    }
    useEffect(()=>{
        getPlayers();

    },[]) 


    



  return (
    <div>
    <PlayerList players={playerList} deletePlayer={deleteplayerHandler} updatePlayer={updatePlayerHandler}/>
    <PlayerForm addPlayer={addPlayerHandler}/>
    </div>
  )
}

export default Players;