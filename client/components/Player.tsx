import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import styles from '../styles/Player.module.scss'
import { ITrack } from '@/types/tracks';
import TrackProgress from './TrackProgress';

export const Player = () => {
    const active = false
    const track: ITrack = {_id: '1', name: 'Track 1', artist: "Artist 1", text: 'Text 1', listens: 5, picture: 'http://localhost:5000/image/337ffc43-cfbb-4a99-bf72-d73dbd902ee1.jpg', audio: 'http://localhost:5000/audio/747b29a5-5b3d-4615-8ab0-ebf0e0c07abf.mp3', coments: []}
    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {
                    ! active
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <Grid container direction="column" style={{ width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'grey'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() =>({})}/>
             <VolumeUp style={{margin: 'auto'}}/>
             <TrackProgress left={0} right={100} onChange={() =>({})}/>
        </div>
    );
};

export default Player;