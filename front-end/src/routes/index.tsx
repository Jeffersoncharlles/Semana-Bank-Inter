import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { SignIn } from "../pages/SignIn"
import { SingUp } from "../pages/SingUp"

const Router = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SingUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )

}

export { Router }