import axios from "axios";


axios.defaults.baseURL = "http://63.250.40.120/";

axios.defaults.headers.common["Authorization"] =localStorage.getItem("token")&&
localStorage.getItem("token")!='null' &&
  "Bearer " + localStorage.getItem("token")