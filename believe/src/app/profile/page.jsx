import { cookies } from "next/headers"
import Link from "next/link"
import AdminPanel from "../components/ProfileCards/admincards"
import "./profile.css"
import { IoMdPerson } from "react-icons/io";



export default async function Profile() {
const cookieStore = await cookies()
const userId = cookieStore.get("userId")?.value
const accessToken = cookieStore.get("accessToken")?.value

const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
    headers: {
        "Authorization": `Bearer ${accessToken}`
    }
})

    const userData = await response.json()
    
    return (
        <div className="profile-page">
            <h1>Min profil</h1>
            <div className="profile-container">
                <div> <IoMdPerson /></div>
                <section className="profile-info">
                    <p>{userData.userFirstname} {userData.userLastname}</p>
                    <p>{userData.role}</p>
                </section>
            </div>
            <AdminPanel />
        </div>
    )
}
