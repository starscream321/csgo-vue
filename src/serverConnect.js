import axios from "axios";

const _baseURL = 'http://localhost:3001'


export const Servers = async () => {
    const freeServers = await axios
        .get(`${_baseURL}/servers`)
    return freeServers.data.count
}


export const takeServer = async (pass, errors) => {

    await axios
        .post(`${_baseURL}/server`,{
            pass: pass
        })
        .then((res) => {
            localStorage.setItem('token', res.data.apiKey)
            localStorage.setItem('ip', res.data.ip)
            localStorage.setItem('name', res.data.server)
        })
        .catch((error) => {
            if (error.response) {
                errors.value = true
            }
        })
    pass.value = ''
}


export const ServerControl = async (value, cmd, key) => {
    await axios
        .post(`${_baseURL}/command`, {
            apiKey: key,
            command: cmd,
            arg: value
        })
}
