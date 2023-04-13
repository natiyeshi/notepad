
import cls from "./write.module.css"

export default function Note({title,note,handleChange}){
    return (
    <div className={cls.note}>
        <textarea 
            className={cls.titlepad} 
            placeholder={"Title"}
            value={title}
            id="title"
            onChange={handleChange}
        />
        <textarea 
            className={cls.notepad} 
            placeholder={"type something ..."}
            value={note}
            id="note"
            onChange={handleChange}

        />
            
      
    </div>
    )
}