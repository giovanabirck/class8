import Link from "next/link"

export default function useEffectThree() {

    const [number, setNumber] = useState(0);

    return(
        <>
            <Link href="/">Home</Link>
            <div>
                <button>Click Me</button>
            </div>
            <div></div>
        </>
    )
}