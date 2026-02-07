import Navbar from '@/components/Navbar';
import Player from '@/components/Player';
import { theme } from '@/settings/theme';
import { Container, ThemeProvider } from '@mui/material';
import { FC } from 'react';

const MainLayout: FC = ({children}) => {
    return (
            <div className='app' style={{backgroundColor: theme.palette.primary.main}}>
                <ThemeProvider theme={theme}>
                    <Navbar />
                    <Container style={{margin: '90px 0'}}>
                        {children}
                    </Container>
                    <Player />
                </ThemeProvider>
            </div>
    );
};

export default MainLayout;