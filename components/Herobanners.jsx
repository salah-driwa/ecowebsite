import React, { useState,useEffect } from 'react';
import { urlfor } from '@/lib/client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Section } from '.';

const Herobanners = ({ Herobanner }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide - 1 + Herobanner.length) % Herobanner.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % Herobanner.length);
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0.4 },
  }
  const goto =(index) =>{
    setCurrentSlide( index);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % Herobanner.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide, Herobanner.length]);


  return (
    <Section x={0} y={-100}>
      <section className=' h-[500px] sm:h-auto bg-[#1e1f24] '>
       
    <div className="relative flex    top-20">
      <div className="relative top-0 left-0 w-full ">
        <AnimatePresence initial={false}>


         
          <motion.div
            key={currentSlide}
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              className="absolute "
              key={Herobanner[currentSlide].id}
              src={urlfor(Herobanner[currentSlide].image)}
              alt=""
            />

            <motion.section className="flex-col  flex   sm:top-20 top-44   absolute"
            initial={{ x:-150 }}
            animate={{ x:0 }}
            exit={{ x:-100 }}
            transition={{ duration: 0.5 }}>
               <Section delay={0.1}>
             <h3 className="sm:text-xl    font-sans    sm:text-center    sm:w-1/2 
                 text-slate-400  pl-6 xl:text-6xl" >
                  {Herobanner[currentSlide].product}
                 </h3>
             </Section>
              <div className=' sm:m-10  sm:pl-16 mx-3'>
            
            <Section delay={0.2}> 
                <Link href={`${Herobanner[currentSlide].discount}`}>
                    <motion.button
                      initial={{ scale: 1 }}
                      whileHover={{
                        backgroundColor: "rgba(220, 53, 69, 0.7)",
                        boxShadow: "0 0 10px rgba(220, 53, 69, 0.7)",
                        scale: 1.1,
                         transition: { duration: 0.2 }
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 10px rgba(220, 53, 69, 0.7)",
                          "0 0 10px rgba(255, 0, 0, 0.7)",
                          "0 0 10px rgba(0, 255, 0, 0.7)",
                          "0 0 10px rgba(0, 0, 255, 0.7)",
                          "0 0 10px rgba(255, 255, 0, 0.7)"
                        ],
                        transition:{ duration: 2, repeat: Infinity, repeatType: "reverse" }
                      }}

                      className="bg-dark rounded-xl p-4 min-w-content text-center
                      mt-3  text-sm sm:m-0 text-light sm:text-3xl"
                      type="button"
                      >
                      {Herobanner[currentSlide].buttonText}
                    </motion.button>
                </Link>

              </Section>
              <Section delay={0.3}>             
                <div className="mt-2 ml-8 xl:mt-6 xl:ml-20 fontWeight-light text-xl">
                  <p className="text-warning text-2xl xl:text-5xl p-2">{Herobanner[currentSlide].price} DT</p>
                  <p className="text-secondary font-normal max-w-xs  w-96 xl:max-w-2xl">{Herobanner[currentSlide].desc}</p>

                  <p>{Herobanner[currentSlide].saleTime}</p>
                </div>
                </Section>
              </div>
          </motion.section>
          </motion.div>
        </AnimatePresence>


        <button
          className="absolute text-light top-[40vh] xl:top-[40vh] left-2 sm:left-10 text-5xl transform -translate-y-1/2 opacity-60"
          onClick={handlePrevClick}
        >
          ❰

        </button>
        <button
          className="absolute text-light top-[40vh] xl:top-[40vh] right-2  sm:right-10 text-5xl transform -translate-y-1/2 z-10 opacity-60"
          onClick={handleNextClick}
        >
          ❱
        </button>

       


      </div>
      </div>
      <div><img src='/asets/bg.png' className='  static ' /></div>
      <div className=' relative   bottom-0   top-0  text-7xl  h-auto z-50 flex justify-center'>
       {Herobanner.map((banner, index) => (
        <motion.button  className=' h-1 text-white'
        initial={{opacity:0.4}}
         animate={currentSlide === index ? "visible" :"hidden"}
        variants={variants}   whileHover={{opacity:1}} onClick={() =>goto(index)}>
        .
        </motion.button>
       ))
       }
       </div>

      </section>
      </Section>
  );
};

export default Herobanners;
