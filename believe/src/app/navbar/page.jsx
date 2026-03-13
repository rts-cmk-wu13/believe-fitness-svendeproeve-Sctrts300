"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./navbar.css";
import { RxCross2 } from "react-icons/rx";



export default function Navbar() {
    const router = useRouter();
    return (
        <div>
            <button className="absolute top-5 right-5 text-gray-500 text-5xl"  onClick={router.back}><RxCross2/></button>
            <button aria-label=""></button>
                <div  className=" flex flex-col gap-10 py-20 text-center text-3xl">

                    <a className="" href="/">Home</a>
                    <a className="" href="/Classes">Popular classes</a>
                    <a className="text-gray-200" href="/">Search</a>
                    <a className="text-gray-200" href="/profile">My Profile</a>
                    <a className="text-gray-200" href="/">Log Out</a>

                </div>
            
        </div>
    );
}

