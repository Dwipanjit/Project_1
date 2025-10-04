# 📧 EmailJS Setup Guide

## 🚀 Your Contact Form is Ready for EmailJS!

Your contact form has been successfully updated with EmailJS integration. Now you need to set up your EmailJS account and configure the environment variables.

## 📋 Step-by-Step Setup:

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

### 3. Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello Dwipanjit,

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Message: {{message}}

Reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio Website
```

4. **Copy your Template ID** (you'll need this)

### 4. Get Public Key

1. Go to **Account** → **General**
2. **Copy your Public Key** (you'll need this)

### 5. Update Environment Variables

1. Open `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test Your Contact Form

1. Restart your development server: `npm run dev`
2. Go to your portfolio: `http://localhost:3002`
3. Fill out the contact form
4. Check your email inbox!

## ✅ Features Included:

- **Real Email Sending** - Messages go directly to your inbox
- **Loading States** - Shows spinner while sending
- **Error Handling** - Displays errors if something goes wrong
- **Success Feedback** - Confirms when message is sent
- **Form Validation** - Ensures required fields are filled
- **Professional UI** - Clean, responsive design

## 🔧 Troubleshooting:

### If emails don't arrive:

1. Check your spam folder
2. Verify EmailJS credentials are correct
3. Check browser console for errors
4. Ensure your email service is properly connected

### If you see "EmailJS configuration is missing":

1. Make sure `.env.local` file exists
2. Verify environment variable names are correct
3. Restart your development server after changes

## 📧 What Happens When Someone Submits:

1. **User fills form** → Email and message entered
2. **Form validation** → Checks required fields
3. **EmailJS sends** → Message sent to your inbox
4. **Success message** → User sees confirmation
5. **You receive email** → With sender's details and message

## 🎉 You're All Set!

Once you complete the EmailJS setup, your contact form will be fully functional and you'll receive all messages directly in your email inbox!

---

**Need help?** Check the EmailJS documentation or contact their support team.
