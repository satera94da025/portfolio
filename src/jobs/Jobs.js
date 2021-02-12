import React from "react";
import style from './Jobs.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Job from "./job/Job";
import Title from "../common/components/title/title";
import todoImage from '../assets/image/todo.png'
import counterImage from '../assets/image/counter.png'



function Jobs() {

    const todoImg = {
        backgroundImage: `url(${todoImage})`
    }

    const counterImg = {
        backgroundImage: `url(${counterImage})`
    }
    return (
        <div className={style.jobsBlock}>
            <div className={`${styleContainer.container} ${style.jobsContainer}`}>
                <Title text={'My Projects'}/>

                <div className={style.jobs}>
                    <Job style={counterImg} project={'COUNTER'} description={'Counter with hooks'}/>
                    <Job style={todoImg} project={'TODOLIST'} description={'Flex box module'}/>

                </div>
            </div>
        </div>
    )
}

export default Jobs