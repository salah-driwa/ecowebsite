import React from 'react';
import { Section}  from '.';
import { motion } from 'framer-motion';
import Footerlink from './Footer-link';
import Footerdata from './data/Footerdata';
import Social from './data/Social';
function Footer() {


  return (<section  id='footer' className=' bg-slate-900'>
          
            <section>
                  <div>
                  <Section delay={0}>
                      <h1 className=' text-light text-lg m-auto p-4 sm:mx-32'>WHY BUY FROM cybros PC?</h1>
                    </Section>
                    <Section delay={0.1}>
                      <p className=' text-light font-basicgothic  font-thin text-sm m-5 sm:mx-32'>If you’re searching for the cheapest Gaming PC made with inferior products and questionable quality, you might as well leave now. ORIGIN PC only uses the highest quality performance Gaming PC components available. Every single customized Gaming PC and Gaming Laptop is assembled right here in the United States by highly trained and incredibly skilled technicians and assembly engineers. Sure, we can assemble our award-winning Gaming PCs overseas for less. In fact, that’s what most of our competitors do. However, we choose to assemble all our Gaming PCs right here in the United States because it gives us the best control over manufacturing, performance, and overall quality. And we’re thrilled to hire only the best PC Builders in the country.</p>
                      </Section>
                      <Section delay={0.2}> <div className='mx-32 mt-5'><motion.a whileHover={{opacity:0.6}} href='#' className='text-danger font-basicgothic '>SHOW MORE</motion.a>
                     </div > 
                     </Section>
                      </div>
            </section>
         

         <Footerlink product={Footerdata}/> 

              <div class=" border-b-2 border-gray-500 w-1/2  h-1 m-auto mb-10  "></div>
              <div className=' flex sm:justify-evenly flex-col sm:flex-row  w-full'>
                <div className='flex  justify-start  gap-9 m-auto mb-10 '>
                {Social.map((item, index) => (
                        <Section x={-100} delay={index*0.2} key={index}>
                          <motion.div whileHover={{scale: 1.1}} className='sm:h-10 sm:w-10 h-3 w-3 sm:px-10'>
                            <a href={item.url}>
                              {item.icon}
                            </a>
                          </motion.div>
                        </Section>
                      ))}
                      </div>
                <Section>
                     <p className='text-light font-basicgothic  font-thin text-sm  m-3'>© 2023 ORIGIN PC Corporation. All Rights Reserved.</p>
                </Section>
              </div>        
          </section>
  )
}

export default Footer