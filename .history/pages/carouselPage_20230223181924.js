import Carousel from "@/components/Carousel"
import Link from "next/link"
import styles from '@/styles/CaroiselPage.module.css'


export default function carouselPage() {
    return (
        <>
            <main className={styles.main}>

                <Link href="/">Home</Link>
                <Carousel/>

            </main>
        </>
    )
}