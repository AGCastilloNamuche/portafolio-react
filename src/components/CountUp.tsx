import React, { useEffect, useMemo } from "react"
import { useRef, useState } from "react"

const useInView = (ref: React.RefObject<HTMLElement | null>, options: { threshold: number } = { threshold: 0.3 }) => {
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                obs.disconnect(); // dispara 1 vez
            }
        }, options);

        obs.observe(el);
        return () => obs.disconnect();
    }, [options]);

    return [ref, inView]
}

type CountProps = {
    value: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

const CountUp: React.FC<CountProps> = ({
    value,
    duration = 1200,
    suffix = "",
    prefix = "",
    className = ""
}) => {
    const ref = useRef(null)
    const [inView] = useInView(ref);
    const [display, setDisplay] = useState(0)

    const formatter = useMemo(() => {
        return new Intl.NumberFormat("es-PE");
    }, [])

    useEffect(() => {
        if (!inView) return;
        let start: number | null = null;
        const from = 0;
        const to = value;

        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const current = Math.floor(from + (to - from) * progress);
            setDisplay(current);

            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [inView, value, duration])

    return (
        <h1
            ref={ref}
            className={[className, "text-7xl"].join(" ")}
        >
            {prefix}
            {formatter.format(display)}
            {suffix}
        </h1>
    )
}

export default CountUp