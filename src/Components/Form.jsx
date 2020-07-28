import React, {useContext, useState} from 'react'
import {AlertContext} from "../Context/alert/AlertContext";
import {FirebaseContext} from "../Context/firebase/FirebaseContext";

const Form = () => {
    const {show} = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)
    const [text, setText] = useState('')
    let onChangeText = (e) => {
        setText(e.target.value)
    }
    let onSubmitForm = (event) => {
        event.preventDefault()
        debugger;
        if(text.trim()){
            firebase.add({text: text,}).then(res => {
                show('The note was added!', 'success')
                setText('')
            })
        }
        else{
            show('Enter text!')
        }
    }
    return (
        <form onSubmit = {onSubmitForm}>
            <div className={'form-group'}>
                <input type="text" className="form-control"
                       id="exampleFormControlInput1"
                       placeholder="Введите заметку"
                       value = {text}
                       onChange = {onChangeText} />
            </div>
        </form>
    )
}

export default Form