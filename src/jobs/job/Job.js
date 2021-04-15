import React from "react";
import style from './Job.module.scss'


function Job(props) {



    return(
        <div className={style.job}>
            <div className={style.icon} style={props.style}><button src={'https://satera94da025.github.io/SocialNetwork/'}  className={style.bottom}>View</button>
            </div>
            <h3 className={style.projectTitle}>{props.project}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Job