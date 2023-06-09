import React from 'react'
import { urlfor } from '@/lib/client'
import {BsTrashFill} from 'react-icons/bs' 
import { useStateContext } from '@/components/context/StateContext'
import {AiFillPlusSquare} from 'react-icons/ai'
import {AiFillMinusSquare}from 'react-icons/ai'
const Card = ({ image, name, quantity, price }) => {
    const {deleteFromCart,handleIncreaseOrder ,handleDecreaseOrder  } = useStateContext();
  return (
    <div className="flex  sm:justify-evenly sm:m-6 m-2 sm:p-0   text-sm p-3">
        
   <img src={urlfor(image[0])} alt={name} className=' sm:px-4 sm:h-10 sm:w-22 sm:p-0  w-20  p-3' />
      <h2 className='sm:px-10'>{name}</h2>
      
      <div className="flex h-full p-1 border-[1px] border-gray-200 rounded-md">
      <AiFillPlusSquare
        size={30}
        className="text-blue-500 hover:text-blue-400"
        onClick={()=>handleIncreaseOrder(name)}
      />
      <span className="text-xl px-2">{quantity}</span>
      <AiFillMinusSquare size={30} className="text-blue-500 hover:text-blue-400" 
        onClick={()=>handleDecreaseOrder(name)}/>
    </div>
      <div className='sm:m-2'  onClick={() => deleteFromCart(name)}><BsTrashFill size={20}/></div>
      
    </div>
  )
}

export default Card
