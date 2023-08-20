import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Designer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Web Developer",
        icon: backend,
    },
    {
        title: "Freelancer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "AmazonX",
        description:
            "The React-based Amazon Clone is a dynamic web application that replicates the core functionalities of the popular e-commerce platform Amazon.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "Stripe",
                color: "blue-text-gradient",
            },
        ],
        image: "https://user-images.githubusercontent.com/80787027/215531205-9c87be7a-8fa8-4e35-a1ef-53524b733e24.jpg",
        source_code_link: "https://github.com/Aseem5047/amazon",
    },
    {
        name: "InstagramX",
        description:
            "The MERN full-stack application is a powerful web application that incorporates a combination of cutting-edge technologies: MongoDB, Express.js, React, and Node.js.",
        tags: [

            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "pink-text-gradient",
            }, {
                name: "React",
                color: "blue-text-gradient",
            }
            , {
                name: "Node.Js",
                color: "blue-text-gradient",
            }
        ],
        image: "https://user-images.githubusercontent.com/80787027/229779906-7b0c9df9-3728-46ba-94aa-a38480d41eb8.png",
        source_code_link: "https://github.com/Aseem5047/instagram",
    },
    {
        name: "TwitterX",
        description:
            "The Next.js TypeScript Twitter Clone is a cutting-edge web application that replicates the core functionalities of the popular social media platform Twitter.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "google oauth",
                color: "green-text-gradient",
            },
            {
                name: "tailwind css",
                color: "pink-text-gradient",
            },
        ],
        image: "https://user-images.githubusercontent.com/80787027/229784584-25b9a91e-bd88-4a7b-8b05-6aa4156f66ce.png",
        source_code_link: "https://github.com/Aseem5047/twitter",
    },
    {
        name: "NetflixX",
        description:
            "The Next.js TypeScript Netflix Clone is an impressive web application that emulates the core functionalities of the renowned streaming service Netflix.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: "https://user-images.githubusercontent.com/80787027/229789895-e92fcdbe-a479-4026-bf50-5846712cf392.png",
        source_code_link: "https://github.com/Aseem5047/netflix",
    },
    {
        name: "YouTubeX",
        description:
            "The React-based YouTube Clone is a powerful web application that replicates the core functionalities of the world-renowned video-sharing platform YouTube.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: "https://private-user-images.githubusercontent.com/80787027/257933210-0db55535-1a33-428b-aa8e-9f778beb71c4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTI1MzQ4NTIsIm5iZiI6MTY5MjUzNDU1MiwicGF0aCI6Ii84MDc4NzAyNy8yNTc5MzMyMTAtMGRiNTU1MzUtMWEzMy00MjhiLWFhOGUtOWY3NzhiZWI3MWM0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA4MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwODIwVDEyMjkxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTViODY3ZWYwY2UzYzFiMTkxMGJjZTRkMzI2OGY2OWYyMzY0MWE4ODAzYjVlMTViNGI5OTNhZjE4MjczYzQyMmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.nUtewUitFOY54GUfAhbpEqLSZ22HijaoqBXZgOdGGd4",
        source_code_link: "https://github.com/Aseem5047/youtube",
    },
];

export { services, technologies, experiences, testimonials, projects };