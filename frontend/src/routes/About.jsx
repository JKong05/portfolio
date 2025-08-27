import React from 'react'
import aboutImg from '../assets/about/about.jpg'
import Resume from "/justin-kong-resume.pdf";

export default function About() {
  return (
    <div className="box-content mx-4 pl-4 pb-4 text-base">
      <div className="flex box-content mb-8">
        <h1 className="text-6xl font-bold pt-4 text-white">
          Hey, I'm <span className="text-sky-600">Justin!</span>
        </h1>
      </div>

      <div className="flex justify-center mb-12">
        <div className="relative group">
          <img 
            src={aboutImg} 
            alt="about" 
            className="w-48 h-48 object-cover rounded-full shadow-xl hover:brightness-105 transition duration-300" 
          />  
        </div>
      </div>

      <div className="mx-auto">
        <div className="leading-relaxed">
          I am a current junior at Vanderbilt University double majoring in{" "}
          <span className="text-green-600 bg-black px-1">Computer Science (CS)</span>{" "}
          and <span className="text-cyan-500">Medicine, Health, and Society (MHS)</span>! 
          I am particularly interested in the intersection of technology and healthcare.
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold">Education</h2>
          <div>
          My journey into tech and computer science wasn’t typical. I initially came to Vanderbilt to study biochemistry, driven by a passion for healthcare and helping others. However, after taking my school’s <span className="italic">introduction to Java course</span>, I was captivated by the creative problem-solving and real-world applications of coding. I realized I could still make a difference outside of traditional healthcare. Through Vanderbilt’s <a href="https://as.vanderbilt.edu/medicine-health-society/major-minor/" className="underline" target="_blank">Medicine, Health, and Society</a> curriculum, I found a way to blend my technical skills with my interest in healthcare, allowing me to pursue both passions in a meaningful way.
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Background</h2>
          <div>
            I was born and raised in the heart of South Carolina, but my parents are both from South Korea! As my extended family all live in the states, I hope to one day visit Korea and indulge myself in the food and culture. When touching grass, some interests of mine currently include
            bouldering, ultimate frisbee, and watching soccer <span className="font-semibold text-sky-500">come on you Spurs!</span> I also am a huge fan of games (this site's design is inspired by Steam!) and my most favorite titles include God of War, Slime Rancher, and VALORANT.
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Experiences</h2>
          <div>
            I have had the opportunity to work with a variety of organizations here at Vanderbilt and with external companies as well, applying my technical expertise in <span className="font-semibold text-sky-500">web development, data analysis, and software development</span>. I've learned and applied languages and frameworks such as Python, Java, JavaScript, React, Node.js, and more. For a more detailed
            breakdown of my prior experiences and working skills, please refer to my <a
            href={Resume}
            download="justin-kong-resume.pdf"
            target="_blank"
            className="underline"
            >resume</a>.
          </div>
        </div>
      </div>
    </div>
  )
}
