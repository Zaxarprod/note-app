export const ADD_NOTE = 'ADD_NOTE'
export const GET_NOTES = 'GET_NOTES'
export const DELETE_NOTE = 'DELETE_NOTE'
export const SHOW_LOADER = 'SHOW_LOADER'

export const firebaseReducer = (state, action) => {
    switch(action.type){
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload],
            }
        case GET_NOTES:
            return {
                ...state,
                notes: action.notes,
                isLoading: false
            }
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((item) => (item.id !== action.id))
            }
        case SHOW_LOADER:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state
    }
}