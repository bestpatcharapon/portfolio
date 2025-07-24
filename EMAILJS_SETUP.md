# 📧 EmailJS Setup Guide

## 🚀 การตั้งค่า EmailJS สำหรับฟอร์มติดต่อ

### 1. **สร้างบัญชี EmailJS**
1. ไปที่ [EmailJS.com](https://www.emailjs.com/)
2. สมัครบัญชีใหม่
3. ยืนยันอีเมล

### 2. **สร้าง Email Service**
1. ไปที่ **Email Services** ในเมนู
2. คลิก **Add New Service**
3. เลือก **Gmail** หรือ **Outlook**
4. ใส่ข้อมูลอีเมลของคุณ
5. เก็บ **Service ID** ไว้

### 3. **สร้าง Email Template**
1. ไปที่ **Email Templates** ในเมนู
2. คลิก **Create New Template**
3. ตั้งชื่อ template เช่น "Contact Form"
4. ใส่เนื้อหาอีเมล:

```html
<h2>ข้อความใหม่จาก Portfolio</h2>
<p><strong>ชื่อ:</strong> {{from_name}}</p>
<p><strong>อีเมล:</strong> {{from_email}}</p>
<p><strong>หัวข้อ:</strong> {{subject}}</p>
<p><strong>ข้อความ:</strong></p>
<p>{{message}}</p>
```

5. เก็บ **Template ID** ไว้

### 4. **หา Public Key**
1. ไปที่ **Account** ในเมนู
2. คลิก **API Keys**
3. คัดลอก **Public Key**

### 5. **อัปเดต Configuration**
เปิดไฟล์ `lib/emailjs.ts` และแทนที่ค่าต่างๆ:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here', // ใส่ Service ID
  TEMPLATE_ID: 'your_template_id_here', // ใส่ Template ID
  PUBLIC_KEY: 'your_public_key_here', // ใส่ Public Key
};
```

### 6. **ทดสอบ**
1. รันเว็บไซต์: `npm run dev`
2. ไปที่หน้าติดต่อ
3. กรอกข้อมูลและทดสอบส่ง

## 🎯 ฟีเจอร์ที่เพิ่มเข้ามา:

- ✅ **ส่งอีเมลอัตโนมัติ** เมื่อกรอกฟอร์ม
- ✅ **Validation** ตรวจสอบข้อมูลที่กรอก
- ✅ **Loading State** แสดงสถานะการส่ง
- ✅ **Success/Error Messages** แจ้งผลการส่ง
- ✅ **Reset Form** ล้างฟอร์มหลังส่งสำเร็จ
- ✅ **Responsive Design** ใช้งานได้ทุกอุปกรณ์

## 📝 หมายเหตุ:
- EmailJS มีแผนฟรีที่จำกัดจำนวนอีเมลต่อเดือน
- สำหรับการใช้งานจริง แนะนำให้อัปเกรดเป็นแผนเสียเงิน
- ข้อมูลจะถูกส่งไปยังอีเมลที่คุณตั้งค่าใน Email Service

## 🔧 การแก้ไขปัญหา:
- หากไม่ได้รับอีเมล ตรวจสอบ Spam folder
- ตรวจสอบ Service ID, Template ID, และ Public Key
- ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต 