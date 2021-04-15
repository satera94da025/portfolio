import React from "react";
import style from './Main.module.scss'
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import MyPhoto from "../assets/image/MyPhoto.jpg";
import styleContainer from '../common/styles/Container.module.scss'
import Tilt from 'react-tilt'

function Main() {

    const MyPhotoImg = {
        backgroundImage: `url(${MyPhoto})`
    }

    const particlesOpt = {
        'particles': {
            'number': {
                'value': 80,
                'density': {
                    'enable': true,
                    'value_area': 800,
                },
            },
        }
    }

    return (
        <div id={'main'} className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={styleContainer.container}>

                <div className={style.text}>
                    <span> <ReactTypingEffect text={['Hi There']}/> </span>
                    <h1>I am Aleksandr Dovydov</h1>
                    <ReactTypingEffect
                        text={["Frontend developer"]}
                    />
                </div>
                <Tilt className="Tilt" options={{max: 25}}>
                    <div className={style.photo} style={MyPhotoImg}>

                    </div>
                </Tilt>

            </div>

        </div>
    )
}

export default Main