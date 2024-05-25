import axios from "axios";


axios.defaults.baseURL = "https://smartteachingsystem.com/";

axios.defaults.headers.common["Authorization"] =localStorage.getItem("token")&&
localStorage.getItem("token")!='null' &&
  "Bearer " + localStorage.getItem("token")