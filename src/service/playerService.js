import React from 'react'
import { db,auth } from '../config/firebase';
import { collection, addDoc,getDocs,deleteDoc,doc, updateDoc } from 'firebase/firestore';

const playersRef = collection(db,"players")
const playerRef = collection(db, "players")

export const getPlayerList = async () =>{
    try{
    const data = await getDocs(playersRef);
    const filterData = data.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id
    }))
    return filterData;
    }catch(err){
        console.error(err)
    }
}

export const deletePlayer = async (id) =>{
    const playerDoc = doc(db, "players",id )
    await deleteDoc(playerDoc)
}


export const addPlayer = async (playerName, playerPosition, playerScore, playerLiked) => {
    try {
      await addDoc(playerRef, {
        name: playerName,
        position: playerPosition,
        score: playerScore,
        liked: playerLiked,
        user:auth?.currentUser?.uid || "",
        shared: []
      });
    } catch (err) {
      console.error(err);
    }
  }

  export const updatePlayer = async(id, score) =>{

    const playerDoc = doc(db,"players", id)

    await updateDoc(playerDoc, {score: score})
  }