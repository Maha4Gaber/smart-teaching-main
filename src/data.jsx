import { PiCertificateLight } from "react-icons/pi";
import {FaHandsHoldingChild} from 'react-icons/fa6'
import {FaArrowUpRightDots} from 'react-icons/fa6'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {RiHandbagLine} from 'react-icons/ri'
import { FaCheck } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";


// Import Home Team Imgs
import team1 from '../src/assests/team-1.png'
import team2 from '../src/assests/team-2.png'
import team3 from '../src/assests/team-3.png'

// Import Home Features Imgs
import grade1 from '../src/assests/grade-1.png'
import grade2 from '../src/assests/grade-2.png'
import grade3 from '../src/assests/grade-3.png'
import grade4 from '../src/assests/grade-4.png'
import grade5 from '../src/assests/grade-5.png'

// Import Home Partners Imgs
import part1 from '../src/assests/partner-1.png'
import part2 from '../src/assests/partner-2.png'
import part3 from '../src/assests/partner-3.png'
import part4 from '../src/assests/partner-4.png'
import part5 from '../src/assests/partner-5.png'

// Import Memberships Plans Imgs
import plan1 from '../src/assests/MemberShip/price__1.png'
import plan2 from '../src/assests/MemberShip/price__2.png'
import plan3 from '../src/assests/MemberShip/price__2.png'

// Import Comments Imgs
import person1 from '../src/assests/Comments/person1.png'
import person2 from '../src/assests/Comments/person2.png'
import person3 from '../src/assests/Comments/person3.png'
import person4 from '../src/assests/Comments/person4.png'

// Import Blog Icons
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";


import recentblog from '../src/assests/BlogDetails/recent-blog.png'

// Import Expert Teacher Imgs
import pic1 from '../src/assests/ExpertTeacher/Expert-cards/Picture1.png'
import pic2 from '../src/assests/ExpertTeacher/Expert-cards/Picture2.png'
import pic3 from '../src/assests/ExpertTeacher/Expert-cards/Picture3.png'

// Import Expert Teaching Academy Cards Img
import card1 from '../src/assests/ExpertTeachingAcd/cards/Picture1.png'
import card2 from '../src/assests/ExpertTeachingAcd/cards/Picture2.png'
import card3 from '../src/assests/ExpertTeachingAcd/cards/Picture3.png'
import card4 from '../src/assests/ExpertTeachingAcd/cards/Picture4.png'
import card5 from '../src/assests/ExpertTeachingAcd/cards/Picture5.png'
import card6 from '../src/assests/ExpertTeachingAcd/cards/Picture6.png'


// Import Blog Content Imgs
import blog1 from '../src/assests/BlogDetails/Blog-Img.png'



export const evidence = [
    {
        id: 1,
        title: 'GSMGT',
        desc: 'GSMGTDetails'
    },
    {
        id: 2,
        title: 'whereToInvest',
        desc: 'whereToInvestDetails'
    },
    {
        id: 3,
        title: 'GTHMT',
        desc: 'GTHMTDetails',
    }

]

export const serviceCards = [
    {
        id: '01',
        icon: <FaArrowUpRightDots className='service-icon'/>,
        title: 'card01Title',
        desc: 'card01Details'
    },
    {
        id: '02',
        icon: <FaHandsHoldingChild className='service-icon'/>,
        title: 'card02Title',
        desc: 'card02Details'
    },
    {
        id: '03',
        icon: <HiOutlineLightBulb className='service-icon'/>,
        title: 'card03Title',
        desc: 'card03Details'
    },
    {
        id: '04',
        icon: <RiHandbagLine className='service-icon'/>,
        title: 'card04Title',
        desc: 'card04Details'
    }
]

export const homeTeam = [
    {
        src: team1,
        title: 'INTERIOR DESIGNER',
        name: 'Mirnsdo Jons'
    },
    {
        src: team2,
        title: 'INTERIOR DESIGNER',
        name: 'Daniel Rock'
    },
    {
        src: team3,
        title: 'INTERIOR DESIGNER',
        name: 'Sajid Mustahidul'
    },
    {
        src: team1,
        title: 'INTERIOR DESIGNER',
        name: 'Mirnsdo Jons'
    },
    {
        src: team2,
        title: 'INTERIOR DESIGNER',
        name: 'Daniel Rock'
    },
    {
        src: team2,
        title: 'INTERIOR DESIGNER',
        name: 'Sajid Mustahidul'
    },
    {
        src: team1,
        title: 'INTERIOR DESIGNER',
        name: 'Mirnsdo Jons'
    },
]

export const homeFeatures = [
    {
        Img: grade1,
        title: "developmentCourses",
        no: "21 Courses",
        path: "courses",
    },
    {
        Img: grade2,
        title: "freeBooks",
        no: "121 Books",
        path: "books",
    },
    {
        Img: grade3,
        title: "researchAndReports",
        no: "52 Research and Reports",
        path: "resources",
    },
    {
        Img: grade4,
        title: "reels",
        no: "21 Courses",
        path: "reels",
    },
    {
        Img: grade5,
        title: "eduForm",
        no: "21 Courses",
    },
];

export const partners = [
    {
        img: part1
    },
    {
        img: part2
    },
    {
        img: part3
    },
    {
        img: part4
    },
    {
        img: part5
    },
    {
        img: part1
    },
    {
        img: part2
    },
    {
        img: part3
    },
    {
        img: part4
    },
    {
        img: part5
    },
    
]


export const loginInputField = [
    {
        inputType: 'text',
        inputName: 'Email',
        field: 'email'
    },
    {
        inputType: 'password',
        inputName: 'Password',
        field: 'password'
    }
]


export const MemeberShipTypesData = [
    {
        head: 'FREE Teacher Membership',
        lists: [

        { icon: <FaCheck />,
            list: 'Become a part of the Smart Teaching education community by signing up for your FREE Teacher membership',
        },
        {
            icon: <FaCheck />,
            list: 'Access to hundreds of courses, tools, forms, worksheets, articles and printable materials and programs to enhance your life and your career.'
        }
        ]
    },
    {
        head: 'Expert Teacher Membership',
        lists: [

        { icon: <FaCheck />,
            list: 'Expert Membership is for teachers, supervisors, administrators, and other education professionals who registers in the Smart Teaching Professional Development Programme',
        }
        ]
    },
    {
        head: 'School Membership',
        lists: [

        { icon: <FaCheck />,
            list: 'School Members are organisations that view Smart Teaching System as a strategic platform. This includes Educational Institutions of all sizes and types including schools, colleges, universities, and training providers',
        },
        {
            icon: <FaCheck />,
            list: 'School Membership will allow all teachers unlimited access to the site.'
        }
        ]
    }
]

export const JoinOurCommunity = [
    {
        icon: <FaCheck />,
        desc: 'STS offers you the best in resources and support materials to help deepen your understanding of successful teaching, assessment, and evaluation practices. Our teacher-centred professional resources will help you zero in on the key issues confronting you and your students in today’s classrooms.'
    },
    {
        icon: <FaCheck />,
        desc: 'Foster mutual support and engagement through powerful resources for driving teacher and school improvement.'
    },
    {
        icon: <FaCheck />,
        desc: 'Join and participate in the STS Working Groups, industry collaborations that develop teaching professionalism and educational opportunities.'
    },
    {
        icon: <FaCheck />,
        desc: 'Use the STS member logo on your own site and have your logo listed on our members’ page and in other promotional material.'
    }
]

export const BenefitCards = [
    {
        id: '01',
        icon: <FaArrowUpRightDots className="benefit-icon"/>,
        head: 'Boost Your <br/> Knowledge and Skills',
        lists: [
            {
                list: 'up to 50% discounts on our STS Expert Teacher programmes and events including seminars, workshops, on-site training, and self-study courses.'
            },
            {
                list: 'Free access to Research reports and case studies conducted by other members in the profession.'
            },
            {
                list: 'Free access to a high quality Competency assessment model.'
            },
            {
                list: '​​Access to wide range of essential tools and resources.'
            }
        ]
    },
    {
        id: '02',
        icon: <FaUsers className="benefit-icon"/>,
        head: 'Stay Connected',
        lists: [
            {
                list: 'Grow your personal and professional support system.'
            },
            {
                list: '​Expand your network and professional presence by participating in the network groups.'
            },
            {
                list: '​Build strong connections while learning best practices.'
            },
            {
                list: 'Share your expertise by your case studies and articles in the smart Teaching platform.'
            },
            {
                list: '​​Gain new ideas, best practices, and industry news through networking.'
            }
        ]
    },
    {
        id: '03',
        icon: <PiCertificateLight className="benefit-icon"/>,
        head: 'Gain More Confidence',
        lists: [
            {
                list: 'The Expert Teacher certifications is the most prestigious in the teaching industry.'
            },
            {
                list: 'Receive training, professional recognition, and opportunities for continued growth that is difficult to get elsewhere.'
            },
            {
                list: 'Opportunities to showcase your teaching skills and expertise by speaking at conferences and events and contributing to industry and professional publications.'
            }
        ]
    }
]

export const memberShipLinks = [
    {
        link: 'Organizations that join the STS'
    },
    {
        link: 'Benefits of membership'
    },
    {
        link: 'Training'
    },
    {
        link: 'Assessments'
    },
    {
        link: 'Resources'
    },
    {
        link: 'Networking'
    },
    {
        link: 'Groups',
    },
    {
        link: 'Members of Smart Teaching System'
    }
]

export const membershipsPlans = [
    {
        id: 0,
        head: 'FREE Teacher <br/> membership',
        img: plan1,
        cost: 0,
        title: 'FREE Teacher membership',
        lists: [
            {
                list: 'Membership provides many opportunities to interact and exchange ideas with teachers, educationalists, researchers and a wide range of high-profile education events.'
            },
            {
                list: 'Increase your knowledge and skills and advance your career to the next level with our professional development tools and resources.'
            },
            {
                list: 'Meet, communicate and collaborate with your peers within the education community through a variety of networking opportunities'
            },
            {
                list: 'Strengthen your skills and capacities whether you are a school director, a school manager, a teacher, educator, or provide administration support.'
            }
        ]
    },
    {   
        id: 1,
        head: 'Expert Teacher <br/> Membership',
        img: plan2,
        cost: 8,
        title: 'Expert Teacher Membership',
        lists: [
            {
                list: 'Expert Membership is for teachers, supervisors, administrators, and other education professionals who registers in the Smart Teaching Professional Development Programme.'
            },
            {
                list: 'Expert membership package provides many opportunities to interact and exchange ideas with teachers, educationalists, researchers and a wide range of education tools and resources.'
            },
            {
                list: 'Expert Teacher Membership is one of the best professional development investments you can make.'
            },
            {
                list: 'Allows one user to unlimited access to all resources on the site. Only $8per month!'
            }
        ]
    },
    {   
        id: 2,
        head: 'Institutional <br/> Membership',
        img: plan3,
        cost: 4,
        title: 'Institutional Membership',
        lists: [
            {
                list: 'School membership is an organisational membership giving teachers access to our dedicated School Members Area, incorporating our educational resources, assessment tools, research materials and case studies.'
            },
            {
                list: 'School Membership is open to any school interested in developing and improving teaching practices'
            },
            {
                list: 'Use the STS member logo on your own site and have your logo listed on our members’ page and in other promotional material.'
            }
        ]
    }
]


export const benefitsDetails = [
    {
        title : 'Home',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Smart Teaching System',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Factors Affecting Student Achievement',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Expert Teacher',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Academy',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Individual Professional Development Plan',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Assessments',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Classroom Observation Instruments',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Students Rating their Teachers',
        cases: [
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Simplified Teachers Competency Assessment',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Teacher Competency Assessment (Self)',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Teacher Competency Assessment (Superior)',
        cases: [
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Resources',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Articles (Read)',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Articles (Read and comment)',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Library (Access to Free Courses)',
        cases: [
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Introduction to STS (Arabic)',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Membership',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Expert Teacher Training Programme',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Expert Teacher Certification',
        cases: [
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'School Projects',
        cases: [
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'School Advertising',
        cases: [
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: true,
            },
        ]
    },

]


export const comments= [

    {
        img: person1,
        name: 'Rohan De Spond',
        date: '25 january 2023',
        comment: 'Lorem Ipsum is simply dummying text of the printing andtypesetting industry',
        reply: [
            {
                img: person2,
                name: 'Rohan De Spond',
                date: '25 january 2023',
                comment: 'Lorem Ipsum is simply dummying text of the printing andtypesetting industry'
            }
        ]
    },
    {   
        img: person2,
        name: 'Rohan De Spond',
        date: '25 january 2023',
        comment: 'Lorem Ipsum is simply dummying text of the printing andtypesetting industry',
        reply: [
            {
                img: person1,
                name: 'Rohan De Spond',
                date: '25 january 2023',
                comment: 'Lorem Ipsum is simply dummying text of the printing andtypesetting industry'
            }
        ]
    },
    {   
        img: person3,
        name: 'Rohan De Spond',
        date: '25 january 2023',
        comment: 'Lorem Ipsum is simply dummying text of the printing andtypesetting industry'
    },
    {   
        img: person4,
        name: 'Rohan De Spond',
        date: '25 january 2023',
        comment: 'Lorem Ipsum is simply dummying text of the printing andtypesetting industry'
    },
]

export const blogIcons = [
    {
        icon: <FaXTwitter/>
    },
    {
        icon: <FaYoutube/>
    },
    {
        icon: <FaFacebookF/>
    },
    {
        icon: <IoLogoInstagram/>
    }
]

export const recentBlogs = [
    {
        img: recentblog,
        date: '13 November 2023',
        desc: 'Earn good money and make you very successful'
    },
    {
        img: recentblog,
        date: '13 November 2023',
        desc: 'Earn good money and make you very successful'
    },
    {
        img: recentblog,
        date: '13 November 2023',
        desc: 'Earn good money and make you very successful'
    },
]

export const expertTeacherLinks = [
    {
        link: 'home',
        path: '/'
    },
    {
        link: 'smartTeachingSystem',
        path: '/login'
    },
    {
        link: 'FactorsAffeting',
        path: '/register'
    },
    {
        link: 'ExpertTeacher',
        Path: '/expertteacher'
    },
    {
        link: 'academy',
        path: '/expertteachingacademy'
    },
    {
        link: 'IPDP',
        path: '/'
    },
    {
        link: 'Assessments',
        path: '/'
    },
    {
        link: 'COI',
        path: '/ClassroomObservationInstruments'
    },
    {
        link: 'SRTT',
        path: '/StudentsRatingtheirTeachers'
    },
    {
        link: 'STCA',
        path: '/SimplifiedTeachersCompetencyAssessment'
    },
    {
        link: 'TCA',
        path: '/TeacherCompetencyAssessment'
    },
    {
        link: 'resources',
        path: '/'
    },
    {
        link: 'articles',
        path: '/'
    },
    {
        link: 'library',
        path: '/'
    },
    {
        link: 'ITSA',
        path: '/'
    },
    {
        link: 'membership',
        path: '/membership'
    }
]

export const expertTeacherSidebar = [
    {
        icon: <FaCheck/>,
        desc: 'expertTeacherSidebardDesc1'
    },
    {
        icon: <FaCheck/>,
        desc: 'expertTeacherSidebardDesc2'
    },
    {
        icon: <FaCheck/>,
        desc: 'expertTeacherSidebardDesc3'
    },
    {
        icon: <FaCheck/>,
        desc: 'expertTeacherSidebardDesc4'
    },
    {
        icon: <FaCheck/>,
        desc: 'expertTeacherSidebardDesc5'
    }

]

export const expertTeacherOne = [
    {
        desc: 'expertTeacherOne1'
    },
    {
        desc: 'expertTeacherOne2'
    },
    {
        desc: 'expertTeacherOne3'
    }
]

export const expertTeacherCards = [
    {
        id: '01',
        img: pic1,
        title: 'teachingSkills'
    },
    {
        id: '02',
        img: pic2,
        title: 'teachingStratgies'
    },
    {
        id: '03',
        img: pic3,
        title:'teachingStructure'
    }
]

export const phasesDetails = [
    {
        desc: 'phasesDetails1'
    },
    {
        desc: 'phasesDetails2'
    },
    {
        desc: 'phasesDetails3'
    },
    {
        desc: 'phasesDetails4'
    },
    {
        desc: 'phasesDetails5'
    }

]

export const phasesDesc = [
    {
        name: 'phaseA',
        desc: 'phasesDesc1'
    },
    {
        name: 'phaseB',
        desc: 'phasesDesc2'
    },
    {
        name: 'phaseC',
        desc: 'phasesDesc3'
    }
]

export const singlePhase = [
    {
        name: 'phaseA',
        desc: 'singlePhaseDesc'
    }
]

export const phaseAProgram = [
    {
        desc: 'phaseAProgram1'
    },
    {
        desc: 'phaseAProgram2'
    },
    {
        desc: 'phaseAProgram3'
    },
    {
        desc: 'phaseAProgram4'
    },
    {
        desc: 'phaseAProgram5'
    },
    {
        desc: 'phaseAProgram6'
    },
    {
        desc: 'phaseAProgram7'
    }
]

export const phaseAResult = [
    {
        name: 'phaseA',
        desc: 'phaseAResult1'
    },
    {
        desc: 'phaseAResult2'
    }
]

export const teachingAcademyCards = [
    {
        id: '01',
        img: card1,
        title: 'trainingCourses',
        desc: 'teachingAcademyCardsDesc'
    },
    {
        id: '02',
        img: card2,
        title: 'assessmentTools',
        desc: 'teachingAcademyCardsDesc'
    },
    {
        id: '03',
        img: card3,
        title: 'eBooksArticles',
        desc: 'teachingAcademyCardsDesc'
    },
    {
        id: '04',
        img: card4,
        title: 'teachingVideos',
        desc: 'teachingAcademyCardsDesc'
    },
    {
        id: '05',
        img: card5,
        title: 'netwrorking',
        desc: 'teachingAcademyCardsDesc'
    },
    {
        id: '06',
        img: card6,
        title: 'researchReports',
        desc: 'teachingAcademyCardsDesc'
    }
]

export const blogsContent = [
    {   
        id: 1,
        img: blog1,
        title: 'Earn good money and make you very successful',
        name: 'Moataz',
        commentsNo: 50,
        likesNo: 200,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt blanditiis repellendus nostrum veniam, explicabo at, culpa vitae, odio autem maxime laudantium eaque adipisci commodi ducimus zzzzzzzzzzz eum deleniti. Deserunt architecto vel dolorem omnis, est sint aliquid, ullam repellendus ipsam dolores aspernatur, delectus maxime voluptatem? Adipisci veritatis earum est nesciunt!',
        day: 18,
        month: 'Nov'
    },
    {   
        id: 2,
        img: blog1,
        title: 'Earn good money and make you very successful',
        name: 'Mohamed',
        commentsNo: 50,
        likesNo: 200,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt blanditiis repellendus nostrum veniam, explicabo at, culpa vitae, odio autem maxime laudantium eaque adipisci commodi ducimus eeeeeeeeeee architecto eum deleniti. Deserunt architecto vel dolorem omnis, est sint aliquid, ullam repellendus ipsam dolores aspernatur, delectus maxime voluptatem? Adipisci veritatis earum est nesciunt!',
        day: 17,
        month: 'Nov'
    },
    {   
        id: 3,
        img: blog1,
        title: 'Earn good money and make you very successful',
        name: 'AbdelRahman',
        commentsNo: 23,
        likesNo: 104,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt blanditiis repellendus nostrum veniam, explicabo at, culpa vitae, odio autem maxime laudantium eaque adipisci commodi ducimus nnnnkkkkk architecto eum deleniti. Deserunt architecto vel dolorem omnis, est sint aliquid, ullam repellendus ipsam dolores aspernatur, delectus maxime voluptatem? Adipisci veritatis earum est nesciunt!',
        day: 16,
        month: 'Nov'
    },
    {   
        id: 4,
        img: blog1,
        title: 'Earn good money and make you very successful',
        name: 'AbdelRahman',
        commentsNo: 23,
        likesNo: 104,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt blanditiis repellendus nostrum veniam, explicabo at, culpa vitae, odio autem maxime laudantium eaque adipisci commodi ducimus soluta architecto eum deleniti. Deserunt architecto vel dolorem omnis, est sint aliquid, ullam repellendus ipsam dolores aspernatur, delectus maxime voluptatem? Adipisci veritatis earum est nesciunt!',
        day: 15,
        month: 'Nov'
    },
    {   
        id: 5,
        img: blog1,
        title: 'Earn good money and make you very successful',
        name: 'AbdelRahman',
        commentsNo: 23,
        likesNo: 104,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt blanditiis repellendus nostrum veniam, explicabo at, culpa vitae, odio autem maxime laudantium eaque adipisci commodi ducimus soluta architecto eum deleniti. Deserunt architecto vel dolorem omnis, est sint aliquid, ullam repellendus ipsam dolores aspernatur, delectus maxime voluptatem? Adipisci veritatis earum est nesciunt!',
        day: 14,
        month: 'Nov'
    },
    {   
        id: 6,
        img: blog1,
        title: 'Earn good money and make you very successful',
        name: 'AbdelRahman',
        commentsNo: 23,
        likesNo: 104,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt blanditiis repellendus nostrum veniam, explicabo at, culpa vitae, odio autem maxime laudantium eaque adipisci commodi ducimus soluta architecto eum deleniti. Deserunt architecto vel dolorem omnis, est sint aliquid, ullam repellendus ipsam dolores aspernatur, delectus maxime voluptatem? Adipisci veritatis earum est nesciunt!',
        day: 13,
        month: 'Nov'
    },
    {   
        id: 7,
        img: blog1,
        title: 'Earn good money and make you very successful',
        name: 'AbdelRahman',
        commentsNo: 23,
        likesNo: 104,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt blanditiis repellendus nostrum veniam, explicabo at, culpa vitae, odio autem maxime laudantium eaque adipisci commodi ducimus soluta architecto eum deleniti. Deserunt architecto vel dolorem omnis, est sint aliquid, ullam repellendus ipsam dolores aspernatur, delectus maxime voluptatem? Adipisci veritatis earum est nesciunt!',
        day: 12,
        month: 'Nov'
    },
    {   
        id: 8,
        img: blog1,
        title: 'Earn good money and make you very successful',
        name: 'AbdelRahman',
        commentsNo: 23,
        likesNo: 104,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt blanditiis repellendus nostrum veniam, explicabo at, culpa vitae, odio autem maxime laudantium eaque adipisci commodi ducimus soluta architecto eum deleniti. Deserunt architecto vel dolorem omnis, est sint aliquid, ullam repellendus ipsam dolores aspernatur, delectus maxime voluptatem? Adipisci veritatis earum est nesciunt!',
        day: 11,
        month: 'Nov'
    },
    {   
        id: 9,
        img: blog1,
        title: 'Earn good money and make you very successful',
        name: 'AbdelRahman',
        commentsNo: 23,
        likesNo: 104,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt blanditiis repellendus nostrum veniam, explicabo at, culpa vitae, odio autem maxime laudantium eaque adipisci commodi ducimus soluta architecto eum deleniti. Deserunt architecto vel dolorem omnis, est sint aliquid, ullam repellendus ipsam dolores aspernatur, delectus maxime voluptatem? Adipisci veritatis earum est nesciunt!',
        day: 10,
        month: 'Nov'
    },
    {   
        id: 10,
        img: blog1,
        title: 'Earn good money and make you very successful',
        name: 'AbdelRahman',
        commentsNo: 23,
        likesNo: 104,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt blanditiis repellendus nostrum veniam, explicabo at, culpa vitae, odio autem maxime laudantium eaque adipisci commodi ducimus soluta architecto eum deleniti. Deserunt architecto vel dolorem omnis, est sint aliquid, ullam repellendus ipsam dolores aspernatur, delectus maxime voluptatem? Adipisci veritatis earum est nesciunt!',
        day: 9,
        month: 'Nov'
    },
]

export const blogCategories = [
    {
        name: 'Category 1',
        count: 10
    },
    {
        name: 'Category 2',
        count: 6
    },
    {
        name: 'Category 3',
        count: 11
    },
    {
        name: 'Category 4',
        count: 2
    },
    {
        name: 'Category 5',
        count: 20
    }
]

export const assTwoTeacherDomain = [
    {
        desc: 'Understanding the Curriculum'
    },
    {
        desc: 'Planning and Assessment of Instruction'
    },
    {
        desc: 'Management of Classroom'
    },
    {
        desc: 'Instruction'
    },
    {
        desc: 'Standards for Student Achievement'
    },
    {
        desc: 'Appreciation of Diversity'
    },
    {
        desc: 'Professional Responsibilities'
    },
    {
        desc: 'Student Outcomes'
    }
]

export const ass2Table = [
    {
        index: 'Expert',
        desc: 'Teacher has almost all the competencies for effective teaching at high level. These are the identified strengths. Strengths have to be sustained and enhanced; however professional development needs have to be continuously address.'
    },
    {
        index: 'Effective',
        desc: 'Teacher has majority of the competencies at high level for effective teaching. Strengths have to be enhanced. Training and professional development needs have to be addressed.'
    },
    {
        index: 'Developing',
        desc: 'Teacher has average of all the competencies at high level for effective teaching. These strengths have to be enhanced; however, training needs have to be addressed as priority.'
    },
    {
        index: 'Beginning',
        desc: 'Teacher has very few of the competencies at high level for effective teaching. Training needs have to be given priority and addressed urgently.'
    }
]

export const teacherCompetencies = [
    {
        desc: 'Self-assessment: Teachers may assess their own knowledge and skills by using the self-assessment tool that has been developed for the teacher competencies.'
    },
    {
        desc: 'Job descriptions: To assist with staff recruitment and hiring, administrators will find the competencies useful in developing job descriptions for a range of program positions.'
    },
    {
        desc: 'Appraisals of performance: Administrators may use the competencies as a tool in conducting performance appraisals. An administrator and an instructor can view the competencies as a tool for identifying instructor strengths as well as areas for improvement, and then design a professional development plan appropriate for the individual.'
    },
    {
        desc: 'Peer supervisors and mentors: The competencies can guide supervisors and mentors as they employ these emerging and increasingly popular forms of professional development.'
    },
    {
        desc: 'Professional development plans: Administrators and instructors can collaboratively identify elements of the competencies relevant to their program to design both a program-wide professional development plan as well as individual professional development plans.'
    }
]

export const teacherCompetencies2 = [
    {
        desc: 'individual educators (teachers and principals) planning their own professional development.'
    },
    {
        desc: 'planners of professional development.'
    },
    {
        desc: 'providers of professional development.'
    },
    {
        desc: 'evaluators of existing professional development programs and systems.'
    }
]

export const assTwoSidebar1 = [
    {
        desc: 'The Teacher Competency Assessment (TCA) is designed to give teachers an assessment of where they stand in all performance areas and detailed guidance on how to improve.'
    },
    {
        desc: 'There are two versions of TCA: holistic (a simplified version) and analytical (full version). In holistic scoring, the rater makes an overall judgment about the quality of performance, while in analytic scoring, the rater assigns a score to each of the dimensions being assessed in the task.'
    }
]

export const assTwoSidebar2 = [
    {
        desc: 'Influencing the teacher’s definition of excellence in teaching and increasing his ability to recognize mastery experiences.'
    },
    {
        desc: 'Helping the teacher select improvement goals by providing him with clear standards of teaching, opportunities to find gaps between desired and actual practices, and a menu of options for action.'
    },
    {
        desc: 'Facilitating communication with the teacher’s peer, and 4) increasing the influence of external change agents on teacher practice.'
    }
]

export const classRoomInstruments = [
    {
        desc: 'ass3inst1'
    },
    {
        desc: 'ass3inst2'
    },
    {
        desc: 'ass3inst3'
    },
    {
        desc: 'ass3inst4'
    },
    {
        desc: 'ass3inst5'
    },
    {
        desc: 'ass3inst6'
    }
]

export const classRoomInstrumentsEx = [
    {
        desc: 'Please respond to the following questions by placing a mark in the appropriate box as they relate to your course and instructor'
    },
    {
        desc: 'Please respond to the following questions by placing a mark in the appropriate box as they relate to your course and instructor'
    }
]

export const ass3Directions = [
    {
        desc: 'ass3dir'
    },
    {
        desc: 'ass3dir2'
    }
]

export const ass3EvaluationTable = [
    {
        title: [
            {
                name: 'Not Evident'
            },
            {
                name: 'Somewhat Evident	'
            },
            {
                name: 'Evident	'
            },
            {
                name: 'Very Evident'
            },
        ],
        evaluation: [
            {
                value: 1
            },
            {
                value: 2
            },
            {
                value: 3
            },
            {
                value: 4
            },
        ]
    }
]

export const ass3Questions = [
    {
        category: 'ass3cat1',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 1, 
                text: 'ass3q1' 
            },
            { 
                id: 2, 
                text: 'ass3q2' 
            },
            {
                id: 3,
                text: 'ass3q3'
            },
            {
                id: 4,
                text: 'ass3q4'
            },
            {
                id: 5,
                text: 'ass3q5'
            },
            {
                id: 6,
                text: 'ass3q6'
            },
            {
                id: 7,
                text: 'ass3q7'
            }
        ]
    },
    {
        category: 'ass3cat2',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            {
                id: 8,
                text: 'ass3q8'
            },
            {
                id: 9,
                text: 'ass3q9'
            },
            {
                id: 10,
                text: 'ass3q10'
            },
            {
                id: 11,
                text: 'ass3q11'
            },
            {
                id: 12,
                text: 'ass3q12'
            }
        ]
    },
    {
        category: 'ass3cat3',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            {
                id: 13,
                text: 'ass3q13'
            },
            {
                id: 14,
                text: 'ass3q14'
            },
            {
                id: 15,
                text: 'ass3q15'
            },
            {
                id: 16,
                text: 'ass3q16'
            },
            {
                id: 17,
                text: 'ass3q17'
            }
        ]
    },
    {
        category: 'ass3cat4',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            {
                id: 18,
                text: 'ass3q18'
            },
            {
                id: 19,
                text: 'ass3q19'
            },
            {
                id: 20,
                text: 'ass3q20'
            },
            {
                id: 21,
                text: 'ass3q21'
            },
            {
                id: 22,
                text: 'ass3q22'
            },
            {
                id: 23,
                text: 'ass3q23'
            },
            {
                id: 24,
                text: 'ass3q24'
            }
        ]
    }
];

export const ass4Structure = [
    {
        desc: 'The Simplified TCA assessment tool is made up of the 19 Indicators and 8 Domains.'
    },
    {
        desc: 'The assessment tool uses a four-level rating scale:'
    },
    {
        desc: 'The rating to the indicators are expressed as:'
    }
]

export const ass4RatingIndicators = [
    {   
        name: 'Low level:',
        desc: '1. Does Not Meet Standards – Unacceptable performance leading to an improvement plan, intensive support, and, if improvement isn’t made within a reasonable amount of time, dismissal.'
    },
    {
        name: 'Fair level:',
        desc: '2. Improvement Necessary – Performance is mediocre; no teacher should be content to remain at this level.'
    },
    {
        name: 'Satisfactory level:',
        desc: '3. Effective – Solid, expected professional performance; teachers should feel good about scoring at this level.'
    },
    {
        name: 'High level:',
        desc: '4. Master teacher performance that meets very demanding criteria'
    }
]

export const ass4EvaluationTable = [
    {
        title: [
            {
                name: 'Low level:'
            },
            {
                name: 'Fair level:'
            },
            {
                name: 'Satisfactory level:'
            },
            {
                name: 'High level:'
            }
        ],
        evaluation: [
            {
                value: 1
            },
            {
                value: 2
            },
            {
                value: 3
            },
            {
                value: 4
            },
        ]
    },
]

export const ass4Questions = [
    {
        category: 'Indicators',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            {
                id: 1,
                text: '1. The teacher is up to date regarding curriculum content and understands the central concepts, tools of inquiry, and structures of the discipline and developmental tasks so as to create learning experiences that make these concepts meaningful for students.'
            },
        ]
    },
    {
        category: 'EFFECTIVE PLANNING AND ASSESSMENT OF CURRICULUM AND INSTRUCTION',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            {
                id: 2,
                text: '2. The teacher plans instruction effectively utilizing materials and resources to achieve the objectives of the curriculum.'
            },
            {
                id: 3,
                text: '3. The teacher plans assessment of student learning effectively.'
            },
            {
                id: 4,
                text: '4. The teacher monitors students’ understanding of the curriculum effectively and adjusts instruction, materials, or assessments when appropriate.'
            }
        ]
    },
    {
        category: 'EFFECTIVE MANAGEMENT OF CLASSROOM ENVIRONMENT',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            {
                id: 5,
                text: '5. The teacher creates an environment that is positive for student learning and involvement.'
            },
            {
                id: 6,
                text: '6. The teacher maintains appropriate standards of behaviour, mutual respect and safety.'
            }
        ]
    },
    {
        category: 'EFFECTIVE INSTRUCTION',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            {
                id: 7,
                text: '7. The teacher makes learning goals clear to students.'
            },
            {
                id: 8,
                text: '8. The teacher uses appropriate instructional techniques.'
            },
            {
                id: 9,
                text: '9. The teacher uses appropriate questioning techniques.'
            },
            {
                id: 10,
                text: '10. The teacher evaluates, tries innovative approaches, and refines instructional strategies, including the effective use of technologies, to increase student learning and confidence to learn.'
            }
        ]
    },
    {
        category: 'PROMOTION OF HIGH STANDARDS AND EXPECTATIONS FOR STUDENT ACHIEVEMENT',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            {
                id: 11,
                text: '11. The teacher communicates learning goals and high standards and expectations to students.'
            },
            {
                id: 12,
                text: '12. The teacher promotes confidence and perseverance in the student that stimulate increased personal student responsibility for achieving the goals of the curriculum.'
            }
        ]
    },
    {
        category: 'PROMOTION OF EQUITY AND APPRECIATION OF DIVERSITY',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            {
                id: 13,
                text: '13. The teacher strives to ensure equitable opportunities for student learning.'
            },
            {
                id: 14,
                text: 'The teacher demonstrates appreciation for and sensitivity to the diversity among individuals.'
            }
        ]
    },
    {
        category: 'FULFILLMENT OF PROFESSIONAL RESPONSIBILITIES',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            {
                id: 15,
                text: '15. The teacher is constructive and cooperative in interactions with parents and receptive to their contributions.'
            },
            {
                id: 16,
                text: '16. The teacher shares responsibility for accomplishing the goals and priorities of his/her grade/team/department, building and school district.'
            },
            {
                id: 17,
                text: '17. The teacher is a reflective and continuous learner.'
            }
        ]
    },
    {
        category: 'STUDENT OUTCOMES',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            {
                id: 18,
                text: '18. The teacher effectively facilitates student learning and growth.'
            },
            {
                id: 19,
                text: '19. Students demonstrate appropriate mastery of the knowledge and/or skills which are the objectives of the staff member’s work.'
            }
        ]
    }
]


export const ass4Sidebar = [
    {
        desc: 'The Simplified TCA assessment tool is made up of 19 items (Indicators) and 8 Domains.'
    },
    {
        desc: 'The full version (112 items, 19 Indicators and 8 Domains) is only available for certified Expert Teachers. This tool may be used by Self, Principal, Peers, Supervisors and Experts.'
    }
]

export const ass5StudentPerspectives = [
    {
        desc: 'teachers as they work to improve'
    },
    {
        desc: 'leaders as they set professional development priorities for teachers'
    },
    {
        desc: 'Attending Round Observation System’ (AROS)'
    },
    {
        desc: 'coaches and mentors in supporting teachers'
    },
    {
        desc: 'higher education institutions as they'
    },
    {
        desc: 'develop teacher training programs'
    }
]

export const ass5EvaluationTable = [
    {
        title: [
            {
                name: 'Never'
            },
            {
                name: 'Sometimes'
            },
            {
                name: 'Usually'
            },
            {
                name: 'Always'
            }
        ],
        evaluation: [
            {
                value: 1
            },
            {
                value: 2
            },
            {
                value: 3
            },
            {
                value: 4
            },
        ]
    }
]

export const ass5QuestionsPartOneTitles = {
    head: 'CONSTRUCT',
    title: 'SAMPLE QUESTION',
    answers: [
        {
            answer: 1
        },
        {
            answer: 2
        },
        {
            answer: 3
        },
        {
            answer: 4
        }
    ],
}

export const ass5QuestionsPartOne = [
    {
        category: 'CARE',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 1, 
                text: 'ass5p1q1' 
            },
            { 
                id: 2, 
                text: 'ass5p1q2' 
            },
        ]
    },
    {
        category: 'CONTROL',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 3, 
                text: 'ass5p1q3' 
            },
            { 
                id: 4, 
                text: 'ass5p1q4' 
            },
        ]
    },
    {
        category: 'CLARIFY',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 5, 
                text: 'ass5p1q5' 
            },
            { 
                id: 6, 
                text: 'ass5p1q6' 
            },
        ]
    },
    {
        category: 'CHALLENGE',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 7, 
                text: 'ass5p1q7' 
            },
            { 
                id: 8, 
                text: 'ass5p1q8' 
            },
        ]
    },
    {
        category: 'CAPTIVATE',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 9, 
                text: 'ass5p1q9' 
            },
            { 
                id: 10, 
                text: 'ass5p1q10' 
            },
        ]
    },
    {
        category: 'CONFER',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 11, 
                text: 'ass5p1q11' 
            },
            { 
                id: 12, 
                text: 'ass5p1q12' 
            },
        ]
    },
    {
        category: 'CONSOLIDATE',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 13, 
                text: 'ass5p1q13' 
            },
            { 
                id: 14, 
                text: 'ass5p1q14' 
            },
        ]
    },
    
]

export const ass5QuestionsPartTwoTitles = {
    head: 'Students Rating their Teacher'
}

export const ass5QuestionsPartTwo = [
    {
        category: 'Students in the classroom feel cared for',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 1, 
                text: 'ass5p2q1' 
            },
            { 
                id: 2, 
                text: 'ass5p2q2' 
            },
            {
                id: 3,
                text: 'ass5p2q3'
            }
        ]
    },
    {
        category: 'Student behavior is managed to enable learning',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 4, 
                text: 'ass5p2q4' 
            },
            { 
                id: 5, 
                text: 'ass5p2q5' 
            },
            {
                id: 6,
                text: 'ass5p2q6'
            },
            {
                id: 7,
                text: 'ass5p2q7'
            }
        ]
    },
    {
        category: 'Students receive support and scaffolding',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 8, 
                text: 'ass5p2q8' 
            },
            { 
                id: 9, 
                text: 'ass5p2q9' 
            },
            {
                id: 10,
                text: 'ass5p2q10'
            },
            {
                id: 11,
                text: 'ass5p2q11'
            },
        ]
    },
    {
        category: 'Students experience a challenging work environment',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 12, 
                text: 'ass5p2q12' 
            },
            { 
                id: 13, 
                text: 'ass5p2q11' 
            },
            {
                id: 14,
                text: 'ass5p2q14'
            },
            {
                id: 15,
                text: 'ass5p2q15'
            },
            {
                id: 16,
                text: 'ass5p2q16'
            },
            {
                id: 17,
                text: 'ass5p2q17'
            },
        ]
    },
    {
        category: 'Students are invested in classroom learning',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 18, 
                text: 'ass5p2q18' 
            },
            { 
                id: 19, 
                text: 'ass5p2q19' 
            },
            {
                id: 20,
                text: 'ass5p2q20'
            },
            {
                id: 21,
                text: 'ass5p2q21'
            },
            {
                id: 22,
                text: 'ass5p2q22'
            },
            {
                id: 23,
                text: 'ass5p2q23'
            },
        ]
    },
    {
        category: 'Students receive descriptive feedback',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
        questions: [
            { 
                id: 24, 
                text: 'ass5p2q24' 
            },
            { 
                id: 25, 
                text: 'ass5p2q25' 
            },
        ]
    },
]

export const ass5Sidebar = [
    {
        desc: '“No one has a bigger stake in teaching effectiveness than students. Nor are there any better experts on how teaching is experienced by its intended beneficiaries. But only recently have many policymakers and practitioners come to recognize that—when asked the right questions, in the right ways—students can be an important source of information on the quality of teaching and the learning environment in individual classrooms.”'
    },
    {
        desc: 'MET project. Student Perception Surveys and Their Implementation. Bill & Melinda Gates Foundation.'
    }

]

