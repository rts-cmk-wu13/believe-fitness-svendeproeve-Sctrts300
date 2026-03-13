
import "./actId.css"
import { cookies } from "next/headers"
import ActivityCard from "../../components/ActivityCard"
import { getActivityById } from "@/app/dal/fetch"
import { IoMdList } from "react-icons/io";
import Link from "next/link";



export default async function ClassesPage({ params }) {
    const { id } = await params
    const activity = await getActivityById(id)
    const cookieStore = await cookies()
    const userId = cookieStore.get("userId").value
    const token = cookieStore.get("accessToken").value
    
  

    const isEnrolled = activity.users.some(user => user.id === Number(userId))

    console.log(isEnrolled)

    const handleLeave = async () => {
        await fetch(`http://localhost:4000/api/v1/users/${userId}/classes/${activity.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

    }

    const handleJoin = async () => {
        console.log("join")
    }

    return (
        <>
            <Link className="absolute top-5 right-5 text-white text-5xl" href="/navbar"><IoMdList /></Link>
            <ActivityCard activity={activity} isEnrolled={isEnrolled} userId={userId} token={token}/>
            
        </>
    )
}