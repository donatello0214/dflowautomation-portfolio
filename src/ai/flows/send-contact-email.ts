'use server';

/**
 * @fileOverview This file defines a Genkit flow for sending a contact form email.
 *
 * - sendContactEmail - A function that sends an email with the contact form data.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { GMAIL_CONFIG, sendMail } from '@/lib/email';

const SendContactEmailInputSchema = z.object({
  name: z.string().describe("The sender's name."),
  email: z.string().email().describe("The sender's email address."),
  message: z.string().describe('The message content.'),
});
export type SendContactEmailInput = z.infer<
  typeof SendContactEmailInputSchema
>;

export async function sendContactEmail(
  input: SendContactEmailInput
): Promise<void> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    const { name, email, message } = input;
    
    await sendMail({
      from: `"${name}" <${GMAIL_CONFIG.user}>`,
      to: 'dflowautomation@gmail.com',
      subject: `New message from ${name} via your portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p>Name: ${name}</p><p>Email: <a href="mailto:${email}">${email}</a></p><p>Message:</p><p>${message}</p>`,
    });
  }
);
