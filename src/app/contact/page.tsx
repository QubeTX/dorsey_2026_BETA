"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Thank you for your message! (This is a demo submission)");
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background pt-40 pb-24 flex flex-col justify-center">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
           <h1 className="text-7xl md:text-[10vw] font-serif font-black uppercase tracking-tighter leading-none mb-4 mix-blend-difference">
              Let&apos;s <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">Connect</span>
            </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="text-xl md:text-2xl uppercase tracking-widest font-bold text-muted-foreground absolute -top-8 left-0">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Name" 
                          {...field} 
                          className="bg-transparent border-b-2 border-foreground/20 border-t-0 border-x-0 rounded-none px-0 py-8 text-3xl md:text-5xl font-serif focus-visible:ring-0 focus-visible:border-primary placeholder:text-foreground/10 h-auto transition-all" 
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
                    <FormItem className="relative">
                      <FormLabel className="text-xl md:text-2xl uppercase tracking-widest font-bold text-muted-foreground absolute -top-8 left-0">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your@email.com" 
                          {...field} 
                          className="bg-transparent border-b-2 border-foreground/20 border-t-0 border-x-0 rounded-none px-0 py-8 text-3xl md:text-5xl font-serif focus-visible:ring-0 focus-visible:border-primary placeholder:text-foreground/10 h-auto transition-all" 
                        />
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
                  <FormItem className="relative">
                    <FormLabel className="text-xl md:text-2xl uppercase tracking-widest font-bold text-muted-foreground absolute -top-8 left-0">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your project..." 
                        className="bg-transparent border-b-2 border-foreground/20 border-t-0 border-x-0 rounded-none px-0 py-4 text-3xl md:text-5xl font-serif focus-visible:ring-0 focus-visible:border-primary placeholder:text-foreground/10 min-h-[200px] resize-none transition-all" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button type="submit" size="lg" className="rounded-full text-2xl px-12 py-10 uppercase tracking-widest font-bold bg-foreground text-background hover:bg-primary hover:text-foreground transition-colors">
                  Send It
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
