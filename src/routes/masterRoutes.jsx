import { Routes, Route } from "react-router-dom";
import SignUpPage from "../components/auth/signup";
import LoginPage from "../components/auth/login";

export const MasterRoutes = () => {
    return (
        <Routes>
            <Route path="/auth" element={<SignUpPage/>}></Route>
            <Route path="/auth/login" element={<LoginPage/>}></Route>
        </Routes>
    )

}
