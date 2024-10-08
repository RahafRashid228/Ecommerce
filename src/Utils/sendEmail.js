import nodemailer from 'nodemailer';
export async function sendEmail(to,subject,html){
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: process.env.EMAILSENDER,
          pass: process.env.PASSWORDSENDER,
        },
        tls: {
            rejectUnauthorized: false
          }
      }); 
      const info = await transporter.sendMail({
        from: `"Rahaf Rashid Ecommerce" <${process.env.EMAILSENDER}>`, // sender address
        to ,// list of receivers
        subject, // Subject line
        html, // html body
      });
    
      
}