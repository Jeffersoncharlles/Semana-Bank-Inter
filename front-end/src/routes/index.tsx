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
                <Route path="/" element={<SingUp />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )

}

export { Router }