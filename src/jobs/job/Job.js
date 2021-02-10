import React from "react";
import style from './Job.module.css'


function Job(props) {
    return(
        <div className={style.job}>
            <div className={style.icon}><button>View</button>
            </div>
            <h3 className={style.projectTitle}>{props.project}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Job