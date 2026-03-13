import Link from "next/link";
import "./header.css"
import { IoMdList } from "react-icons/io";

export default function Header() {

    return (
        <>
        <section className="relative heroimg">
            <Link className="absolute top-5 right-5 text-white text-5xl" href="/navbar"><IoMdList /></Link>
            <h1>Welcome to</h1>
            <h1>Belive Fitness</h1>
            <section className="flex gap-4">
                <Link href="/Classes"><button className=" bg-yellow-500 px-8 py-5 rounded-full">CLASSES</button></Link>
                <Link href="/login"><button className=" bg-yellow-500 px-8 py-5 rounded-full">LOG IN</button></Link>
            </section>
        </section>
        </>
    )
}