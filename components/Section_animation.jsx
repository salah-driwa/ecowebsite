import { motion,useInView } from 'framer-motion';
import { useRef } from 'react';
const Section = ({ children, opacity = 0, x = -500, y=0 , duration = 0.9,delay = 0 ,scale=1 }) =>  {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
  

    const variants = {
        visible: { opacity: 1, x: 0, y: 0, transition: { duration ,delay }, scale:1 },
        hidden: { opacity, x, y ,scale }
      };
      return (
        <section ref={ref}>
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            
          >
            {children}
          </motion.div>
        </section>
      );
    };
    
    export default Section;