import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"; // Import Outlet để render route con
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import { routes } from "./routes";

const Main = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route) => {
                        const Page = route.page;
                        const MainPage = route.isNavbar ? Main : Fragment;
                        const hasFooter = route.isFooter;
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <MainPage>
                                        <Page />
                                        {hasFooter && <Footer />}
                                        <Outlet /> {/* Sử dụng Outlet để render route con */}
                                    </MainPage>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
