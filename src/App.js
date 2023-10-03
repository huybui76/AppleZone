
import "./App.css"
import React, {Fragment} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { routes } from "./routes"
const Main = ({children}) => {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    )
  }
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route) => {
                        const Page = route.page
                        const MainPage = route.isNavbar ? Main : Fragment
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <MainPage>
                                        <Page />
                                    </MainPage>
                                }
                            />
                        )
                    })}
                </Routes>
            </Router>
        </div>
    )
}

export default App
