import Loginpage from "./loginForm";
import Link from "next/link";
import "./login.css"

export default function Login() {
    return (
        <div className="contain">
            <img src="/assets/images/Group_17.png" alt="Logo"/>
            <h1>Log ind</h1>
            <Loginpage/>
        </div>
    )
}