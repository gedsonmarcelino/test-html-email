"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();

const { readFile } = require("./utils/file");

async function main() {
  const {
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_USER,
    EMAIL_PASSWORD,
    EMAIL_FROM,
    EMAIL_TO,
    EMAIL_SUBJECT,
    EMAIL_TEMPLATE,
  } = process.env;

  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: false,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
  });

  const html = await readFile(`./templates/${EMAIL_TEMPLATE}`);

  let info = await transporter.sendMail({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: EMAIL_SUBJECT,
    html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
