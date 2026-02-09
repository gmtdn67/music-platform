import { Pause, PlayArrow } from '@mui/icons-material';
import { Grid, IconButton, Stack, Typography } from '@mui/material';
import styles from '../../styles/Player.module.scss'
import TrackProgress from '../TrackProgress';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { ChangeEvent, useEffect } from 'react';
import VolumeLevel from '../VolumeLevel';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { theme } from '@/settings/theme';

let audio;

export const Player = () => {
    const {currentTime, duration, pause, volume, active} = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume, setActiveTrack, setCurrentTime, setDuration} = useActions()
    
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

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }

    const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))
    }

    if (!active) {
        return null
    }
    return (
        <Stack>
            <div className={styles.slider}> 
                <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
            </div>
            <div className={styles.main}>
                <img width={50} height={50} src={'http://localhost:5000/' + active?.picture} />
                <Grid container direction="column" style={{ width: 200, margin: '0 20px'}}>
                    <Typography sx={{color: 'white'}}>{active?.name}</Typography>
                    <Typography style={{fontSize: 12, color: 'white'}}>{active?.artist}</Typography>
                </Grid>
                <Grid container direction={'row'} style={{ marginLeft: '20vw'}}>
                    <IconButton onClick={() => {}} size='large' sx={{ color: theme.palette.primary.light}}>
                        <SkipPreviousIcon />
                    </IconButton>
                    <IconButton onClick={play} size='large' sx={{ color: theme.palette.primary.light }}>
                        {
                            pause
                            ? <PlayArrow />
                            : <Pause />
                        }
                    </IconButton>
                    <IconButton onClick={() => {}} sx={{ color: theme.palette.primary.light}} size='large'>
                        <SkipNextIcon />
                    </IconButton>
                </Grid>
                <VolumeLevel volume={volume} onChange={changeVolume}/>
            </div>
        </Stack>
    );
};

export default Player;