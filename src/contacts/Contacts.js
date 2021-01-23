import React from "react";
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'


function Contacts() {
    return(
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`} >
                <h2 className={style.contact}>My contacts</h2>
                    <form className={style.contactsForm} >
                        <input type='text' name='Name' placeholder={'Name'}/>
                        <input type='text' name='E-mail' placeholder={'E-mail'}/>
                        <textarea placeholder={'Your message'}/>
                        <button>Send</button>
                    </form>

            </div>
        </div>
    )
}

export default Contacts