import React,{useState} from "react"
import cls from "./home.module.css"


export default function Box({
    pin,title,note,startEdit,
    deleteNode,id,setPin,color,
    setColor,changingColor
}){
    const [showEdit, setShowEdit] = useState(false)
    let sty = pin == 1 ? {"background" : "rgb(0, 87, 43)"} : {"background ": color }
    
    return (
        <>
        <div className={cls.box}  style={sty}
            onMouseOver={()=>setShowEdit(true)}
            onMouseLeave={() => setShowEdit(false)}>
            
            <div className={cls.files}>
                <div className={cls.title}>{title}</div>
                <div className={cls.note}>{note}</div>
            </div>
           { showEdit && 
            <div className={cls.edit}>
                    <div className={cls.editNode} onClick={()=>startEdit(id)}>
                        <i className="bi bi-pencil-square"></i>
                    </div>
                    <div className={cls.deleteNode} onClick={()=>deleteNode(id)}>
                        <i className="bi bi-trash-fill"></i>
                    </div>
                    <div className={cls.deleteNode} onClick={() =>setPin(id)}>
                       {pin != 0 ?  <i className="bi bi-pin-fill"></i> :
                                    <i className="bi bi-pin"></i>
                        }
                    </div>
                    {/* <div className={cls.color} >
                        <input 
                            type="color" 
                            id={id}
                            className="bi bi-palette" 
                            value={changingColor}
                            onChange={() => setColor(this)}
                        />
                    </div> */}
                </div>
            }
        </div>
        </>
    )

} 