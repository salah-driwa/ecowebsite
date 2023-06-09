import { useState } from 'react';
import { client } from '../../../lib/client';
import { urlfor } from '@/lib/client';
import Link from 'next/link';
import Card_laptop from './Card_product';
import { motion } from 'framer-motion';
import {FaSearch} from 'react-icons/fa';
import { Section } from '@/components';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



const Product = ({ Products, productname }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  const filteredProducts = Products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'az') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'za') {
      return b.name.localeCompare(a.name);
    } else if (sortBy === 'low') {
      return a.price - b.price;
    } else if (sortBy === 'high') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    
    <div className='mb-20'>
       
     <Section>
      <h1 className='text-center text-light text-6xl uppercase p-5'> { productname }</h1>
      </Section>
      <Section delay={0.3}>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center  '>
        <div className='flex sm:pl-32 sm:m-0 m-5'>

       
          <motion.input 
          whileFocus={{scale:1.05 , duration: 0.5}}
         
            transition={{  }}
            type='text'
            placeholder='Search laptops...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='border rounded-md py-2 px-3 w-96'
          />
           
        </div>
       
        <div className='p-5'>
          <label htmlFor='sort-by' className=' text-light p-5'>
            Sort by:
          </label>
          <select
            name='sort-by'
            id='sort-by'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='border rounded-md py-2 px-3'
          >
            <option value=''>Select an option</option>
  <option value='az'>
    A-Z
  </option>
  <option value='za'>
  Z-A
  </option>
  <option value='low'>
  Price Low to High
  </option>
  <option value='high'>
    Price High to Low
  </option>
          </select>
        </div>
      </div>
      </Section>

      <div className='flex  flex-wrap justify-center   sm:mx-14 m-auto  sm:justify-items-center'>
                {sortedProducts.map((product,index) => (
                  
                  <div className='' key={product._id}>
                    <Section delay={index*0.2} x={0} y={100} scale={0.6} >
             <Card_laptop key={product._id} id={product._id} product={product}  type={productname}/> 
             </Section>
             </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
