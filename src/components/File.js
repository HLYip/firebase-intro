import React from 'react'
import './File.css'
const File = ({url,deleteFile, fileId, filePath,fileName}) => {


  return (
    <div className='imageFile'>File
<h2 style={{color:"blue"}}>{fileName}</h2>
<img src={url} onError={(e)=>{e.target.onerror = null; e.target.src="fallback_image.jpg"}} />
   <button onClick={()=> deleteFile(fileId,filePath)}> Delete Image</button>
    </div>
    
  )
}

export default File