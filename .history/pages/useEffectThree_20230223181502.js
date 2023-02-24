import Link from "next/link"
import { useEffect, useState } from "react";
import styles from '@/styles/UseEffectThree.module.css'


export default function useEffectThree() {

    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return(
        <>
            <main className={styles.main}>

                <div className={styles.top_back}>
                    <Link href="/">
                        <button className={styles.btn}>Home</button>
                    </Link>
                </div>

                <div className={styles.content}>

                    <div className={styles.content_title}>
                        useEffect Three
                    </div>

                    <div>
                        <button className={styles.btn_} onClick={() => setNumber(number + 1)}>Click Me</button>
                    </div>
                    
                    <div>
                        {value}
                    </div>

                </div>


            </main>
        </>
    )
}