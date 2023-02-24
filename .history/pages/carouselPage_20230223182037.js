import Carousel from "@/components/Carousel"
import Link from "next/link"
import styles from '@/styles/CarouselPage.module.css'


export default function carouselPage() {
    return (
        <>
            <main className={styles.main}>

                <div className={styles.top_back}>
                    <Link href="/">
                        <button className={styles.btn}>Home</button>
                    </Link>
                </div>

                <Carousel/>

            </main>
        </>
    )
}