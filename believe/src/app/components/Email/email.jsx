"use client";





export default function Email() {


    return (
        <section>
            <h3>Sign up for our newsletter</h3>
            <p>Sign up to receive the latest news and announcements from Believe Fitness</p>
            <form className="flex flex-row space-x-5 > * + *">
              <input className="border-1 border-solid border-black px-8 py-5 rounded-full w-full" type="email" placeholder="Email" required />
              <button  className="w-40 bg-yellow-500 px-8 py-5 rounded-full" type="submit">SIGN UP</button>
            </form>
            

        </section>
    );
}