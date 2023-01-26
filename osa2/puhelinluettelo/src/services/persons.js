import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const add = newObject => {
    return axios.post(baseUrl, newObject)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}
// eslint-disable-next-line
export default {getAll, add, deletePerson}