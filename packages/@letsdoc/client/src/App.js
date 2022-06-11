import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { 
    MainPage, Login,
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
                

              {
                // Auth Pages 
              }
              <Route exact path='/login' element={<Login/>}/>
  
            </Routes>
          </Router>
        </div>
      )
}
