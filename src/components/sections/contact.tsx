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
import { cn } from '@/lib/utils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';
import { Mail, MailCheck, Loader2, Linkedin, Github } from 'lucide-react';
import { sendContactEmail } from '@/ai/flows/send-contact-email';
import { useToast } from '@/hooks/use-toast';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.75 13.96c.25.13.41.2.46.3.05.1.03.48-.18.93-.21.45-1.05.9-1.4.93-.35.03-.53.03-.75-.02-.22-.05-1.36-.5-2.58-1.5-1.22-1-2.04-2.23-2.28-2.6-.24-.37-.38-.64-.38-.83s-.03-.28.08-.38c.11-.1.28-.26.43-.4.15-.14.28-.25.38-.4.1-.15.08-.28-.03-.43-.11-.15-1.2-.28-1.64-1.32-.44-1.04-.9-1.02-.9-1.02s-.53.02-.78.26c-.25.24-.78.73-.78 1.78s.78 2.05.9 2.2c.12.15 1.4,2.1,3.48,2.95.46.18.82.28,1.1.36.28.08.55.05.78-.03.22-.08.68-.3,1-1.04.32-.74.32-1.36.22-1.5-.1-.14-.25-.22-.5-.35z M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18s-4.37-1.93-6-3.33c0 0 1.53.53 3-1.02.7-.75 1.03-1.75.4-2.68-.63-.93-1.95-1.05-1.95-1.05s.4-.22.9-.53c.5-.3.88-.8.95-1.42.07-.6-.18-1.2-.5-1.64-.32-.44-.8-.68-1.2-.7-.4-.03-1.05.1-1.58.4C6.07 8.04 5.5 9.5 5.5 9.5s-1.8-3.48 2.6-5.8c4.4-2.3 9.4.5 9.4 5.3 0 4.8-3.9 8-7.5 8z" />
    </svg>
  );

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { toast } = useToast();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await sendContactEmail(values);
      setShowConfirmation(true);
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem sending your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="mb-8 flex justify-center gap-6">
            <a href="https://wa.me/5551999999999" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
              <WhatsAppIcon className="h-8 w-8" />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a href="https://www.linkedin.com/in/epifaniods/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/dflowautomation" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="mailto:dflowautomation@gmail.com" className="text-foreground/60 hover:text-accent transition-colors">
              <Mail className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </a>
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
                    "dark:bg-cyan-400 dark:text-cyan-950 dark:hover:bg-cyan-300",
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
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent className="w-11/12 max-w-md rounded-lg">
          <AlertDialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
              <MailCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <AlertDialogTitle className="text-center">Message Sent!</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowConfirmation(false)}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </section>
  );
}
