// import { useResizeContext } from "../ResizeContext";
let simwindow;

// const {elementRef} = useResizeContext();
export function getReferenceForLayout(simwindowRef) {
    simwindow = simwindowRef.current;
}   