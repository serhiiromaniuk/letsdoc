import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { 
    MainPage, Login, Register,
    Profile, Document, Sandbox
} from './Pages'
import { verifyAuth } from './Components/Func'

export default function App() {
    return (
        <div>
          <Router>
            <Routes>
              {
                // Main Pages 
              }
              <Route exact path='/' element={<MainPage/>}/>
              <Route exact path='/profile' element={verifyAuth(Profile)}/>
              <Route exact path='/document' element={verifyAuth(Document)}/>
              <Route exact path='/sandbox' element={<Sandbox/>}/>

              {
                // Auth Pages 
              }
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/register' element={<Register/>}/>
  
            </Routes>
          </Router>
        </div>
      )
}
