"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "./form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTextArea from "./form-textarea";
import toast from "react-hot-toast";
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter valid  mail" }),
  message: z.string().min(1, { message: "Message is required" }),
});
const ContactForm = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const formSubmit = (values: z.infer<typeof schema>) => {
    console.log({ values });
    toast.success(
      `Your message has been reached to me, Thank you for taking time and connecting with me!!!😊😊`,
      { position: "top-right", duration: 10000 }
    );
  };
  return (
    <>
      <form onSubmit={form.handleSubmit(formSubmit)} className="space-y-3">
        <FormInput
          errors={form.formState.errors.name}
          label="Name"
          name="name"
          register={form.register}
          type="text"
          key={"name"}
        />
        <FormInput
          errors={form.formState.errors.email}
          label="Email"
          name="email"
          register={form.register}
          type="email"
          key={"email"}
        />
        <FormTextArea
          errors={form.formState.errors.message}
          label="Message"
          name="message"
          register={form.register}
          key={"message"}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary px-5 py-2 rounded-lg text-sm   font-semibold tracking-wider flex justify-center items-center gap-2 hover:bg-secondary"
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
