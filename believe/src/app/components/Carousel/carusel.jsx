"use client"
import "./carusel.css"
import { useState, useEffect } from "react"
import { IoChevronForwardCircleOutline, IoChevronBackCircleOutline } from "react-icons/io5";

export default function Carusel() {
    const [testimonials, setTestimonials] = useState([])
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:4000/api/v1/testimonials")
            const data = await response.json()
            setTestimonials(data)
        }

        fetchData()
    }, [])

    function nextSlide() {
        setCurrent((prev) => (prev + 1) % testimonials.length)
    }

    function prevSlide() {
        setCurrent((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        )
    }

    if (testimonials.length === 0) return <p>Loading...</p>

    return (
        <div className="carousel">
            <div className="flex flex-col text-center text-white gap-6 space-y-6 py-10 px-15">
                <h2>A word from other Believers</h2>
                <h5>{testimonials[current].text}</h5>
                <h5 className="font-bold">{testimonials[current].name}</h5>
                <div className="flex justify-center">
                    <div className="slidebtn" onClick={prevSlide}><IoChevronBackCircleOutline className="w-15 h-15 text-white" /></div>
                    <div className="slidebtn" onClick={nextSlide}><IoChevronForwardCircleOutline className="w-15 h-15 text-white" /></div>
                </div>
            </div>

        </div>
    )
}

