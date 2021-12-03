import React from 'react';
import Link from 'next/link'
import Header from './Header';
import Head from 'next/head';


const Layout = props => {
    return (  
        <>
      
        <Head>
            <html lang='es'/>
            <title>Product Hunt Fire</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <Header />
        <main>
            {props.children}
        </main>
        </>

    );
}
 
export default Layout;

