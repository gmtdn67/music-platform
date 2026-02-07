import TrackList from '@/components/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/tracks';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';

const Index = () => {

    const router = useRouter()
    const tracks: ITrack[] = [
        {_id: '1', name: 'Track 1', artist: "Artist 1", text: 'Text 1', listens: 5, picture: 'http://localhost:5000/image/337ffc43-cfbb-4a99-bf72-d73dbd902ee1.jpg', audio: 'http://localhost:5000/audio/747b29a5-5b3d-4615-8ab0-ebf0e0c07abf.mp3', coments: []},
        {_id: '2', name: 'Track 2', artist: "Artist 2", text: 'Text 2', listens: 10, picture: 'http://localhost:5000', audio: 'http://localhost:5000', coments: []},
        {_id: '3', name: 'Track 3', artist: "Artist 3", text: 'Text 3', listens: 15, picture: 'http://localhost:5000', audio: 'http://localhost:5000', coments: []},
    ]

    return (
        <MainLayout>
            <Grid container justifyContent='space-between'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                    <Grid container justifyContent='space-between'>
                        <h1>Список треков</h1>
                        <Button onClick={ () => router.push('/tracks/create')}>Загрузить</Button>
                    </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;