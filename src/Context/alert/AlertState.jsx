import React, {createContext, useContext, useReducer} from 'react'
import {AlertContext} from './AlertContext'
import {alertReducer} from "./AlertReducer";

const AlertState = ({children}) => {
    const initialState = {
        visible: false,
    }
    const [state, dispatch] = useReducer(alertReducer, initialState)
    const show = (text,type = 'danger') => {
        dispatch({
            type: 'SHOW_ALERT',
            payload:{
                text: text,
                type: type
            }
        });
    }
    const hide = () => {
        dispatch({
            type: 'HIDE_ALERT',
        });
    }
    return (
        <AlertContext.Provider value = {{
            state,
            hide,
            show
        }} >
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState