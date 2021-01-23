import React from "react";
import style from './Jobs.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Job from "./job/Job";

function Jobs() {
    return(
        <div className={style.jobsBlock}>
            <div className={`${styleContainer.container} ${style.jobsContainer}`} >
                <h2 className={style.project}>My projects</h2>
                <div className={style.jobs}>
                    <Job project={'Counter'} description={'Counter with hooks'}/>
                    <Job project={'Todolist'} description={'FLEX-BOX MODULE'}/>
                </div>
            </div>
        </div>
    )
}

export default Jobs