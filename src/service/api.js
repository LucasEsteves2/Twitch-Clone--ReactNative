import axios from "axios";

const token = 'a'

export const api = axios.create({
    baseURL: 'https://serratec2.herokuapp.com',
    headers: { 'Authorization': token }
})


export const buscar = async (url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)

    console.log(resposta.data)

}