import ecommerce from "./assets/images/shop.png";
import admin from "./assets/images/laptop.png";
import dashboard from "./assets/images/speedometer.png";
import browser from "./assets/images/web-design.png";
import responsive from "./assets/images/responsive.png";
import api from "./assets/images/share.png";
import hosting from "./assets/images/cloud-computing-gear.png";
import dev from "./assets/images/laptop-code.png";
import db from "./assets/images/modem.png";
import firebase from "./assets/images/cloud-computing.png"
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
// -------- filter assets --------
import disney from "./assets/images/disney-clone.png"
import home from "./assets/images/home.png"
import notes from "./assets/images/notes.png"
import ecom from "./assets/images/ecom.png"

export const services = [
    {
        title: "Eccomerce with stripe",
        image: ecommerce,
        description: "Purchases easy with stripe collect straight from your website",
        color: "var(--puff-blue)"
    },
    {
        title: "Custom admin portal",
        image: admin,
        description: "",
        color: "var(--puff-red)"
    },
    {
        title: "Cross browser dev",
        image: browser,
        description: "",
        color: "var(--undertone-green)"
    },
    {
        title: "Responsive on all Devices",
        image: responsive,
        description: "",
        color: "var(--puff-blood-orange)"
    },
    {
        title: "Api integration",
        image: api,
        description: "",
        color: "var(--puff-orange)"
    },
    {
        title: "Full Stack Web Hosting and Integration",
        image: hosting,
        description: "",
        color: "var(--puff-blue)"
    },
    {
        title: "Full Stack Web and Application Development",
        image: dev,
        description: "",
        color: "var(--undertone-green)"
    },
    {
        title: "Firebase Development",
        image: firebase,
        description: "",
        color: "var(--undertone-blue)"
    },
    {
        title: "Custom DB development",
        image: db,
        description: "",
        color: "var(--puff-neon)"
    },
]


export const resume1 = [
    {
        category: "Experience",
        icon: faGraduationCap,
        year: "2021 - 2022",
        title: "The Odin Project",
        desc: "React, Design Patterns, ES6 Modules, Build Tools, Asynchronous Code"
    },
    {
        category: "Experience",
        icon: faBriefcase,
        year: "2019 - 2021",
        title: "Software Developer - NASA contactor",
        desc: "Fast paced learning environment LCS operations. Refactored major class from singleton to private class data. Wrote testing suites with robot, cxxTest and mock objects.Used VersionOne for agile development, AccuRev for Version Control and Jenkins for builds."
    },


]

export const resume2 = [
    {
        category: "Experience",
        icon: faBriefcase,
        year: "2018 - 2019",
        title: "Technical Support Specialist",
        desc: "Performed virus scans, updated software, computer backups, troubleshooted bugs in software, technical support and system monitoring."
    },
    {
        category: "Education",
        icon: faGraduationCap,
        year: "2017 - 2018",
        title: "Weber State University",
        desc: " Web Design & UsabilitWeber State Universityy, Client Side PProgramming, User Experience Design, Database Design & SQL, Object Oriented Programming.GPA 4.00"
    },
    {
        category: "Education",
        icon: faGraduationCap,
        year: "2013 - 2017",
        title: "Bachelor Of Science In Electrical Engineering",
        desc: "Computer System & Processor Architecture. Real-Time Application Software Development.Technical Communication.GPA 3.22"
    },


]

export const FilterMenu = [
    {
        image: ecom,
        title: "E-Commerce With Stripe",
        category: ["React", "Firebase", "Styled Components", "Api", "Redux", "MongoDB"],
        live: "https://patry-mern-ecommerce.herokuapp.com/",
        code: "https://github.com/patrycake/mern-eccomerce"
    },
    {
        image: disney,
        title: "Disney Plus Clone",
        category: ["React", "Firebase", "Styled Components", "Api"],
        live: "https://disney-clone-1815b.web.app/",
        code: "https://github.com/patrycake/disney-clone"
    },
    {
        image: home,
        title: "Home Checklist",
        category: ["React", "Redux", "Firebase"],
        live: "https://patrycake.github.io/home-checklist/",
        code: "https://github.com/patrycake/home-checklist"
    },
    {
        image: notes,
        title: "Markdown Notes",
        category: ["React", "Redux"],
        live: "https://patrycake.github.io/notes-md/",
        code: "https://github.com/patrycake/notes-md"
    }
]
