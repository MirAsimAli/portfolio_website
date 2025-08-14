import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar } from "@/components/ui/avatar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-12">
        <Avatar className="w-16 h-16" />
        <h1 className="text-4xl font-bold">Asim Ali</h1>
      </header>

      {/* About Me */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Computer Science Graduate | AIML Enthusiast | Writer
            </p>
            <p className="mt-2 text-gray-700">
              Currently pursuing Computer Science under Osmania University, passionate about Artificial Intelligence and Machine Learning. Experienced in projects on language/script identification and sign language recognition.
            </p>
            <p className="mt-2 text-gray-700">
              Outside tech, I write philosophy, fiction, poetry, and professional content. Always eager to learn, innovate, and contribute to impactful projects.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Education */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li>
                <Badge>ISL Engineering College</Badge> - BE, Computer Science (Oct 2021 - Oct 2025)
              </li>
              <li>
                <Badge>Sri Chaitanya College of Education</Badge> - Jun 2019 - Jul 2021, Grade: A
              </li>
              <li>
                <Badge>Sujatha High School</Badge> - May 2019, Grade: A+
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Certifications & Licenses</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Badge>Microsoft Transact SQL Badge</Badge>
            <Badge>NVIDIA AI: Basics to GenAI Practice</Badge>
            <Badge>NPTEL Edge Computing</Badge>
            <Badge>Google AI-ML Virtual Internship</Badge>
            <Badge>Python Full Stack Developer Internship</Badge>
            <Badge>Zero Trust Certified Associate (ZTCA)</Badge>
            <Badge>IIIT Hyderabad AIML Training</Badge>
            <Badge>AWS Academy Cloud & ML Foundations</Badge>
            <Badge>Google Fundamentals of Digital Marketing</Badge>
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p>Databases & SQL</p>
              <Progress value={90} />
            </div>
            <div>
              <p>Machine Learning & AI</p>
              <Progress value={85} />
            </div>
            <div>
              <p>Python Full Stack</p>
              <Progress value={75} />
            </div>
            <div>
              <p>Writing & Communication</p>
              <Progress value={95} />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section className="text-center mt-12">
        <Button onClick={() => window.location.href = "mailto:mirasimali2003@gmail.com"}>
          Contact Me
        </Button>
      </section>
    </div>
  );
}
