import { useInput } from '@/hooks/useInput';
import MainLayout from '@/layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState(serverTrack)
    const router = useRouter()
    const username = useInput('')
    const comment = useInput('')
    const addComment = () => {

    }
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
                <img src={'http://localhost:5000/' + track.picture} width={200} height={200}/>
                <div style={{ margin: '20px 0'}}>
                    <h1>{track.name}</h1>
                    <h3>{track.artist}</h3>
                    <h3>Прослушиваний - {track.listens}</h3>
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
            {/* <div>
                {track.coments.map( comment => 
                <>
                    <div>{comment.username}</div>
                    <div>{comment.text}</div>
                </>
                )}
            </div> */}
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params.id)
    return { props: {
        serverTrack: response.data
    }}
}