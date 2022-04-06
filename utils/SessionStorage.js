export const setItem = (data, key ) => sessionStorage.setItem(key, JSON.stringify(data));


export const getItem = (key) => sessionStorage[key] ? JSON.parse(sessionStorage[key]) : undefined ;