import React from 'react'
import { db,auth , storage} from '../config/firebase';
import { collection, addDoc,getDocs,deleteDoc,doc, updateDoc } from 'firebase/firestore';
import {ref,uploadBytes,listAll,getDownloadURL, deleteObject} from "firebase/storage"
import {v4} from 'uuid'

const playersRef = collection(db,"players")
const playerRef = collection(db, "players")
const fileListRef = ref(storage, "projectFiles")

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

  export const uploadFile = async(fileUpload) =>{
    if (!fileUpload) return;
    console.log(fileUpload)
    const filePath = `projectFiles/${fileUpload.name + v4()}`
    const fileFolderRef = ref(storage, filePath)
    
    try{
    await uploadBytes(fileFolderRef, fileUpload)
    const url = await getDownloadURL(fileFolderRef); // getting download url of the file
    const fileDoc = await addDoc(collection(db, 'files'),
     { url: url,
       name:fileUpload.name,
        filePath: filePath,
      type: fileUpload.type });
    alert("File Uploaded")
    return fileDoc.id;
    }catch(err){
        console.error(err)
    }
  }

//   export const getFilesList = async() =>{
//     const urls = []
//     try{
//     listAll(fileListRef).then((response) =>{
//         response.items.forEach((item) => {
//             getDownloadURL(item).then((url)=> {
//                 urls.push(url);
//             })
//         })
//     })

//     }

//     catch(err){
//         console.error(err)
//     }

//     return urls;
//   }

export const getFilesList = async() => {
    try {
        // const response = await listAll(fileListRef);
        // const urls = await Promise.all(response.items.map((item) => getDownloadURL(item)));
        // return urls;
        const filesSnapshot = await getDocs(collection(db, 'files'));
        return filesSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

    } catch (err) {
        console.error(err);
        return [];
    }
    return []; // If there's an error, return an empty array.
}

export const deleteFile = async (id,filePath) => {
    const fileRef = ref(storage, filePath);
    try {
        await deleteObject(fileRef);
        await deleteDoc(doc(db,'files',id))
        console.log('File deleted successfully');
    } catch (error) {
        console.error('Error deleting file', error);
    }
};