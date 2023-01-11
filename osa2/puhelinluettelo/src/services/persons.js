import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const add = newObject => {
    return axios.post(baseUrl, newObject)
}
// eslint-disable-next-line
export default {getAll, add}