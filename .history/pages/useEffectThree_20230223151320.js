import Link from "next/link"
import { useDebugValue, useEffect } from "react";

export default function useEffectThree() {

    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(())

    return(
        <>
            <Link href="/">Home</Link>
            <div>
                <button>Click Me</button>
            </div>
            <div>
                useEffect Three
            </div>
            <div>

            </div>
        </>
    )
}