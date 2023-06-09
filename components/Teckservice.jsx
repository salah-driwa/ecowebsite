import React from 'react';
import { motion,useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '.';

const Teckservice = () => {
  return (
    <div className=' relative  sm:h-3/4 ' id="tecksupp">
      <Section  delay={0} x={-200} duration={0.6} > 
       <img  className=' w-full  h-full  object-contain pointer-events-none'
        src='/asets/img1.png' alt="hello" 
      />
     </Section>
    
      <div className=' text-light sm:absolute   sm:right-0 sm:top-1/2 sm:bottom-1/2 sm:pr-52 mt-10'>
      <Section  delay={0} x={-200} scale={0.8} duration={0.8} >
        <h1 className=' text-center  sm:w-96  sm:text-4xl'>ASSEMBLED AND SUPPORTED</h1>

        <motion.div class="h-2 border-t-2 mt-10 m-auto"
        animate={{ width:['20%','100%','20%']}}
        transition={{duration:6, repeat: Infinity  }}
        ></motion.div>
        
        </Section>

        

        <Section delay={0.1} scale={0.6} x={-200} duration={0.8}>
        <h1 className=' text-center  sm:w-96  text-danger sm:text-2xl p-5'>IN TUNSIA</h1>
        </Section>

        <Section delay={0.2} x={-200} scale={0.8} duration={0.8} >
        <h1 className=' text-center mx-6   sm:w-96 '>By buying an cybros PC, you get access to a fast and powerful PC as well as supporting jobs based in Tunsia.</h1>
        </Section>

      </div>
      
    </div>
  );
};

export default Teckservice;
