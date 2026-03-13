
import "./actId.css"
import { cookies } from "next/headers"
import ActivityCard from "../../components/ActivityCard"
import Link from "next/link";
import { IoMdList } from "react-icons/io";




export default async function ActivitiesPage({ params }) {
    const { id } = await params
    const cookieStore = await cookies()
    const userId = cookieStore.get("userId").value
    const token = cookieStore.get("accessToken").value

    const res = await fetch(`http://localhost:4000/api/v1/classes/${id}`)

    if (!res.ok) {
        throw new Error(`Failed to fetch activities with id ${id}`)
    }
 
    const activity = await res.json()

    return (
        <>
        <Link className="absolute top-5 right-5 text-white text-5xl" href="/navbar"><IoMdList /></Link>
            <ActivityCard activity={activity} userId={userId} token={token}/>

            
        </>
    )
}