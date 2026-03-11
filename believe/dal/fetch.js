"use server"
import { cookies } from "next/headers"

export async function getAllActivities() {
    const res = await fetch("http://localhost:4000/api/v1/activities")
    if (!res.ok) {
        throw new Error("Failed to fetch activities")
    }
    return res.json()
}

export async function getActivityById(id) {
    const res = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    if (!res.ok) {
        throw new Error(`Failed to fetch activities with id ${id}`)
    }
    return res.json()
}

export async function createActivity(prevState, formData) {
    
    const cookieStore = await cookies()
    const token = cookieStore.get("token").value

    console.log(Object.fromEntries(formData))

    const res = await fetch("http://localhost:4000/api/v1/activities", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export async function getUserById() {
    const cookieStore = await cookies()

    if(!cookieStore.has("userId")) return null

    const userId = cookieStore.get("userId").value
    const token = cookieStore.get("token").value


    const res = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
        cache: "no-store"
    })
    if(!res.ok){
        throw new Error("Failed to fetch user")
    }

    return res.json()
}
