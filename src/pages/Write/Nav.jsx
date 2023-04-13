import React from "react";
import cls from "./write.module.css"

import { useNavigate } from 'react-router-dom';

export default function Nav({saveData}){
    const navigate = useNavigate();
    return( 
    <div className={cls.nav}>
        <div onClick={() => navigate("/")} className={cls.back}>
            <i className="bi bi-chevron-left"></i>
        </div>

        <div className={cls.save} onClick={saveData}>
            <i className="bi bi-save"></i>
        </div>
    </div>
    )
}