import React from "react";
import styleContainer from '../common/styles/Container.module.scss'
import style from './Main.module.scss'
function Main() {
    return(
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Aleksandr Dovydov</h1>
                    <p>Frontend developer </p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    )
}

export default Main