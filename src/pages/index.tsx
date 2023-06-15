import Head from 'next/head';
import {Inter} from 'next/font/google';
import {AppBar, Toolbar, Typography} from '@mui/material';

const inter = Inter({subsets: ['latin']});

export const HomePage = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <AppBar position={'static'}>
                    <Toolbar></Toolbar>
                </AppBar>
                <Typography fontSize={'1.75rem'} fontWeight={400} component="h1">Select your ski trip</Typography>
            </main>
        </>
    );
};

export default HomePage;
