import React, { useEffect, useState } from "react";
import "./Profile.css";
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import RightProfile from "../../Components/RightProfile/RightProfile";
import LeftProfile from "../../Components/LeftProfile/LeftProfile";
import classes from "../../Components/RightProfile/RightProfile.module.css";
import ProfilePersonIcon from "../../assests/ProfilePersonIcon";
import KeyProfileIcon from "../../assests/KeyProfileIcon";
import CertificationProfileIcon from "../../assests/CertificationProfileIcon";
import LogoutProfileIcon from "../../assests/LogoutProfileIcon";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SettingProfileIcon from "../../assests/SettingProfileIcon";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { user_logout } from "../../Slices/User/User";
function Profile() {
  let navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  // const [user, setuser] = useState([]);
  const [component, setcomponent] = useState(0);
  const user = useSelector((state) => state.userData.user_data);
  const dispatch=useDispatch()
  let logout = async () => {
    try {
      let refresh_token = user.tokens
        .refresh;
      // console.log(refresh_token);
      let { data } = await axios.post("api/v2/logout/", {
        refresh_token: refresh_token,
      });

      if (data.detail) {
        // if (data.detail) {
          dispatch(user_logout())
          // console.log(data);
          // localStorage.token = null;
          // localStorage.user_data = null;
          // saveUserData();
          setTimeout(() => {
            // if(data.role=='user'){
            //     navigate('/StudentsRatingtheirTeachers')
            // }
            // else
            navigate("login");
          }, 500);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(axios.defaults.baseURL );
    console.log(user);
    const getdata = async () => {
      // try {
      //   await axios.get("api/v1/user/").then((res) => {
      //     // console.log(res.data);
      //     setuser(res.data)
      //   });
      // } catch (error) {
      //   console.error("Error fetching data:", error);
      // }
      // setuser(JSON.parse(localStorage.user_data));
      // console.log(JSON.parse(localStorage.user_data));
    };
    getdata();
  }, [user]);
  return (
    <div className="profile">
      <ProfileHeader name={user&&user.full_name} />
      <div className="profile_layout container-fluid ">
        <div className="row">
          <div className="col-4">
            <aside className={classes.right_profile}>
              <header>{user&&user.full_name}</header>
              <ul className={classes.profile_links}>
                <li onClick={()=>{
                  setcomponent(0)
                }} 
                className={classes.profile_link}>
                  <ProfilePersonIcon />
                  <span>{t('pd')}</span>
                </li>
                {/* <li className={classes.profile_link}>
                  <KeyProfileIcon />
                  <span>Login Data </span>
                </li> */}
                {/* <li className={classes.profile_link}>
                <SocialProfileIcon />
                <span>Social Networks </span>
              </li> */}
                <li onClick={()=>{
                  setcomponent(0)
                }} >
                <a
                href={axios.defaults.baseURL +"admin"}
                className={classes.profile_link}>
                <SettingProfileIcon />
                  <span>{t('Dashboard')} </span>
                </a>
                </li>
                {/* <li className={classes.profile_link}>
          <PaymentProfileIcon />
          <span>Payment settings </span>
        </li> */}
                {/* <li className={classes.profile_link}>
          <BlogProfileIcon />
          <span>Blogs </span>
        </li> */}
              </ul>
              <header>{t('user')}</header>
              <ul className={classes.profile_links}>
                {/* <li className={classes.profile_link}>
          <SettingProfileIcon />
          <span>Setting</span>
        </li> */}
                <li onClick={()=>{
                  logout()
                }} 
                className={classes.profile_link}>
                  <LogoutProfileIcon />
                  <span>{t('logout')}</span>
                </li>
              </ul>
            </aside>
            {/* <div></div> */}
          </div>
          <div className="col-8">
            {
              
              (<LeftProfile user={user&&user} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
