import axios from "axios";

//With this the key will be sent as a query parameter with every request from our side.
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "531e0458dbbd4ff883a0c41088fbe5f4",
  },
});
