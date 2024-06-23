// Enter all your detials in this file
// Logo images
import logogradient from "./assets/Logo2Eko-removebg-preview.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/Profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1eko.png";
import projectImage2 from "./assets/projects/project2eko.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Eko Saputra Wijaya",
  tagline: "Computer Science Student",
  img: profile,
  about: `As a third-year computer science student at Binus University and a passionate tech enthusiast, my primary focus is on establishing a solid foundation in machine learning and deep learning. I am driven by a strong ambition to confront technical hurdles and contribute meaningfully to these domains. Furthermore, my interest extends to UI/UX design, where I have undertaken multiple projects aimed at redesigning and creating intuitive user experiences.`,
};



// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "AWS Academy Graduate",
    Company: `amazon web services (AWS)`,
    Location: "Online",
    Type: "Bootcamp",
    Issued :"Mar 2023",
  },
  {
    Position: "Laravel Web Development Bootcamp",
    Company: `SanberCode`,
    Location: "Online",
    Type: "Bootcamp",
    Issued :"Aug 2023",
  }
];


// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor's degree - Computer Science",
    Company: "Binus University",
    Location: "Online",
    Type: "Full Time",
    Duration: "Sep 2021 - Present",
  },
  {
    Position: "Student Exchange Program - Creative Media and Game Technologies",
    Company: `Saxion University of Applied Sciences`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Feb 2024 - Jul 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Transforming Sign Language using CNN Approach based on BISINDO Dataset",
    image: projectImage1,
    description: `The primary goal of this project is to create a reliable system for recognizing Indonesian Sign Language (BISINDO) by utilizing Convolutional Neural Networks (CNNs). Using a carefully selected BISINDO dataset obtained from Kaggle, this project utilizes a CNN model to extract spatial characteristics from video data of sign language. The systematic approach involves three main steps: data preprocessing, model training, and evaluation using metrics such as accuracy, precision, recall, and F1 score.`,
    techstack: "Keras and TensorFlow, Machine Learning, Convolutional Neural Networks (CNN), Deep Learning, Public Speaking",
    previewLink: "https://ieeexplore.ieee.org/abstract/document/10349011",
    githubLink: "https://github.com/LessZxD/Transforming-Sign-Language-using-CNN-Approach-based-on-BISINDO-Dataset",
  },
  {
    title: "Customer Data Segmentation Segmenting customer data using the K-means algorithm.",
    image: projectImage2,
    description: `Customer segmentation is an essential undertaking in marketing and business strategy, with the goal of categorizing a customer base into distinct groups based on shared characteristics and behaviors. This project utilizes the K-means clustering algorithm to segment customers according to their purchasing behavior.`,
    techstack: "Machine Learning, Python, Data Visualization, R Programming Language, Data Modeling ", 
    previewLink: "https://google.com",
    githubLink: "https://github.com/LessZxD/Customer-Data-Segmentation",
  },
  {
    title: "Image to Caption Generator",
    image: projectImage3,
    description: `Image to Caption GeneratorImage to Caption Generator This project utilizes Convolutional Neural Networks (CNNs) to extract image features and Long Short-Term Memory (LSTM) networks to generate sequences, resulting in an image-to-caption generator. `,
    techstack: "Keras and TensorFlow, Convolutional Neural Networks (CNN), Long Short-term Memory (LSTM), Deep Learning, Python (Programming Language), Natural Language Processing (NLP)",
    previewLink: "https://colab.research.google.com/drive/1sUqilpc6TLlGE-Fle-IEHSeVZDLY0vlF?usp=sharing",
    githubLink: "https://github.com/LessZxD/ImageToCaptionGenerator",
  },
  {
    title: "Company Bankruptcy Detector",
    image: projectImage4,
    description: `The Company Bankruptcy Detector is a Python program designed to forecast the probability of a company experiencing bankruptcy by analyzing a range of financial and non-financial variables. The program employs logistic regression, a widely used machine learning algorithm, to construct a bankruptcy prediction model`,
    techstack: "Machine Learning, Keras and Tensorflow, Python",
    previewLink: "https://colab.research.google.com/drive/1YPEbRnj15FcBjAEOnxSarifdlMbVozjb?usp=sharing",
    githubLink: "https://github.com/LessZxD/Company-Bankruptcy-Detector",
  },
  {
    title: "OnlineForum-Laravel",
    image: projectImage5,
    description: `This project involves creating an online forum using Laravel where users can post and answer questions. There are two user types: normal and premium. Normal users can post and answer questions, while premium users receive answers from certified experts. Key features include user authentication with email verification, roles and permissions, a question and answer system with upvotes/downvotes, and a subscription system for premium access.`,
    techstack: "Laravel, MySQL, PHP, Node.js, Bootstrap (Framework), GitHub",
    previewLink: "https://github.com/LessZxD/OnlineForum-Laravel",
    githubLink: "https://github.com/LessZxD/OnlineForum-Laravel",
  },
  {
    title: "Game Development - Run Of Carribean",
    image: projectImage6,
    description: `Game Development - Run Of CarribeanGame Development - Run Of Carribean
During my exchange program at Saxion University, I collaborated with fellow international students to develop an engaging game using Unity. Our project was an endless runner themed around pirates, where players control a pirate ship to collect coins and avoid obstacles such as whirlpools and cannons. In this project, I served as an engineer, utilizing C# to implement game mechanics and ensure smooth gameplay. `,
    techstack: "C, Unity, Trello, Teamwork, GitHub, Game Development",
    previewLink: "https://github.com/LessZxD/ProjectInnovation_CMGT_01",
    githubLink: "https://github.com/LessZxD/ProjectInnovation_CMGT_01",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "eko.wijaya@binus.ac.id",
  phone: "+31 633 960 680",
};
