import Link from "next/link"
import { useState } from "react"

export default function useEffectOne() {

    const [number, setNumber] = useState

    return (
        <>
            <Link href="/">Home</Link>
            <div>
                useEffectOne
            </div>
            <div>

            </div>
        </>
    )
}