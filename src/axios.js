import axios from "axios";

const instance = axios.create({
	baseURL: "http://jservice.io/api/",
	headers: { "Content-Type": "application/json" },
});

export default instance;
