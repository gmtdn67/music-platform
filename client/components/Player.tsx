import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import styles from '../styles/Player.module.scss'
import { ITrack } from '@/types/tracks';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { ChangeEvent, useEffect } from 'react';
import { timeConvertor } from '@/helpers/timeConvertor';

let audio;

export const Player = () => {
    const {currentTime, duration, pause, volume, active} = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume, setActiveTrack, setCurrentTime, setDuration} = useActions()
    const track: ITrack = {_id: '1', name: 'Track 1', artist: "Artist 1", text: 'Text 1', listens: 5, picture: 'http://localhost:5000/image/00f2162f-c8f3-470a-81ca-7a6bed7675b4.jpg', audio: 'http://localhost:5000/audio/27177d21-f0e6-46a7-869e-254669c3dda8.mp3', coments: []}
    
    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()
        }
    }, [])

    const setAudio = () => {
        if (active) {
            audio.src = track.audio
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
    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {
                    pause
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <Grid container direction="column" style={{ width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'grey'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
             <VolumeUp style={{margin: 'auto'}}/>
             <TrackProgress left={volume} right={100} onChange={changeVolume}/>
        </div>
    );
};

export default Player;