'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

async function submitContactForm(data: ContactFormValues) {
    // This is a placeholder for the actual server action.
    // In a real app, you would import and call the server action here.
    console.log('Form data submitted:', data);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Simulate success
    return { success: true, message: 'Your message has been sent!' };
}


export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
        // Here you would call a server action
        // const result = await yourServerAction(data);
        const result = await submitContactForm(data);

        if (result.success) {
            toast({
                title: 'Success!',
                description: result.message,
            });
            form.reset();
        } else {
            throw new Error(result.message || 'An unknown error occurred.');
        }
    } catch (error) {
        toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: error instanceof Error ? error.message : 'There was a problem with your request.',
        });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Have a project in mind or want to discuss automation? Let's connect.
          </p>
        </div>
        <div className="relative rounded-lg border border-accent/20 bg-card p-8 shadow-lg shadow-accent/20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project..."
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className={cn(
                    "relative overflow-hidden bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-cyan-500/50",
                    "active:scale-95",
                    "dark:bg-cyan-400 dark:text-cyan-950 dark:hover:bg-cyan-300"
                  )}
                  style={{
                    '--ripple-color': 'rgba(0, 225, 255, 0.4)'
                  } as React.CSSProperties}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                  <span className="absolute inset-0 animate-pulse bg-cyan-400/50 opacity-0 blur-xl group-hover:opacity-100"></span>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
