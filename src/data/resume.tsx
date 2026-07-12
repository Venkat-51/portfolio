import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Cplusplus } from "@/components/ui/svgs/cplusplus";
import { Html5 } from "@/components/ui/svgs/html5";
import { Css3 } from "@/components/ui/svgs/css3";
import { Bootstrap } from "@/components/ui/svgs/bootstrap";
import { Springboot } from "@/components/ui/svgs/springboot";
import { Django } from "@/components/ui/svgs/django";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Sqlite } from "@/components/ui/svgs/sqlite";
import { Git } from "@/components/ui/svgs/git";
import { Github } from "@/components/ui/svgs/github";
import { Visualstudiocode } from "@/components/ui/svgs/visualstudiocode";
import { Intellijidea } from "@/components/ui/svgs/intellijidea";
import { Antigravity } from "@/components/ui/svgs/antigravity";
import { Sql } from "@/components/ui/svgs/sql";

export const DATA = {
  name: "Venkateswaran G",
  initials: "G",
  url: "https://venkateswarang.in",
  location: "Thanjavur, TamilNadu, India",
  locationLink: "https://www.google.com/maps/place/thanjavur",
  description:
    "Full Stack Web Developer | Java, Spring Boot & React | Python (Django) — Building scalable, real-world web applications with clean, efficient code — from backend APIs to responsive interfaces. Open to Full-Time Full Stack Web Developer Opportunities",
  summary:
    "I'm a Full Stack Developer and Computer Science and Engineering graduate, passionate about building scalable software solutions using Java, Spring Boot, React, and Python. I enjoy solving real-world problems through clean, efficient, and user-focused applications — from backend REST APIs to responsive front-end interfaces — and my goal is to contribute to innovative products while continuously learning modern technologies and software engineering best practices.",
  avatarUrl: "/my.png",
  skills: [
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: Javascript },
    { name: "SQL", icon: Sql },
    { name: "C++", icon: Cplusplus },
    { name: "React", icon: ReactLight },
    { name: "HTML5", icon: Html5 },
    { name: "CSS3", icon: Css3 },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "Spring Boot", icon: Springboot },
    { name: "Django", icon: Django },
    { name: "Node.js", icon: Nodejs },
    { name: "MySQL", icon: Mysql },
    { name: "SQLite", icon: Sqlite },
    { name: "Git", icon: Git },
    { name: "GitHub", icon: Github },
    { name: "Docker", icon: Docker },
    { name: "VS Code", icon: Visualstudiocode },
    { name: "IntelliJ IDEA", icon: Intellijidea },
    { name: "Antigravity", icon: Antigravity },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "gvenkateswaran3@gmail.com",
    tel: "+91 95008 82090",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Venkat-51",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/venkateswaran3/ ",
        icon: Icons.linkedin,

        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/Venkateswaran51/",
        icon: Icons.leetcode,
        navbar: true,
      },
      CodeChef: {
        name: "CodeChef",
        url: "https://www.codechef.com/users/venkat_g",
        icon: Icons.codechef,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/venkateswa68084",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@stabletechtamil",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "University College of Engineering Kanchipuram",
      href: "http://www.aucek.in/",
      degree: "Bachelor of Engineering(B.E) in Computer Science and Engineering",
      logoUrl: "Anna University.png",
      start: "2023",
      end: "2026",
      grade: "7.6 CGPA",
    },
    {
      school: "Government Polytechnic College, Ariyalur",
      href: "https://gptariyalur.com/",
      degree: "Diploma in Mechanical Engineering (DME)",
      logoUrl: "https://tse2.mm.bing.net/th/id/OIP.JpeeqQML7eMU8UrWpXTeDwHaJc?rs=1&pid=ImgDetMain&o=7&rm=3",
      start: "2019",
      end: "2021",
      grade: "89%",
    },
    {
      school: "Srinivasa Rao Higher Secondary School, Thiruvaiyaru",
      href: "https://wikimapia.org/2296783/Srinivasa-Rao-High-Higher-Secondary-School-Thiruvaiyaru",
      degree: "HSE (Higher Secondary Education) & SSLC (Secondary School Certificate)",
      logoUrl: "SRHSS.png",
      start: "2017",
      end: "2019",
      grade: "HSE: 73% | SSLC: 82%",
    },
  ],
  projects: [
    {
      title: "SellerRocket - E-Commerce Seller Management Platform",
      href: "https://sellerrocket-venkateswaran-77sc-m1g6ipzz9.vercel.app/",
      dates: "Jun 2026 - Jun 2026",
      active: true,
      description:
        "A seller management platform designed to help online businesses manage products, inventory, orders, and sales performance. The application provides an organized dashboard for monitoring business operations and improving seller productivity.",
      technologies: [
        "React", "TypeScript", "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://sellerrocket-venkateswaran.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Venkat-51/sellerrocket-venkateswaran",
          icon: <Icons.github className="size-3" />,
        },
      ],
      images: [
        "/Seller Rocket/home.png",
        "/Seller Rocket/service.png",
        "/Seller Rocket/contact.png",
        "/Seller Rocket/message.png",
      ],
    },
     {
      title: "SuperMarket App – Online Grocery Shopping & Order Management System",
      href: "https://super-market-app-neon.vercel.app/",
      dates: "Jun 2026 - July 2026",
      active: true,
      description:
        "A full-stack grocery shopping app where customers browse products, add items to cart, and place orders through a clean, responsive interface. Features real-time cart management, order processing, and secure REST API communication between frontend and backend.",
      technologies: [
        "TypeScript", ".NET (ASP.NET Core Web API)", "SQL Server", "Docker", "Git & GitHub", "Vercel (Frontend)", "Render (Backend)",
      ],
      links: [
        {
          type: "Website",
          href: "https://super-market-app-neon.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Venkat-51/SuperMarketApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      images: [
        "/Supermarket img/1.png",
        "/Supermarket img/2.png",
        "/Supermarket img/3.png",
        "/Supermarket img/4.png",
        "/Supermarket img/5.png",
        "/Supermarket img/6.png",
        "/Supermarket img/7.png",
        "/Supermarket img/8.png",
        "/Supermarket img/9.png",
      ],
    },
    {
      title: "Service Booking & Appointment System",
      href: "https://service-booking-frontend-gamma.vercel.app/",
      dates: "Jan 2026 - Mar 2026",
      active: true,
      description:
        "A web-based appointment booking platform that allows customers to schedule services online while enabling administrators to manage bookings, customer information, service availability, and appointment status efficiently.",
      technologies: [
        "React", "TypeScript", "Spring Boot", "SQLite",
      ],
      links: [
        {
          type: "Website",
          href: "https://service-booking-frontend-gamma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Venkat-51/service-booking-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      images: [
        "/Service Booking/Home.png",
        "/Service Booking/Service.png",
        "/Service Booking/Service1.png",
      ],
    },
    {
      title: "Student Portfolio Portal",
      href: "https://student-portal-web-app.onrender.com/",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "A full-stack web application that enables students to create, manage, and showcase their academic portfolios. The system provides secure authentication, profile management, project uploads, certificate management, and resume generation through an intuitive dashboard.",
      technologies: [
        "Python", "Django", "HTML", "CSS", "JavaScript", "SQLite",
      ],
      links: [
        {
          type: "Website",
          href: "https://student-portal-web-app.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Venkat-51/Student_Portal_Web-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      images: [
        "/student Portfolio/profile.png",
        "/student Portfolio/login.png",
        "/student Portfolio/register.png",
        "/student Portfolio/Screenshot (429).png",
      ],
    },
    {
      title: "AI Predictive Maintenance for Vehicle Service Scheduling System",
      href: "https://github.com/kathirvelgithub/Vechicle_Predictive_Maintence",
      dates: "Jan 2026 - May 2026",
      active: true,
      description:
        "An AI-powered predictive maintenance platform that analyzes vehicle sensor and maintenance data to predict potential failures. The system automatically schedules service appointments, notifies users, and helps reduce unexpected vehicle breakdowns through preventive maintenance.",
      technologies: [
        "Multi-Agent Systems", "React", "Java Authentication", "Python (FastAPI)", "AI/ML", "MQTT", "SQLite",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kathirvelgithub/Vechicle_Predictive_Maintence",
          icon: <Icons.github className="size-3" />,
        },
      ],
      images: [
        "/Predictive Maintenance/white.png",
        "/Predictive Maintenance/home.png",
        "/Predictive Maintenance/risk.png",
        "/Predictive Maintenance/red.png",
        "/Predictive Maintenance/scarpio.png",
      ],
    },
    {
      title: "Decentralized Event Ticketing System",
      href: "https://github.com/Sripadhmapiriya/CBT/tree/main/final/nft-ticketing-dapp",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "A blockchain-based ticketing application that issues NFT event tickets using smart contracts. The platform provides secure ticket ownership, transparent transactions, QR code verification, and fraud-resistant event management.",
      technologies: [
        "Solidity", "Hardhat", "Ethers.js", "MetaMask", "JavaScript"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sripadhmapiriya/CBT/tree/main/final/nft-ticketing-dapp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      images: [
        "/NFT DApp/NFT.png",
      ],
    },
  ],
  hackathons: [
    {
      title: "Odoo Hackathon ",
      dates: "Sep 6th, 2025",
      location: "Online",
      description:
        "EcoFind is a full-stack eco-friendly e-commerce application that enables users to discover sustainable products, manage shopping carts, and track purchases. The application is built using Next.js (App Router) for both frontend and backend APIs, along with a mobile frontend architecture consuming the same services.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          href: "https://github.com/NaveenThankaswamy/Rapr-odoo",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Smart India Hackathon 2025",
      dates: "September 25th, 2025",
      location: "@UCEk, Anna University, Chennai",
      description:
        "A mobile app to verify loan utilization and track the progress of government schemes. The app allows users to submit loan utilization reports, upload supporting documents, and receive real-time updates on the status of their applications.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
  work: [
    {
      company: "Digisailor",
      href: "https://digisailor.com",
      title: "Java Spring Boot Intern",
      logoUrl: "https://tse2.mm.bing.net/th/id/OIP.OSdvfrgFA8V_gR3tlYqEvQHaB-?rs=1&pid=ImgDetMain&o=7&rm=3",
      start: "Dec 2025",
      end: "Dec 2025",
      description: [
        "Developed RESTful APIs using Java and Spring Boot.",
        "Worked with MVC architecture and backend development concepts.",
        "Implemented CRUD operations and database integration.",
        "Gained hands-on experience in enterprise application development.",
      ],
      certificateUrl: "https://drive.google.com/file/d/1d_xS2m8-uacWaXe6YQ4TAslUkWd6vshu/view?usp=sharing",
    },
    {
      company: "Nexgen Innovator Solutions",
      href: "#",
      title: "Python Django Intern",
      logoUrl: "NexGen Logo.png",
      start: "Aug 2025",
      end: "Aug 2025",
      description: [
        "Built web applications using Python and Django Framework.",
        "Developed authentication and CRUD functionalities.",
        "Worked with HTML, CSS, JavaScript, SQLite, and Django ORM.",
        "Improved backend development and full-stack development skills.",
      ],
      certificateUrl: "https://drive.google.com/file/d/1DOW8VmHDIdH95py3R0mdI_vS2t_Qx_XN/view?usp=sharing",
    },
  ],
  certifications: [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillBuild",
      date: "February 2026",
      credentialUrl: "https://drive.google.com/file/d/1mG4SCm3Qi72L2PMMoOyv7Lb18Ts2TkY4/view?usp=sharing",
    },
    {
      title: "SQL Fundamentals",
      issuer: "WsCube Tech",
      date: "August 2025",
      credentialUrl: "https://drive.google.com/file/d/191TvEEGOO3S5QJD7LuXqJd0pXt2DmyZN/view?usp=sharing",
    },
    {
      title: "Employability Skills Development Programme",
      issuer: "TITAN LeAP",
      date: "2025–2026",
      credentialUrl: "https://drive.google.com/file/d/1d1T9K9HnizxJUz8KAWFcfAz6vH5roc1P/view?usp=sharing",
    },
    {
      title: "Techlaum Kalakkuvom – Kalloori Kalai Thiruvizha",
      issuer: "University College of Engineering, Kancheepuram (Anna University)",
      date: "2025-26",
      credentialUrl: "https://drive.google.com/file/d/1qkV5J3VFIk5P-rHrPpcmfks4wids8Nph/view?usp=sharing",
    },
    {
      title: "Data Analytics",
      issuer: "Pantech Solutions",
      date: "Dec 2022 – Jan 2023",
      credentialUrl: "https://drive.google.com/file/d/1ytBBlqy6IssxpDhGUMzQ1mCuf4zE-JuP/view?usp=sharing",
    },
    {
      title: "Field Technician – Computer Peripherals",
      issuer: "NSDC",
      date: "March 2020",
      credentialUrl: "https://drive.google.com/file/d/1065L8IiHC5XSfqSSHt0iHCu6WWsjKFpS/view?usp=sharing",
    },
  ],
  achievements: [
    "Built 5+ Full Stack Projects",
    "Completed 5+ Professional Certifications",
    "BE Computer Science Graduate",
    "Active Open Source & GitHub Contributor",
    "Built and deployed multiple web applications",
    "Participated in Odoo and Naan Mudhalavan Hackathons",
  ],
} as const;
