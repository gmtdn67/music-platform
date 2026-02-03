import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/tracks';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const TrackPage = () => {
    const track: ITrack = {_id: '1', name: 'Track 1', artist: "Artist 1", text: 'Text 1', listens: 5, picture: 'http://localhost:5000/image/337ffc43-cfbb-4a99-bf72-d73dbd902ee1.jpg', audio: 'http://localhost:5000/audio/747b29a5-5b3d-4615-8ab0-ebf0e0c07abf.mp3', coments: []}
    const router = useRouter()

    return (
        <MainLayout>
            <Button 
            variant='outlined'
            onClick={() => router.push('/tracks')}
            style={{ fontSize: 32}}
            >
                К списку
            </Button>
            <Grid container style={{ margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200}/>
                <div style={{ margin: '20px 0'}}>
                    <h1>{track.name}</h1>
                    <h3>{track.artist}</h3>
                    <h3>Прослушиваний - {track.name}</h3>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField label="Ваше имя" fullWidth/>
                <TextField label="Комментарий" fullWidth multiline rows={4}/>
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.coments.map( comment => 
                <>
                    <div>{comment.username}</div>
                    <div>{comment.text}</div>
                </>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;