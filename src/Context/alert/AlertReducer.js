const SHOW_ALERT = 'SHOW_ALERT'
const HIDE_ALERT = 'HIDE_ALERT'

const url = process.env["REACT_APP_DB_URL "]


export const alertReducer = (state, action) => {
    switch(action.type){
        case SHOW_ALERT:
            return {
                ...action.payload,
                visible: true
            }
        case HIDE_ALERT:
            return {
                ...state,
                visible: false,
            }
        default:
            return state
    }
}