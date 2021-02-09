import React from "react";
import style from './Skill.module.css'


function Skill(props) {
    return(
        <div className={style.skill}>
            <div className={style.icon}>{props.icon}</div>
            <h3 className={style.title}>{props.title}</h3>
            <span>
                {props.description}
            </span>
        </div>
    )
}

export default Skill