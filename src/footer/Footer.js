import React from "react";
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

function Footer() {
    return (<footer className={styleContainer.container}>
            <div >
                <div className={style.block}><a><h2>Alexandr</h2></a></div>

                <div className={style.ul}>

                    <a href={'#'}>GitHub</a>
                    <a href={'#'}>Mail</a>
                    <a href={'#'}>Linkedin</a>
                    <a href={'#'}>HeadHunter</a>

                </div>
                <div className={style.block}>
                    © 2021 DAV6ID-PROGER, All Rights Reserved.
                </div>
            </div>
        </footer>

    )
}

export default Footer