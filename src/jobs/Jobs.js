import React from "react";
import style from './Jobs.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Job from "./job/Job";
import Title from "../common/components/title/title";
import todoImage from '../assets/image/todo.jpg'
import socialNetworkImage from '../assets/image/socialNetwork.jpg'
import Fade from 'react-reveal/Fade';




function Jobs() {

    const todoImg = {
        backgroundImage: `url(${todoImage})`
    }

    const counterImg = {
        backgroundImage: `url(${socialNetworkImage})`
    }


    return (
        <div id={"jobs"} className={style.jobsBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.jobsContainer}`}>
                    <Title text={'My Projects'}/>

                    <div className={style.jobs}   >
                        <Job style={counterImg} project={'SocialNetwork'} description={'This is my first serious project where I learned how to program using different libraries and patterns, working with arrays, objects, server.'} adress={'https://satera94da025.github.io/SocialNetwork/'} />
                        <Job style={todoImg} project={'TODOLIST'} description={'Here is a modern approach on functional components, where I have consolidated my ReactFrontEnd-Developer skills and am ready for teamwork in large projects on a commercial basis'} adress={'https://satera94da025.github.io/todolist/'}/>

                    </div>
                </div>
            </Fade>

        </div>
    )
}

export default Jobs