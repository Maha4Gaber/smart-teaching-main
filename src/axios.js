import axios from "axios";


axios.defaults.baseURL = "https://sts.pythonanywhere.com/";

axios.defaults.headers.common["Authorization"] =localStorage.getItem("token")&&
localStorage.getItem("token")!='null' &&
  "Bearer " + localStorage.getItem("token")