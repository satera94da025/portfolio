import React from "react";
import style from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import gitImg from '../../src/assets/image/github.png'
import TelImg from '../../src/assets/image/telegram.png'
import LinkImg from '../../src/assets/image/linkedin.png'
import hhImg from '../../src/assets/image/user.png'


function Footer() {



    return (<footer id={"contacts"} className={styleContainer.container}>
            <div>
                <div className={style.block}><a><h2>
                    Alexandr
                </h2></a></div>

                <div className={style.ul}>

                    <a  href={'https://github.com/satera94da025'}><img   src={gitImg}/></a>
                    <a href={'https://t.me/Satera94'}  ><img   src={TelImg}/></a>
                    <a href={'https://www.linkedin.com/in/aleksandr-dovydov-aa0325206/'}><img   src={LinkImg}/></a>
                    <a href={'https://spb.hh.ru/resume/400690b3ff05fe1e990039ed1f6a55596d4149'}><img   src={hhImg}/></a>

                </div>
                <div className={style.block}>
                    © 2021 DAV6ID-PROGER, All Rights Reserved.
                </div>
            </div>
        </footer>

    )
}

export default Footer