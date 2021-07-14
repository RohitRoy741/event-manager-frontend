export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if(userStr) {
        return JSON.parse(userStr);
    }
    return null;
}
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}
export const setUserSession = (user, token) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}
export const removeUserSession = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
}