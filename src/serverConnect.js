import axios from "axios";
import {resolve} from "@babel/core/lib/vendor/import-meta-resolve";

const _baseURL = 'http://localhost:3001'


let API_KEY = null

setInterval(() => {
    if(localStorage.getItem('token')){
         API_KEY = localStorage.getItem('token')
        console.log(API_KEY)
    }
}, 10000)


export const Servers = async () => {
    const freeServers = await axios
        .get(`${_baseURL}/servers`)
    return freeServers.data.count
}


export const takeServer = async (pass) => {

    return new Promise((resolve, reject) => {
        await axios
            .post(`${_baseURL}/server`,{
                pass: pass
            })
            .then((res) => {
                API_KEY = res.data.apiKey
                localStorage.setItem('token', res.data.apiKey)
                localStorage.setItem('ip', res.data.ip)
                localStorage.setItem('name', res.data.server)
                return 'Good game!'
            })
            .catch((error) => {
                if (error) {
                    console.error('Oppps!')
                }
            })
        pass.value = ''
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
