import React, { useState} from 'react'
function useLocalStorageState(key, defaultValue) {
    const [state, setState] = useState(() => {
        let value;
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(defaultValue)
            );
        } catch (e) {
            value = defaultValue;
        }
        return value;
    });

    useEffect(
        () => {
            window.localStorage.setItem(key, state);
        }, [state]
    )
    return [state, setState];
}

function DisplayLocalStorageData () {
    const [userAge, setUserAge] = useLocalStorageState("age",20);

    return (
        <div>
            <button onClick={() => setUserAge(userAge + 1)}>{userAge}</button>
        </div>
    )
}
export default useLocalStorageState;