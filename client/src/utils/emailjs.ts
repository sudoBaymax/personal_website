import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import dotenv from 'dotenv';

dotenv.config();

interface UserData {
  email?: string;
  [key: string]: unknown;
}

/**
 * Placeholder constants for EmailJS configuration.
 * Replace these with your actual EmailJS service ID, template IDs, and user ID.
 */
const SERVICE_ID = process.env.EMAIL_SERVICE_ID || '';
const TEMPLATE_ID_ADMIN = process.env.EMAIL_TEMPLATE_ID_USER || '';
const TEMPLATE_ID_USER = process.env.EMAIL_TEMPLATE_ID_ADMIN || '';
const USER_ID = process.env.EMAIL_USER_ID || '';

/**
 * Sends an email notification to the admin (jatoujoseph@gmail.com) when a user signs up.
 * @param {UserData} userData - An object containing user information to include in the email.
 * @returns {Promise} - Resolves when the email is sent successfully.
 */
export const sendAdminNotification = (userData: UserData): Promise<EmailJSResponseStatus> => {
  const templateParams = {
    to_email: 'jatoujoseph@gmail.com',
    ...userData,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParams, USER_ID);
};

/**
 * Sends an invitation email to the user inviting them to the club.
 * @param {UserData} userData - An object containing user information including their email.
 * @returns {Promise} - Resolves when the email is sent successfully.
 */
export const sendUserInvitation = (userData: UserData): Promise<EmailJSResponseStatus> => {
  const templateParams = {
    to_email: userData.email,
    ...userData,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, templateParams, USER_ID);
};
