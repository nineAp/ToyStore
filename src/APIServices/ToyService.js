import axios from 'axios'
import { api_url } from '../utils/consts'

export default class ToyService {
    static async getAll() {
        return axios.get(`${api_url}toys/`).then((response, error) => {
            if(response.status === 200) {
                return response.data
            } else {
                return error
            }
        })
    }

    static async getById(id) {
        return axios.get(`${api_url}toys/${id}/`).then((response, error) => {
            if(response.status === 200) {
                return response.data
            } else {
                return error
            }
        })
    }
}