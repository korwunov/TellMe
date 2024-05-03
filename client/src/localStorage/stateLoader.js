export function loadState(key) {
    try {
        let serializedState = localStorage.getItem(key);

        if (serializedState === null) {
            return this.initializeState();
        }

        return JSON.parse(serializedState);
    }
    catch (err) {
        return {}
    }
}

export function saveState(key, state) {
    try {
        let serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState)
    }
        catch (err) {
    }
}



