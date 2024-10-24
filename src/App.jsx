import React, { useEffect, useState } from "react";
import "./App.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/HomePage/Home";
import Reels from "./Pages/Reels/Reels";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Pages/NotFound/NotFound";
import Services from "./Pages/Services/Services";
import Resources from "./Pages/Resources/Resources";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import BookPage from "./Pages/BookPage/BookPage";
import SmartTeaching from "./Pages/SmartTeaching/SmartTeaching";
import Assessment from "./Pages/Assessment/Assessment";
import ExpertTeacherCer from "./Pages/ExpertTeacherCer/ExpertTeacherCer";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import QuizPage from "./Pages/QiuzPage/QuizPage";
import Certification from "./Pages/Certification/Certification";
import Loading from "./Components/Loading/Loading";
import { checkFixLang, editTitle } from "./helpers/lang";
import { useTranslation } from "react-i18next";
import Pdf from "./Pages/pdf/pdf";
import Profile from "./Pages/Profile/Profile";
import Messages from "./Pages/Resources/Messages";
import SmartEducationAC from "./Pages/SmartEducationAC/SmartEducationAC.jsx";
import SmartEducationACDetails from "./Pages/SmartEducationACdetails/SmartEducationACdetails.jsx";
const LazyAbout = React.lazy(() => import("./Pages/About/About"));
const LazyLogin = React.lazy(() => import("./Pages/Login/Login"));
const LazyRegister = React.lazy(() => import("./Pages/Register/Register"));
const LazyContactUS = React.lazy(() => import("./Pages/ContactUs/ContactUs"));
const LazyBeAMember = React.lazy(() => import("./Pages/BeAMember/BeAMember"));
const LazyBlogsPage = React.lazy(() => import("./Pages/Blogs/Blogs"));
const LazyBlogDetails = React.lazy(() =>
  import("./Pages/BlogDetails/BlogDetails")
);
const LazyExpertTeacher = React.lazy(() =>
  import("./Pages/ExpertTeacher/ExpertTeacher")
);
const LazyExpertTeachingAcademy = React.lazy(() =>
  import("./Pages/ExpertTeachingAcd/ExpertTeachingAcd")
);
const LazyAssessmentTwo = React.lazy(() =>
  import("./Pages/Assessment2/Assessment2")
);
const LazyAssessmentThree = React.lazy(() =>
  import("./Pages/Assessment3/Assessment3")
);
const LazyAssessmentFour = React.lazy(() =>
  import("./Pages/Assessment4/Assessment4")
);
const LazyAssessmentFive = React.lazy(() =>
  import("./Pages/Assessment5/Assessment5")
);

function App() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const [userData, setuserData] = useState(null);
  const [userDataImg, setuserDataImg] = useState(null);
  function saveUserData() {
    let Token = localStorage.token;
    setuserData(Token);
    setuserDataImg(Token.image);
  }

  useEffect(() => {
    Aos.init({
      delay: 400,
      duration: 1000,
    });
    Aos.refresh();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") !== null && userData === null) {
      saveUserData();
    }
  }, []);

  // handle lang change
  useEffect(() => {
    checkFixLang(lang);
    editTitle(lang);
  }, [lang]);

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/reels", element: <Reels /> },
        { path: "/services", element: <Services /> },
        { path: "/resources", element: <Resources /> },
        { path: "/messages", element: <Messages /> },
        { path: "/courses", element: <CoursesPage /> },
        { path: "/books", element: <BookPage /> },
        { path: "/assessment", element: <Assessment /> },
        { path: "/expert-teacher3", element: <ExpertTeacherCer /> },
        { path: "/profile", element: <Profile /> },
        { path: "/smart-teaching", element: <SmartTeaching /> },
        {
          path: "/login",
          element: (
            <React.Suspense>
              {" "}
              <LazyLogin saveUserData={saveUserData} />{" "}
            </React.Suspense>
          ),
        },
        {
          path: "/register",
          element: (
            <React.Suspense>
              {" "}
              <LazyRegister saveUserData={saveUserData} />{" "}
            </React.Suspense>
          ),
        },
        // {
        //     path: "/SmartEducationAC",
        //     element: (
        //     <React.Suspense>
        //         {" "}
        //         <SmartEducationAC  />{" "}
        //     </React.Suspense>
        //     ),
        // },
        // {
        //     path: "/SmartEducationACDetails/:slug",
        //     element: (
        //     <React.Suspense>
        //         {" "}
        //         <SmartEducationACDetails  />{" "}
        //     </React.Suspense>
        //     ),
        // },
        { path: "/SmartEducationAC", element: <SmartEducationAC /> },
        {
          path: "/SmartEducationACDetails/:slug",
          element: <SmartEducationACDetails />,
        },
        { path: "/course-details/:id", element: <CourseDetails /> },
        { path: "/quiz", element: <QuizPage /> },
        { path: "/certification", element: <Certification /> },
        {
          path: "contactus",
          element: (
            <React.Suspense fallback={<Loading />}>
              {" "}
              <LazyContactUS saveUserData={saveUserData} />{" "}
            </React.Suspense>
          ),
        },
        {
          path: "membership",
          element: (
            <React.Suspense fallback={<Loading />}>
              {" "}
              <LazyBeAMember saveUserData={saveUserData} />{" "}
            </React.Suspense>
          ),
        },
        {
          path: "blogs",
          element: (
            <React.Suspense fallback={<Loading />}>
              {" "}
              <LazyBlogsPage saveUserData={saveUserData} />{" "}
            </React.Suspense>
          ),
        },
        {
          path: "blogdetails/:slug",
          element: (
            <React.Suspense fallback={<Loading />}>
              {" "}
              <LazyBlogDetails saveUserData={saveUserData} />{" "}
            </React.Suspense>
          ),
        },
        {
          path: "expertteacher",
          element: (
            <React.Suspense fallback={<Loading />}>
              {" "}
              <LazyExpertTeacher saveUserData={saveUserData} />{" "}
            </React.Suspense>
          ),
        },
        {
          path: "expertteachingacademy",
          element: (
            <React.Suspense fallback={<Loading />}>
              {" "}
              <LazyExpertTeachingAcademy saveUserData={saveUserData} />{" "}
            </React.Suspense>
          ),
        },
        {
          path: "TeacherCompetencyAssessment",
          element: (
            <React.Suspense fallback={<Loading />}>
              {" "}
              <LazyAssessmentTwo saveUserData={saveUserData} />{" "}
            </React.Suspense>
          ),
        },
        {
          path: "ClassroomObservationInstruments",
          element: (
            <React.Suspense fallback={<Loading />}>
              {" "}
              <LazyAssessmentThree saveUserData={saveUserData} />{" "}
            </React.Suspense>
          ),
        },
        {
          path: "SimplifiedTeachersCompetencyAssessment",
          element: (
            <React.Suspense fallback={<Loading />}>
              {" "}
              <LazyAssessmentFour saveUserData={saveUserData} />{" "}
            </React.Suspense>
          ),
        },
        {
          path: "StudentsRatingtheirTeachers",
          element: (
            <React.Suspense fallback={<Loading />}>
              {" "}
              <LazyAssessmentFive saveUserData={saveUserData} />{" "}
            </React.Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <React.Suspense>
              {" "}
              <LazyAbout />{" "}
            </React.Suspense>
          ),
        },

        { path: "*", element: <NotFound /> },
      ],
    },
    { path: "/pdf", element: <Pdf /> },
  ]);
  return (
    <div>
      <SkeletonTheme baseColor="#306c62" highlightColor="#f8b401">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </div>
  );
}

export default App;
