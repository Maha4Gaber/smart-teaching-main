import "./Navbar.css";
import profileimg from '../../assests/Login/profile.png'
import notifacationimg from '../../assests/Login/notifications.svg'
import Logo from "../../assests/Logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MainBtn from "../MainBtn/MainBtn";
import { FaAngleDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { switchLang } from "../../helpers/lang";
import axios from "axios";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const navigate= useNavigate()

  const close = () => {
    document.querySelector(".navbar-collapse").classList.remove("show");
  };

  const changeLanguage = (lng) => {
    switchLang(lng);
    window.location.reload();
  };
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  function saveUserData() {
    let Token = localStorage.token;
    if (localStorage.getItem("token") !== null && userData === null) {
      setuserData(Token);
    }
    else if(localStorage.getItem("token") === null)
      {
        setuserData(null);
        
      }
    
  }
  let logout= async()=>{
    try {
      let refresh_token=JSON.parse(localStorage.getItem('user_data')).tokens.refresh
      console.log(refresh_token);
      let { data } = await axios.post("api/v2/logout/",{
        refresh_token:refresh_token
      });
  
      if (data.detail) {
      console.log(data);
      localStorage.token = null;
      localStorage.user_data =null;
      saveUserData();      
      setTimeout(() => {
          // if(data.role=='user'){
          //     navigate('/StudentsRatingtheirTeachers')
          // }
          // else   
          navigate("login");
      }, 500);
      }
  } catch (err) {
      // seterrMsg(err.response.data[0]);
      console.log(err);
  }
  }




  useEffect(() => {
    
      saveUserData();
    }, []);
  return (
    <div>
      <nav className="active navbar navbar-expand-lg py-lg-0 py-3">
        <div className="container-fluid">
          <Link className="navbar-brand d-lg-none" href="/">
            <img
              src={Logo}
              alt="logo"
              className="logo"
              width={110}
              height={50}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-controls="navbarSupportedContent"
            data-bs-target="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse links align-items-center py-2"
            id="navbarSupportedContent"
          >
            <Link className="navbar-brand d-none d-lg-block" href="/">
              <img
                src={Logo}
                alt="logo"
                className="logo"
                width={133}
                height={81}
              />
            </Link>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 p-0">
              <li>
                <NavLink
                  onClick={close}
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active nav-item" : "nav-item"
                  }
                  end
                >
                  {t("home")}
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/smart-teaching"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("smartTeachingSystem")}
                </Link>
                <ul
                  className="dropdown-menu p-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="m-0">
                    <NavLink
                      onClick={close}
                      to="/smart-teaching"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("smartTeachingSystem")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={close}
                      to="/expert-teacher3"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("FactorsAffeting")}
                    </NavLink>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/expertteacher"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("ExpertTeacher")}
                </Link>
                <ul
                  className="dropdown-menu p-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="m-0">
                    <NavLink
                      onClick={close}
                      to="/expertteacher"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("ExpertTeacher")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={close}
                      to="/expertteachingacademy"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("ExpertTeacherAcademy")}
                    </NavLink>
                  </li>
                  {/* <li>
                                        <NavLink onClick={close}
                                            to="/expert-teacher3"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "active dropdown-item"
                                                    : "dropdown-item"
                                            }
                                            end
                                        >
                                            Individual Professional Development
                                            Plan
                                        </NavLink>
                                    </li> */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/assessment"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("Assessments")}
                </Link>
                <ul
                  className="dropdown-menu p-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="m-0">
                    <NavLink
                      onClick={close}
                      to="/assessment"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("Assessments")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={close}
                      to="/ClassroomObservationInstruments"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("COI")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={close}
                      to="/StudentsRatingtheirTeachers"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("SRTT")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={close}
                      to="/SimplifiedTeachersCompetencyAssessment"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("STCA")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={close}
                      to="/TeacherCompetencyAssessment"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("TCA")}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/resources"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("resources")}
                </Link>
                <ul
                  className="dropdown-menu p-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="m-0">
                    <NavLink
                      onClick={close}
                      to="/blogs"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("blogs")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={close}
                      to="/courses"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("generalCourse")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={close}
                      to="/books"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("eBooks")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={close}
                      to="/resources"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("resources")}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  onClick={close}
                  to="/membership"
                  className={({ isActive }) =>
                    isActive ? "active nav-item" : "nav-item"
                  }
                  end
                >
                  {t("membership")}
                </NavLink>
              </li>
              
              {localStorage.user_data & localStorage.user_data =='null' ?
              (
                <>
                <li className="notifcation">
              <span className="notify">2</span>
               <img className="" src={notifacationimg} />
              </li>
                <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/profile"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img className="" src={profileimg} />
                </Link>
                <ul
                  className="dropdown-menu p-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="m-0">
                    <NavLink
                      onClick={close}
                      to="/profile"
                      className={({ isActive }) =>
                        isActive ? "active dropdown-item" : "dropdown-item"
                      }
                      end
                    >
                      {t("profile")}
                    </NavLink>
                  </li>
                  <li className="m-0">
                      <NavLink onClick={()=>{
                        logout()
                      }}>
                          {t("logout")}
                      </NavLink>
                      </li>
                  
                </ul>
              </li>
                </>
            ):
            (
              <>
              <div className="auth ">
              <Link to={"/login"}>
                <MainBtn shadow> {t("login")}</MainBtn>
              </Link>
              </div>
              </>
            )
            }

            </ul>
            
            
            
              

              <span
                className="p-2 cursor-pointer"
                onClick={() => changeLanguage(lang === "en" ? "ar" : "en")}
              >
                {lang === "en" ? "Ar" : "En"} 
              </span>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
