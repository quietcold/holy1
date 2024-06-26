import server from "../util/port";

export const signup = (username, password) => {
    return server({
        url:`/User/Register?Username=${username}&Password=${password}`,
        method:'POST',
    })
}