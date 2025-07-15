
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return Response.json({ 
        message: 'Name, email, and message are required' 
      }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ 
        message: 'Please provide a valid email address' 
      }, { status: 400 });
    }

    const msg = {
      to: process.env.TO_EMAIL || 'info@allevent.com.sa',
      from: process.env.FROM_EMAIL || 'contact@allevent.com.sa',
      replyTo: email,
      subject: subject || 'New Contact Form Submission',
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
      `.trim(),
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
  <div style="background: #FF002C; color: white; padding: 20px; text-align: center;">
    <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
  </div>
  
  <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 5px 5px;">
    <div style="background: white; padding: 25px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <h2 style="color: #FF002C; margin-top: 0; margin-bottom: 20px; font-size: 20px;">Contact Details</h2>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 100px;">Name:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #FF002C; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold;">Subject:</td>
          <td style="padding: 10px 0;">${subject || 'Contact Form Submission'}</td>
        </tr>
      </table>
      
      <div style="margin-top: 25px;">
        <h3 style="color: #FF002C; margin-bottom: 15px; font-size: 18px;">Message:</h3>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #FF002C; line-height: 1.6;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
    </div>
    
    <div style="text-align: center; margin-top: 20px;">
      <p style="color: #666; font-size: 14px; margin: 0;">
        This message was sent from the contact form on 
        <a href="https://allevent.com.sa" style="color: #FF002C; text-decoration: none;">allevent.com.sa</a>
      </p>
      <p style="color: #999; font-size: 12px; margin: 5px 0 0 0;">
        Sent on ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Riyadh' })} (Saudi Arabia Time)
      </p>
    </div>
  </div>
</div>
      `.trim(),
    };

    await sgMail.send(msg);
    
    return Response.json({ 
      message: 'Email sent successfully!',
      success: true 
    });
    
  } catch (error) {
    console.error('SendGrid error:', error);
    
    // Handle specific SendGrid errors
    if (error.response) {
      console.error('SendGrid API Error:', error.response.body);
    }
    
    return Response.json({ 
      message: 'Failed to send email. Please try again later.',
      success: false 
    }, { status: 500 });
  }
}