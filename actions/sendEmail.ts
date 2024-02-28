"use server";
import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage } from '@/app/lib/utils';
import React from 'react';
import {Resend} from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const message = formData.get("message");
    const senderEmail = formData.get("senderEmail");

    if (!message || typeof message !== "string" || message.length > 5000) {
        return {
            error: "Invalid message",
        }
    }

    if (!senderEmail || typeof senderEmail !== "string" || senderEmail.length > 500) {
        return {
            error: "Invalid sender email",
        }
    }
    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'jzhang230@dons.usfca.edu',
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            //text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            })
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        }
    }
    return {
        data,
    };
};