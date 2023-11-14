import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import '../app/globals.css'
import Image from "next/image"
import { NextPage } from "next"
const Home: NextPage=()=>{
    return(
        <div>
            <h1 className={styles.title}>Home Route</h1>
        </div> 
    )
}           
export default Home;           