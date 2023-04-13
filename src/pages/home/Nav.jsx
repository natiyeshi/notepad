import React from "react";
import classes from "./home.module.css"

export default function Nav({currData,searchData,searchNotes}){
    return (
        <nav className={classes.nav}>
            <h2>Notes</h2>
            <div className={classes.searchplace}>
                <input 
                    type="search"
                    id="search" 
                    placeholder="search here"
                    value={searchData} 
                    onChange={searchNotes}   
                />
                <i className="bi bi-search"></i>
            </div>

        </nav>
    )
}