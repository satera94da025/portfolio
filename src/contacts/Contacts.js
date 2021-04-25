import React from "react";
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/title";
import Fade from 'react-reveal/Fade';


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <Fade left>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title text={'About me'}/>

                    <div className={style.contactsForm}>My name is Alexander, I am 26 and I am a novice FrontEnd-developer. I have a degree in
                        programming, I'm a software technician. I pass different courses on new technologies and
                        libraries in programming, I want to become a specialist in my business and I'm looking for my
                        first job, where there will be a friendly team and a nice atmosphere for working in a team. I
                        hope you will read this text and appreciate my efforts.
                    </div>

                </div>
            </Fade>

        </div>
    )
}

export default Contacts