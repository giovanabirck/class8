import Carousel from "@/components/Carousel"
import Link from "next/link"

export default function carouselPage() {
    return (
        <>
            <main>
                <Link href="/">Home</Link>
                <Carousel/>

            </main>
        </>
    )
}