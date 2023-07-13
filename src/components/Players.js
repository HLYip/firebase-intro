import React, { useEffect, useState } from 'react'
import PlayerList from './PlayerList';
import PlayerForm from './PlayerForm';
import Files from './Files';
import {deleteFile, getFilesList, uploadFile, getPlayerList, deletePlayer,addPlayer,updatePlayer } from '../service/playerService';

const Players = () => {

    const [playerList, setPlayerList] = useState([])
    const [filesList, setFilesList] = useState([])

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


    const fileUploadHandler = async(file) =>{
        await uploadFile(file)
        getFilesHandler();
    }

    const getFilesHandler = async () =>{
        const files = await getFilesList();
        console.log(files)
        console.log("retreiving files")
        setFilesList(files);
        

    }

    const deleteFileHandler  = async (fileId,filePath) =>{
        await deleteFile(fileId,filePath)
        alert("file deleted")
        await getFilesHandler()
        
        

    }

    useEffect(()=>{
        getPlayers();
        getFilesHandler();
        

    },[]) 


    



  return (
    <div>
    <PlayerList players={playerList} deletePlayer={deleteplayerHandler} updatePlayer={updatePlayerHandler}/>
    <PlayerForm addPlayer={addPlayerHandler}/>
    <Files uploadFile={fileUploadHandler} filesList={filesList} deleteFile={deleteFileHandler}/>
    </div>
  )
}

export default Players;