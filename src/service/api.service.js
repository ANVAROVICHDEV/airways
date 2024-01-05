import axios from "axios"

const BASE_URL = "http://kfuk.karimjonov.uz/api"




export const ApiService = {
    async fetching(url){
        const response = await axios.get(`${BASE_URL}/${url}`)
        return response.data.data
    }
}

