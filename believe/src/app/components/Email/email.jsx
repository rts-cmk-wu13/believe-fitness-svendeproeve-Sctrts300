"use client";
 
import { useState } from "react"
import { z } from "zod/v4"

const contactSchema = z.object({
    email: z.email().min(1, "Email is required"),
})


export default function Email() {

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

    return (
        <>
        <section >
            <h2>Sign up for our newsletter</h2>
            <p>Sign up to receive the latest news and announcements from Believe Fitness</p>
            <form  onSubmit={handleSubmit} className="flex flex-row space-x-5 > * + *">
              <input className="border-1 border-solid border-black px-8 py-5 rounded-full w-full"  type="email" name="email" placeholder="Email" required />
              <p>{errors && errors?.email?.errors[0] || success}</p>
              <button  className="w-40 bg-yellow-500 px-8 py-5 rounded-full" type="submit">SIGN UP</button>
            </form>
        </section>
        </>
    );
}