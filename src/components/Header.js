import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="nav">
            <Link to="/">
                <div>People App</div>
            </Link>
        </nav>
    )
}