import "./navbar.css";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
    return (
        <div className="fly-bitch">
            <nav aria-label="Main_navigation">
                <ul className="navbar-list">

                    <a className="" href="/">Home</a>
                    <a className="" href="/activities">Popular classes</a>
                    <a className="" href="/"></a>
                    <a className="" href="/profile">My Profile</a>
                    <a className="" href="/">Log Out</a>

                </ul>
            </nav>
        </div>
    );
}

