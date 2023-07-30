import axios from "axios";

const base_url = "http://localhost:8090"
export const myAxios = axios.create({
    baseURL: base_url,
});

export default base_url;