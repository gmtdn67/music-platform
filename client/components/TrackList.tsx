import { ITrack } from '@/types/tracks';
import { Box, Grid } from '@mui/material';
import React, { FC } from 'react';
import TrackItem from './TrackItem';
import { useTypedSelector } from '@/hooks/useTypedSelector';

interface TrackListProps {
    tracks: ITrack[]
}
const TrackList: FC<TrackListProps> = ({tracks}) => {

    const { active } = useTypedSelector(state => state.player)
    return (
        <Grid container direction={"column"}>
            <Box p={2}>
                {tracks.map( track => 
                    <TrackItem key={track._id} track={track} active={track === active}/>
                )}
            </Box>
        </Grid>
    );
};

export default TrackList;