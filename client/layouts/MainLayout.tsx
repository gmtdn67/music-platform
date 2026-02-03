import Navbar from '@/components/Navbar';
import { Container } from '@mui/material';
import { FC } from 'react';

const MainLayout: FC = ({children}) => {
    return (
        <div style={{ margin: 0, padding: 0, boxSizing: 'border-box'}}>
            <Navbar />
            <Container style={{margin: '90px 0'}}>
                {children}
            </Container>
        </div>
    );
};

export default MainLayout;