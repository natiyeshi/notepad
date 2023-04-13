import React,{useState} from "react";
    
import Nav from "./Nav";
import Section from "./Section";
import { Edit }  from "./Edit";

export default function Home({currData,setCurrData}){
    let [searchData,setSearchData] = useState("")
    let [notes,setNotes] = useState(currData)
    let [editing,setEditing] = useState(false)
    let [editFile,setEditFile] = useState({title:"",note:""})
    let [changingColor,setChangingColor] = useState("")

    let searchNotes = ({target}) =>{
        let {value} = target
        setSearchData(value)
        setNotes(() => (
            currData.filter(e => e.title.substring(0,value.length) == value)
        ))
    }

    let deleteNode = (id) =>{
        let newData = currData.filter(e => e.id != id)
        localStorage.setItem("userData", JSON.stringify(newData));
        setCurrData(newData)
        setNotes(newData)
    }
    let handleEdition = ({target}) =>{
        let {id,value} = target
        setEditFile(pre => ({...pre,[id]:value}))
    }
    let saveEdite = () =>{
        if(editFile.title.length > 2){
           let newNote = notes.map(e =>{
                if(e.id != editFile.id) return e
                return editFile
           })
           setNotes(newNote)
           localStorage.setItem("userData", JSON.stringify(newNote));
           setEditing(false)

        } else{
            alert("nop")
        }
    }
    let setPin = (id) =>{
        let rev = (num) => num == 0 ? 1 : 0
        let uinewData = notes.map(pre => {
            let temp = {...pre}
            if(temp.id == id) {temp.pin = rev(temp.pin)}
            return temp
        })
        let newData = currData.map(pre => {
            let temp = {...pre}
            if(temp.id == id) {temp.pin = rev(temp.pin)}
            return temp
        })
        localStorage.setItem("userData", JSON.stringify(newData));
        setNotes(uinewData)
        setCurrData(newData)
    }

    let setColor = (a) => {
        alert(a)
        return
        // setChangingColor(value)
        // let newData = notes.map(pre => {
        //     let temp = {...pre}
        //     if(temp.id == id) {temp.color = value}
        //     return temp
        // })
        // localStorage.setItem("userData", JSON.stringify(newData));
        // setNotes(newData)
        // setCurrData(newData)
    }

    let startEdit = (id) =>{
        for(let itr of currData){
            if(itr.id == id){
                setEditing(true)
                setEditFile(itr)
                return
            }
        }
        
    }

    return (
            <main>
               <Nav 
                    searchData={searchData} 
                    searchNotes={searchNotes}
               />
               <Section 
                    currData={currData}
                    notes={notes}
                    deleteNode={deleteNode}
                    startEdit={startEdit}
                    setPin={setPin}
                    setColor={setColor}
                    changingColor={changingColor}
                />
               {
                editing &&
                <Edit 
                    title={editFile.title}
                    note={editFile.note}
                    saveEdite={saveEdite}
                    setEditing={setEditing}
                    setEditFile={setEditFile}
                    handleEdition={handleEdition}
                />}
            </main>
        ) 
}