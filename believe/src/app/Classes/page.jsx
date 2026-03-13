import Link from "next/link"
import "./activities.css"
import { IoMdList } from "react-icons/io";

//navn
//dag
export default async function ClassesPage({ params }) {
    const response = await fetch("http://localhost:4000/api/v1/classes")
    const { id } = await params
    const classes = await response.json()
    const randomClass = classes[Math.floor(Math.random() * classes.length)]

    console.log(classes)
    

    return (
        <div className="flex flex-col items-stretch px-8">
                <h3 className="py-8 text-4xl">Popular classes</h3>
                <Link className="absolute top-5 right-5 text-gray-500 text-5xl" href="/navbar"><IoMdList /></Link>

                
                    
                        <div key={randomClass.id} >
                            <Link href={`/Classes/${randomClass.id}`} alt={randomClass.name}>
                                <div className="activitycard" style={{ backgroundImage: `url(${randomClass.asset.url})` }}>
                                    <section className="activitycard__content">
                                        <h3 className="text-3xl font-bold">{randomClass.className}</h3>
                                    </section>
                                </div>
                            </Link>
                        </div>

                    <h2 className="py-8">Classes for you</h2>
                    <div className="scroll">
                        {classes.map((activity) => (
                            <div key={activity.id}>
                                <Link href={`/Classes/${activity.id}`} alt={activity.name}>
                                    <div
                                        className="activitycardhori"
                                        style={{ backgroundImage: `url(${activity.asset.url})` }}>
                                        <section className="activitycardhori__content">
                                            <h3 className="text-3xl font-bold">{activity.className}</h3>
                                        </section>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                
            

        </div>
    )
}


