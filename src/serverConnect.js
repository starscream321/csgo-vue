import axios from "axios";

const _baseURL = 'http://localhost:3001'


let API_KEY = null

setInterval(() => {
    if(localStorage.getItem('token')){
         API_KEY = localStorage.getItem('token')
    }
}, 10000)


export const Servers = async () => {
    const freeServers = await axios
        .get(`${_baseURL}/servers`)
    return freeServers.data.count
}


export const TakeServer = (pass) => {

    return new Promise((resolve, reject) => {
         axios
            .post(`${_baseURL}/server`,{
                pass: pass
            })
            .then((res) => {
                API_KEY = res.data.apiKey
                localStorage.setItem('token', res.data.apiKey)
                localStorage.setItem('name', res.data.server)
                resolve('OK')
            })
            .catch((error) => {
                if (error) {
                    reject('Opps!')
                }
            })
    })

}



export const ServerControl = async (value, cmd) => {
    await axios
        .post(`${_baseURL}/command`, {
            apiKey: API_KEY,
            command: cmd,
            arg: value
        })
}

export const LogOut = async () => {
    await axios
        .post(`${_baseURL}/logout`, {
            apiKey: localStorage.getItem('token')
        })
}
