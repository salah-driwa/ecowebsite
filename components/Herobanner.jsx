import React,{useState,useEffect} from 'react'
import Link  from 'next/link';
import { urlfor } from '@/lib/client'; 
import {motion} from 'framer-motion'


const Herobanner = ({ Herobanner }) => {
  const [viewportWidth, setViewportWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <motion.div   className='flex  justify-start gap-4  example'  dragElastic={0.07} drag='x' dragConstraints={{ left: -(viewportWidth*(Herobanner.length-1)+(Herobanner.length*10)), right: 0 }}>
      {Herobanner.map((banner) => (
        <div style={{ minWidth: `${viewportWidth}px` }} className={` example  flex rounded-b-xl drop-shadow-2xl   `}
     
          key={banner.id}>
          <section className="flex-col scrollbar-hide example  justify-center m-auto">
            <motion.img
              animate={{ scale:1 }}
              draggable={false}
              className="relative   rounded-b-3xl"
              src={urlfor(banner.image)}
              alt="headphone"
            />

          </section>

          <section className="flex-col    top-1/3 bottom-1/3  absolute">
           <h3 className="  text-6xl font-sans  text-center  w-2/3  pl-10  text-slate-400" >{banner.product}</h3>
            <div className=' m-10  pl-16'>
              <Link href={`/product/${banner.id}`}>
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
                    
                    className="bg-dark rounded-xl p-4 min-w-content text-center text-light text-3xl"
                    type="button"
                  >
                    {banner.buttonText}
                  </motion.button>


              </Link>
              <div className="mt-6 ml-20 fontWeight-light text-xl">
                <p className="text-warning text-5xl p-2">{banner.price} DT</p>
                <p className=" text-secondary font-normal max-w-2xl">{banner.desc}</p>

                <p>{banner.saleTime}</p>
              </div>
            </div>
          </section>
        </div>
      ))}
    </motion.div>
  );
};

export default Herobanner;
