import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-4dca7.firebaseio.com/"
});

export default instance;
