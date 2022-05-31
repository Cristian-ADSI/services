import { Link } from "react-router-dom"
import "../styles/Navbar.css"

export const Navbar = () => {
    return (
        <nav>
            <div className="nav__conten">
                <div className="nav__links">
                    <Link to={"/axios"}>Axios</Link>
                    <Link to={"/fetch"}>Fetch</Link>
                </div>

                <div className="nav_brand">

                </div>
            </div>
        </nav>
    )
}
