import Navbar from '@/components/Navbar';
import Player from '@/components/widgets/Player';
import { Sidebar } from '@/components/Sidebar';
import { Container, Stack } from '@mui/material';
import  Head  from 'next/head';
import { FC } from 'react';

interface MainLayoutProps {
    title?: string
    description?: string
    keywords?: string
}

const MainLayout: FC<MainLayoutProps> = ({children, title, description, keywords}) => {
    return (
            <>
                <Head>
                    <title>{title || 'Music app by gmt9n'}</title>
                    <meta name="description" content={"Музыкальная площадка by gmt9n. Здесь каждый может оставить свой трек. " + description}/>
                    <meta name="robots" content='index, follow' />
                    <meta name="keywords" content={keywords || 'Музыка, треки, артисты'} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <Navbar />
                <Container style={{margin: '90px 0', display: 'flex', justifyContent: 'center'}}>
                    {children}
                </Container>
                <Player />
            </>
    );
};

export default MainLayout;