import { useStateContext } from '@/components/context/StateContext';
import { Layout } from '@/components';
import { motion } from 'framer-motion';
import {FiTruck}  from "react-icons/fi";
import {FaShoppingCart} from"react-icons/fa";
import {FaTruckFast} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai';
import {FaStore} from "react-icons/fa"
import Pcard from '@/components/products/shopcards/Pay-cards';
import Payform from './Paymentform';
import { useState, useEffect } from 'react';
function Shipping() {
    const [buttonHovered ,setButtonHovered] = useState(false);
    const { cartsItems ,totalprice ,shipitems } = useStateContext();
  return (
  <Layout>
    <section className='bg-white'>
    <h1 className=' text-4xl pt-32  sm:pl-32'>checkout</h1>
  <div className=' sm:flex-row flex-col flex justify-evenly  mx-5  pt-10 sm:p-10 '>
  <div className=''>
  <p className=' text-sm  opacity-60 py-10 text-danger'> please make sure your information is right</p>
  <form>
 <div className='flex'>
   
  <label class="block">
    <span class="block text-sm font-medium text-slate-700 after:content-['*'] after:text-red-500 after:ml-0.5">Username</span>
   
    <input type="text" placeholder='name'  required  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>

  <label class="block  ml-5">
    <span class="block text-sm font-medium text-slate-700 after:content-['*'] after:text-red-500 after:ml-0.5">Lastname</span>
   
    <input type="text" placeholder='name'  required   class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>
  </div>
  <label class="block mt-5">
  <span class="block text-sm font-medium text-slate-700 after:content-['*'] after:text-red-500 after:ml-0.5">phone</span>
   
  <input 
    type="text" 
    placeholder='name'
    pattern="[0-9]{8}" 
    required
    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
  />
</label>

<label class="block  mt-5">
    <span class="block text-sm font-medium text-slate-700 after:content-['*'] after:text-red-500 after:ml-0.5">Adress</span>
   
    <input type="text" placeholder='name'  required  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>

  <label class="block  mt-5">
    <span class="block text-sm font-medium text-slate-700 after:content-['*'] after:text-red-500 after:ml-0.5">postcode/zip</span>
   
    <input type="text" placeholder='name' pattern="[0-9]{4}"  required  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>

</form>
<section className="m-5">
  <h1 className="text-center text-2xl flex items-center justify-center  pb-3">
    <FaShoppingCart size={30} />
    <span className="ml-2">Delivery Method</span>
  </h1>
  <div className=" w-11/12 h-px bg-gray-300 m-auto mb-4"></div>

  <div className="flex items-center mb-4">
    <input type="radio" id="option1" name="options" className="mr-3 " />
    <label htmlFor="option1" className="flex items-center cursor-pointer">
      <span className="mr-2">
        <AiFillHome size={24} />
      </span>
      Deliver to Home (Free)
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input type="radio" id="option2" name="options" className="mr-3 " />
    <label htmlFor="option2" className="flex items-center cursor-pointer">
      <span className="mr-2">
        <FaStore size={24} />
      </span>
      Pick Up from Store (Free)
    </label>
  </div>
</section>

<Payform/>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
          className="block w-full max-w-xs mx-auto bg-indigo-500
           hover:bg-indigo-700 focus:bg-indigo-700
           text-white rounded-lg px-3 py-3 font-semibold mt-5 drop-shadow-xl  mb-6"
          type="submit"
        >
             <motion.div className="mx-1" initial={{ x: 0 }} animate={{ x: buttonHovered ? 120 : 0 }}>
               <FiTruck size={30} />
             </motion.div>
          place order
        </motion.button>

    </div>
<div className='  bg-slate-50 rounded-lg drop-shadow-xl py-5'>
<h1 className="text-center text-2xl flex items-center justify-center">
  <FaShoppingCart size={20}  />  
  <span className="ml-2">  your order</span>
</h1>


    {cartsItems.map((card) => ( <div  key={card.id} className='py-1'>
     <Pcard key={card.id} image={card.image} name={card.name} quantity={card.quantity} price={card.price} /> 
   </div>
  ))}
<div className=" w-11/12 h-px bg-gray-300 m-auto mb-2"></div>

<h1 className="flex justify-between items-center  px-6">
  <span className="text-xl text-primary px-1">Total</span>
  <span className="text-xl text-right pr-4  text-green-600">{totalprice.toFixed(2)} DT</span>
</h1>


   

    

  </div>

    </div>
   

    </section>
    </Layout>
  )
}

export default shipping