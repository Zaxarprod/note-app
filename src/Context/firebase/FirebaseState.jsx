import React, {useContext, useReducer} from 'react'
import {FirebaseContext} from "./FirebaseContext";
import {ADD_NOTE, DELETE_NOTE, firebaseReducer, GET_NOTES, SHOW_LOADER} from "./FirebaseReducer";
import axios from 'axios'
import {AlertContext} from "../alert/AlertContext";

export const url = 'https://note-app-b5442.firebaseio.com'

const FirebaseState = ({children}) => {
    const {show} = useContext(AlertContext)
    const initialState = {
        notes: [],
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)
    let showLoader = () => {dispatch({type: SHOW_LOADER})}
    let add = async (payload) => {
        let note = {
            ...payload,
            data: new Date().toJSON()
        }
        let res = await axios.post(url + '/notes.json', note)
        dispatch({
            type: ADD_NOTE,
            payload: {
                ...note,
                id: res.data.name,
            }
        })
        console.log(res)
    }
    let showNotes = async () => {
        showLoader()
        let res = await axios.get(url + '/notes.json')
        if(res.data) {
            let payload = Object.keys(res.data).map(key => {
                return {
                    ...res.data[key],
                    id: key
                }
            })
            dispatch({
                type: GET_NOTES,
                notes: payload
            })
        }
        else{
            dispatch({
                type: GET_NOTES,
                notes: []
            })
        }
        console.log(res)
    }
    let deleteNote = async (id) => {
        await axios.delete(url + `/notes/${id}.json`)
        dispatch({
            type: DELETE_NOTE,
            id: id,
        })
        show('The note was removed!', 'success')
    }
    return (
        <FirebaseContext.Provider value={{
            showNotes, add, deleteNote, state
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState