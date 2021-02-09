import style from './Title.module.css'
import React from "react";


function Title(props) {
    return (<div className={style.title}>
        <h2>{props.text}</h2>
    </div>)
}

export default Title