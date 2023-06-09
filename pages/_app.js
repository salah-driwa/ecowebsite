import '@/styles/globals.css'

import { StateContextProvider } from '../components/context/StateContext';
import {SessionProvider} from 'next-auth/react'
function MyApp({ Component, pageProps,session }) {
  return (
    <SessionProvider session={session} >
        <StateContextProvider>
          <Component {...pageProps} />
        </StateContextProvider>
    </SessionProvider>
  )
}

export default MyApp;
