import React, {Fragment, useContext, useEffect} from 'react'
import Form from "../Components/Form";
import Notes from "../Components/Notes";
import {FirebaseContext} from "../Context/firebase/FirebaseContext";
import Loader from "../Components/Loader";

const MainPage = () => {
    const value = useContext(FirebaseContext)
    useEffect(()=> {
        debugger;
            value.showNotes()
            // eslint-disable-next-line
        }
        ,[])
    return (
        <Fragment>
            <Form />
            <hr/>
            {value.state.isLoading? <Loader /> : <Notes notes={value.state.notes}/>}
        </Fragment>
    )
}

export default MainPage