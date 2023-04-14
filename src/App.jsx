import Home from "./Pages/Home"
import Login from "./Pages/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
