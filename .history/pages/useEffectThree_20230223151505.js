import Link from "next/link"
import { useEffect } from "react";

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
                <button onClick={() => setNumber(number + 1)}>Click Me</button>
            </div>
            <div>
                useEffect Three
            </div>
            <div>

            </div>
        </>
    )
}