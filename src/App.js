import "./App.css"
import React, {Fragment} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar/Navbar"
import Main from "./components/Main/Main"
import { routes } from "./routes"
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
