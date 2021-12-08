import { Link } from "react-router-dom";

export default function GlobalNav() {
    return (
        <nav className="flow-root">
            <div className="float-right">
                <Link to="/">Home</Link> |{" "}
                <Link to="about">About</Link> |{" "}
                <Link to="contact">Contact</Link>
            </div>
        </nav>
    );
}