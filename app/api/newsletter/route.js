import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validation
    if (!email) {
      return Response.json({ 
        message: 'Email is required' 
      }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ 
        message: 'Please provide a valid email address' 
      }, { status: 400 });
    }

    // Send confirmation email to the subscriber
    const subscriberMsg = {
      to: email,
      from: process.env.FROM_EMAIL || 'contact@allevent.com.sa',
      subject: 'Welcome to Allevent Newsletter!',
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
  <div style="background: #FF002C; color: white; padding: 20px; text-align: center;">
    <h1 style="margin: 0; font-size: 24px;">Welcome to Allevent!</h1>
  </div>
  
  <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 5px 5px;">
    <div style="background: white; padding: 25px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <h2 style="color: #FF002C; margin-top: 0; margin-bottom: 20px; font-size: 20px;">Thank you for subscribing!</h2>
      
      <p style="line-height: 1.6; margin-bottom: 20px;">
        We're excited to have you join our newsletter community. You'll be the first to know about:
      </p>
      
      <ul style="color: #666; line-height: 1.8; margin-bottom: 25px;">
        <li>Latest events and experiences</li>
        <li>Exclusive offers and early bird tickets</li>
        <li>Behind-the-scenes content</li>
        <li>Industry insights and trends</li>
      </ul>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #FF002C; margin-bottom: 25px;">
        <p style="margin: 0; font-style: italic; color: #666;">
          "Every moment matters - and we're here to help you make them unforgettable."
        </p>
      </div>
      
      <p style="color: #666; line-height: 1.6;">
        Keep an eye on your inbox for our latest updates. If you have any questions, feel free to reach out to us at 
        <a href="mailto:info@allevent.com.sa" style="color: #FF002C; text-decoration: none;">info@allevent.com.sa</a>
      </p>
    </div>
    
    <div style="text-align: center; margin-top: 20px;">
      <p style="color: #666; font-size: 14px; margin: 0;">
        Visit us at 
        <a href="https://allevent.com.sa" style="color: #FF002C; text-decoration: none;">allevent.com.sa</a>
      </p>
      <p style="color: #999; font-size: 12px; margin: 5px 0 0 0;">
        © 2025 Allevent. All rights reserved.
      </p>
    </div>
  </div>
</div>
      `,
    };

    // Send notification email to admin
    const adminMsg = {
      to: process.env.TO_EMAIL || 'info@allevent.com.sa',
      from: process.env.FROM_EMAIL || 'contact@allevent.com.sa',
      subject: 'New Newsletter Subscription',
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
  <div style="background: #FF002C; color: white; padding: 20px; text-align: center;">
    <h1 style="margin: 0; font-size: 24px;">New Newsletter Subscription</h1>
  </div>
  
  <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 5px 5px;">
    <div style="background: white; padding: 25px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <h2 style="color: #FF002C; margin-top: 0; margin-bottom: 20px; font-size: 20px;">Subscription Details</h2>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 100px;">Email:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #FF002C; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold;">Date:</td>
          <td style="padding: 10px 0;">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Riyadh' })} (Saudi Arabia Time)</td>
        </tr>
      </table>
    </div>
    
    <div style="text-align: center; margin-top: 20px;">
      <p style="color: #666; font-size: 14px; margin: 0;">
        Newsletter subscription from 
        <a href="https://allevent.com.sa" style="color: #FF002C; text-decoration: none;">allevent.com.sa</a>
      </p>
    </div>
  </div>
</div>
      `,
    };

    // Send both emails
    await Promise.all([
      sgMail.send(subscriberMsg),
      sgMail.send(adminMsg)
    ]);
    
    return Response.json({ 
      message: 'Successfully subscribed to newsletter!',
      success: true 
    });
    
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    // Handle specific SendGrid errors
    if (error.response) {
      console.error('SendGrid API Error:', error.response.body);
    }
    
    return Response.json({ 
      message: 'Failed to subscribe. Please try again later.',
      success: false 
    }, { status: 500 });
  }
}