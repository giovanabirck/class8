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

                <Link href="/">Home</Link>
                <div>
                    <button onClick={() => setNumber(number + 1)}>Click Me</button>
                </div>
                <div>
                    useEffect Three
                </div>
                <div>
                    {value}
                </div>

            </main>
        </>
    )
}