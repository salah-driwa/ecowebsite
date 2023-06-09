import React from 'react'
import { urlfor } from '@/lib/client'
import {BsTrashFill} from 'react-icons/bs' 
import { useStateContext } from '@/components/context/StateContext'
import {AiFillPlusSquare} from 'react-icons/ai'
import {AiFillMinusSquare}from 'react-icons/ai'
const Pcard = ({ image, name, quantity, price }) => {
    const {deleteFromCart ,handleIncreaseOrder ,handleDecreaseOrder } = useStateContext();
  return (
    <div className="flex flex-col justify-center sm:m-6 m-2 sm:p-0   text-sm p-3  ">
        
    <div><img src={urlfor(image[0])} alt={name} className=' sm:px-4 sm:h-10 sm:w-22 sm:p-0 m-auto  h-20 w-20  p-3' />
     </div> 
     <h2 className='sm:px-2 text-lg text-center'>{name}</h2> 
     <div className=' flex mt-5  justify-evenly'>  
     <div className="flex h-full   border-[1px] border-gray-200 rounded-md">
      <AiFillPlusSquare
        size={30}
        className="text-blue-500 hover:text-blue-400"
        onClick={()=>handleIncreaseOrder(name)}
      />
      <span className="text-xl px-2">{quantity}</span>
      <AiFillMinusSquare size={30} className="text-blue-500 hover:text-blue-400" 
        onClick={()=>handleDecreaseOrder(name)}/>
    </div>
            <p className=' text-md pl-3 pt-3'>Price:
            DT {price.toFixed(2)}</p>
      <div className='sm:m-2 h-full  pl-1'  onClick={() => deleteFromCart(name)}><BsTrashFill size={30}/></div>
     </div>
   
    </div>
  )
}

export default Pcard
