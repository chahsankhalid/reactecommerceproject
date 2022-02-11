import axios from "axios";
import dev from "./Environment";

const Api = axios.create({
    baseURL: dev.api,
    timeout: 3000
})

export default Api;