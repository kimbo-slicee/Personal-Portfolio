const getIemFromLocalStorage = (key) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error(`Error getting item ${key} from localStorage:`, error);
        return null;
    }
}
const setItemToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}
const LOCAL_STORAGE_KEYS = {
    localStorageThemeKey: 'theme',
};
export { getIemFromLocalStorage, setItemToLocalStorage , removeItemFromLocalStorage, LOCAL_STORAGE_KEYS };