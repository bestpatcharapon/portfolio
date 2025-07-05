"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Globe,
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Smartphone,
  Globe2,
  ArrowRight,
  Download,
  Linkedin,
  Twitter,
  Star,
  Users,
  Award,
  Zap,
  Heart,
  CheckCircle,
  TrendingUp,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

const translations = {
  th: {
    nav: {
      home: "หน้าหลัก",
      about: "เกี่ยวกับ",
      projects: "โปรเจค",
      contact: "ติดต่อ",
    },
    hero: {
      greeting: "สวัสดี, ฉัน",
      name: "พัชรพล โยริยะ",
      title: "วิศวกรซอฟต์แวร์",
      description: "นักพัฒนาซอฟต์แวร์ที่หลงใหลในการสร้างสรรค์เทคโนโลยีที่ทำให้ชีวิตง่ายขึ้น สร้างประสบการณ์ดิจิทัลที่น่าประทับใจ",
      cta: "ดูผลงาน",
      downloadCV: "ดาวน์โหลด CV",
      hireMeBtn: "จ้างฉัน",
    },
    stats: {
      projects: "โปรเจค",
      experience: "ปีประสบการณ์",
      clients: "ลูกค้า",
      awards: "รางวัล",
    },
    services: {
      title: "บริการของฉัน",
      subtitle: "สิ่งที่ฉันสามารถช่วยคุณได้",
      webDev: {
        title: "พัฒนาเว็บไซต์",
        desc: "สร้างเว็บไซต์ที่ทันสมัยและใช้งานง่าย",
      },
      mobileDev: {
        title: "พัฒนาแอปมือถือ",
        desc: "แอปพลิเคชันมือถือที่ใช้งานได้ทั้ง iOS และ Android",
      },
      uiux: {
        title: "UI/UX Design",
        desc: "ออกแบบ interface ที่สวยงามและใช้งานง่าย",
      },
      consulting: {
        title: "ปรึกษาเทคนิค",
        desc: "ให้คำปรึกษาด้านเทคโนโลยีและสถาปัตยกรรมระบบ",
      },
    },
    featured: {
      title: "โปรเจคเด่น",
      subtitle: "ผลงานล่าสุดที่น่าภูมิใจ",
      viewAll: "ดูทั้งหมด",
    },
    testimonials: {
      title: "ความคิดเห็นจากลูกค้า",
      subtitle: "สิ่งที่ลูกค้าพูดถึงฉัน",
    },
    quickAbout: {
      title: "เกี่ยวกับฉัน",
      subtitle: "ความหลงใหลในการเขียนโค้ด",
      description: "ฉันเป็นนักพัฒนาซอฟต์แวร์ที่มีประสบการณ์ 3+ ปี ชอบเรียนรู้เทคโนโลยีใหม่ๆ และสร้างสรรค์โซลูชันที่แก้ปัญหาได้จริง",
      learnMore: "เรียนรู้เพิ่มเติม",
    },
    about: {
      title: "เกี่ยวกับฉัน",
      description:
        "ฉันเป็นวิศวกรซอฟต์แวร์ที่มีประสบการณ์ในการพัฒนาเว็บแอปพลิเคชันและระบบซอฟต์แวร์ ฉันชอบเรียนรู้เทคโนโลยีใหม่ๆ และแก้ปัญหาที่ซับซ้อน มุ่งมั่นที่จะสร้างโซลูชันที่มีคุณภาพและใช้งานง่าย",
      skills: "ทักษะ",
      experience: "ประสบการณ์",
      years: "3+ ปี",
    },
    projects: {
      title: "โปรเจคของฉัน",
      subtitle: "ผลงานที่ฉันภูมิใจและโปรเจคที่น่าสนใจ",
      viewProject: "ดูโปรเจค",
      viewCode: "ดูโค้ด",
    },
    contact: {
      title: "ติดต่อฉัน",
      subtitle: "พร้อมสำหรับโอกาสใหม่ๆ",
      description: "หากคุณสนใจที่จะทำงานร่วมกันหรือมีคำถาม อย่าลังเลที่จะติดต่อมา",
      email: "อีเมล",
      phone: "โทรศัพท์",
      location: "ที่อยู่",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Patcharapon Yoriya",
      title: "Software Engineer",
      description:
        "A passionate software developer who loves creating technology that makes life easier and building amazing digital experiences",
      cta: "View My Work",
      downloadCV: "Download CV",
      hireMeBtn: "Hire Me",
    },
    stats: {
      projects: "Projects",
      experience: "Years Experience",
      clients: "Happy Clients",
      awards: "Awards",
    },
    services: {
      title: "My Services",
      subtitle: "What I can help you with",
      webDev: {
        title: "Web Development",
        desc: "Building modern and user-friendly websites",
      },
      mobileDev: {
        title: "Mobile Development",
        desc: "Cross-platform mobile apps for iOS and Android",
      },
      uiux: {
        title: "UI/UX Design",
        desc: "Beautiful and intuitive interface design",
      },
      consulting: {
        title: "Tech Consulting",
        desc: "Technology consulting and system architecture advice",
      },
    },
    featured: {
      title: "Featured Projects",
      subtitle: "Latest work I'm proud of",
      viewAll: "View All",
    },
    testimonials: {
      title: "Client Testimonials",
      subtitle: "What clients say about me",
    },
    quickAbout: {
      title: "About Me",
      subtitle: "Passionate about coding",
      description:
        "I'm a software developer with 3+ years of experience who loves learning new technologies and creating solutions that solve real problems",
      learnMore: "Learn More",
    },
    about: {
      title: "About Me",
      description:
        "I'm a software engineer with experience in developing web applications and software systems. I enjoy learning new technologies and solving complex problems, committed to creating quality and user-friendly solutions.",
      skills: "Skills",
      experience: "Experience",
      years: "3+ Years",
    },
    projects: {
      title: "My Projects",
      subtitle: "Featured work and interesting projects I'm proud of",
      viewProject: "View Project",
      viewCode: "View Code",
    },
    contact: {
      title: "Contact Me",
      subtitle: "Ready for new opportunities",
      description: "If you're interested in working together or have any questions, don't hesitate to reach out.",
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
  },
}

const projects = [
  {
    title: "E-Commerce Platform",
    titleTh: "แพลตฟอร์มอีคอมเมิร์ซ",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring payment integration and admin dashboard",
    descriptionTh: "แพลตฟอร์มอีคอมเมิร์ซแบบครบวงจรด้วย React, Node.js และ MongoDB พร้อมระบบชำระเงินและแดชบอร์ดแอดมิน",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: <Globe2 className="w-6 h-6" />,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Task Management App",
    titleTh: "แอปจัดการงาน",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and progress tracking",
    descriptionTh: "แอปพลิเคชันจัดการงานแบบร่วมมือกันพร้อมอัปเดตแบบเรียลไทม์ การทำงานเป็นทีม และติดตามความคืบหน้า",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "Mobile Banking App",
    titleTh: "แอปธนาคารมือถือ",
    description:
      "Secure mobile banking application with biometric authentication, transaction history, and budget tracking",
    descriptionTh: "แอปพลิเคชันธนาคารมือถือที่ปลอดภัยพร้อมการยืนยันตัวตนด้วยไบโอเมตริก ประวัติการทำธุรกรรม และติดตามงบประมาณ",
    tech: ["React Native", "Firebase", "Node.js", "JWT", "Expo"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Data Analytics Dashboard",
    titleTh: "แดชบอร์ดวิเคราะห์ข้อมูล",
    description:
      "Interactive dashboard for data visualization and analytics with real-time charts and reporting features",
    descriptionTh: "แดชบอร์ดแบบโต้ตอบสำหรับการแสดงผลและวิเคราะห์ข้อมูลพร้อมกราฟแบบเรียลไทม์และฟีเจอร์รายงาน",
    tech: ["Vue.js", "D3.js", "Python", "FastAPI", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-600",
  },
]

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "MongoDB", level: 80 },
  { name: "PostgreSQL", level: 75 },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    nameTh: "ซาร่าห์ จอห์นสัน",
    role: "CEO, TechStart",
    roleTh: "ซีอีโอ, เทคสตาร์ท",
    content:
      "Patcharapon delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
    contentTh: "ปัชราพลส่งมอบงานที่ยอดเยี่ยมในแพลตฟอร์มอีคอมเมิร์ซของเรา ความใส่ใจในรายละเอียดและความเชี่ยวชาญด้านเทคนิคเกินความคาดหมาย",
    rating: 5,
  },
  {
    name: "Michael Chen",
    nameTh: "ไมเคิล เฉิน",
    role: "Product Manager, InnovateCorp",
    roleTh: "ผู้จัดการผลิตภัณฑ์, อินโนเวทคอร์ป",
    content:
      "Working with Patcharapon was a pleasure. He's professional, communicative, and delivers high-quality code on time.",
    contentTh: "การทำงานกับปัชราพลเป็นเรื่องที่น่ายินดี เขามีความเป็นมืออาชีพ สื่อสารได้ดี และส่งมอบโค้ดคุณภาพสูงตรงเวลา",
    rating: 5,
  },
]

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<"th" | "en">("th")
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const t = translations[language]

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "th" ? "en" : "th")
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              PY
            </div>

            <div className="hidden md:flex space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`transition-all duration-300 hover:text-primary relative ${
                    activeSection === key ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {value}
                  {activeSection === key && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="hover:scale-105 transition-transform"
              >
                <Globe className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:scale-105 transition-transform"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === "home" && (
        <div className="space-y-20">
          {/* Main Hero */}
          <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Floating Elements */}
            <div className="absolute top-40 right-20 animate-bounce delay-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg rotate-12 opacity-20" />
            </div>
            <div className="absolute bottom-40 left-20 animate-bounce delay-700">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full opacity-20" />
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
              <div className="animate-fade-in-up">
                <p className="text-lg text-muted-foreground mb-4 animate-fade-in-up delay-100">{t.hero.greeting}</p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-fade-in-up delay-200">
                  {t.hero.name}
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-muted-foreground animate-fade-in-up delay-300">
                  {t.hero.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
                  {t.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
                  <Button size="lg" onClick={() => setActiveSection("projects")} className="group">
                    {t.hero.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="group">
                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {t.hero.downloadCV}
                  </Button>
                  <Button size="lg" variant="secondary" className="group">
                    <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {t.hero.hireMeBtn}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground">{t.stats.projects}</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">{t.stats.experience}</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">{t.stats.clients}</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-muted-foreground">{t.stats.awards}</div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick About Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.quickAbout.title}</h2>
                    <p className="text-xl text-primary font-medium mb-6">{t.quickAbout.subtitle}</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mb-6" />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{t.quickAbout.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {["React", "Next.js", "TypeScript", "Node.js", "Python"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button onClick={() => setActiveSection("about")} className="group">
                    {t.quickAbout.learnMore}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <Code className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Clean Code</h3>
                      <p className="text-sm text-muted-foreground">Writing maintainable and scalable code</p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 mt-8">
                      <Zap className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Fast Performance</h3>
                      <p className="text-sm text-muted-foreground">Optimized for speed and efficiency</p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 -mt-4">
                      <CheckCircle className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Quality Assured</h3>
                      <p className="text-sm text-muted-foreground">Thoroughly tested and reliable</p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 mt-4">
                      <Heart className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">User Focused</h3>
                      <p className="text-sm text-muted-foreground">Designed with users in mind</p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.services.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{t.services.subtitle}</p>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Globe2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{t.services.webDev.title}</h3>
                  <p className="text-muted-foreground">{t.services.webDev.desc}</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{t.services.mobileDev.title}</h3>
                  <p className="text-muted-foreground">{t.services.mobileDev.desc}</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{t.services.uiux.title}</h3>
                  <p className="text-muted-foreground">{t.services.uiux.desc}</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{t.services.consulting.title}</h3>
                  <p className="text-muted-foreground">{t.services.consulting.desc}</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-16">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.featured.title}</h2>
                  <p className="text-lg text-muted-foreground">{t.featured.subtitle}</p>
                </div>
                <Button variant="outline" onClick={() => setActiveSection("projects")} className="group">
                  {t.featured.viewAll}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.slice(0, 2).map((project, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20 overflow-hidden"
                  >
                    <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                          {project.icon}
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {language === "th" ? project.titleTh : project.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {language === "th" ? project.descriptionTh : project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && <Badge variant="outline">+{project.tech.length - 3}</Badge>}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="default" size="sm" asChild className="flex-1 group/btn">
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            {t.projects.viewProject}
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="flex-1 group/btn">
                          <Link href={project.github} target="_blank">
                            <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            {t.projects.viewCode}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{t.testimonials.subtitle}</p>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{language === "th" ? testimonial.contentTh : testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/60 rounded-full flex items-center justify-center text-white font-semibold">
                        {(language === "th" ? testimonial.nameTh : testimonial.name).charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold">{language === "th" ? testimonial.nameTh : testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {language === "th" ? testimonial.roleTh : testimonial.role}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.about.title}</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">{t.about.description}</p>

                <div className="grid grid-cols-2 gap-6">
                  <Card className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
                    <div className="text-3xl font-bold text-primary mb-2">{t.about.years}</div>
                    <div className="text-muted-foreground">{t.about.experience}</div>
                  </Card>
                  <Card className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
                    <div className="text-3xl font-bold text-primary mb-2">20+</div>
                    <div className="text-muted-foreground">Projects</div>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">{t.about.skills}</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-primary/60 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === "projects" && (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.projects.title}</h2>
              <p className="text-lg text-muted-foreground mb-6">{t.projects.subtitle}</p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.icon}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {language === "th" ? project.titleTh : project.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {language === "th" ? project.descriptionTh : project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="default" size="sm" asChild className="flex-1 group/btn">
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          {t.projects.viewProject}
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="flex-1 group/btn">
                        <Link href={project.github} target="_blank">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          {t.projects.viewCode}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.contact.title}</h2>
              <p className="text-xl text-primary font-medium mb-4">{t.contact.subtitle}</p>
              <p className="text-lg text-muted-foreground mb-6">{t.contact.description}</p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t.contact.email}</h3>
                <p className="text-muted-foreground">patcharaponyo65@gmail.com</p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t.contact.phone}</h3>
                <p className="text-muted-foreground">+66 080 979 2185</p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t.contact.location}</h3>
                <p className="text-muted-foreground">Chaingmai, Thailand</p>
              </Card>
            </div>

            <div className="flex justify-center space-x-6">
              <Button variant="outline" size="lg" asChild className="group">
                <Link href="https://github.com/bestpatcharapon" target="_blank">
                  <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <Link href="https://www.linkedin.com/in/patcharapon-yoriya-153459357/" target="_blank">
                  <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Twitter
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <div className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
              Patcharapon Yoriya
            </div>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
          <div className="border-t pt-6">
            <p className="text-muted-foreground">
              &copy; 2024 Patcharapon Yoriya. Made with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
