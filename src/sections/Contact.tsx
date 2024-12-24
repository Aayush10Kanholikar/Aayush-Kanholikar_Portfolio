"use client";

import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import { ChangeEvent, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import SectionHeader from "@/components/SectionHeader";

const variants = {
  initial: {
    y: -30,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const footerLinks = [
  {
    title: <FaLinkedin />,
    href: "https://www.linkedin.com/in/aayush-kanholikar-628325207/",
  },
  {
    title: <FaGithub />,
    href: "https://github.com/Aayush10Kanholikar",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const form = useRef();

  const copyEmailToClipboard = () => {
    const email = "akanolikar@gmail.com";
    navigator.clipboard.writeText(email).then(
      () => {
        toast.success("Email ID copied to clipboard!", {
          position: "bottom-left",
          autoClose: 3000, // The toast will auto-close after 3 seconds
        });
      },
      () => {
        toast.error("Failed to copy email.", {
          position: "bottom-left",
          autoClose: 3000,
        });
      }
    );
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wfxaegm", "template_ym3579i", form.current, {
        publicKey: "eEfMG9CJPESCvEzZH",
      })
      .then(
        () => {
          toast.success(
            "Thank you! Your message has been delivered successfully.",
            {
              position: "bottom-left",
              autoClose: 3000, // The toast will auto-close after 3 seconds
            }
          );
        },
        () => {
          toast.error(
            "Failed to send your email. Please check your details and try again.",
            {
              position: "bottom-left",
              autoClose: 3000,
            }
          );
        }
      );

    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <motion.div
        id="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="border-t border-white/15 container"
      >
        <SectionHeader
          title="Contact Me"
          description="I’m eager to bring fresh ideas and dedication to your next project. If you’d like to discuss opportunities or collaborations, don’t hesitate to get in touch!"
        />
      </motion.div>
      <motion.div
        ref={ref}
        className=" container mx-auto h-full flex  gap-12 px-6 md:px-10 pt-8 md:pt-8 md:pb-16 flex-col md:flex-row"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div
          className="flex-1 flex flex-col gap-7 text-center md:text-left"
          variants={variants}
        >
          <motion.h1
            className="text-2xl md:text-6xl  leading-tight font-bold"
            variants={variants}
          >
            Let’s work together
          </motion.h1>
          <motion.div className="flex flex-col gap-4" variants={variants}>
            <nav className="flex flex-row justify-center md:justify-start items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  href={link.href}
                  className=" shadow-md shadow-gray-700 flex items-center justify-center w-8 h-8 rounded-full border-2 border-white bg-black text-white hover:bg-gray-800 transition-all"
                  target="_blank"
                  key={link.href}
                >
                  {link.title}
                </a>
              ))}
              <a
                className=" shadow-md shadow-gray-700 flex items-center justify-center w-8 h-8 rounded-full border-2 border-white bg-black text-white hover:bg-gray-800 transition-all"
                onClick={copyEmailToClipboard}
                href="mailto:akanolikar@gmailcom"
              >
                <TfiEmail />
                <ToastContainer />
              </a>
            </nav>
          </motion.div>
        </motion.div>

        <div className="flex-1 relative w-full px-20 md:px-0">
          <motion.form
            onSubmit={sendEmail}
            ref={form}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 1 }}
            className=" flex flex-col gap-5 "
          >
            <input
              type="text"
              required
              placeholder="Name"
              name="name"
              className="p-4 bg-transparent border border-white text-white rounded-md placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              className="p-4 bg-transparent border border-white text-white rounded-md placeholder-gray-400 focus:outline-none"
            />
            <textarea
              rows={8}
              placeholder="Message"
              name="message"
              className="p-4 bg-transparent border border-white text-white rounded-md placeholder-gray-400 focus:outline-none"
            />
            <button className="p-4 shadow-md shadow-slate-600  bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-medium rounded-md  transition-all">
              Submit
            </button>
          </motion.form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
