import { Button } from "antd"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./pages/HomePage/Homepage"
import { routes } from "./routes"
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route) => {
                        const Page = route.page
                        return <Route path={route.path} element={<Page />} />
                    })}
                </Routes>
            </Router>
        </div>
    )
}

export default App
