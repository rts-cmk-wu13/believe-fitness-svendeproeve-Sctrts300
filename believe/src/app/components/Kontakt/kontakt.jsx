"use client"

import { useState } from "react"
import { z } from "zod/v4"

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.email().min(1, "Email is required"),
    besked: z.string().min(1, "Message is required")
})

export default function Kontakt(){
    
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false)

    function handleSubmit (event) {
        event.preventDefault();

        const form = event.target
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form submitted:", data);

        const result = contactSchema.safeParse(data)

        if (!result.success) {
            const errors = z.treeifyError(result.error)
            console.log(errors)
            setErrors(errors.properties)
            setSuccess(false)
        } else {
            setErrors({})
            setSuccess("Tak for din besked")
            form.reset()
        }

    }
    

    return(

        <div className="px-4 py-15">
            <h2>Contact us</h2>
            <p>Ask us anything about Believe Fitness!</p>

            <form className="flex flex-col gap-[10px] pt-4 pb-8 w-[90vw]" method="post" onSubmit={handleSubmit}>

                <input className="border-1 border-solid border-black px-8 py-5 rounded-full w-full" type="text" name="name" placeholder="Enter you name..." />
                <p>{errors && errors?.name?.errors[0]}</p>

                <input className="border-1 border-solid border-black px-8 py-5 rounded-full w-full" type="email" name="email" placeholder="Enter you email..." />
                <p>{errors && errors?.email?.errors[0]}</p>

                <textarea className="border border-black px-8 py-5 rounded-4xl w-full h-40" name="besked" placeholder="Enter your message..." />
                <p>{errors?.besked?.errors?.[0] || success}</p>

                <button className="w-full bg-yellow-500 py-5 rounded-full" type="submit">SEND MESSAGE</button>
            </form>
        </div>
    )
}