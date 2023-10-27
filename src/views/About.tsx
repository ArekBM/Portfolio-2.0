// assets
import aboutPageImg from "../assets/about-me-page.svg";
// import twitterIcon from "../assets/twitter-icon.svg";
// import youtubeIcon from "../assets/youtube-icon.svg";
// import { useState } from 'react'
// import GitHubIcon from '@mui/icons-material/GitHub';

// components
import { SocialMediaIcon, Reveal } from "../components";
// import AnimatedLetters from "../components/animatedLetters";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {

  return (
    <div 
      id='about'
      className='min-h-screen flex items-center justify-center relative'
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      >
        <div 
          className='max-w-screen-2xl flex flex col xl:flex-row xl:justify-between
            items-center xl:items-start gap-12 w-full py-16 px-12'
            >
              <div className='flex-1 flex flex-col gap-4'>
                <Reveal>
                  <h2 className='text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px]
                    font-bold text-textPrimary'>
                    About <span className='text-secondary'>me</span>
                  </h2>
                </Reveal>
                <Reveal>
                  <p className='text-center xl:text-start text-base sm:text-lg text-textSecondary'>
                    During my time at Apple and Dyson I worked in sales as well technical roles, I achieved several accolades including top salesman and most improved technician in a six month quarter. I felt like I accomplished what I needed to do in the retail space. Also, there were many itches retail simply couldn't scratch. Then I discovered programming.
                    <br />
                    <br />
                    Web development allows me to express my creativity in a more satisfying way. To create with clear structure and to focus in on details in a way I've never been able to do before.
                    <br />
                    <br />
                    After over a year of study, I am ready to contribute to the world in a new way and I'm looking forward to bringing the best traits of a creative developer as well as someone who is immersed in the customer experience. Over my career I have learned how to get things done, keep my cool in dire moments, work with lots of different types of people, and take initiative to pick up slack when needed.
                  </p>
                </Reveal>
                <motion.div 
                  variants={fadeIn('up')}
                  transition={transition()}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: false }}
                  className='flex items-center justify-center xl:justify-start gap-6'>
                  <SocialMediaIcon svg='Github' title='Github'></SocialMediaIcon>
                  <SocialMediaIcon svg='LinkedIn' title='LinkedIn'></SocialMediaIcon>
                </motion.div>
              </div>
            </div>

            <div className='absolute bottom-0 left-0 w-full h-[1px] bg-divider' />
      </div>
  );
};

export default About;
