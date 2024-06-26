import { useRef, useState, useEffect } from "react";
export const useHover = () => {
    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);
    useEffect(() => {
        const refCopy = ref;
        refCopy?.current?.addEventListener("mouseenter", enter); refCopy?.current.addEventListener("mouseleave", leave);
        return () => {
            refCopy && refCopy?.current?.removeEventListener("mouseenter", enter); refCopy && refCopy?.current.removeEventListener("mouseleave", leave);
        };
    }, []);
    return [ref, isHovered];
}
