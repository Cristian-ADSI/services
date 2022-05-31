import { BrowserRouter as AppRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import PageAxios from "./pages/PageAxios";

export const Router = () => {
    return (
        <AppRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={< PageAxios />} />
                <Route path="/axios" element={< PageAxios />} />
            </Routes>
        </AppRouter>
    )
}
