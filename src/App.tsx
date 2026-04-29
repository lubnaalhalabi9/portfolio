import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/404" element={<NotFound />}/>
        <Route path="*" element={<Navigate to={"/404"} />}/>
      </Routes>
    </div>
  )
}

export default App
