"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(2, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { firstName: "", lastName: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Thank you for your message.");
    form.reset();
  }

  return (
    <div className="min-h-screen bg-white pt-28">
      <section className="section-pad bg-white">
        <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <h1 className="dorsey-heading text-[clamp(3rem,7vw,7rem)]">Got questions?</h1>
            <p className="text-xl leading-9 text-black/72">
              Please share some basic personal information with us through the contact form. This will help us get to know
              you better and ensure that our communication is tailored to your needs.
            </p>
            <Image
              src="/images/dorsey/contact-portrait.jpg"
              alt="Leon Lee Dorsey portrait"
              width={760}
              height={960}
              className="w-full object-cover"
            />
          </motion.div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-7">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl><Input {...field} className="h-12 rounded-none border-black/25" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl><Input {...field} className="h-12 rounded-none border-black/25" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email(required)</FormLabel>
                  <FormControl><Input {...field} className="h-12 rounded-none border-black/25" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="subject" render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject(required)</FormLabel>
                  <FormControl><Input {...field} className="h-12 rounded-none border-black/25" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel>Message(required)</FormLabel>
                  <FormControl><Textarea {...field} className="min-h-44 rounded-none border-black/25" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type="submit" className="w-fit rounded-none bg-black px-8 py-6 text-sm font-black uppercase text-white hover:bg-primary">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
}
