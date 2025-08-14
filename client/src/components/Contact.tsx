import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pradeeppathi363@gmail.com",
      href: "mailto:pradeeppathi363@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(603) 810-9541",
      href: "tel:+16038109541"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dallas, Texas",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="contact-title">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground">Ready to bring your next project to life?</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-8 text-foreground" data-testid="contact-info-title">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center group" data-testid={`contact-info-${index}`} style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center mr-4 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{info.label}</h4>
                      {info.href.startsWith('#') ? (
                        <p className="text-muted-foreground">{info.value}</p>
                      ) : (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          data-testid={`contact-link-${index}`}
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
              <h4 className="font-semibold mb-6 text-foreground">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a 
                      key={index}
                      href={link.href}
                      className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 text-primary-foreground rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 glow-effect hover:rotate-12"
                      aria-label={link.label}
                      data-testid={`social-link-${index}`}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="glass-effect p-8 rounded-2xl border border-border/50">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          {...field} 
                          data-testid="input-name"
                        />
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
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          {...field} 
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Project inquiry" 
                          {...field} 
                          data-testid="input-subject"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          rows={5}
                          {...field} 
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-primary-foreground py-3 rounded-xl transition-all duration-300 transform hover:scale-105 glow-effect"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
