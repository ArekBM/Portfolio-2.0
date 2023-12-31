import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// assets
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";

// components
import { Button, LabelInput, Reveal, SentEmailModal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const Contact: React.FC = () => {

  const [ emailModalOpen, setEmailOpen ] = useState(false)

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()


    if(form.current){
      emailjs.sendForm('service_bxyc5tm', 'template_6uv8k5k', form.current, 'CCjxA3suyagjrswyg')
        .then((result) => {
          console.log(result.text)
        }, (error) => {
          console.log(error.text)
      })
        .then(
          () => {
            setEmailOpen(true)
          },
          () => {
            alert('Failed to send :(')
          }
        )
    }
  }

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${contactPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SentEmailModal
        isOpen={emailModalOpen}
        onClose={() => setEmailOpen(false)}
      />
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
      items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              Got a project in<span className="text-secondary"> mind?</span>
            </h2>
          </Reveal>
          <motion.img
            variants={scale()}
            transition={transition()}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false }}
            src={contactIllustration}
            alt=""
            className="max-h-[348px]"
          />
        </div>

        <motion.div
          variants={fadeIn('up')}
          transition={transition()}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false }}
          className="flex-1 flex flex-col gap-6 w-full max-w-[696px]"
        >
          <form ref={form} onSubmit={sendEmail} >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <LabelInput labelText="Name" name='Name' placeholderText="Name" />
              <LabelInput labelText="Email" name='Email' placeholderText="Email" />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <LabelInput
                labelText="Message"
                name='Message'
                placeholderText="Message"
                textarea
              />
            </div>
            <Button secondary>Send Message</Button>
          </form>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  )
}

export default Contact;
