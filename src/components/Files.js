import React, { useState,useRef } from 'react'
import File from './File'

const Files = ({uploadFile,filesList,deleteFile}) => {
    
    const [fileUpload, setFileUpload] = useState(null)
    const fileUploadRef = useRef();

    const fileUploadHandler = async () =>{
        if(fileUpload == null) return
        await uploadFile(fileUpload)
        fileUploadRef.current.value = "";

    }




  return (
    <div>Files
        <input ref={fileUploadRef} onChange={(e)=>{setFileUpload(e.target.files[0])}}  type="file"/>
        
        <button onClick={fileUploadHandler}>Upload File</button>
        {filesList.map((file)=>{
            return <File key={file.id} fileId={file.id} url={file.url} filePath={file.filePath} deleteFile={deleteFile} fileName={file.name} mimeType={file.type}/>

        })}
    </div>
  )
}

export default Files