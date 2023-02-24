import Link from "next/link"
import { useEffect, useState } from "react";

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
                        useEffectThree
                    </div>
                    <div>
                        {value}
                    </div>
                </div>

            </main>
        </>
    )
}