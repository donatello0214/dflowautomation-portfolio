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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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
  const [isMailerOpen, setIsMailerOpen] = useState(false);

  const mailerOptions = [
    { name: 'Default Mail App', href: 'mailto:dflowautomation@gmail.com' },
    { name: 'Gmail', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dflowautomation@gmail.com' },
    { name: 'Outlook', href: 'https://outlook.live.com/owa/?path=/mail/action/compose&to=dflowautomation@gmail.com' },
    { name: 'Yahoo Mail', href: 'https://mail.yahoo.com/?to=dflowautomation@gmail.com' },
  ];

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
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://wa.me/639954470799" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                  <Image src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="WhatsApp" width={32} height={32} className="h-8 w-8" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>+63 995 447 0799</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://www.linkedin.com/in/don-sufrir-059405390/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                  <Linkedin className="h-8 w-8" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>linkedin.com/in/don-sufrir-059405390/</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://github.com/dflowautomation" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                  <Github className="h-8 w-8" />
                  <span className="sr-only">GitHub</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>github.com/dflowautomation</p>
              </TooltipContent>
            </Tooltip>
            <Dialog open={isMailerOpen} onOpenChange={setIsMailerOpen}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DialogTrigger asChild>
                    <button className="text-foreground/60 hover:text-accent transition-colors">
                      <Mail className="h-8 w-8" />
                      <span className="sr-only">Email</span>
                    </button>
                  </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>dflowautomation@gmail.com</p>
                </TooltipContent>
              </Tooltip>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Choose Your Mailer</DialogTitle>
                  <DialogDescription>
                    Select an application to compose your email to dflowautomation@gmail.com.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-2">
                  {mailerOptions.map((option) => (
                     <Button asChild key={option.name} variant="outline" className="justify-start">
                        <a href={option.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsMailerOpen(false)}>
                            {option.name}
                        </a>
                     </Button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
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
