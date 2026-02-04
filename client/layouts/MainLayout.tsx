import Navbar from '@/components/Navbar';
import Player from '@/components/Player';
import { Container } from '@mui/material';
import { FC } from 'react';

const MainLayout: FC = ({children}) => {
    return (
        <>
            <div className='app'>
                <Navbar />
                <Container style={{margin: '90px 0'}}>
                    {children}
                </Container>
                <Player />
            </div>

            <style jsx>
                {`
                    .app {
                        
                    }
                `}
            </style>
        </>
    );
};

export default MainLayout;