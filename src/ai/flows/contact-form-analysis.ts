'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing contact form messages.
 *
 * It includes:
 * - analyzeContactFormMessage - A function to analyze the contact form message.
 * - ContactFormInput - The input type for the analyzeContactFormMessage function.
 * - ContactFormOutput - The output type for the analyzeContactFormMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormInputSchema = z.object({
  message: z.string().describe('The message from the contact form.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  intent: z.string().describe('The intent of the message.'),
  urgency: z.string().describe('The urgency of the message (e.g., high, medium, low).'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function analyzeContactFormMessage(
  input: ContactFormInput
): Promise<ContactFormOutput> {
  return analyzeContactFormMessageFlow(input);
}

const analyzeContactFormMessagePrompt = ai.definePrompt({
  name: 'analyzeContactFormMessagePrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  prompt: `You are an AI assistant that analyzes contact form messages to determine their intent and urgency.

  Analyze the following message and provide the intent and urgency. Urgency should be high, medium, or low.

  Message: {{{message}}}`,
});

const analyzeContactFormMessageFlow = ai.defineFlow(
  {
    name: 'analyzeContactFormMessageFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async input => {
    const {output} = await analyzeContactFormMessagePrompt(input);
    return output!;
  }
);
