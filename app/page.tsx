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
  Globe,
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
  Twitter,
  Users,
  Zap,
  Heart,
  CheckCircle,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

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
      greeting: "สวัสดี, ฉัน",
      name: "พัชรพล",
      surname: "โยริยะ",
      title: "วิศวกรซอฟต์แวร์",
      description: "นักพัฒนาซอฟต์แวร์ที่หลงใหลในการสร้างสรรค์เทคโนโลยีที่ทำให้ชีวิตง่ายขึ้น สร้างประสบการณ์ดิจิทัลที่น่าประทับใจ",
      cta: "ดูผลงาน",
      hireMeBtn: "จ้างฉัน",
      downloadCV: "ดาวน์โหลด CV",
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
      features: {
        cleanCode: {
          title: "โค้ดที่สะอาด",
          description: "เขียนโค้ดที่บำรุงรักษาและขยายได้ง่าย"
        },
        fastPerformance: {
          title: "ประสิทธิภาพสูง",
          description: "ปรับแต่งให้เร็วและมีประสิทธิภาพ"
        },
        qualityAssured: {
          title: "รับประกันคุณภาพ",
          description: "ทดสอบอย่างละเอียดและเชื่อถือได้"
        },
        userFocused: {
          title: "เน้นผู้ใช้",
          description: "ออกแบบโดยคำนึงถึงผู้ใช้เป็นหลัก"
        }
      }
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
      work: "ประสบการณ์การทำงาน",
      education: "การศึกษา",
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
        sending: "กำลังส่ง...",
        success: "ส่งข้อความสำเร็จ!",
        error: "เกิดข้อผิดพลาด กรุณาลองใหม่",
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
      greeting: "Hi, I'm",
      name: "Patcharapon",
      surname: "Yoriya",
      title: "Software Engineer",
      description:
        "A passionate software developer who loves creating technology that makes life easier and building amazing digital experiences",
      cta: "View My Work",
      hireMeBtn: "Hire Me",
      downloadCV: "Download CV",
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
      features: {
        cleanCode: {
          title: "Clean Code",
          description: "Writing maintainable and scalable code"
        },
        fastPerformance: {
          title: "Fast Performance",
          description: "Optimized for speed and efficiency"
        },
        qualityAssured: {
          title: "Quality Assured",
          description: "Thoroughly tested and reliable"
        },
        userFocused: {
          title: "User Focused",
          description: "Designed with users in mind"
        }
      }
    },
    about: {
      title: "About Me",
      description:
        "I'm a software engineer with experience in developing web applications and software systems. I enjoy learning new technologies and solving complex problems, committed to creating quality and user-friendly solutions.",
      skills: "Skills",
      experience: "Experience",
      years: "3+ Years",
    },
    experience: {
      title: "Experience & Education",
      subtitle: "My learning and development journey",
      work: "Work Experience",
      education: "Education",
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
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Something went wrong. Please try again.",
      },
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
    icon: <Globe className="w-6 h-6" />,
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

const experiences = [
  {
    type: "work",
    title: "Senior Software Developer",
    titleTh: "นักพัฒนาซอฟต์แวร์อาวุโส",
    company: "Tech Innovation Co.",
    companyTh: "บริษัท เทค อินโนเวชั่น จำกัด",
    period: "2022 - Present",
    periodTh: "2022 - ปัจจุบัน",
    location: "Bangkok, Thailand",
    locationTh: "กรุงเทพฯ, ประเทศไทย",
    description: "Led development of multiple web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    descriptionTh: "นำทีมพัฒนาเว็บแอปพลิเคชันหลายโปรเจคด้วย React, Node.js และ MongoDB ทำงานร่วมกับทีมสหสาขาเพื่อส่งมอบโซลูชันซอฟต์แวร์คุณภาพสูง",
  },
  {
    type: "work",
    title: "Frontend Developer",
    titleTh: "นักพัฒนาเว็บส่วนหน้า",
    company: "Digital Solutions Ltd.",
    companyTh: "บริษัท ดิจิทัล โซลูชั่นส์ จำกัด",
    period: "2020 - 2022",
    periodTh: "2020 - 2022",
    location: "Chiang Mai, Thailand",
    locationTh: "เชียงใหม่, ประเทศไทย",
    description: "Developed responsive web interfaces and improved user experience for e-commerce platforms. Worked with modern frameworks and tools.",
    descriptionTh: "พัฒนาส่วนติดต่อผู้ใช้เว็บแบบ responsive และปรับปรุงประสบการณ์ผู้ใช้สำหรับแพลตฟอร์มอีคอมเมิร์ซ ทำงานกับ framework และเครื่องมือสมัยใหม่",
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    titleTh: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
    company: "Kasetsart University",
    companyTh: "มหาวิทยาลัยเกษตรศาสตร์",
    period: "2016 - 2020",
    periodTh: "2016 - 2020",
    location: "Bangkok, Thailand",
    locationTh: "กรุงเทพฯ, ประเทศไทย",
    description: "Graduated with First Class Honors. Specialized in software engineering and web development. Active in programming competitions and tech communities.",
    descriptionTh: "จบการศึกษาด้วยเกียรตินิยมอันดับหนึ่ง เชี่ยวชาญด้านวิศวกรรมซอฟต์แวร์และการพัฒนาเว็บ เข้าร่วมแข่งขันเขียนโปรแกรมและชุมชนเทคโนโลยี",
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
        <div className="max-w-6xl mx-auto pl-2 pr-4 sm:pl-4 sm:pr-6 lg:pl-6 lg:pr-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => setActiveSection("home")}
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-200 cursor-pointer group"
            >
              <div className="px-2 py-1 bg-gradient-to-r from-primary to-primary/60 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <span className="font-bold text-sm text-white">
                  {t.brand.logo}
                </span>
              </div>
              <div className="font-display font-bold text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent tracking-tight group-hover:from-primary/80 group-hover:to-primary/80 transition-all duration-200">
                {t.brand.title}
              </div>
            </button>

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
        <div className="space-y-2">
          {/* Main Hero */}
          <section className="pt-20 pb-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/2 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left">
                  <div className="animate-fade-in-up">
                    {/* Profile Picture - Mobile Only */}
                    <div className="lg:hidden mb-8">
                      <div className="w-28 h-28 mx-auto mb-6 relative">
                        <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 rounded-full flex items-center justify-center border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                          {/* Placeholder - Replace with actual profile image */}
                          <div className="text-3xl">👨‍💻</div>
                          {/* When you have a profile picture, replace the above with:
                          <Image
                            src="/profile-picture.jpg"
                            alt="Patcharapon Yoriya"
                            width={112}
                            height={112}
                            className="rounded-full object-cover"
                          />
                          */}
            </div>
                      </div>
            </div>

                <p className="text-lg text-muted-foreground mb-2 animate-fade-in-up delay-100">{t.hero.greeting}</p>
                    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold mb-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-fade-in-up delay-200 tracking-tight">
                  {t.hero.name}
                </h1>
                    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-fade-in-up delay-250 tracking-tight">
                  {t.hero.surname}
                </h1>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium mb-2 text-muted-foreground animate-fade-in-up delay-300 tracking-tight">
                  {t.hero.title}
                </h2>
                    <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-400">
                  {t.hero.description}
                </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in-up delay-500">
                      <Button size="lg" onClick={() => setActiveSection("projects")} className="group bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-0">
                    {t.hero.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                      <Button size="lg" variant="outline" className="group border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted hover:border-border px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200" asChild>
                        <a href="/cv.pdf" download target="_blank">
                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {t.hero.downloadCV}
                        </a>
                  </Button>
                </div>
              </div>
            </div>

                {/* Video Section - Wider */}
                <div className="flex justify-center lg:justify-end w-full">
                  <div className="relative w-full">
                    <div className="w-full h-[280px] md:h-[400px] lg:h-[500px] relative">
                      {/* Decorative Elements */}
                      <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse" />
                      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full opacity-20 animate-pulse delay-1000" />
                      <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg opacity-15 animate-pulse delay-500 rotate-12" />
                      
                      {/* Main Video Container - Wide Aspect Ratio */}
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up delay-600 shadow-lg hover:shadow-2xl overflow-hidden">
                        {/* Your Custom Video - Wide Size */}
                        <div className="relative w-full h-full">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-2xl object-cover w-full h-full"
                          >
                            <source src="/Port.mp4" type="video/mp4" />
                            {/* Fallback for older browsers */}
                            <img                            
                              alt="Video fallback"
                              className="rounded-2xl object-cover w-full h-full"
                            />
                          </video>
                        </div>
                </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </section>



          {/* Quick About Section */}
          <section className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                                  <div className="space-y-3">
                  <div>
                      <h2 className="font-display text-3xl lg:text-4xl font-bold mb-1 tracking-tight">{t.quickAbout.title}</h2>
                      <p className="text-xl text-primary font-medium mb-2">{t.quickAbout.subtitle}</p>
                      <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mb-3" />
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
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm">
                      <Code className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-display font-semibold mb-2 tracking-tight">{t.quickAbout.features.cleanCode.title}</h3>
                      <p className="text-sm text-muted-foreground">{t.quickAbout.features.cleanCode.description}</p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm">
                      <Zap className="w-8 h-8 text-primary mb-3" />
                                              <h3 className="font-display font-semibold mb-2 tracking-tight">{t.quickAbout.features.fastPerformance.title}</h3>
                      <p className="text-sm text-muted-foreground">{t.quickAbout.features.fastPerformance.description}</p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm">
                      <CheckCircle className="w-8 h-8 text-primary mb-3" />
                                              <h3 className="font-display font-semibold mb-2 tracking-tight">{t.quickAbout.features.qualityAssured.title}</h3>
                      <p className="text-sm text-muted-foreground">{t.quickAbout.features.qualityAssured.description}</p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm">
                      <Heart className="w-8 h-8 text-primary mb-3" />
                                              <h3 className="font-display font-semibold mb-2 tracking-tight">{t.quickAbout.features.userFocused.title}</h3>
                      <p className="text-sm text-muted-foreground">{t.quickAbout.features.userFocused.description}</p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Featured Projects */}
          <section className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold mb-1 tracking-tight">{t.featured.title}</h2>
                  <p className="text-lg text-muted-foreground">{t.featured.subtitle}</p>
                </div>
                <Button variant="outline" onClick={() => setActiveSection("projects")} className="group">
                  {t.featured.viewAll}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {projects.slice(0, 2).map((project, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="h-1 bg-primary/50" />
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
                            variant="secondary"
                            className="hover:bg-primary/10 hover:text-primary transition-colors text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && <Badge variant="outline" className="text-xs">+{project.tech.length - 3}</Badge>}
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


        </div>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 tracking-tight">{t.about.title}</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
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
                <h3 className="text-2xl font-semibold mb-6">{t.about.skills}</h3>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <Card className="p-4 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm">
                        <div className="w-8 h-8 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                          <Code className="w-4 h-4 text-primary" />
                      </div>
                        <h4 className="font-medium text-sm mb-3">{skill.name}</h4>
                        <div className="w-full bg-muted/50 rounded-full h-1">
                        <div
                            className="bg-primary h-1 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      </Card>
                    </div>
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
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 tracking-tight">{t.experience.title}</h2>
              <p className="text-lg text-muted-foreground mb-6">{t.experience.subtitle}</p>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
                        {exp.type === 'work' ? (
                          <Briefcase className="w-5 h-5 text-primary" />
                        ) : (
                          <Users className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {language === "th" ? exp.titleTh : exp.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {language === "th" ? exp.periodTh : exp.period}
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-base font-medium text-primary">
                          {language === "th" ? exp.companyTh : exp.company}
                        </h4>
                        <span className="text-sm text-muted-foreground">
                          {language === "th" ? exp.locationTh : exp.location}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {language === "th" ? exp.descriptionTh : exp.description}
                      </p>
                    </div>
                  </div>
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
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 tracking-tight">{t.projects.title}</h2>
              <p className="text-lg text-muted-foreground mb-6">{t.projects.subtitle}</p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden"
                >
                  <div className="h-1 bg-primary/50" />
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
                          variant="secondary"
                          className="hover:bg-primary/10 hover:text-primary transition-colors text-xs"
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
        <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 tracking-tight">{t.contact.title}</h2>
              <p className="text-xl text-primary font-medium mb-4">{t.contact.subtitle}</p>
              <p className="text-lg text-muted-foreground mb-6">{t.contact.description}</p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-medium text-base mb-2 tracking-tight">{t.contact.email}</h3>
                <p className="text-muted-foreground text-sm">patcharaponyo65@gmail.com</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-medium text-base mb-2 tracking-tight">{t.contact.phone}</h3>
                <p className="text-muted-foreground text-sm">+66 080 979 2185</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-background/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-medium text-base mb-2 tracking-tight">{t.contact.location}</h3>
                <p className="text-muted-foreground text-sm">Chaingmai, Thailand</p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 mb-10 border border-border/50 bg-background/50 backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">{t.contact.form.name}</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t.contact.form.nameLabel}
                      className="border-border/50 bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">{t.contact.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.contact.form.emailLabel}
                      className="border-border/50 bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">{t.contact.form.subject}</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder={t.contact.form.subjectLabel}
                    className="border-border/50 bg-background/50 backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">{t.contact.form.message}</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder={t.contact.form.messageLabel}
                    className="resize-none border-border/50 bg-background/50 backdrop-blur-sm"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full group bg-primary hover:bg-primary/90 shadow-sm hover:shadow-md transition-all duration-200">
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {t.contact.form.send}
                </Button>
              </form>
            </Card>

            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="lg" asChild className="group border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-all duration-200">
                <Link href="https://github.com/bestpatcharapon" target="_blank">
                  <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-all duration-200">
                <Link href="https://www.linkedin.com/in/patcharapon-yoriya-153459357/" target="_blank">
                  <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-all duration-200">
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
      <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <div className="font-display font-bold text-2xl text-foreground mb-2 tracking-tight">
              Patcharapon Yoriya
            </div>
            <p className="text-muted-foreground text-sm">Software Engineer</p>
          </div>
          <div className="border-t border-border/50 pt-6">
            <p className="text-muted-foreground text-sm">
              &copy; 2025 Patcharapon Yoriya. Made with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
