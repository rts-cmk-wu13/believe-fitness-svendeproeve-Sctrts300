// import Link from "next/link"
// import "./activities.css"
// import { IoMdList } from "react-icons/io";

// import SearchBar from "./SearchBar"

// //navn
// //dag
// export default async function ActivitiesPage({ searchParams }) {
//     const response = await fetch("http://localhost:4000/api/v1/classes")
//     const activities = await response.json()

//        console.log(activities)


//     const { query } = await searchParams
//     console.log(query);

//     const filteredActivities = query
//         ? activities.filter(activity => activity.name.toLowerCase().includes(query.toLowerCase()) || activity.weekday.toLowerCase().includes(query.toLowerCase()))
//         : activities
//     console.log(filteredActivities)

//     return (
//         <>
//         <div className="contain">
//             <SearchBar />
        
//             <h2 className="font-weight: 300;">Popular classes</h2>
//             <Link className="absolute top-5 right-5 text-gray-500 text-5xl" href="/navbar"><IoMdList /></Link>
//             <ul>
//                 {filteredActivities.map((activity) => (
//                 <div  key={activity.id}>
//                     <Link href={`/activities/${activity.id}`} alt={activity.name}>
//                     <li 
//                         className="activitycard" 
//                         style={{ backgroundImage: `url(${activity.asset.url})` }}>
//                             <section className="activitycard__content">
//                                 <h2 style={{fontWeight: 600}}>{activity.name}</h2>
//                                 <p>{activity.minAge} år</p>
//                             </section>
//                     </li>
//                         </Link>
//             </div>
//                 ))}
                    
//             </ul>
//         </div>
            
//         </>
//     )
// }


