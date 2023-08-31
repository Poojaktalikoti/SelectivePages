import Head from "next/head"
import Image from "next/image"
import Format from "@/layout/format"

import Page from "@/Components/page"
import Information from "@/Components/Information"
 

export default function Home() {
  return (

    <Format>
     <Page></Page>
     <Information></Information>
    </Format>
     
  
  )
}
