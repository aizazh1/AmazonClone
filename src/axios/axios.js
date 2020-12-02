import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ecommerce.cloudfunctions.net/api",
  // 'http://localhost:5001/project-clone-15213/us-central1/api',
});

export default instance;
