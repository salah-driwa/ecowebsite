import { Section } from ".";
import { urlfor } from '@/lib/client'; 
import {motion} from 'framer-motion'
 const Awards = ({awards}) => {
    return (  
      <Section>
            <div id='awards' className="flex flex-wrap justify-center  gap-10 w-full sm:p-10 sm:h-96 pb-10">
               {awards.map((award,index)=>(
                  <motion.div whileHover={{scale:1.1}} className="sm:py-20  ">
                <Section delay={index*0.2} opacity={0.2 *index} scale={0}  >
               <a href={award.url}>
                  <img src={urlfor(award.image)} alt=""  className=" object-contain sm:w-48 sm:h-36 w-28 m-2  sm:m-6" />
               </a>
                 </Section>
                  </motion.div> 
               ) )}
            </div>
      </Section>
    );
 }
  
 export default Awards;