"use client"
import { useRouter } from "next/navigation"


export default function ActivityCard ({activity, isEnrolled, userId, token}) {
    const router = useRouter()
    
    const handleLeave = async () => {
            await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activity.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            router.refresh()
        }
    
        const handleJoin = async () => {
            await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activity.id}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            router.refresh()
        }

        return (
            <section>
                <section className="activityidimgcut">
                    
                    <img className="activityimg" src={activity.asset.url} alt={activity.name} />
                </section>
                <section className="activity-info-section">
                    <h2 className="activityh2">{activity.className}</h2>
                    <p className="activity-age">{activity.classDay} - {activity.classTime}</p>
                    <p className="activity-description">{activity.classDescription}</p>
                </section>
                <section>
                <h2>Trainer</h2>
                <section>
                    <div></div>
                    <h4>{}</h4>
                </section>
                    { isEnrolled
                        ? <button onClick={handleLeave} className="w-full bg-yellow-500 py-5 rounded-full font-bold text-xl">Leave</button>
                        : <button onClick={handleJoin} className="w-full bg-yellow-500 py-5 rounded-full font-bold text-xl">Sign up</button>
                    }
            </section>
            </section>
        )
}