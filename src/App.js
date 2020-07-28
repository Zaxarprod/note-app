import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import MainPage from "./Pages/MainPage";
import About from "./Pages/About";
import Alert from "./Components/Alert";
import AlertState from "./Context/alert/AlertState";
import FirebaseState from "./Context/firebase/FirebaseState";

const App = () => {
  return (
      <AlertState>
          <FirebaseState>
                  <BrowserRouter>
                          <Navbar />
                          <div className={'container pt-4'}>
                              <Alert />
                              <Switch>
                                  <Route path={'/'} exact component={MainPage} />
                                  <Route path={'/about'} exact component={About}/>
                              </Switch>
                          </div>
                  </BrowserRouter>
          </FirebaseState>
      </AlertState>
  )
}

export default App
