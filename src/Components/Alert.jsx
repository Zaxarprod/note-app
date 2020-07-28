import React, {useContext} from 'react'
import {AlertContext} from "../Context/alert/AlertContext";
import {CSSTransition} from "react-transition-group";

const Alert = () => {
    const {state, hide} = useContext(AlertContext)
    let onButtonClick = () => { hide() }
    return (
        <CSSTransition in = {state.visible}
                       timeout = {{
                           enter: 500,
                           exit: 300
                       }}
                       classNames = {'alert'}
                       mountOnEnter
                       unmountOnExit>
            <div className={`alert alert-${state.type || 'danger'} alert-dismissible`} role="alert">
                {state.text}
                <button type="button" className="close" aria-label="Close" onClick = {onButtonClick}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}

export default Alert