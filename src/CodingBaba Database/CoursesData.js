import PrimeProgram from "../assets/Prime Program.png";
import MERNProgram from "../assets/MERN Img.jpg";


//https://res.cloudinary.com/dchyp1crz/image/upload/v1693054878/Coding%20Shuttle/MERN_Img_cviicw.png
//https://res.cloudinary.com/dchyp1crz/image/upload/v1693054866/Coding%20Shuttle/Prime_Program_olue9x.png
const CourseData=[
    {
        id:1,
        courseImg:MERNProgram,
        course:"mern-fullstack-course",
        courseName:"MERN FullStack",
        courseMRP:"7,800/-",
        courseSP:5988,
        courseEMI:"998/mon*",
        buyFlag:false,
        courseFeatures:[
            "No Prerequisite Required",
            "150 Hours On Demand Video",
            " MERN Stack Beginner to Advanced",
            "Industry Grade Projects",
            "1 Years Access"
        ],
        courseHeading:"Welcome to @dot-dev Family",
        courseSubHeading:"Web Development Master Course @dot Batch",
        courseDetail:"Build fullstack React.js applications with Node.js, Express.js & MongoDB (MERN) with this project-focused course.",
        courseCurriculum:[
            {
                id:1,
                topicHeading:"Complete HTML",
                topicDuration:"1 Weeks"
            },
            {
                id:2,
                topicHeading:"Complete CSS",
                topicDuration:"1 Weeks"
            },{
                id:3,
                topicHeading:"Complete JavaScript",
                topicDuration:"1 Weeks"
            },
            {
                id:4,
                topicHeading:"Advanced Frontend with React",
                topicDuration:"2 Weeks"
            },
            {
                id:5,
                topicHeading:"Backend with NodeJS",
                topicDuration:"2 Weeks"
            },
            {
                id:6,
                topicHeading:"Major Project 1",
                topicDuration:"2 Weeks"
            },
            {
                id:7,
                topicHeading:"Major Project 2",
                topicDuration:"2 Weeks"
            }
        ]
    },
    {
        id:2,
        courseImg:PrimeProgram,
        course:"dsa-prime-2.0",
        courseName:"DSA Prime 2.0",
        courseMRP:"7,800/-",
        courseSP:6580,
        courseEMI:"1,097/mon*",
        buyFlag:false,
        courseFeatures:[
            "30+ Hrs LIVE Problem Solving Classes",
            "60+ Hrs Online Content",
            "400+ Handpicked Problems",
            "5 Months Program",
            "2 Years Access"
        ],
        courseHeading:"Welcome to @supreme-dev Family",
        courseSubHeading:"Data Structures & Algorithms BootCamp @Supreme-2.0",
        courseDetail:" A comprehensive program that covers the fundamentals of data structures and algorithms. It includes lectures and exercises to help students design and implement efficient solutions. This course is suitable for beginners and experienced programmers and aims to prepare students for technical interviews and placement exams.",
        courseCurriculum:[
            {
                id:1,
                topicHeading:"Basisc of Java Programming Language",
                topicDuration:"2 Weeks"
            },
            {
                id:2,
                topicHeading:"Problem Solving Techniques - I (Basics)",
                topicDuration:"2 Weeks"
            },{
                id:3,
                topicHeading:"OOPS & Collection Framework",
                topicDuration:"2 Weeks"
            },
            {
                id:4,
                topicHeading:"Data Structures - I (Basics)",
                topicDuration:"4 Weeks"
            },
            {
                id:5,
                topicHeading:"Problem Solving Techniques - II (Advanced)",
                topicDuration:"3 Weeks"
            },
            {
                id:6,
                topicHeading:"Trees",
                topicDuration:"2 Weeks"
            },
            {
                id:7,
                topicHeading:"Data Structures - II (Advanced)",
                topicDuration:"3 Weeks"
            },
            {
                id:8,
                topicHeading:"Dynamic Programming",
                topicDuration:"2 Weeks"
            }
        ]
    }
];

export default CourseData;