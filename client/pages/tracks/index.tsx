import TrackList from '@/components/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout from '@/layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchTracks, searchTracks } from '@/store/actions-creators/track';
import { Button, Card, Grid, Stack, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

const Index = () => {
    const router = useRouter()
    const {tracks, error} = useTypedSelector(state => state.track)
    const [query, setQuery] = useState<string>('')
    const dispatch = useDispatch() as NextThunkDispatch
    const [timer, setTimer] = useState(null)

    const search = async (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        if (timer) {
            clearTimeout(timer)
        }
        setTimer(
            setTimeout( async () => {
                await dispatch(await searchTracks(e.target.value))
            }, 500)
        )
    }
    
    if (error) {
        return (
            <MainLayout>
                <h1>{error}</h1>
            </MainLayout>
        )
    }

    return (
        <MainLayout title={"Tracks list"}>
                <Card sx={{backgroundColor: 'transparent', width: '100%'}}>
                    <Stack alignItems={'center'} width={'100%'}>
                        <Typography fontSize={'80px'} color='primary' fontStyle={'italic'}>Мои треки</Typography>
                        <Button onClick={ () => router.push('/tracks/create')}>Загрузить</Button>
                    </Stack>
                    <TextField
                            fullWidth
                            value={query}
                            onChange={search}
                            placeholder='Поиск трека'
                            variant='filled'
                    />
                    <TrackList tracks={tracks}/>
                </Card>
        </MainLayout>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks())
    return { props: {}}
})