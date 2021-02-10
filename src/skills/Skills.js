import React from "react";
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/title";
import reactImg from './../assets/image/React.png'
import reduxImg from './../assets/image/Redux.png'
function Skills() {

    const reactImage = {
        backgroundImage: `url(${reactImg })`
    }

    const reduxImage = {
        backgroundImage: `url(${reduxImg})`
    }

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
               <Title text={'My skills'}/>

                <div className={style.skills}>
                    <Skill title={'Js'} description={'ES6+'}/>
                    <Skill title={'CSS'} description={'FLEX-BOX MODULE'}/>
                    <Skill style={reactImage} title={'React'} description={'Hooks '}/>
                    <Skill title={'React - Redux'} description={'bla bla '}/>
                    <Skill title={'TypeScript'} description={'bla bla '}/>
                    <Skill title={'Unit testing'} description={'Jest '}/>
                    <Skill style={reduxImage} title={'Redux'} description={'Hooks '}/>
                    <Skill title={'English level'} description={'Intermediate'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills