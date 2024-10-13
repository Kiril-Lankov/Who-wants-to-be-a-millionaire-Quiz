import { useEffect, useState } from "react"

export default function Timer() {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);
    },)
    return timer;
};