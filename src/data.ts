// src/data.ts
import type { Resume } from './types';

const resumeData: Resume = {
  name: "จอห์น โด",
  title: "วิศวกรซอฟต์แวร์",
  contact: {
    email: "john.doe@example.com",
    phone: "123-456-7890",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    website: "https://johndoe.com",
    address: "ซานฟรานซิสโก, แคลิฟอร์เนีย"
  },
  summary: [
    "วิศวกรซอฟต์แวร์ที่มีแรงจูงใจสูงและมุ่งเน้นผลลัพธ์ พร้อมประสบการณ์กว่า 5 ปีในการพัฒนาเว็บแอปพลิเคชันที่ปรับขนาดได้",
    "เชี่ยวชาญใน JavaScript, TypeScript, React, Node.js และเทคโนโลยีเว็บสมัยใหม่อื่นๆ"
  ],
  experience: [
    {
      title: "วิศวกรซอฟต์แวร์อาวุโส",
      company: "บริษัท เทคโซลูชั่นส์ จำกัด",
      location: "ซานฟรานซิสโก, แคลิฟอร์เนีย",
      startDate: "ม.ค. 2022",
      endDate: "ปัจจุบัน",
      description: [
        "นำการพัฒนาสถาปัตยกรรมไมโครเซอร์วิสใหม่ ปรับปรุงความสามารถในการปรับขนาดของระบบได้ 30%",
        "ให้คำปรึกษาวิศวกรระดับจูเนียร์และดำเนินการตรวจสอบโค้ด เพื่อให้มั่นใจในคุณภาพโค้ดและแนวปฏิบัติที่ดีที่สุด"
      ]
    },
    {
      title: "วิศวกรซอฟต์แวร์",
      company: "บริษัท อินโนเวท คอร์ป",
      location: "ซีแอตเทิล, วอชิงตัน",
      startDate: "ก.ค. 2019",
      endDate: "ธ.ค. 2021",
      description: [
        "พัฒนาและดูแลคุณสมบัติส่วนหน้าโดยใช้ React และ Redux",
        "ทำงานร่วมกับผู้จัดการผลิตภัณฑ์และนักออกแบบเพื่อส่งมอบโซลูชันที่เน้นผู้ใช้เป็นศูนย์กลาง"
      ]
    }
  ],
  education: [
    {
      degree: "ปริญญาโท",
      major: "วิทยาการคอมพิวเตอร์",
      university: "มหาวิทยาลัยตัวอย่าง",
      location: "เมืองตัวอย่าง, EX",
      startDate: "ก.ย. 2017",
      endDate: "มิ.ย. 2019"
    },
    {
      degree: "ปริญญาตรี",
      major: "วิศวกรรมคอมพิวเตอร์",
      university: "มหาวิทยาลัยอื่น",
      location: "เมืองอื่น, AN",
      startDate: "ก.ย. 2013",
      endDate: "มิ.ย. 2017"
    }
  ],
  skills: [
    {
      category: "ภาษาโปรแกรม",
      items: ["JavaScript", "TypeScript", "Python", "Java"]
    },
    {
      category: "ส่วนหน้า (Frontend)",
      items: ["React", "Redux", "HTML", "CSS", "Sass", "Webpack"]
    },
    {
      category: "ส่วนหลัง (Backend)",
      items: ["Node.js", "Express.js", "REST APIs", "GraphQL"]
    },
    {
      category: "ฐานข้อมูล",
      items: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      category: "เครื่องมือและแพลตฟอร์ม",
      items: ["Git", "Docker", "AWS", "Jira", "Agile"]
    }
  ],
  projects: [
    {
      title: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว",
      description: "พัฒนาเว็บไซต์พอร์ตโฟลิโอส่วนตัวเพื่อแสดงโครงการและทักษะ",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/johndoe/portfolio",
      link: "https://johndoe.com"
    },
    {
      title: "แพลตฟอร์มอีคอมเมิร์ซ",
      description: "มีส่วนร่วมในแพลตฟอร์มอีคอมเมิร์ซแบบฟูลสแตกพร้อมการยืนยันตัวตนผู้ใช้และการประมวลผลการชำระเงิน",
      technologies: ["Node.js", "Express", "React", "MongoDB", "Stripe"],
      github: "https://github.com/johndoe/ecommerce-platform"
    }
  ]
};

export default resumeData;