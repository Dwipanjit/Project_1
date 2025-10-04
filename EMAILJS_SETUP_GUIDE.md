# 📧 EmailJS Setup Guide for Contact Form

## 🚨 **Current Issue**
Your contact form is showing an error because EmailJS environment variables are not configured. Follow this guide to fix it!

## 📋 **Step-by-Step Setup**

### **Step 1: Create EmailJS Account**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** or **"Get Started"**
3. Create your account (free tier available)

### **Step 2: Create Email Service**
1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook** 
   - **Yahoo**
   - Or any other provider
4. Follow the setup instructions for your chosen provider
5. **Copy the Service ID** (e.g., `service_abc123`)

### **Step 3: Create Email Template**
1. Go to **"Email Templates"** in your dashboard
2. Click **"Create New Template"**
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello Dwipanjit,

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Message: {{message}}

Reply to: {{reply_to}}

Best regards,
Your Portfolio Website
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### **Step 4: Get Public Key**
1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **Copy your Public Key** (e.g., `user_abc123def456`)

### **Step 5: Update Environment Variables**
1. Open `.env.local` file in your project root
2. Replace the placeholder values:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123def456
```

### **Step 6: Restart Development Server**
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## 🔧 **Alternative: Quick Test Setup**

If you want to test the form quickly without EmailJS:

1. **Temporarily disable EmailJS** by commenting out the error check in `ContactForm.tsx`
2. **Or use a simple alert** instead of sending emails

## ✅ **Verification**

After setup, your contact form should:
- ✅ Show "Sending..." when submitted
- ✅ Display success message after sending
- ✅ Send actual emails to your inbox
- ✅ No more configuration errors

## 🆘 **Need Help?**

1. **EmailJS Documentation**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. **Common Issues**: Check that all three environment variables are set correctly
3. **Test Mode**: EmailJS has a test mode to verify setup

## 📧 **Expected Email Format**

Once configured, you'll receive emails like this:

```
Subject: New Contact Form Message from john_doe

Hello Dwipanjit,

You have received a new message from your portfolio contact form:

From: john_doe (john@example.com)
Message: Hi! I'm interested in your services. Can we discuss a project?

Reply to: john@example.com

Best regards,
Your Portfolio Website
```

---

**🎯 Goal**: Get your contact form working so visitors can actually reach you!
