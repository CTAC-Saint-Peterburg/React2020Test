import axios from "axios";
import {BASEURL} from "./CONSTS";

export default axios.create({
    baseURL: BASEURL,
    responseType: "json"
});