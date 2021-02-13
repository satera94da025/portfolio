import React from "react";
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/title";
import reactImg from './../assets/image/React.png'
import reduxImg from './../assets/image/Redux.png'
import reactReduxImg from './../assets/image/React-Redux.png.webp'
import cssImg from './../assets/image/css.png'
import jsImg from './../assets/image/js.png'
import sImg from './../assets/image/storyB.png'
import tImg from './../assets/image/typescript.png'
import uniImg from './../assets/image/uniTest.jpg'
function Skills() {

    const reactImage = {
        backgroundImage: `url(${reactImg })`
    }

    const reduxImage = {
        backgroundImage: `url(${reduxImg})`
    }

    const reactReduxImage = {
        backgroundImage: `url(${reactReduxImg})`
    }

    const cssImage = {
        backgroundImage: `url(${cssImg})`
    }

    const jsImage = {
        backgroundImage: `url(${jsImg})`
    }

    const sImage = {
        backgroundImage: `url(${sImg})`
    }
    const tImage = {
        backgroundImage: `url(${tImg})`
    }
    const uniImage = {
        backgroundImage: `url(${uniImg })`
    }
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
               <Title text={'My skills'}/>

                <div className={style.skills}>
                    <Skill style={jsImage} title={'Js'} description={'ES6+'}/>
                    <Skill style={sImage} title={'StoryBook'} description={'base skills'}/>
                    <Skill style={cssImage} title={'CSS'} description={'FLEX-BOX MODULE'}/>
                    <Skill style={reactImage} title={'React'} description={'Hooks '}/>
                    <Skill style={reactReduxImage} title={'React - Redux'} description={'bla bla '}/>
                    <Skill style={tImage} title={'TypeScript'} description={'bla bla '}/>
                    <Skill style={uniImage} title={'Unit testing'} description={'Jest '}/>
                    <Skill style={reduxImage} title={'Redux'} description={'Hooks '}/>

                </div>
            </div>
        </div>
    )
}

export default Skills