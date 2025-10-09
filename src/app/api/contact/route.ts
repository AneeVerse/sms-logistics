import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return NextResponse.json({ message: 'Contact API is working' });
}

export async function POST(request: Request) {
  console.log('API route called');
  try {
    const { firstName, lastName, email, phone, subject, message } = await request.json();
    console.log('Form data received:', { firstName, email, subject });

    // Basic validation
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Admin notification email
    const adminMailOptions = {
      from: `"SMS Logistics" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact: ${subject || 'No Subject'}`,
      text: `
        New Contact Form Submission
        --------------------------
        Name: ${firstName} ${lastName || ''}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Subject: ${subject || 'No subject'}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    };

    // Thank you email to user
    const thankYouMailOptions = {
      from: `"SMS Logistics" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Contacting SMS Logistics',
      text: `
        Dear ${firstName} ${lastName || ''},

        Thank you for contacting SMS Logistics! We have received your message and appreciate your interest in our services.

        Your Message Details:
        Subject: ${subject || 'No subject'}
        Message: ${message}

        Our team will review your inquiry and get back to you within 24-48 hours. If you have any urgent questions, please feel free to call us at:
        📞 +91 99205 40535 / +91 99200 13830

        Best regards,
        SMS Logistics Team
        Email: smslogisticsoffcial@gmail.com
        Website: www.smslogistics.in
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0;">SMS Logistics</h1>
              <p style="color: #666; margin: 5px 0;">Your Trusted Logistics Partner</p>
            </div>
            
            <h2 style="color: #2563eb;">Thank You for Contacting Us!</h2>
            
            <p>Dear <strong>${firstName} ${lastName || ''}</strong>,</p>
            
            <p>Thank you for reaching out to SMS Logistics! We have successfully received your message and appreciate your interest in our services.</p>
            
            <div style="background: #f8f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
              <h3 style="color: #2563eb; margin-top: 0;">Your Message Details:</h3>
              <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
              <p><strong>Message:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #059669; margin-top: 0;">What Happens Next?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Our team will review your inquiry carefully</li>
                <li>We'll get back to you within <strong>24-48 hours</strong></li>
                <li>You'll receive a personalized response addressing your needs</li>
              </ul>
            </div>
            
            <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #856404; margin-top: 0;">Need Immediate Assistance?</h3>
              <p style="margin: 0;">For urgent inquiries, please call us at:</p>
              <p style="font-size: 18px; font-weight: bold; color: #2563eb; margin: 10px 0;">📞 +91 99205 40535 / +91 99200 13830</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; margin: 5px 0;">Best regards,</p>
              <p style="font-weight: bold; color: #2563eb; margin: 5px 0;">SMS Logistics Team</p>
              <p style="color: #666; font-size: 14px; margin: 5px 0;">
                📧 smslogisticsoffcial@gmail.com<br>
                🌐 www.smslogistics.in
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    try {
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(thankYouMailOptions)
      ]);
      
      console.log('Both emails sent successfully');
    } catch (emailError) {
      console.error('Error sending one or both emails:', emailError);
      // Still return success if at least the admin notification was attempted
      // The user will still see the thank you page
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
