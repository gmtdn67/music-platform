import TrackList from '@/components/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout from '@/layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchTracks } from '@/store/actions-creators/track';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';

const Index = () => {

    const router = useRouter()
    const {tracks, error} = useTypedSelector(state => state.track)

    if (error) {
        return (
            <MainLayout>
                <h1>{error}</h1>
            </MainLayout>
        )
    }

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

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks())
    return { props: {}}
})