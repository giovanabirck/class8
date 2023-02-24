import Link from "next/link"
import { useDebugValue, useEffect } from "react";

export default function useEffectThree() {

    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return(
        <>
            <Link href="/">Home</Link>
            <div>
                <button onClick={() => setNumber()}>Click Me</button>
            </div>
            <div>
                useEffect Three
            </div>
            <div>

            </div>
        </>
    )
}