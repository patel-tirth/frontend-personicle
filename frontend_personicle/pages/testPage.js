import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from "react";
import Link from "next/link";
import { useSession } from 'next-auth/client';
import DataConnectionsDiv from "../reactComponents/DataConnections"

const userConnections = [
    {
        'source': 'FitBit',
        'icon': '',
        'redirect': 'http://localhost:5000/fitbit/connection',
        'return': 'http://localhost:3000/testPage'
        // process.env.AUTH_SERVER + ':' + process.env.AUTH_PORT + process.env.FITBIT_AUTH_ENDPOINT
    },
    {
        'source': 'Oura',
        'icon': '',
        'redirect': '/',
        'return': 'http://localhost:3000/testPage'
    }
]

export default function TestPage(){
    const [session, loading] = useSession();

    return(
        <div className={styles.container}>
            <Head>
                <title>Personicle</title>
                {/* <meta name="description" content="Generated by create next app" /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.Row}>
                    <div className={styles.Column}><DataConnectionsDiv sources={userConnections}/></div>
                    <div className={styles.Column}>Events View Tab</div>
                    <div className={styles.Column}>Summary View Tab</div>
                </div>
            </main>

        </div>
        
    );
}