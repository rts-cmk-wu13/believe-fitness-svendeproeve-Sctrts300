"use server"
import { cookies } from "next/headers"

export async function getAllActivities() {
    const res = await fetch("http://localhost:4000/api/v1/classes")
    if (!res.ok) {
        throw new Error("Failed to fetch classes")
    }
    return res.json()
}

export async function getActivityById(id) {
    const res = await fetch(`http://localhost:4000/api/v1/classes/${id}`)
    if (!res.ok) {
        throw new Error(`Failed to fetch classes with id ${id}`)
    }
    return res.json()
}

export async function createActivity(prevState, formData) {
    
    const cookieStore = await cookies()
    const token = cookieStore.get("token").value

    console.log(Object.fromEntries(formData))

    const res = await fetch("http://localhost:4000/api/v1/classes", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

