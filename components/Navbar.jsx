import { useState,react } from 'react';
import Link from 'next/link';
import { HiShoppingCart } from 'react-icons/hi';
import {CgProfile} from 'react-icons/cg'
import { motion } from 'framer-motion';
import Carditem from './products/shopcards/Carditem';
import { useStateContext } from './context/StateContext';
import { Section } from './Section_animation';
import Account from './auth/Account';
import {useSession} from 'next-auth/react';
import Logo from './Logo';





const Navbar = ({notification}) => {
 

  const {data: session}= useSession()
  const { cartsItems ,totalprice ,shipitems } = useStateContext();
  const [CisOpen, setCisOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setprofile] = useState(false);

const toggleprofile =() =>{
  setprofile(!profile);
  setCisOpen(false);
  setIsOpen(false);
}

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setCisOpen(false);
    setprofile(false);
  };
  const toggleshop = () => {
    setCisOpen(!CisOpen);
    setIsOpen(false);
    setprofile(false);
  };

  return (
    
    <nav className="flex items-center justify-between flex-wrap  bg-slate-100 pt-6 w-full  z-50 fixed   border-b-2 border-gray-300">
           <div className="flex w-full  justify-start  sm:flex-shrink-0 sm:mr-6">
     
      <button
            className="mobile-menu-button focus:outline-none md:hidden "
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-gray-600 hover:text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
      </button>

        <Link href="/"   className=""> 
                 <Logo/>
        </Link>
       
        
                        <div className="w-full  sm:flex sm:justify-around sm:w-auto   hidden">
                   <div className=" text-xl sm:flex ml-20 gap-16 pt-3">
                   
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="block mt-4 lg:mt-0 text-gray-600  hover:text-gray-900 mr-4 lg:inline-flex">        
                        <Link href="/#footer">About</Link>
                      </motion.div>

    
                      <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="block mt-4 lg:mt-0 text-gray-600 hover:text-gray-800 mr-4 lg:inline-flex"
                    >
                        
                        <Link href="/#product"  >product</Link>
                    
                      </motion.div>


                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="block mt-4 lg:mt-0 text-gray-600 hover:text-gray-800 mr-4 lg:inline-flex"
                    >
                      <Link href="/#tecksupp">Tech Support</Link>
                    </motion.div>


                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="block mt-4 lg:mt-0 text-gray-600 hover:text-gray-800 mr-4 lg:inline-flex"
                    >
                      <Link href="/#awards">Awards</Link>
                    </motion.div>
                  </div>
                </div>

<section className='  flex gap-3 pt-3 pr-3  sm:gap-6 mx-3 ml-auto '>

    <div className="relative ml-auto ">
      
              <motion.div whileHover={{scale:1.1}}  
                  whileTap={{scale:[1,1.4,1] 
                  ,transition:{duration:0.5}}}

                   onClick={toggleprofile} >{ session ? <div className='flex'><div className=' sm:pt-2 sm:pr-2 sm:block  hidden'>{session.user.name}</div> <img className=' rounded-full sm:w-10 w-10  border-2  border-primary' src={session.user.image}/></div>: <div><CgProfile size={32} /></div>}

                    
              </motion.div>
  <div className= {`${
            profile ? 'block' : 'hidden'
          }  absolute sm:right-5 top-10  -right-16 w-[250px]  rounded-sm   sm:w-[200px]  z-30 bg-white  `}>
      <Account />
      </div>
    </div>




                <div className="relative ml-auto ">
 <motion.div whileHover={{scale:1.1}}  whileTap={{scale:[1,1.4,1] ,transition:{duration:0.5}}} onClick={toggleshop}> <HiShoppingCart size={32}  />
  <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full text-xs flex items-center justify-center w-5 h-5 " >{notification>99 ? 99 : notification}</span>
  </motion.div>
  <div className= {`${
            CisOpen ? 'block' : 'hidden'
          }  absolute sm:right-5 top-10 -right-5   w-[350px]    sm:w-[600px]  z-30 bg-white  `}>
      <Carditem cards={cartsItems} totalprice={totalprice} shipitems={shipitems}/>
      </div>
</div>
</section>
      </div>
      
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:w-auto`}
        >
          <div className=' sm:hidden block'>
            <ul className="text-gray-600 md:flex md:justify-center text-center my-6">
              
              <li>
                <Link href="/#product">
                  <div className="block mt-4 lg:mt-0 hover:text-gray-800 mr-10  w-screen">
                    product
                  </div>
                </Link>
              </li>
              <li>
                <Link href=" /#footer">
                  <div className="block mt-4 lg:mt-0 hover:text-gray-800 mr-10">
                    About
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#tecksupp">
                  <div className="block mt-4 lg:mt-0 hover:text-gray-800 mr-10">
                    TechSupport
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#awards">
                  <div className="block mt-4 lg:mt-0 hover:text-gray-800 mr-10">
                    Awards
                  </div>
                </Link>
              </li>
            </ul>
            </div>
        
       

      </div>
          
    </nav>

  );
};

export default Navbar;
