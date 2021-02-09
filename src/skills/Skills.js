import React from "react";
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/title";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
               <Title text={'My skills'}/>

                <div className={style.skills}>
                    <Skill title={'Js'} description={'ES6+'}/>
                    <Skill title={'CSS'} description={'FLEX-BOX MODULE'}/>
                    <Skill title={'React'} description={'Hooks '}/>
                    <Skill title={'React - Redux'} description={'bla bla '}/>
                    <Skill title={'TypeScript'} description={'bla bla '}/>
                    <Skill title={'Unit testing'} description={'Jest '}/>
                    <Skill title={'Redux'} description={'Hooks '}/>
                    <Skill title={'English level'} description={'Intermediate'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills