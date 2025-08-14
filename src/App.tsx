import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Github, Mail, Phone, MapPin, Download, ExternalLink, GraduationCap, Briefcase, Wrench, FolderGit2, Star, Sparkles, Sun, Moon } from "lucide-react";

// --- Data ---
const INFO = {
  name: "Mir Asim Ali",
  role: "Machine Learning Engineer",
  tagline: "Script identification • Vision • Practical ML",
  location: "Hyderabad, India",
  email: "mirasimali2003@gmail.com",
  phone: "+91 9849407125",
  resumeUrl: "#", // replace with real URL when ready
  github: "https://github.com/Shaik-Qhadeer",
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
    title: "Rescue-Bubble — Disaster Relief Platform",
    desc:
      "Web app to connect citizens with agencies; real-time chat, resource borrowing, and Redux-based state management (MongoDB for messages).",
    stack: ["React", "Redux", "MongoDB", "Node"],
    links: [
      { label: "GitHub", href: "https://github.com/Shaik-Qhadeer/Rescue-Bubble" },
    ],
  },
  {
    title: "Script Separation — Word-level Script Classifier",
    desc:
      "ResNet50-based classifier for 7+ Indic scripts (Assamese, Bengali, Kannada, Punjabi, Tamil, Telugu, Urdu). Includes evaluation, confusion matrices, and API-ready test pipeline.",
    stack: ["PyTorch", "OpenCV", "Python"],
    links: [
      { label: "Repo (planned)", href: "#" },
    ],
  },
  {
    title: "Sign Language Recognizer (Prototype)",
    desc:
      "Gesture recognition beyond Yes/No/Hello; exploring OpenPose for robust hand keypoints and model inference pipeline.",
    stack: ["OpenPose", "Python", "CV"],
    links: [],
  },
  {
    title: "English–Urdu Script Detector",
    desc:
      "Word-image classifier with custom dataset curation and training script (train_english_urdu.py), achieving solid accuracy on mixed corpora.",
    stack: ["PyTorch", "ResNet50"],
    links: [],
  },
];

const EXPERIENCE = [
  {
    org: "IIIT Hyderabad (CVIT)",
    role: "AIML Intern — Machine Learning Engineer",
    period: "Jan 2025 – Present",
    bullets: [
      "Built word-level script identification pipelines; curated datasets for Assamese, Bengali, Telugu, etc.",
      "Trained and evaluated ResNet50 models; produced confusion matrices and CSV logs for analysis.",
      "Prototyped an API wrapper and streamlined test scripts for multi-language models.",
    ],
  },
  {
    org: "Google Research (Student Researcher — application)",
    role: "Academic Projects / Applications",
    period: "2024 – 2025",
    bullets: [
      "Prepared targeted proposals in computer vision and multilingual OCR.",
    ],
  },
];

const EDUCATION = [
  {
    school: "ISL College of Engineering & Technology",
    degree: "B.E. — Computer Science",
    period: "2021 – 2025",
    bullets: [
      "Final-year project work in ML + Vision.",
    ],
  },
];

const CERTS = [
  { name: "Information Retrieval Systems (Exam Prep)", year: 2025 },
  { name: "Information Security (Exam Prep)", year: 2025 },
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
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
          <span className="font-semibold">{INFO.name}</span>
          <Badge className="ml-2" variant="secondary">{INFO.role}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild>
            <a href={INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" /> GitHub
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
      <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">{INFO.name}</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            {INFO.tagline}. I build practical ML systems — from data curation to deployment — with a focus on Indic scripts and computer vision.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href={`mailto:${INFO.email}`} className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/>Email</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={`tel:${INFO.phone}`} className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/>Call</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={INFO.resumeUrl} className="inline-flex items-center gap-2"><Download className="h-4 w-4"/>Resume</a>
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
            <MapPin className="h-4 w-4" /> {INFO.location}
          </div>
        </div>
        <div>
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5"/> Highlights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Item icon={<Star className="h-4 w-4"/>} text="Trained multi-script ResNet50 models for word-level classification across 7+ Indic languages."/>
              <Item icon={<Star className="h-4 w-4"/>} text="Built a disaster-relief web app with real-time messaging and resource search (Rescue-Bubble)."/>
              <Item icon={<Star className="h-4 w-4"/>} text="Hands-on with dataset design, augmentation, and evaluation (confusion matrices, CSV logs)."/>
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
      <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2"><Briefcase className="h-6 w-6"/> Experience</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {EXPERIENCE.map((exp, i) => (
          <Card key={i} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex flex-col">
                <span className="text-lg">{exp.role}</span>
                <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">{exp.org} • {exp.period}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2"><FolderGit2 className="h-6 w-6"/> Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <Card key={i} className="rounded-2xl">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-neutral-700 dark:text-neutral-300">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t, k) => (
                  <Badge key={k} variant="secondary">{t}</Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {p.links.map((l, k) => (
                  <Button key={k} variant="outline" asChild>
                    <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4"/> {l.label}
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
      <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2"><Wrench className="h-6 w-6"/> Skills</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {SKILLS.map((s, i) => (
          <Card key={i} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{s.name}</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">{s.level}%</span>
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
      <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2"><GraduationCap className="h-6 w-6"/> Education</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {EDUCATION.map((e, i) => (
          <Card key={i} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex flex-col">
                <span className="text-lg">{e.school}</span>
                <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">{e.degree} • {e.period}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </CardContent>
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
          <div className="text-neutral-600 dark:text-neutral-300">{INFO.role}</div>
          <div className="mt-2 inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
            <MapPin className="h-4 w-4"/> {INFO.location}
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-medium">Contact</div>
          <a href={`mailto:${INFO.email}`} className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:underline"><Mail className="h-4 w-4"/>{INFO.email}</a>
          <a href={`tel:${INFO.phone}`} className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:underline"><Phone className="h-4 w-4"/>{INFO.phone}</a>
        </div>
        <div className="space-y-2">
          <div className="font-medium">Links</div>
          <a href={INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:underline"><Github className="h-4 w-4"/>GitHub</a>
          <a href={INFO.resumeUrl} className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:underline"><Download className="h-4 w-4"/>Resume</a>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 pb-8">© {new Date().getFullYear()} {INFO.name}. All rights reserved.</div>
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
      </main>
      <Footer />
    </div>
  );
}
