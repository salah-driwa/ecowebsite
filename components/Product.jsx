import React from 'react'
import Link from 'next/link';
import { urlfor } from '@/lib/client'; 
import { motion } from 'framer-motion'
import { Section } from '.';
import { useRouter } from 'next/router';
import {AiFillShop} from 'react-icons/ai'



function Product({ products }) {
  const router = useRouter();

  const handleClick = (slug) => {
    router.push({
      pathname: `/product/${slug}`,
    });
  };
  

  return (
    <Section x={0} y={-100}  >

      <div className='bg-slate-800 mt-20   static' id='product' >
        
        <motion.h1 className='text-center sm:p-6 text-3xl bg-warning'> <AiFillShop style={{margin:'auto'}} size={34}/>OUR PRODUCTS</motion.h1>
        <div className='flex snap-x px-10 py-5 gap-5   sm:justify-around overflow-x-scroll drop-shadow-xl sm:flex-row sm:py-10 sm:items-center sm:gap-2  '>
          {products.map((product, index) => (
            <Section className='' x={-100} scale={0.8} delay={index*0.2} key={product._id}>
              <motion.div
              whileHover={{scale:1.1}}
                className='bg-[#1e1f24] outline outline-offset-2 
                w-64 h-36 sm:w-full sm:h-full overflow-x-auto outline-2 my-2 snap-center
                 outline-secondary rounded-sm  lg:m-2 xl:m-2
                 '
                onClick={() => handleClick(product.slug.current)}
              >
                <img
                  src={urlfor(product.image)}
                  alt={product.name}
                  className='xl:h-44 h-28 sm:h-36 w-80 m-auto object-contain'
                />
                <h3 className='text-center text-warning'>{product.name}</h3>
              </motion.div>
            </Section>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Product;
