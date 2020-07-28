import React, {useContext} from 'react'
import {FirebaseContext} from "../Context/firebase/FirebaseContext"
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Notes = ({notes}) => {
    const firebase = useContext(FirebaseContext)
    return (
        <TransitionGroup component={'ul'} className="list-group">
        {notes.map(key => {
            return (
                <CSSTransition
                    key = {key.id}
                    classNames = 'note'
                    timeout={800}
                >
                    <li className={'list-group-item d-flex justify-content-between align-items-center note'}>
                        <div>
                            <strong>{key.text}</strong>
                            <small>{key.data}</small>
                        </div>
                        <button type="button"
                                className="btn btn-outline-danger btn-sm"
                                onClick={ () => { firebase.deleteNote(key.id) }}>&times;</button>
                    </li>
                </CSSTransition>
            )
            })}
        </TransitionGroup>
    )
}

export default Notes