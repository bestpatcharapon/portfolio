"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import {
  Moon,
  Sun,
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Smartphone,
  Download,
  ArrowRight,
  Linkedin,
  Users,
  Youtube,
  Instagram,
  Monitor,
  Server,
  Palette,
  Music,
} from "lucide-react"
import Link from "next/link"
import { sendEmail, initEmailJS } from "@/lib/emailjs"
import { toast, Toaster } from "sonner"

const translations = {
  th: {
    brand: {
      logo: "เบสท์",
      title: "แฟ้มสะสมผลงาน",
    },
    nav: {
      home: "หน้าหลัก",
      about: "เกี่ยวกับ",
      projects: "โปรเจค",
      contact: "ติดต่อ",
    },
    hero: {
      name: "พัชรพล โยริยะ",
      title: "วิศวกรคอมพิวเตอร์",
      description: "นักพัฒนาซอฟต์แวร์ชั้นปีที่ 4 มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา มีประสบการณ์ในการพัฒนาเว็บแอปพลิเคชันและระบบซอฟต์แวร์จริงจัง ใส่ใจในรายละเอียด รักการเรียนรู้เทคโนโลยีใหม่ ๆ และมุ่งมั่นสร้างสรรค์ผลงานที่ตอบโจทย์การใช้งานจริง พร้อมเปิดรับโอกาสและความท้าทายใหม่ ๆ ในสายงานไอที",
      cta: "ดูผลงาน",
      downloadCV: "ดาวน์โหลด CV",
      socialLinks: "ติดตามฉันได้ที่",
    },
    featured: {
      title: "โปรเจคเด่น",
      subtitle: "ผลงานล่าสุดที่น่าภูมิใจ",
      viewAll: "ดูทั้งหมด",
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
    experience: {
      title: "ประสบการณ์และการศึกษา",
      subtitle: "เส้นทางการเรียนรู้และพัฒนาของฉัน",
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
      form: {
        name: "ชื่อ",
        nameLabel: "ชื่อของคุณ",
        emailLabel: "อีเมลของคุณ",
        subject: "หัวข้อ",
        subjectLabel: "หัวข้อข้อความ",
        message: "ข้อความ",
        messageLabel: "ข้อความของคุณ",
        send: "ส่งข้อความ",
      },
    },
  },
  en: {
    brand: {
      logo: "Best",
      title: "Portfolio",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      name: "Patcharapon Yoriya",
      title: "Computer Engineer",
      description:
        "A 4th-year software developer at Rajamangala University of Technology Lanna with hands-on experience in web application and software system development. Detail-oriented, passionate about learning new technologies, and dedicated to creating practical solutions. Always open to new opportunities and challenges in the IT field.",
      cta: "View My Work",
      downloadCV: "Download CV",
      socialLinks: "Follow me on",
    },
    featured: {
      title: "Featured Projects",
      subtitle: "Latest work I'm proud of",
      viewAll: "View All",
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
        "I'm a developer with experience in developing web applications and software systems. I enjoy learning new technologies and solving complex problems, committed to creating quality and user-friendly solutions.",
      skills: "Skills",
      experience: "Experience",
      years: "3+ Years",
    },
    experience: {
      title: "Experience & Education",
      subtitle: "My learning and development journey",
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
      form: {
        name: "Name",
        nameLabel: "Your Name",
        emailLabel: "Your Email",
        subject: "Subject",
        subjectLabel: "Message Subject",
        message: "Message",
        messageLabel: "Your Message",
        send: "Send Message",
      },
    },
  },
}

const projects = [
  {
    title: "Human Detection System with Edge Computing",
    titleTh: "ระบบตรวจจับมนุษย์ด้วย Edge Computing",
    description:
      "A comprehensive human detection system using ESP32 and edge computing technology with real-time monitoring dashboard, analytics, and email notifications. Features include detection trends, performance metrics, and system status monitoring.",
    descriptionTh: "ระบบตรวจจับมนุษย์แบบครบวงจรโดยใช้ ESP32 และเทคโนโลยี Edge Computing พร้อมแดชบอร์ดติดตามแบบเรียลไทม์ การวิเคราะห์ข้อมูล และการแจ้งเตือนทางอีเมล รวมถึงแนวโน้มการตรวจจับ ตัวชี้วัดประสิทธิภาพ และการติดตามสถานะระบบ",
    tech: ["ESP32", "Python", "React", "Node.js", "MongoDB", "Chart.js", "Email API"],
    github: "https://github.com/bestpatcharapon/Project",
    demo: "https://web-xdtm.onrender.com/",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-green-500 to-blue-600",
    image: "/human-detection-dashboard.png",
  },
  {
    title: "Shabu Restaurant Management System",
    titleTh: "ระบบจัดการร้านชาบู",
    description:
      "A comprehensive restaurant management system built with PHP and SQLite. Features include food menu management, admin dashboard, order processing, and inventory tracking for a shabu restaurant.",
    descriptionTh: "ระบบจัดการร้านอาหารชาบูแบบครบวงจรที่พัฒนาด้วย PHP และ SQLite ประกอบด้วยการจัดการเมนูอาหาร แดชบอร์ดสำหรับผู้ดูแลระบบ การประมวลผลคำสั่งซื้อ และการติดตามสินค้าคงคลัง",
    tech: ["PHP", "SQLite", "HTML", "CSS", "JavaScript", "Batch Scripts"],
    github: "https://github.com/bestpatcharapon/Shabu",
    demo: "https://github.com/bestpatcharapon/Shabu",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-600",
    image: "/shabu.png",
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
    title: "Mobile App",
    titleTh: "แอปมือถือ",
    description:
      "A cross-platform mobile application with offline capabilities, push notifications, and native performance",
    descriptionTh: "แอปพลิเคชันมือถือข้ามแพลตฟอร์มพร้อมความสามารถออฟไลน์ การแจ้งเตือนแบบพุช และประสิทธิภาพแบบเนทีฟ",
    tech: ["React Native", "Expo", "Firebase", "Redux Toolkit", "AsyncStorage"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Data Analytics Dashboard",
    titleTh: "แดชบอร์ดวิเคราะห์ข้อมูล",
    description:
      "A comprehensive data visualization platform with real-time charts, interactive filters, and export capabilities",
    descriptionTh: "แพลตฟอร์มการแสดงผลข้อมูลแบบครบวงจรพร้อมกราฟแบบเรียลไทม์ ตัวกรองแบบโต้ตอบ และความสามารถในการส่งออก",
    tech: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-600",
  },
]

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of web applications and mentoring junior developers",
  },
  {
    title: "Full Stack Developer",
    company: "Startup",
    period: "2020 - 2022",
    description: "Built and maintained multiple web applications using modern technologies",
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2019 - 2020",
    description: "Developed responsive websites and collaborated with design teams",
  },
]

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<"th" | "en">("th")
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  
  // Contact form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
    
    // Initialize EmailJS
    initEmailJS()
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

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error(language === "th" ? "กรุณากรอกข้อมูลให้ครบถ้วน" : "Please fill in all fields")
      return
    }

    setIsSubmitting(true)
    
    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        toast.success(language === "th" ? "ส่งข้อความสำเร็จ!" : "Message sent successfully!")
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        toast.error(language === "th" ? "เกิดข้อผิดพลาดในการส่งข้อความ" : "Failed to send message")
      }
    } catch (error) {
      toast.error(language === "th" ? "เกิดข้อผิดพลาดในการส่งข้อความ" : "Failed to send message")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50 transition-all duration-300">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => setActiveSection("home")}
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-200 cursor-pointer group"
            >
              <div className="px-2 py-1 bg-primary rounded-lg transition-all duration-200">
                <span className="font-bold text-sm text-primary-foreground">
                  {t.brand.logo}
                </span>
              </div>
              <div className="font-display font-bold text-2xl text-foreground tracking-tight transition-all duration-200">
                {t.brand.title}
              </div>
            </button>

            <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
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

            <div className="flex items-center space-x-4">
              <Button
                onClick={toggleLanguage}
                className="hidden sm:flex border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary hover:shadow-lg transition-all duration-200 font-medium h-9 rounded-md px-3"
              >
                {language === "th" ? "EN" : "TH"}
              </Button>
              <Button
                onClick={toggleTheme}
                className="border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary hover:shadow-lg transition-all duration-200 font-medium h-9 rounded-md px-3"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              {/* GitHub Button */}
              <Button
                asChild
                className="border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary hover:shadow-lg transition-all duration-200 font-medium h-9 rounded-md px-3"
              >
                <Link href="https://github.com/bestpatcharapon" target="_blank">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>

              {/* Invite Button */}
              <Button
                onClick={() => setActiveSection("contact")}
                className="border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary hover:shadow-lg transition-all duration-200 font-medium flex items-center gap-2 h-9 rounded-md px-3"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {language === "th" ? "ชักชวน" : "Invite"}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {activeSection === "home" && (
        <div className="space-y-0">
          {/* Main Hero */}
          <section className="pt-20 pb-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
                {/* Left Column - Content */}
                <div className="space-y-8 animate-fade-in-up">
                  {/* Mobile Profile Picture */}
                  <div className="lg:hidden mb-8">
                    <div className="w-28 h-28 mx-auto mb-6 relative">
                      <div className="w-full h-full bg-gradient-to-br from-muted/30 to-muted/20 rounded-full flex items-center justify-center border border-border/30 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="text-3xl">👨‍💻</div>
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Badge */}
                  <div className="animate-fade-in-up delay-100 mb-8">
                    <div className="relative inline-block group">
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500"></div>
                      
                      {/* Main container with glass effect */}
                      <div className="relative bg-gradient-to-br from-background/80 via-background/60 to-background/80 backdrop-blur-md border border-primary/40 rounded-2xl p-6 shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/60 transition-all duration-300">
                        
                        {/* Inner glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Text with gradient */}
                        <span className="relative text-5xl font-mono tracking-[0.1em] uppercase font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/60 bg-clip-text text-transparent group-hover:from-primary/90 group-hover:via-primary group-hover:to-primary/90 transition-all duration-300">
                          Portfolio
                        </span>
                        
                        {/* Decorative corner elements */}
                        <div className="absolute top-2 left-2 w-2 h-2 bg-primary/40 rounded-full group-hover:bg-primary/60 transition-colors duration-300"></div>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-primary/40 rounded-full group-hover:bg-primary/60 transition-colors duration-300"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 bg-primary/40 rounded-full group-hover:bg-primary/60 transition-colors duration-300"></div>
                        <div className="absolute bottom-2 right-2 w-2 h-2 bg-primary/40 rounded-full group-hover:bg-primary/60 transition-colors duration-300"></div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="space-y-6">
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-fade-in-up delay-200 tracking-tight leading-tight">
                      {t.hero.name}
                    </h1>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground animate-fade-in-up delay-300 tracking-tight">
                      {t.hero.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-400 max-w-lg">
                      {t.hero.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
                    <Button onClick={() => setActiveSection("projects")} className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-0 font-medium text-base h-11 rounded-md px-8">
                      {t.hero.cta}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button className="group border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 font-medium text-base h-11 rounded-md px-8" asChild>
                      <a href="/cv.pdf" download target="_blank">
                        <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        {t.hero.downloadCV}
                      </a>
                    </Button>
                  </div>

                  {/* Social Media Links */}
                  <div className="animate-fade-in-up delay-600">
                    <p className="text-sm text-muted-foreground mb-4">{t.hero.socialLinks}</p>
                    <div className="flex gap-3">
                      <Button asChild className="group border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary hover:shadow-lg transition-all duration-200 hover:scale-105 font-medium h-9 rounded-md px-3">
                        <Link href="https://www.linkedin.com/in/patcharapon-yoriya-153459357/" target="_blank">
                          <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          LinkedIn
                        </Link>
                      </Button>
                      <Button asChild className="group border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary hover:shadow-lg transition-all duration-200 hover:scale-105 font-medium h-9 rounded-md px-3">
                        <Link href="https://github.com/bestpatcharapon" target="_blank">
                          <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          GitHub
                        </Link>
                      </Button>
                      <Button asChild className="group border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary hover:shadow-lg transition-all duration-200 hover:scale-105 font-medium h-9 rounded-md px-3">
                        <Link href="https://www.youtube.com/@bestpj6139" target="_blank">
                          <Youtube className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          YouTube
                        </Link>
                      </Button>
                      <Button asChild className="group border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary hover:shadow-lg transition-all duration-200 hover:scale-105 font-medium h-9 rounded-md px-3">
                        <Link href="https://www.instagram.com/_imbstt.p/" target="_blank">
                          <Instagram className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Instagram
                        </Link>
                      </Button>
                      <Button asChild className="group border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary hover:shadow-lg transition-all duration-200 hover:scale-105 font-medium h-9 rounded-md px-3">
                        <Link href="https://www.tiktok.com/@snorlax1or8" target="_blank">
                          <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                          </svg>
                          TikTok
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative animate-fade-in-up delay-300 group">
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm group-hover:bg-primary/30 transition-all duration-500"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/10 rounded-full blur-md group-hover:bg-primary/20 transition-all duration-700"></div>
                  <div className="absolute top-1/2 -right-8 w-6 h-6 bg-primary/15 rounded-full blur-sm group-hover:scale-110 transition-all duration-600"></div>
                  
                  <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02] group-hover:-rotate-1">
                    <Image
                      src="/Profile.jpg"
                      alt="Patcharapon Yoriya"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-2xl group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/20 rounded-2xl group-hover:from-primary/20 group-hover:to-background/30 transition-all duration-500"></div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
                  </div>
                  
                  {/* Decorative Lines */}
                  <div className="absolute -top-2 left-4 w-16 h-px bg-gradient-to-r from-primary/40 to-transparent group-hover:w-20 transition-all duration-500"></div>
                  <div className="absolute -bottom-2 right-4 w-16 h-px bg-gradient-to-l from-primary/40 to-transparent group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-border to-transparent mx-4 sm:mx-6 lg:mx-8">
          </div>

          {/* Quick About Section */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Minimal Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background-secondary/20 to-background" />
            
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="space-y-3">
                  <div>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold mb-1 tracking-tight">{t.quickAbout.title}</h2>
                    <p className="text-lg text-primary font-medium mb-2">{t.quickAbout.subtitle}</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mb-3" />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{t.quickAbout.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "JavaScript", "Node.js", "Python"].map((tech) => (
                      <Badge key={tech} className="px-2 py-1 text-xs border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button onClick={() => setActiveSection("about")} className="group text-sm">
                    {t.quickAbout.learnMore}
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-border bg-background hover:border-primary/30 shadow-lg">
                      <Monitor className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-display font-semibold mb-2 tracking-tight">Frontend</h3>
                      <p className="text-sm text-muted-foreground">Node.js, React, Next.js, JavaScript</p>
                    </Card>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-border bg-background hover:border-primary/30 shadow-lg">
                      <Server className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-display font-semibold mb-2 tracking-tight">Backend</h3>
                      <p className="text-sm text-muted-foreground">SQL , PostgreSQL , MongoDB</p>
                    </Card>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-border bg-background hover:border-primary/30 shadow-lg">
                      <Palette className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-display font-semibold mb-2 tracking-tight">Design</h3>
                      <p className="text-sm text-muted-foreground">Figma, Canva</p>
                    </Card>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-border bg-background hover:border-primary/30 shadow-lg">
                      <svg className="w-8 h-8 text-primary mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M2 12h20"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                      <h3 className="font-display font-semibold mb-2 tracking-tight">Etc.</h3>
                      <p className="text-sm text-muted-foreground">
                        Music, YouTube, Anime, Movies
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-border to-transparent mx-4 sm:mx-6 lg:mx-8">
          </div>

          {/* Featured Projects */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Minimal Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary/20" />
            
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold mb-1 tracking-tight">{t.featured.title}</h2>
                  <p className="text-base text-muted-foreground">{t.featured.subtitle}</p>
                </div>
                <Button onClick={() => setActiveSection("projects")} className="group border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary hover:shadow-lg transition-all duration-200 font-medium text-sm">
                  {t.featured.viewAll}
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {projects.slice(0, 2).map((project, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-border bg-background hover:border-primary/30 shadow-lg overflow-hidden"
                  >
                    <div className="h-1 bg-gradient-to-r from-primary to-primary/60" />
                    {/* Project Image */}
                    {project.image && (
                      <div className="relative h-64 bg-gradient-to-br from-muted/10 to-muted/5 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={language === "th" ? project.titleTh : project.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-t-lg"
                          priority
                        />
                        <div className="absolute top-3 right-3 flex gap-2">
                          {project.tech.slice(0, 2).map((tech) => (
                            <Badge key={tech} className="text-xs bg-background/80 text-foreground border-border backdrop-blur-sm text-foreground">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {project.icon}
                        </div>
                        <CardTitle className="font-display text-xl group-hover:text-primary transition-colors tracking-tight">
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
                            className="hover:bg-primary/10 hover:text-primary transition-colors text-xs border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && <Badge className="text-xs text-foreground">+{project.tech.length - 3}</Badge>}
                      </div>
                      <div className="flex gap-3">
                        <Button asChild className="flex-1 group/btn bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            {t.projects.viewProject}
                          </Link>
                        </Button>
                        <Button asChild className="flex-1 group/btn border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary h-9 rounded-md px-3">
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
        </div>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 tracking-tight">{t.about.title}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">{t.about.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 text-center border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                    <div className="text-3xl font-bold text-foreground mb-2">{t.about.years}</div>
                    <div className="text-muted-foreground text-sm">{t.about.experience}</div>
                  </Card>
                  <Card className="p-6 text-center border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                    <div className="text-3xl font-bold text-foreground mb-2">20+</div>
                    <div className="text-muted-foreground text-sm">Projects</div>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold mb-4 tracking-tight">{t.about.skills}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Frontend", "Backend", "Mobile", "Database", "DevOps", "Design"].map((skill) => (
                    <Card key={skill} className="p-4 text-center border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                      <div className="text-sm font-medium text-foreground">{skill}</div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {activeSection === "about" && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 tracking-tight">{t.experience.title}</h2>
              <p className="text-base text-muted-foreground mb-6">{t.experience.subtitle}</p>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-lg tracking-tight">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge className="text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === "projects" && (
        <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 tracking-tight">{t.projects.title}</h2>
              <p className="text-base text-muted-foreground mb-6">{t.projects.subtitle}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden"
                >
                  <div className="h-1 bg-primary/50" />
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative h-64 bg-gradient-to-br from-muted/10 to-muted/5 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={language === "th" ? project.titleTh : project.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-t-lg"
                        priority
                      />
                      <div className="absolute top-3 right-3 flex gap-2">
                        {project.tech.slice(0, 2).map((tech) => (
                          <Badge key={tech} className="text-xs bg-background/80 text-foreground border-border backdrop-blur-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {project.icon}
                      </div>
                      <CardTitle className="font-display text-xl group-hover:text-primary transition-colors tracking-tight">
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
                          className="hover:bg-primary/10 hover:text-primary transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button className="flex-1 group/btn bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          {t.projects.viewProject}
                        </Link>
                      </Button>
                      <Button className="flex-1 group/btn border-2 border-border bg-background text-foreground hover:bg-accent hover:border-primary h-9 rounded-md px-3">
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
        <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 tracking-tight">{t.contact.title}</h2>
              <p className="text-base text-muted-foreground mb-6">{t.contact.subtitle}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
            </div>



            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-2 border-border bg-background/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-medium text-base mb-2 tracking-tight">{t.contact.email}</h3>
                <p className="text-muted-foreground text-sm">patcharaponyo65@gmail.com</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-2 border-border bg-background/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-medium text-base mb-2 tracking-tight">{t.contact.phone}</h3>
                <p className="text-muted-foreground text-sm">+66 80-979-2185</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-2 border-border bg-background/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-medium text-base mb-2 tracking-tight">{t.contact.location}</h3>
                <p className="text-muted-foreground text-sm">Chaingmai, Thailand</p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 mb-10 border-2 border-border bg-background/50 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">{t.contact.form.name}</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.contact.form.nameLabel}
                      className="border-2 border-border bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">{t.contact.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.contact.form.emailLabel}
                      className="border-2 border-border bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">{t.contact.form.subject}</Label>
                  <Input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.subjectLabel}
                    className="border-2 border-border bg-background/50 backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">{t.contact.form.message}</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.messageLabel}
                    className="resize-none border-2 border-border bg-background/50 backdrop-blur-sm"
                  />
                </div>
                <Button className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md transition-all duration-200" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      {t.contact.form.send}
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      )}
      <Toaster />
    </div>
  )
}
