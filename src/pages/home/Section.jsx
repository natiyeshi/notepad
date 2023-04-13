import React,{useState} from "react";
import classes from "./home.module.css"

import { Link } from "react-router-dom";
import Box from "./Box"

import img from "../../assets/rafiki.png"


// localStorage.setItem("userData", JSON.stringify(obj));


export default function Section({setPin,startEdit,currData,setColor,changingColor,deleteNode,notes}){
    let pined = notes.filter(obj => obj.pin != 0)
    let notPined = notes.filter(obj => obj.pin == 0)
    let files = [...pined , ...notPined]
    let notesDiv = files.map(e => <Box 
           deleteNode={deleteNode}
           setPin={setPin}
           {...e} 
           changingColor={changingColor}
           setColor={setColor}
           key={e.id} 
           startEdit={startEdit}
        />)
    return (
        <section>
            <div className={classes.setting}>
                
            </div>
            {
            currData.length > 0 
            ? 
            <div className={classes.notes}>
                {notesDiv}
            </div>
            :  <div className={classes.empty}>
                 <img src={img} width={"400px"}/>
                 <p>write your first note here &#128516;</p> 
               </div>
            
            }
            
            <div style={{display:"none"}} className={classes.editor}></div>
            
            <Link to="/addNote">
                <div className={classes.add}>
                    <i className="bi bi-plus-lg f"></i>
                </div>
            </Link>

        </section>
        )
}