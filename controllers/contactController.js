const nodemailer = require("nodemailer");

const sendContactForm = async (
  req,
  res
) => {
  try {
    const {
      fullName,
      email,
      phone,
      message,
    } = req.body;

    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject:
        "New Contact Form Submission",

      html: `
      <h2>New Lead Received</h2>

      <p><b>Name:</b> ${fullName}</p>

      <p><b>Email:</b> ${email}</p>

      <p><b>Phone:</b> ${phone}</p>

      <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message Sent",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  sendContactForm,
};