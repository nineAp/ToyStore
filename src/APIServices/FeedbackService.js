import axios from "axios";
import { api_url } from "../utils/consts";

export default class FeedbackService {
    static async getAll() {
        return await axios.get(`${api_url}feedback/`).then((response, error) => {
            if(response.status === 200) {
                return response.data
            } else {
                return error
            }
        })
    }

    static async createFeedback(data) {
        return await axios.post(`${api_url}feedback/`, {
            title: data.title,
            email: data.email,
            description: data.description
        }).then((response, error) => {
            if(response.status === 200) {
                return response.data
            } else {
                return error
            }
        })
    }
}