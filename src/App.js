
import "./App.css"
import React, { Fragment, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar/Navbar"
import Footer from "./components/Footer/Footer"
import { routes } from "./routes"
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'

const Main = ({ children }) => {
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
                                        <Footer />
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
