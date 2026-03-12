"use server"

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

