import React from 'react'
import { getSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { Layout } from '@/components';


function Profile({ session }) {
    return (
      <Layout>
        <div className="sm:w-1/2 w-11/12 p-10 mx-auto  pt-40 py-10">
          <h1 className="text-center text-white sm:my-5 text-2xl">Profile</h1>
          <div className="sm:flex">
            <div className="sm:w-20 m-5">
              <img className="m-0" src={session.user.image} alt="sss" />
            </div>
            <div> 
            <h1 className="text-left text-white  text-3xl"> 
                 email
              </h1>
              <h1 className="text-left text-white my-2 text-xl"> 
                 {session.user.email}
              </h1>
              <h1 className="text-left text-white mt-10  text-3xl"> 
                name
              </h1>
              <h1 className="text-left text-white my-5 text-2xl">  
               {session.user.name}
              </h1>
            </div>
          </div>
        </div>
      </Layout>
    );
  }



  export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    return {
      props: { session },
    };
  }
  

export default Profile