import React from "react";
import style from './Job.module.scss'



function Job(props) {


    return(
        <div className={style.job}>
            <div className={style.icon} style={props.style}><a href={props.adress}  className={style.bottom}>Click me</a>
            </div>
            <h3 className={style.projectTitle}>{props.project}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Job