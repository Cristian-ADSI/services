import { BrowserRouter as AppRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import PageAxios from "./pages/PageAxios";
import { PageFetch } from "./pages/PageFetch";

export const Router = () => {
    return (
        <AppRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={< PageAxios />} />
                <Route path="/axios" element={< PageAxios />} />
                <Route path="/fetch" element={< PageFetch />} />
            </Routes>
        </AppRouter>
    )
}
