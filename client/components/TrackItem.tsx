import { ITrack } from '@/types/tracks';
import { Card, Grid, IconButton, Typography } from '@mui/material';
import React, { FC, useEffect } from 'react';
import styles from '../styles/TrackItem.module.scss'
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

let audio;

const TrackItem: FC<TrackItemProps> = ({track, active}) => {
    const router = useRouter()
    const {pause, volume } = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack, setActiveTrack, setCurrentTime} = useActions()

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()
            playTrack()
        }
    }, [active])

    const setAudio = () => {
        if (active) {
            audio.src = 'http://localhost:5000/' + active.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    const play = (e) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()

        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    return (
        <Card className={styles.track} onClick={ () => router.push('tracks/' + track._id)}>
            <IconButton onClick={play}>
                {
                    ! active
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <img width={70} height={70} src={'http://localhost:5000/' + track.picture} />
            <Grid container direction="column" style={{ width: 200, margin: '0 20px'}}>
                <Typography>{track.name}</Typography>
                <Typography style={{fontSize: 12, color: 'grey'}}>{track.artist}</Typography>
            </Grid>
            <IconButton onClick={e => e.stopPropagation()} style={{marginLeft: 'auto'}}>
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem;