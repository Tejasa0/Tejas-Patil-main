import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/+91 98348 22123 20240502_084537.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hey, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Tejas Patil
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#14A3D2] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Backend Developer',
                'Fullstack Developer',
                'Problem Solver',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#14A3D2]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Java Developer with 3+ years of experience in the BFSI domain, building secure and scalable applications using Java,
            Spring Boot, Microservices, and REST/SOAP APIs. Hands-on experience in KYC application development, workflow-driven
            banking systems, CI/CD pipelines, Application security, and core product development.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1Ea879gWHPnSWwOrOfppoZ947frh7XHul/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg,rgb(20, 163, 210),rgb(6, 93, 105))',
            }}
          >
            Check Resume
          </a>

        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div
            style={{ borderColor: 'rgb(20, 163, 210)' }}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Tejas Patil"
              className="w-full h-full rounded-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
