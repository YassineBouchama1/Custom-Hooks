import { useState, useEffect } from "react";


// In this example, the useDelay hook is used in the App Component 
// to introduce a delay of 1000 milliseconds.
//  The component renders different content based on whether the delay is done or not

export const useDelay = (delayTime) => {
    const [done, setDone] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setDone(true);
        }, delayTime);

        return () => clearTimeout(delay);
    }, [delayTime]);

    return done;
};

export default function App() {
    const isDone = useDelay(2000);

    return (
        <div>
            {isDone ? (
                <p>Welcome to JavaScript Centric!</p>
            ) : (
                <p>Page is Loading ...</p>
            )}
        </div>
    );
}