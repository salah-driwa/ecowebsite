import { useRouter } from 'next/router';
import {client} from '../../lib/client';
import { urlfor } from '../../lib/client';
import{ BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from  "react-icons/bs";
import  {AiFillMinusCircle,AiFillPlusCircle}from  "react-icons/ai";
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components';
import Card_laptop from '@/components/products/product/Card_product';
import { useState ,useEffect} from 'react';
import { useStateContext } from '@/components/context/StateContext';
import { Section } from '@/components';
import {AiFillPlusSquare} from 'react-icons/ai'
import {AiFillMinusSquare}from 'react-icons/ai'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const LaptopPage = ({ laptop, randomLaptops }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { qty,incqty,decqty,addtoshop } = useStateContext();
    


    const nextImage = () => {
      setCurrentIndex(currentIndex === laptop.image.length - 1 ? 0 : currentIndex + 1);
    };
    
    const prevImage = () => {
      setCurrentIndex(currentIndex === 0 ? laptop.image.length - 1 : currentIndex - 1);
    };

  const router = useRouter();
  useEffect(() => {
    setCurrentIndex(0);
  
  }, [router.query.id]);

  if (router.isFallback) {
    return (  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <div className="m-auto">
      <div className="m-auto flex justify-center w-screen">
        {<Skeleton height={200}/>}
      </div>
    </div>
  </SkeletonTheme>)
  }

  return (
    <Layout>
      <div className=' mb-20 pt-36'>
        <div className='flex flex-col sm:flex-row  justify-around sm:mx-10'>
          <div className='flex flex-col sm:flex-col justify-center  sm:p-10 '>
         
       <Section x={0} scale={0.5}>
        {laptop.image && (
  <motion.div
    className="relative  sm:w-[400px] sm:h-[300px]   w-10/12 m-auto  h-60 "
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
   
    transition={{ duration: 1 }}
  >
    <motion.img
      key={currentIndex}
      src={urlfor(laptop.image[currentIndex])}
      alt={laptop.name}
      className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
      style={{ objectPosition: 'center' }}
      initial={{ opacity: 0 ,scale:0.9  }}
      animate={{ opacity: 1 ,scale:1}}
      
      transition={{ duration: 0.2 }}
    />
  </motion.div>
)}

</Section>   
            <div className='sm:p-10 p-6 m-auto flex gap-16'>
            <Section x={0} scale={0.5}>
              <motion.button onClick={prevImage} className='w-7' whileHover={{ scale: 1.1 }}>
                <BsFillArrowLeftCircleFill size={30} color='white' />
              </motion.button>
              </Section>
              <Section x={0} scale={0.5}>
              <motion.button  onClick={nextImage} className='w-7' whileHover={{ scale: 1.1 }}>
                <BsFillArrowRightCircleFill size={30} color='white' />
              </motion.button>
              </Section>
            </div>
          </div>
          <Section>

          <div className=' sm:mt-20   bg-[#0e2339] pb-10 rounded-xl drop-shadow-xl'>
            <h3 className='text-center text-2xl p-4 text-light w-4/5 m-auto'>
              {laptop.name}
            </h3>
            <p className='text-center text-3xl text-warning  p-2'>
              Price: DT {(laptop.price * qty).toFixed(2)}
            </p>

            <p className=' text-center text-light w-4/5 m-auto'>
              {' '}
              <span className='text-xl text-primary'>Description:</span>{' '}
              {laptop.details}
            </p>
            
                         <motion.div 
                                className='text-xl text-white text-center flex justify-center gap-6 p-5' 
                               
                                >
                                <div>Quantity</div>
                             <div>
                                    <motion.button whileHover={{ scale: 1.1 }}>
                                    <AiFillMinusCircle onClick={decqty} />
                                    </motion.button>
                                </div>

                                <div>{qty}</div>

                             <div>
                                    <motion.button whileHover={{ scale: 1.1 }}>
                                    <AiFillPlusCircle onClick={incqty} />
                                    </motion.button>
                                </div>
                         </motion.div>
                         <div className='flex justify-center  my-5'>
              <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={() => addtoshop({
                  image:laptop.image,
                  name: laptop.name,
                  quantity: qty,
                  price: (laptop.price ),
                })}
                className='bg-danger rounded-lg w-32 h-10 text-white '

              >
                add to card
              </motion.button>
            </div>
                        
          </div>
          </Section>
        </div>
        <Section x={0} y={-50}>
        <h1 className=' text-center text-light text-3xl uppercase'>
          similar products
        </h1>
        </Section>
        <div className=''>
            <div 
            
            className='flex  gap-10 flex-wrap justify-center m-6'>
              {randomLaptops.map((laptop,index) => (
                <Section opacity={0} delay={index*0.3} key={laptop._id}>
              
                <Card_laptop key={laptop._id} id={laptop._id} product={laptop} type={"laptops"} />
                </Section>
              ))}
            </div>
        </div>
      </div>
    </Layout>
  );
};




export const getStaticPaths = async () => {
  const query = '*[_type == "laptops"]{slug}';
  const laptops = await client.fetch(query);

  const paths = laptops.map((laptop) => ({
    params: { id: laptop.slug.current },
  }));

  return { paths, fallback: true  } ;
};

export const getStaticProps = async ({ params }) => {
    const { id } = params;
  
    const laptop = await client.fetch(`*[_type == "laptops" && _id == "${id}"][0]`);
  
    const query = `*[_type == "laptops" && _id != "${id}"] | order(_createdAt desc) [0...4]`;
    const randomLaptops = await client.fetch(query);
  
    return {
      props: {
        laptop,
        randomLaptops,
      },
    };
  };
  
  
export default LaptopPage;
