import { cookies } from "next/headers"
import Link from "next/link"
import "./card.css"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



export default async function AdminPanel() {
    const cookieStore = await cookies()
    const userId = cookieStore.get("userId")?.value
    const accessToken = cookieStore.get("accessToken")?.value
    let classes = []

    const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })

    const userData = await response.json()

    console.log(userData)

    if (userData.role === 'instructor') {

        console.log(userData.id)

        const classesResponse = await fetch(`http://localhost:4000/api/v1/classes`)
        const classesData = await classesResponse.json()

        console.log(classesData)

        classes = classesData.filter(classes => classes.instructorId === userData.id)
    }
    console.log(classes)


    return userData.role === 'instructor' ? (
        <div className="team-card">
            <section className="uhaaaaa">
                <h2 className="minebitches">Mine hold</h2>
                <button><Link className="plusman" href={`Oprethold`}> + </Link></button>
            </section>
            <ul className="flex flex-col gap-10">
                {classes.map(classes => (
                    <div className="rowcard" key={classes.id}>
                        <h3>{classes.name}</h3>
                        <p>{classes.weekday} {classes.time}</p>
                        <section className="cardinfo">
                            <p>Max. deltagere: {classes.maxParticipants}</p>
                            <p>Tilmeldte: {classes.users.length}</p>
                        </section>
                        <section className="cardbuttons">
                            <button><Link href={`/profile/hold/${classes.id}`}>Deltagerliste</Link></button>
                            <section className="editdelete">
                                <button><Link href={`/oprethold`}><FaEdit /></Link></button>
                                <button> <MdDelete /></button>
                            </section>
                        </section>
                    </div>
                ))}
            </ul>
        </div>

    ) : (
        <div className="team-card">
            <section className="uhaaaaa">
                <h1 className="minebitches">Tilmeldte hold</h1>
            </section>

            <ul className="flex flex-col gap-10">
                {userData.classes.map(classes => (
                    <div className="rowcard" key={classes.id}>
                        <h3>{classes.name}</h3>
                        <p>{classes.weekday} {classes.time}</p>
                        <button className="vishold"><Link href={`/classes/${classes.id}`}>Vis hold</Link></button>
                    </div>
                ))}
            </ul>
        </div>
    )
}