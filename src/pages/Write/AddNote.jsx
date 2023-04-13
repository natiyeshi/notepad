import React, { useState } from "react"

import Nav from "./Nav"
import Note from "./Note"
import { useNavigate } from "react-router-dom"

export default function AddNote({currData,setCurrData}){
    const navigate = useNavigate()
    let [formData,setFormData] = useState({
        title:"",note:""
    })    

    let handleChange = ({target}) =>{
        let {id,value} = target
        setFormData(pre=>{
            return {...pre,[id]:value}
        })
    }

    let saveData = () =>{
        if(formData.title.length > 1){
            let oldData = JSON.parse(localStorage.getItem("userData"))
            let temp = {...formData}
            temp.id = (Math.floor(Math.random() * 10000) + 55)
            temp.color = "rgb(0, 73, 67)"
            temp.pin = 0
            temp.time = Date.now()
            oldData.push(temp)
            localStorage.setItem("userData", JSON.stringify(oldData));
            setCurrData(oldData)
            navigate("/")
        }
        else{alert("input data please")}
    }
    return (
        <main>
            <Nav saveData={saveData} />
            <Note
                title={formData.title}
                note={formData.note}
                handleChange={handleChange}
             />
        </main>
    ) 
}