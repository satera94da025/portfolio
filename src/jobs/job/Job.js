import React from "react";
import style from './Job.module.css'


function Job(props) {
    return(
        <div className={style.job}>
            <div className={style.icon}></div>
            <h3>{props.project}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Job