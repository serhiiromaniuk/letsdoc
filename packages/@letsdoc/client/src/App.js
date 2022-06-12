import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { 
    MainPage, Login, Register, Profile
} from './Pages'

export default function App() {
    return (
        <div>
          <Router>
            <Routes>
              {
                // Main Pages 
              }
              <Route exact path='/' element={<MainPage/>}/>
              <Route exact path='/profile' element={<Profile/>}/>
                

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
