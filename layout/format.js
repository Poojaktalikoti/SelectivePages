import Header from '@/Components/header'
import Footer from '@/Components/footer'
import Head from 'next/head'

export default function format({children}){
    return( 
    <>
        <Head>
            <title>Profile Page</title>
        </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
        </>
    )
}
        

