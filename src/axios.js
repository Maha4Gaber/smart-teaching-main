import axios from "axios";


axios.defaults.baseURL = "https://backend-sts.smartteachingsystem.com/";

axios.defaults.headers.common["Authorization"] =localStorage.getItem("token")&&
localStorage.getItem("token")!='null' &&
  "Bearer " + localStorage.getItem("token")