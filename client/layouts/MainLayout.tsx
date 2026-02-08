import Navbar from '@/components/Navbar';
import Player from '@/components/Player';
import { Container, ThemeProvider } from '@mui/material';
import  Head  from 'next/head';
import { FC } from 'react';

interface MainLayoutProps {
    title?: string

}

const MainLayout: FC<MainLayoutProps> = ({children, title}) => {
    return (
            <>
                <Head>
                    <title>{title || 'Music app by gmt9n'}</title>
                </Head>
                <Navbar />
                <Container style={{margin: '90px 0'}}>
                    {children}
                </Container>
                <Player />
            </>
    );
};

export default MainLayout;