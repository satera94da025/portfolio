import React from "react";
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'


function Contacts() {
    return(
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`} >
                <h2 className={style.contact}>My contacts</h2>
                <div className={style.contacts}>
                    <form >
                        <div><input type='text' name='Name' placeholder={'Name'}/></div>
                        <div><input type='text' name='E-mail' placeholder={'E-mail'}/></div>
                        <div><textarea placeholder={'Your message'}/></div>
                    </form>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contacts