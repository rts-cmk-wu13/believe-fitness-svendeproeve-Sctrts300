"use server"
import { cookies } from "next/headers"

export async function getAllClasses() {
    const res = await fetch("http://localhost:4000/api/v1/classes")
    if (!res.ok) {
        throw new Error("Failed to fetch activities")
    }
    return res.json()
}

export async function getClassById(id) {
    const res = await fetch(`http://localhost:4000/api/v1/classes/${id}`)
    if (!res.ok) {
        throw new Error(`Failed to fetch activities with id ${id}`)
    }
    return res.json()
}

export async function createClass(prevState, formData) {
    
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

