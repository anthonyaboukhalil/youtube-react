import axios from "axios";
const KEY = "AIzaSyCEmghdbOa2GENZa2oSqm - IvacWqQYCWhI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
