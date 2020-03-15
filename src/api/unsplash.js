import axios from "axios";
// WARNING: both your Access Key and Secret Key must remain confidential.
// The canonical way to use such API keys is to get the client side app to send a request to your backend API.
import { GetAccessKey } from "../secrets/UnsplashSecrets";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${GetAccessKey()}`
  }
});
