import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Wrench,
  FolderGit2,
  Star,
  Sparkles,
  Sun,
  Moon,
  Linkedin,
} from "lucide-react";

// --- Data ---
const INFO = {
  name: "Asim ",
  role: "AI & Machine Learning | Data Science | Software Engineering | Open to Relevant Roles",
  tagline:
    "AI • Machine Learning • Data Science • Computer Vision • Web & ML Systems",
  location: "Hyderabad, India",
  email: "mirasimali2003@gmail.com",
  phone: "+91 9849407125",
  resumeUrl: "/Asim_resume.pdf", // replace with real URL when ready
  github: "https://github.com/MirAsimAli",
  Linkedin:
    "https://www.linkedin.com/in/mir-asim-ali-b5977b228?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzRFQNR8pTSe2yRc5bzS6nA%3D%3D",
};

const SKILLS = [
  { name: "Python", level: 90 },
  { name: "PyTorch", level: 85 },
  { name: "Computer Vision", level: 85 },
  { name: "Deep Learning", level: 80 },
  { name: "Data Engineering", level: 70 },
  { name: "Redux / React", level: 70 },
  { name: "MongoDB", level: 60 },
];

const PROJECTS = [
  {
    title: "FMML-project-and-labs",
    desc: "This repository contains my work for the Foundations of Modern Machine Learning (FMML) course, including hands-on lab exercises, mini-projects, and implementations of key ML concepts.",
    stack: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Flask",
      "OpenCV",
      "NLTK",
      "Jupyter Notebook",
      "Google Colab",
      "Git",
      "GitHub",
      "VS Code",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MirAsimAli/FMML-project-and-labs.git",
      },
    ],
  },
  {
    title: "Rescue-Bubble — Disaster Relief Platform (Major-Project)",
    desc: "Developed ResQ-Bubble, a real-time disaster management web application integrating geolocation mapping, resource coordination, and live communication features, leveraging React, Redux, Node.js, and MongoDB.",
    stack: [
      "React",
      "Redux",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "JSON",
      "Socket.io",
      "GitHub",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MirAsimAli/Major_Project.git",
      },
    ],
  },
  {
    title: "Indic Script Separation Models (Printed Document)",
    desc: "Developed 13 bilingual and 12 multilingual machine learning models for word-level script separation in Indic printed documents as part of an OCR pipeline for Indic languages. Models were trained using ResNet architectures, evaluated through the ML pipeline stages (data curation, preprocessing, training, validation, testing, and deployment), and integrated into the IIIT Hyderabad iLock site for real-world usage.",
    stack: [
      "Python",
      "PyTorch",
      "OpenCV",
      "NumPy",
      "Pandas",
      "ResNet50",
      "scikit-learn",
      "Matplotlib",
      "CSV",
      "API Integration",
      "Git",
      "GitHub",
      "VS Code",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MirAsimAli/Script_Separation-Printed-Document.git",
      },
    ],
  },
  {
    title: "Indic Script Separation Models (HandWritten Document)",
    desc: "Developed 13 bilingual and 12 multilingual machine learning models for word-level script separation in Indic handwritten documents as part of an OCR pipeline for Indic languages. Models were trained using ResNet architectures, evaluated through the ML pipeline stages (data curation, preprocessing, training, validation, testing, and deployment), and integrated into the IIIT Hyderabad iLock site for real-world usage.",
    stack: [
      "Python",
      "PyTorch",
      "OpenCV",
      "NumPy",
      "Pandas",
      "ResNet18",
      "scikit-learn",
      "Matplotlib",
      "CSV",
      "API Integration",
      "Git",
      "GitHub",
      "VS Code",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MirAsimAli/Script-Seperation_Handwritten_documents.git",
      },
    ],
  },

  {
    title: "Emotion-Aware-Keyword-Extraction-Model",
    desc: "A multi-task NLP system that detects emotions from text and extracts key terms contributing to those emotions, enabling explainable sentiment analysis for applications in mental health monitoring, social media analysis, and conversational AI.",
    stack: [
      "Python",
      "PyTorch",
      "Transformers (Hugging Face)",
      "Pandas",
      "scikit-learn",
      "Hugging Face Datasets",
      "reddit",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MirAsimAli/Emotion-Aware-Keyword-Extraction-Model.git",
      },
    ],
  },
  {
    title: "Promptly",
    desc: "A lightweight chatbot built with the Groq API ⚡, allowing seamless interaction with LLMs on a custom website.Promptly demonstrates how to integrate powerful language models into your own projects with minimal setup.",
    stack: [
      "Python",
      "JavaScript",
      "React.js",
      "Node.js",
      "Groq API",
      "HTML",
      "CSS",
      "Git/GitHub",
    ],

    links: [
      {
        label: "GitHub",
        href: "https://github.com/MirAsimAli/Promptly.git",
      },
    ],
  },
];

const EXPERIENCE = [
  {
    org: "CVIT Lab IIIT Hyderabad",
    role: "Machine Learning Engineer",
    period: "Nov 2024 – Present",
    bullets: [
      "Trained 13 bilingual and 12 multilingual script separation models for Indic printed documents using ResNet50.",
      "Developed equivalent bilingual and multilingual script separation models for handwritten documents using ResNet18.",
      "Evaluated all models with confusion matrices and detailed CSV logs for performance analysis.",
      "Integrated trained models into the IIIT iLock site via an API for seamless deployment.",
    ],
  },
  {
    org: "iHub-Data IIIT Hyderabad",
    role: "AI/ML Project intern",
    period: "jan 2024 – july 2024",
    bullets: [
      "Built and trained a custom YOLOv8 object detection model for owl identification and tracking in images and videos.",
      "Integrated and deployed the ChatGPT API locally, enabling offline conversational AI experimentation.",
      "Fine-tuned and evaluated pre-trained language models using Hugging Face Transformers.",
      "Completed weekly hands-on assignments covering deep learning, probabilistic ML, and neural network training; gained practical experience with Colab, PyTorch, TensorFlow, and modern ML workflows.",
    ],
  },
  {
    role: "Self-Learning & Independent Projects",
    bullets: [
      "Explored and implemented LLM fine-tuning projects.",
      "Worked on web application development projects.",
      "Developed Retrieval-Augmented Generation (RAG) pipelines.",
      "Gained hands-on experience with modern AI and deployment workflows.",
    ],
  },
  {
    role: "Hackathon Participations",
    bullets: [
      "Participated in 10+ hackathons with my team.",
      "Built innovative prototypes under tight time constraints.",
      "Developed Retrieval-Augmented Generation (RAG) pipelines.",
      "Explored diverse domains, ranging from AI to web development.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Osmania University (Affiliation)",
    degree: "B.E. — Computer Science",
    period: "2021 – 2025",
    bullets: [
      "Completed coursework in algorithms, data structures, databases, and machine learning fundamentals.",
      "Worked on academic projects involving software development and data analysis.",
    ],
  },
  {
    school:
      "International Institute of Information Technology Hyderabad (IIITH)",
    degree:
      "3-Month Training Program — Artificial Intelligence & Machine Learning",
    period: "2024",
    bullets: [
      "Completed an intensive program covering Machine Learning foundations, neural networks, and practical AI workflows.",
      "Received mentorship from Prof. CK Raju, with support from iHub-Data and dedicated program coordinators.",
    ],
  },

  {
    school: "Sri Chaitanya College of Education",
    degree: "B.E. — Computer Science",
    period: "2019 – 2021",
    bullets: ["Grade-A"],
  },
];
const CERTS = [
  {
    logo: "/logos/microsoft2.png", // small Microsoft logo in public folder
    title: "Microsoft Transact SQL Badge",
    issuer: "Microsoft",
    date: "Issued Aug 2025",
    skills: "Databases · Data Retrieval",
    description:
      "Completed Microsoft's Introduction to Transact-SQL course covering core SQL concepts like SELECT, JOIN, data types, and schemas. Gained hands-on experience with query building and relational database fundamentals.",
    link: "https://drive.google.com/file/d/1MG3h9v_XvninMAXA7B9Xus62jlTivqN9/view?usp=sharing",
  },
  {
    logo: "/logos/nvidia.png",
    title: "NVIDIA AI: Basics to GenAI Practice Certification",
    issuer: "NVIDIA",
    date: "Issued Aug 2025",
    skills: "Machine Learning · Generative AI · AI",
    description:
      "Completed NVIDIA's ‘AI for All: From Basics to GenAI Practice’ course covering fundamentals of AI, deep learning, and Generative AI. Scored 100% on all assessments. Gained hands-on understanding of LLMs, ethical AI practices, and real-world applications across industries.",
    link: "https://drive.google.com/file/d/1aap4k4wu2RhMWarb5De1Oi1jKCnR1JGe/view?usp=sharing",
  },
  {
    logo: "/logos/google.png",
    title: "Google AI-ML virtual internship",
    issuer: "Google",
    date: "Issued Mar 2025",
    skills:
      "Machine Learning · AI · Python · TensorFlow · Data Analysis · Model Deployment · Neural Networks",
    description:
      "Gained hands-on experience in designing, training, and evaluating machine learning models using Python and TensorFlow. Learned key AI concepts including neural networks, model deployment, and data-driven problem solving through practical assignments and projects. ",
    link: "https://drive.google.com/file/d/1hbxbzkow26JhwqUAq7W-mrHdC_hr693w/view?usp=sharing",
  },

  {
    logo: "/logos/eduskills.png",
    title: "Python Full Stack Developer Virtual Internship Completion",
    issuer: "EduSkills Foundation®",
    date: "Issued Dec 2024",
    skills:
      "Python · Flask  · HTML/CSS · JavaScript · REST APIs · Database Management · Frontend & Backend Development",
    description:
      " experience in building end-to-end web applications using Python, Flask. Learned frontend development with HTML, CSS, and JavaScript, and backend integration including REST APIs and database management. Developed practical projects showcasing full stack development skills.",
    link: "https://drive.google.com/file/d/1lqX40xul8n8v93IXL2MGouuKL_ziDkWK/view?usp=sharing",
    size: "h-22 w-20",
  },
  {
    logo: "/logos/ihub.jpg",
    title: "Certificate Of Proficiency IIIT Hyderabad AIML training program",
    issuer: "iHub-Data, IIIT Hyderabad",
    date: "Issued Feb 2024",
    skills:
      "Artificial Intelligence · Machine Learning · Python · PyTorch · Data Analysis · Computer Vision . Algorithms . Loss functions",
    description:
      "3 month intensive training program on Artificial Intelligence and Machine Learning at IIIT Hyderabad. Gained hands-on experience in Python, PyTorch, deep learning, computer vision, and data analysis through practical projects and assignments. Developed end-to-end ML pipelines and foundational AI problem-solving skills.",
    link: "https://drive.google.com/file/d/1KxQGRdwtQD5l_muajFqgyHQFscG9z6U6/view?usp=sharing",
  },

  {
    logo: "/logos/aws.jpg",
    title: "AWS Academy Data Analytics",
    issuer: "AWS Academy",
    date: "Issued Jan 2023",
    skills: "Data Analytics · AWS Cloud · Data Visualization · ETL · Reporting",
    description:
      "Completed AWS Academy Data Analytics course, gaining hands-on experience with data collection, processing, visualization, and analysis using AWS tools. Learned to design end-to-end analytics solutions and interpret data-driven insights effectively.",
    link: "https://drive.google.com/file/d/1FM-JWb_sj-3lqyhGFjjH3DEITFjUCzLV/view?usp=sharing",
  },

  {
    logo: "/logos/nptel.png",
    title: "Edge Computing course completion",
    issuer: "NPTEL",
    date: "Issued Mar 2025",
    skills: "",
    description:
      "Completed NPTEL's Edge Computing course covering edge architecture, IoT integration, and distributed computing. Achieved an Elite Silver badge for scoring above 60% in assignments and the proctored exam, demonstrating proficiency in real-time computing solutions at the network edge.",
    link: "https://drive.google.com/file/d/1sY3eaft3B6j50C_Vp6h_4eAquhCQDNza/view?usp=sharing",
  },
  {
    logo: "/logos/zscaler.png",
    title: "Zero Trust Certified Associate (ZTCA)",
    issuer: "Zscaler",
    date: "Issued Mar 2024 · Expires Mar 2027",
    skills: "",
    description:
      "Earned the Zscaler Zero Trust Certified Associate (ZTCA) credential, demonstrating proficiency in implementing Zero Trust principles using Zscaler's platform. The certification encompasses identity verification, adaptive access control, and policy enforcement within the Zero Trust framework. Achieved a passing score of 80% on the 75-question online exam",
    link: "https://verify.skilljar.com/c/zym29ffccjbv",
  },
  {
    logo: "/logos/google.png",
    title: "The Fundamentals of Digital Marketing",
    issuer: "Google",
    date: "Issued Jan 2023",
    skills: "Marketing · Analytical Skills",
    description:
      "Completed Google's Fundamentals of Digital Marketing course, covering essential topics like SEO, SEM, social media marketing, and email marketing. Gained practical skills through 26 modules, including real-world examples and interactive assessments.",
    link: "https://drive.google.com/file/d/1kdpP4FTTcG9o2-2URTx3w1kfc3DXCJg6/view?usp=sharing",
  },
];

// --- Utils ---
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

function Header() {
  const [dark, setDark] = React.useState(true);
  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-9 w-9">
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <span className="font-semibold">{INFO.name}</span>
          <Badge className="ml-2" variant="secondary">
            {INFO.role}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild>
            <a
              href={INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
          {/* LinkedIn Button */}
          <Button asChild>
            <a
              href={INFO.Linkedin} // make sure INFO has linkedin: "https://linkedin.com/in/..."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <motion.div
        {...fadeUp}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
              {INFO.name}
            </span>
          </h1>
          <div>
            <p className="font-bold text-lg text-neutral-900 dark:text-white">
              {INFO.tagline}
            </p>
            <p className="mt-2 text-base text-neutral-600 dark:text-neutral-300">
              AI & Data Science enthusiast with experience in machine learning,
              computer vision, and end-to-end data pipelines. I build practical
              AI systems—from data curation to deployment—across ML, DL, and
              data-driven applications.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a
                href={`mailto:${INFO.email}`}
                className="inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a
                href={`tel:${INFO.phone}`}
                className="inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={INFO.resumeUrl}
                download
                className="inline-flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
            <MapPin className="h-4 w-4" /> {INFO.location}
          </div>
        </div>
        <div>
          <Card className="rounded-2xl shadow-md border-[#DB4437]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" /> Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Item
                icon={<Star className="h-4 w-4" />}
                text="Machine Learning Projects: Multi-script ResNet50 models, word-level classification, and hands-on experience with end-to-end ML pipelines (data curation → training → evaluation → deployment)."
              />
              <Item
                icon={<Star className="h-4 w-4" />}
                text="Web App Development: Disaster-relief platform with real-time chat and resource borrowing"
              />
              <Item
                icon={<Star className="h-4 w-4" />}
                text="Data & Deployment: Dataset curation, evaluation (confusion matrices, CSV logs), and deployment-ready pipelines."
              />
              <Item
                icon={<Star className="h-4 w-4" />}
                text="LLM & RAG Pipelines: Experience in training LLMs and building Retrieval-Augmented Generation pipelines."
              />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}

function Item({ icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <p className="text-neutral-700 dark:text-neutral-300">{text}</p>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
        <Briefcase className="h-6 w-6" /> Experience
      </h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {EXPERIENCE.map((exp, i) => (
          <Card key={i} className="rounded-2xl border-[#DB4437]">
            <CardHeader>
              <CardTitle className="flex flex-col">
                <span className="text-lg">{exp.role}</span>
                <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                  {exp.org} • {exp.period}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const colors = ["#4285F4", "#4285F4", "#4285F4", "#4285F4"]; // Blue, Red, Yellow, Green

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
        <FolderGit2 className="h-6 w-6" /> Projects
      </h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <Card
            key={i}
            className="rounded-2xl border-2"
            style={{ borderColor: colors[i % colors.length] }}
          >
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-neutral-700 dark:text-neutral-300">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t, k) => (
                  <Badge key={k} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {p.links.map((l, k) => (
                  <Button key={k} variant="outline" asChild>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" /> {l.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
        <Wrench className="h-6 w-6" /> Skills
      </h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {SKILLS.map((s, i) => (
          <Card key={i} className="rounded-2xl border-[#F4B400]">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{s.name}</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {s.level}%
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={s.level} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
        <GraduationCap className="h-6 w-6" /> Education
      </h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {EDUCATION.map((e, i) => (
          <Card key={i} className="rounded-2xl border-[#0F9D58]">
            <CardHeader>
              <CardTitle className="flex flex-col">
                <span className="text-lg">{e.school}</span>
                <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                  {e.degree} • {e.period}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
        <Star className="h-6 w-6" /> Licenses & Certifications
      </h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {CERTS.map((c, i) => (
          <Card key={i} className="rounded-2xl p-4 border-[#4285F4]">
            <div className="flex items-start gap-4">
              {c.logo && (
                <img
                  src={c.logo}
                  alt={`${c.issuer} logo`}
                  className={`object-contain ${c.size || "h-20 w-20"}`}
                />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                  {c.issuer} • {c.date}
                </p>
                {c.skills && (
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-1">
                    Skills: {c.skills}
                  </p>
                )}
                {c.description && (
                  <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                    {c.description}
                  </p>
                )}
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline mt-2 block"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-semibold">{INFO.name}</div>
          <div className="text-neutral-600 dark:text-neutral-300">
            {INFO.role}
          </div>
          <div className="mt-2 inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
            <MapPin className="h-4 w-4" /> {INFO.location}
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-medium">Contact</div>
          <a
            href={`mailto:${INFO.email}`}
            className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:underline"
          >
            <Mail className="h-4 w-4" />
            {INFO.email}
          </a>
          <a
            href={`tel:${INFO.phone}`}
            className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:underline"
          >
            <Phone className="h-4 w-4" />
            {INFO.phone}
          </a>
        </div>
        <div className="space-y-2">
          <div className="font-medium">Links</div>
          <a
            href={INFO.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:underline"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={INFO.Linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:underline"
          >
            <Linkedin className="h-4 w-4" />
            Linked-in
          </a>
          <a
            href={INFO.resumeUrl}
            className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:underline"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 pb-8">
        © {new Date().getFullYear()} {INFO.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
