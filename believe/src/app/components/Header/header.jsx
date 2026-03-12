import Navbar from "../Navbar/Navbar"
import "./header.css"

export default function Header() {

    return (
        <>
        <section className="heroimg">
            <Navbar/>
            <h1>Welcome to </h1>
            <h1>Belive Fitness</h1>
            <section className="flex gap-4">
                <button className=" bg-yellow-500 px-8 py-5 rounded-full" >CLASSES</button>
                <button className=" bg-yellow-500 px-8 py-5 rounded-full">LOG IN</button>
            </section>
        </section>
        </>
    )
}