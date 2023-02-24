import Link from "next/link"
import { useEffect, useState } from "react";
import styles from '@/styles/UseEffectTwo.module.css'


export default function useEffectTwo() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])

    return (
        <>
            <main className={styles.main}>
                
                <div className={styles.top_back}>
                    <Link href="/">
                        <button className={styles.btn}>Home</button>
                    </Link>
                </div>

                <div className={styles.content}>
                    <div className={styles.content_title}>
                        useEffectOne
                    </div>
                    <div>
                        {number}
                    </div>
                </div>

            </main>
        </>
    )
}