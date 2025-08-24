import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award, Code } from "lucide-react";

const Resume = () => {
  const achievements = [
    {
      title: "National Finalist - HackIndia",
      date: "Oct 2024",
      desc: "Built a decentralized Web3 chat app; recognized for innovation and technical excellence."
    },
    {
      title: "Finalist - Hate Speech Detection Hackathon",
      date: "Apr 2024",
      desc: "Developed AI-powered hate speech detection solution in India–Israel hackathon."
    }
  ];

  const experience = [
    {
      role: "VR Exposure Therapy Developer",
      company: "Chitkara University",
      period: "Mar 2025 – Present",
      desc: "Creating immersive VR environments in Unity/C# for anxiety therapy with adaptive NPCs and interactive exposure."
    }
  ];

  const education = [
    {
      degree: "B.E. Computer Science & Engineering",
      school: "Chitkara University",
      period: "2022 – 2026"
    },
    {
      degree: "Higher Secondary (CBSE)",
      school: "Navy Children School",
      period: "2018 – 2020"
    }
  ];

  return (
    <section id="resume" className="relative c-space section-spacing">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-heading">Resume</h2>
        <a
          href="/assets/resume.pdf"
          download
          className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-full shadow-md hover:scale-105 transition-transform"
        >
          <Download className="w-4 h-4" /> Download PDF
        </a>
      </div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
          <Briefcase className="w-5 h-5 text-purple-400" /> Experience
        </h3>
        <div className="space-y-5">
          {experience.map((exp, i) => (
            <div key={i} className="p-5 rounded-xl bg-neutral-900/60 border-l-4 border-purple-500 shadow-md">
              <p className="text-lg font-medium">{exp.role}</p>
              <p className="text-sm text-sand">{exp.company} • {exp.period}</p>
              <p className="mt-2 text-sm text-neutral-300">{exp.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-10"
      >
        <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
          <GraduationCap className="w-5 h-5 text-indigo-400" /> Education
        </h3>
        <div className="space-y-5">
          {education.map((edu, i) => (
            <div key={i} className="p-5 rounded-xl bg-neutral-900/60 border-l-4 border-indigo-500 shadow-md">
              <p className="text-lg font-medium">{edu.degree}</p>
              <p className="text-sm text-sand">{edu.school} • {edu.period}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
          <Award className="w-5 h-5 text-pink-400" /> Achievements
        </h3>
        <div className="space-y-5">
          {achievements.map((ach, i) => (
            <div key={i} className="p-5 rounded-xl bg-neutral-900/60 border-l-4 border-pink-500 shadow-md">
              <p className="text-lg font-medium">{ach.title}</p>
              <p className="text-sm text-sand">{ach.date}</p>
              <p className="mt-1 text-sm text-neutral-300">{ach.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
