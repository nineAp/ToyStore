import axios from "axios";
import { api_url } from "../utils/consts";

export default class CategoryService {
    static async getAll(){
        return axios.get(`${api_url}cats/`).then((response, error) => {
            if(response.status === 200) {
                return response.data
            } else {
                return error
            }
        })
    }

    static async getById(id){
        return axios.get(`${api_url}cats/${id}/`).then((response, error) => {
            if(response.status === 200) {
                return response.data
            } else {
                return error
            }
        })
    }
}