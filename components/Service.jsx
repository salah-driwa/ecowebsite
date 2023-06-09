import React from 'react'
import Link  from 'next/link';
import {motion} from 'framer-motion'
import { FaMoneyCheckAlt ,FaHandshake } from 'react-icons/fa';
import { AiFillCustomerService} from 'react-icons/ai';
import { Section } from '.';


const HandshakeIcon = () => <FaHandshake   size={100} color='red'        style={{ margin: '0 auto' }}/>;
const SupportIcon = () => <AiFillCustomerService  size={100} color='red' style={{ margin: '0 auto' }}/>;
const FaMoneyCheckAlts = () => <FaMoneyCheckAlt size={100} color='red'   style={{ margin: '0 auto' }}/>;

const services = [
  {
    title: 'FINANCING',
    subtitle: 'Play Now and Pay Later',
    content: 'Easy to apply \nGet instant pre-approved offers and rates \nTwelve months same as cash available* \nNo prepayment penalties \nUp to 36 months of payment options',
    more: 'LEARN MORE',
    icon: FaMoneyCheckAlts 
  },
  {
    title: 'AFFILIATES',
    subtitle: 'Join the Best',
    content: 'Partner up with the best custom PC system builder in the world and earn extra cash! Become An Official ORIGIN PC Affiliate Today!',
    more: 'JOIN',
    icon: HandshakeIcon
  },
  {
    title: 'SUPPORT',
    subtitle: '24/7 US Based Support',
    content: 'Once you join us, we will have you covered. With \n every system,   provides a free phone and online lifetime service guarantee.',
    more: 'LEARN MORE',
    icon: SupportIcon
  }
];

function Service() {
  return (
    <Section  x={0} scale={0.99} duration={0.6}>
    <div className=' flex flex-col sm:flex-row py-10  sm:divide-x bg-white justify-center sm:px-32 sm:py-16 ' style={{textAlign: 'center'}}>

      {services.map((service,index) => (
        <Section  x={0} scale={0.8} duration={0.6}  delay={index * 0.2} key={service.title} >
        <div key={service.title} className=' p-3 sm:p-16' >
            <div className='m-0 ' ><service.icon /></div>
          
          <h3 className=' text-center text-2xl p-2'>{service.title}</h3>
          <h4  className=' text-center '>{service.subtitle}</h4>
          <p  className=' text-center py-5 text-[#1e1f24]' style={{fontWeight: 300, fontFamily:'ff-basic-gothic-pro, sans-serif'}} >{service.content}</p>
          <a  className=' text-center text-danger   ' href="#">{service.more}</a>
        </div>
        </Section>
      ))}
    </div>
    </Section>
  );
}

export default Service;
