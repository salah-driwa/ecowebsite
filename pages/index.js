import React from 'react'
import {client} from '../lib/client';
import { Awards, Footer, Herobanner, Layout,  Product ,Service ,Teckservice,RiveAnimation} from '@/components';
import { motion } from 'framer-motion';
import Herobanners from '@/components/Herobanners';
import { StateContextProvider } from '@/components/context/StateContext';

const Home = ({products,bannerdata,awards}) =>(
  <StateContextProvider>
    
    <div className=''>

    <Layout > 
    

           <Herobanners Herobanner={bannerdata.length && bannerdata} ></Herobanners>
           
    
       
{/* 
        <motion.div className=' md:hidden block'
              >
          <Herobanner Herobanner={bannerdata.length && bannerdata} ></Herobanner>
       </motion.div>

*/}
        <Product products={products}></Product>

        <Service></Service>
        <Teckservice></Teckservice>
     

        <Awards awards={awards}></Awards>
        
        </Layout>
    </div>

    </StateContextProvider>)


export const getServerSideProps = async () => {
  const query='*[_type == "product"]';
  const products = await client.fetch(query);
  const query2='*[_type == "banners"]';
  const bannerdata = await client.fetch(query2);

  const query4='*[_type == "awards"]';
  const awards = await client.fetch(query4);


  return {
    props:{products,bannerdata,awards}
  }
}
export default Home