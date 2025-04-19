import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";


import blender from "../assets/icons/blender.png";
import ae from "../assets/icons/ae.png";
import ai from "../assets/icons/ai.png";
import ps from "../assets/icons/ps.png";
import ig from "../assets/icons/instagram.png";


import gloria from "../assets/images/gloria1.png";
import obkg from "../assets/images/obkg.png";
import osakacollege from "../assets/images/osakacollege.png";
import uc from "../assets/images/uc.png";


export const skills = [
    {
        imageUrl: blender,
        name: "Blender",
        type: "Frontend",
    },
    {
        imageUrl: ae,
        name: "Adobe After-Effect",
        type: "Backend",
    },
    {
        imageUrl: ai,
        name: "Adobe Illustrator",
        type: "Version Control",
    },
    {
        imageUrl: ps,
        name: "Adobe Photoshop",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Senior High School Student",
        company_name: "SMA Gloria 1 Surabaya",
        icon: gloria,
        iconBg: "#ffffff",
        date: "2015-2018",
        points: [
            "I attended Gloria 1 Senior High School from 2015 to 2018, where I pursued the Science track throughout my studies. During my time there, I focused on subjects such as Mathematics, Physics, Chemistry, and Biology, which helped build a strong academic foundation in the sciences. My experience in the Science program also played a significant role in shaping my interest in analytical thinking and problem-solving."
        ],
    },
    {
        title: "Japanese Language Student",
        company_name: "OBKG Japanese Language School Osaka",
        icon: obkg,
        iconBg: "#ffffff",
        date: "2018-2020",
        points: [
            "After graduating from high school, I made the decision to pursue my higher education in Japan. In order to prepare for this new chapter, I enrolled in a Japanese language school called OBKG (Osaka Bunka Kokusai Gakkou) located in Osaka. I studied there for 1 year and 9 months, from 2018 to 2020. During my time at OBKG, I not only focused on improving my Japanese language skills—especially in reading, writing, listening, and speaking—but also learned about Japanese culture and daily life, which helped me adapt more smoothly to the new environment."
        ],
    },
    {
        title: "College Student",
        company_name: "Osaka Sogo College of Design",
        icon: osakacollege,
        iconBg: "#ffffff",
        date: "2020-2022",
        points: [
            "After completing my Japanese language studies and achieving the N1 level at OBKG, I enrolled in Osaka Sogo College of Design to study Game Design. During my time there, I primarily focused on learning 3D design and game design. The program allowed me to explore various aspects of the game development process, from concept creation and storytelling to 3D modeling and using industry-standard software tools."
        ],
    },
    {
        title: "University Student",
        company_name: "Universitas Ciputra Surabaya",
        icon: uc,
        iconBg: "#ffffff",
        date: "Jan 2023 - Present",
        points: [
            "After graduating from Osaka Sogo College of Design, I made the decision to return to Indonesia to further expand and deepen my understanding of design. I realized that there was still so much more I wanted to learn and explore, especially in the areas of visual storytelling and creative communication. To continue this journey, I enrolled at Ciputra University and chose to major in Visual Communication Design (VCD). This program has given me the opportunity to build on my previous experience in game and 3D design, while also allowing me to develop new skills in areas such as branding, graphic design, and multimedia communication."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: ig,
        link: '/https://www.instagram.com/jonathanlienanto/',
    },
   
];


export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];