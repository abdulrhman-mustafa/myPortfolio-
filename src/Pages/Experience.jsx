import React from 'react';
import { motion } from 'framer-motion';
const Experience = () => {
    return (
        <motion.div 
            initial = {{x: 40, opacity:0}} 
            animate = {{x: 0, opacity:1}}
            transition= {{duration:1.5}}
            className="experience xl:absolute xl:top-50 xl:left-60 lg:p-8 max-lg:p-5 lg:ml-80 lg:flex-1">
            <div className="content text-zinc-100">
                <h1 className="text-zinc-100 lg:text-4xl max-lg:text-2xl font-bold mb-3">Freelance Front-End Developer</h1>
                <p className="text-zinc-400 mb-7">Self-Employed · Remote · dec 2024 – Present</p>
                <ul className="space-y-4 border-zinc-800 max-lg:w-auto lg:w-[650px] ">
                    <li className="text-zinc-400 relative pl-7">Designed and developed responsive, user-focused interfaces for e-commerce platforms, ensuring fast load times and seamless user experiences.</li>
                    <li className="text-zinc-400 relative pl-7">Built and optimized high-converting landing pages tailored to client goals, with a focus on performance, accessibility, and SEO best practices.</li>
                    <li className="text-zinc-400 relative pl-7">Collaborated directly with clients from various industries to transform their ideas into functional, modern websites.</li>
                    <li className="text-zinc-400 relative pl-7">Utilized tools like( Js, React.js, Tailwind CSS, etc...), and version control with Git to deliver clean and maintainable code.</li>
                    <li className="text-zinc-400 relative pl-7">Gained solid experience in independent project management, client communication, and meeting deadlines efficiently.</li>
                </ul>
            </div>
        </motion.div>
    );
}

export default Experience;
