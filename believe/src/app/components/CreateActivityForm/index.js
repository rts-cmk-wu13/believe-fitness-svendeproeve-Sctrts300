"use client"
import { useActionState } from "react"
import { createActivity } from "@/dal/fetch"

const initialState = {
    name: null,
    description: null,
    weekday: null,
    time: null,
    maxParticipants: null,
    minAge: null,
    maxAge: null,
    asset: null
}

export default function CreateActivityForm ({ userId, userFirstname, userLastname }) {
    const [state, formAction, isPending] = useActionState(createActivity, initialState)

    return (
        <>
            <div>
                <form action={formAction}>

                    <div>
                        <label htmlFor="name">Navn</label>
                        <input type="text" name="name" id="name" placeholder="Holdnavn" />
                    </div>

                    <div>
                        <label htmlFor="description">Beskrivelse</label>
                        <textarea id="description" name="description" placeholder="Description" />
                    </div>

                    <div>
                        <label htmlFor="weekday">Email</label>
                        <select name="weekday" id="weekday">

                            <option value="mandag">Mandag</option>
                            <option value="tirsdag">Tirsdag</option>
                            <option value="onsdag">Onsdag</option>
                            <option value="torsdag">Torsdag</option>
                            <option value="fredag">Fredag</option>
                            <option value="lørdag">Lørdag</option>
                            <option value="søndag">Søndag</option>


                        </select>
                    </div>

                    <div>
                        <label htmlFor="time">Tidspunkt</label>
                        <input type="text" name="time" id="time" placeholder="Tidspunkt" />
                    </div>

                    <div>
                        <label htmlFor="minAge">Alder (min.)</label>
                        <input type="text" name="minAge" id="minAge" placeholder="Alder" />
                    </div>

                    <div>
                        <label htmlFor="maxAge">Alder (max.)</label>
                        <input type="text" name="maxAge" id="maxAge" placeholder="Alder" />
                    </div>

                    <div>
                        <label htmlFor="instructor">Navn</label>
                        <input type="text" name="instructor" id="instructor"readOnly value={`${userFirstname} ${userLastname}`} />
                    </div>

                    <div>
                        <label htmlFor="maxParticipants">Deltagere (max.)</label>
                        <input type="text" name="maxParticipants" id="maxParticipants" placeholder="Deltagere" />
                    </div>

                    <div>
                        <label htmlFor="asset">Billede:</label>
                        <input type="file" name="asset" id="file" accept="image/png, image/jpeg" />
                    </div>

                    <input type="hidden" name="instructorId" value={userId} />
                    <button type="submit">Oret hold</button>
                </form>
            </div>
        </>
    )
}