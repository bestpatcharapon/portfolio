import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_wd7rrlh', // ใส่ Service ID จาก EmailJS
  TEMPLATE_ID: 'template_c38iwao', // ใส่ Template ID จาก EmailJS
  PUBLIC_KEY: 'DENp5snDaaLGrD85l', // ใส่ Public Key จาก EmailJS
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send email function
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    return { success: true, data: response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
}; 