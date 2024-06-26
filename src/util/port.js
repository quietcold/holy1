import axios from "axios";

const server = axios.create({
    baseURL: 'http://110.64.89.20:8080',
    timeout: 1000 * 10,
    headers: {
        "Content-type": "application/json"
    }
})

export default server;
