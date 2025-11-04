'use server';

/**
 * @fileOverview An AI-powered content drafting tool for generating blog content and project descriptions.
 *
 * - draftContent - A function that generates content based on input parameters.
 * - DraftContentInput - The input type for the draftContent function.
 * - DraftContentOutput - The return type for the draftContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DraftContentInputSchema = z.object({
  topic: z.string().describe('The topic of the content to be generated.'),
  type: z.enum(['blog post', 'project description']).describe('The type of content to generate.'),
  length: z.enum(['short', 'medium', 'long']).describe('The desired length of the content.'),
  tone: z.string().optional().describe('The desired tone of the content (e.g., professional, casual).'),
  keywords: z.string().optional().describe('Comma-separated keywords to optimize the content for.'),
});

export type DraftContentInput = z.infer<typeof DraftContentInputSchema>;

const DraftContentOutputSchema = z.object({
  content: z.string().describe('The generated content.'),
});

export type DraftContentOutput = z.infer<typeof DraftContentOutputSchema>;

export async function draftContent(input: DraftContentInput): Promise<DraftContentOutput> {
  return draftContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'draftContentPrompt',
  input: {schema: DraftContentInputSchema},
  output: {schema: DraftContentOutputSchema},
  prompt: `You are an AI-powered content creation assistant.

You will generate content based on the following parameters:

Topic: {{{topic}}}
Type: {{{type}}}
Length: {{{length}}}
Tone: {{{tone}}}
Keywords: {{{keywords}}}

Here is the generated content:
`,
});

const draftContentFlow = ai.defineFlow(
  {
    name: 'draftContentFlow',
    inputSchema: DraftContentInputSchema,
    outputSchema: DraftContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
