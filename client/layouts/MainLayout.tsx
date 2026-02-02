import Navbar from '@/components/Navbar';
import { Container } from '@mui/material';
import { FC } from 'react';

const MainLayout: FC = ({children}) => {
    return (
        <>
            <Navbar />
            <Container style={{margin: '90px 0'}}>
                {children}
            </Container>
        </>

    );
};

export default MainLayout;