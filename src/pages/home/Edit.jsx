import React from 'react'
import cls from "./home.module.css";

export const Edit = ({saveEdite,handleEdition,setEditing,title,note}) => {
  return (
    <>
    <div className={cls.editorBox}>
        <input 
            type="text" 
            placeholder='Title' 
            id="title"
            onChange={handleEdition}
            value={title}/>
        <textarea
              placeholder='note'
              id="note" cols="30" rows="10"
              value={note}
              onChange={handleEdition}
        />
        <button onClick={saveEdite} className={"btn btn-primary"}>save</button>
    </div> 
    <div className={cls.editModal} onClick={()=>setEditing(false)}>
    </div>
    </>
  )
}
