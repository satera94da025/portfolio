import React from "react";
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/title";


function Contacts() {
    return(
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`} >
                <Title text={'My Contacts'}/>

                    <form className={style.contactsForm} >
                        <input type='text' name='Name' placeholder={'Name'}/>
                        <input type='text' name='E-mail' placeholder={'E-mail'}/>
                        <textarea placeholder={'Your message'}/>
                        <button type={'submit'}>Send</button>
                    </form>

            </div>
        </div>
    )
}

export default Contacts