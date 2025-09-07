import { BrowserRouter, Route, Routes } from "react-router-dom"
import Questions from "./components/Questions"

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Questions key={location.pathname} />} />
            <Route path="/:questionId" element={<Questions key={location.pathname} />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
