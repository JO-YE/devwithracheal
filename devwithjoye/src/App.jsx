import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Others } from "./pages/Notfound"
import { Landing } from "./pages/Landing"



function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} /> {/* this first route is for the main page of the portfolio*/}
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Others />}/> {/** this is for any other page not found */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
