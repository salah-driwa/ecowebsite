import React from 'react'
import { motion } from 'framer-motion';
import {CgProfile} from 'react-icons/cg';
import{TbLogout} from 'react-icons/tb';
import {AiOutlineSetting} from 'react-icons/ai';
import {useSession,signIn,signOut} from 'next-auth/react';
import Link from 'next/link';
function Account() {
    const {data: session}= useSession()
    if(session){
        return(     
        <div className='m-auto'>
            <Link href="/profile/Profile">
               <motion.button 
                        whileHover={{scale:1.05,color:'white'}} 
                        className='  w-full   hover:bg-slate-400  p-2'> <span className=' absolute left-3'>
                            <CgProfile size={20} width={10}/> 
                            </span> my profile</motion.button>
                </Link>

    <motion.button 
            whileHover={{scale:1.05,color:'white'}} 
             className='  w-full   hover:bg-slate-400  p-2'> <span className=' absolute left-3'>
                <AiOutlineSetting size={20} width={10}
             /> </span> setting</motion.button>      
    
            <Link href="/">
                <motion.button onClick={() => signOut()} whileHover={{ scale: 1.05, color: 'white' }} className='w-full hover:bg-slate-400 p-2'>
                <span className='absolute left-3'>
                    <TbLogout size={20} />
                </span>
                Logout
                </motion.button>
            
            </Link>

     </div>
            )
    } else{
return (        
    <motion.button 
    whileHover={{scale:1.05,color:'white'}} 
    onClick={()=>signIn()}
    className='  w-full   hover:bg-slate-400  p-2'> <span className=' absolute left-3'><CgProfile size={20} width={10}/> </span> signIn</motion.button>
      );
    }
 
    
}

export default Account