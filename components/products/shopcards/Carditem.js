import Card from './Card.js';
import Link from 'next/link.js';
import { motion } from 'framer-motion';
import {useSession,signIn} from 'next-auth/react';
import { useRouter ,} from 'next/router';

const Carditem = ({ cards ,totalprice ,shipitems  }) => {
  const {data: session}= useSession()
  const router = useRouter();
  const handleShippingClick = () => {
    if (!session) {
    signIn();
    } else {
      router.push('/shipping/shipping');
    }
  };




  return (
    <div className=' '>
      {cards.map((card) => ( <div  className='my-10' key={card.id} >
        <Card key={card.id} image={card.image} name={card.name} quantity={card.quantity} price={card.price} />
       
       </div>
      ))}
      <div className=' text-sm'> 
      <h1 className=' m-6 flex justify-around'>
         <span>TOTAL:<span className=' text-primary text-sm'>{totalprice.toFixed(2)}  DT </span> </span> 
  
         <motion.button disabled={!cards.length} onClick={handleShippingClick}
         whileHover={{scale:1.1,color:'white'}} 
          className='bg-primary w-16 h-10 rounded-lg  '> SHIP</motion.button>
   
    </h1>
   </div>
        
    </div>
  );
};


export default Carditem;
