import { useRouter } from 'next/router';
import { client } from '../../lib/client';
import { urlfor } from '../../lib/client';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Layout, Section } from '@/components';
import Card_keyboards from '@/components/products/product/Card_product';
import { useState, useEffect } from 'react';
import { useStateContext } from '@/components/context/StateContext';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';

const KeyboardsPage = ({ keyboards, randomKeyboards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { qty, incqty, decqty, addtoshop } = useStateContext();

  const nextImage = () => {
    setCurrentIndex(currentIndex === keyboards.image.length - 1 ? 0 : currentIndex + 1);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? keyboards.image.length - 1 : currentIndex - 1);
  };

  const router = useRouter();
  useEffect(() => {
    setCurrentIndex(0);
  }, [router.query.id]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className='mb-20 pt-36'>
        <div className='flex flex-col sm:flex-row justify-around sm:mx-10'>
          <div className='flex flex-col sm:flex-col justify-center sm:p-10'>
            <Section x={0} scale={0.5}>
              {keyboards.image && (
                <motion.div
                  className='relative sm:w-[400px] sm:h-[300px] w-10/12 m-auto h-60'
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <motion.img
                    key={currentIndex}
                    src={urlfor(keyboards.image[currentIndex])}
                    alt={keyboards.name}
                    className='absolute top-0 left-0 w-full h-full object-cover rounded-xl'
                    style={{ objectPosition: 'center' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              )}
            </Section>

            <div className='sm:p-10 p-6 m-auto flex gap-16'>
              <Section x={0} scale={0.5}>
                <motion.button onClick={prevImage} className='w-7' whileHover={{ scale: 1.1 }}>
                  <BsFillArrowLeftCircleFill size={30} color='gray' />
                </motion.button>
              </Section>
              <Section x={0} scale={0.5}>
                <motion.button onClick={nextImage} className='w-7' whileHover={{ scale: 1.1 }}>
                  <BsFillArrowRightCircleFill size={30} color='gray' />
                </motion.button>
              </Section>
            </div>
          </div>

          <Section>
            <div className='sm:mt-10 bg-gray-100 pb-10 rounded-xl drop-shadow-xl m-auto sm:w-2/3 pt-2'>
              <h3 className='text-center text-4xl text-dark w-4/5 m-auto'>{keyboards.name}</h3>
              <p className='text-center text-3xl text-gray-600 p-2'>
                Price: {(keyboards.price * qty).toFixed(2)} DT
              </p>

              <p className='text-left text-dark w-4/5 m-auto'>
                <span className='text-xl text-primary'>Description:</span> {keyboards.details}
              </p>
              <div className='flex w-fit m-auto my-3 border-[1px] border-gray-200 rounded-md'>
                <AiFillPlusSquare
                  size={30}
                  className='text-blue-500 hover:text-blue-400 cursor-pointer'
                  onClick={incqty}
                />
                <span className='text-xl px-2'>{qty}</span>
                <AiFillMinusSquare
                  size={30}
                  className='text-blue-500 hover:text-blue-400 cursor-pointer'
                  onClick={decqty}
                />
              </div>
              <div className='flex justify-center my-5'>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onClick={() =>
                    addtoshop({
                      image: keyboards.image,
                      name: keyboards.name,
                      quantity: qty,
                      price: keyboards.price,
                    })
                  }
                  className='bg-danger rounded-lg w-32 h-10 text-white hover:bg-red-700'
                >
                  add to card
                </motion.button>
              </div>
            </div>
          </Section>
        </div>
        <h1 className='text-center text-light text-3xl uppercase'>similar products</h1>
        <div className=''>
          <div className='flex gap-10 flex-wrap justify-center m-6'>
            {randomKeyboards.map((keyboard, index) => (
              <Section opacity={0} delay={index * 0.3} key={keyboard._id}>
                <Card_keyboards
                  id={keyboard._id}
                  keyboards={keyboard}
                  product={keyboard}
                  type={'keyboards'}
                />
              </Section>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const query = '*[_type == "keyboards"]{slug}';
  const keyboards = await client.fetch(query);

  const paths = keyboards.map((keyboard) => ({
    params: { id: keyboard.slug.current },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const keyboards = await client.fetch(`*[_type == "keyboards" && _id == "${id}"][0]`);

  const query = `*[_type == "keyboards" && _id != "${id}"] | order(_createdAt desc) [0...4]`;
  const randomKeyboards = await client.fetch(query);

  return {
    props: {
      keyboards,
      randomKeyboards,
    },
  };
};

export default KeyboardsPage;
