import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, {useContext,useEffect,useState} from "react";
import AuthenticationContext from '../contexts/authentication';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';


export default function Home() {
  const[oktaAuth,authState,name,googleWidget] = useContext(AuthenticationContext);
  const [google, setGoogle] = useState(0);
  const router = useRouter();
    
  const triggerSignOut = async () => {
   await  oktaAuth.signOut({  clearTokensBeforeRedirect :true ,postLogoutRedirectUri: 'http://localhost:3000/',});
  }

 const triggerLogin = async () => {
   oktaAuth.signInWithRedirect({ originalUri: '/' });
  }
  const triggerGoogleLogin = async () => {
    oktaAuth.handleAuthentication().then(() => {
      this.router.navigate(['/']); // to home page
  }).catch(error => {
      // handle error
  });
  }
  
  const handleRedirect =  async () => {
      await oktaAuth.handleLoginRedirect({originalUri: 'http://localhost:3000/'});
  }
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Personicle</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <main className={styles.main}>
       {!authState && (
          <>
          Not signed in <br /> 
          <button onClick={triggerLogin}>Sign In With Okta</button> 
          {/* <button onClick={triggerGoogleLogin}>Sign In With Google</button>  */}
         
          <button >
          <a href="https://dev-01936861.okta.com/oauth2/v1/authorize?idp=0oa3v658b8VCLoy3L5d7&client_id=0oa3sq0q2iDDS2IV25d7&response_type=code%20token%20id_token&response_mode=fragment&scope=openid%20email%20profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state=WMffre6D&nonce=YsGfre76jo">Sign in with Google</a>
         </button>
          </>
        )}
      {authState && (
          <>
          Welcome to the super awesome personicle {name} <br /> 
          
          <button onClick={triggerSignOut}>Sign Out </button> 
          <button>
            <Link href="/data-connections">To the connections</Link>
          </button>
        
          </>
        )}

      </main>
    </div>
  )
}
