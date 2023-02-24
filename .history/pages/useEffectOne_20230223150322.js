import Link from "next/link"
import { useEffect, useState } from "react"

export default function useEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        
    })

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