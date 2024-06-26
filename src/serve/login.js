import server from "../util/port";

export const login = (username, password) => {
    return server({
        url:`/User/Login?UserName=${username}&PassWord=${password}`,
        method:'POST',
    })
}