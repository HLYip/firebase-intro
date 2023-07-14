import React from 'react'
import './File.css'
const File = ({url,deleteFile, fileId, filePath,fileName, mimeType}) => {
  
  const renderFileContent = () => {
    if(mimeType.startsWith('image/')) {
      return <img src={url} onError={(e)=>{e.target.onerror = null; e.target.src="fallback_image.jpg"}} />
    } else if(mimeType.startsWith('video/')) {
      return <video style={{width: "300px", height: "300px"}} controls src={url} />
    } else if(mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      return <a  href={url}><img src={`${process.env.PUBLIC_URL}/wordicon.jpg`} alt="Word document"  /></a>
    }
    // Add more conditions here for other types of files you want to support.
    return null;
  }

  return (
    <div className='imageFile'>
      <h2 style={{color:"blue"}}>{fileName}</h2>
      {renderFileContent()}
      <button onClick={()=> deleteFile(fileId,filePath)}> Delete File</button>
    </div>
    
    
  )
}

export default File