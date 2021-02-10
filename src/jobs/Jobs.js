import React from "react";
import style from './Jobs.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Job from "./job/Job";
import Title from "../common/components/title/title";

function Jobs() {
    return (
        <div className={style.jobsBlock}>
            <div className={`${styleContainer.container} ${style.jobsContainer}`}>
                <Title text={'My Projects'}/>

                <div className={style.jobs}>
                    <Job project={'COUNTER'} description={'Counter with hooks'}/>
                    <Job project={'TODOLIST'} description={'Flex box module'}/>

                </div>
            </div>
        </div>
    )
}

export default Jobs