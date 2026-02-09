import React, { ChangeEvent, FC } from 'react';
import { MySlider } from './ui/MySlider';
import { theme } from '@/settings/theme';
import VolumeUp from '@mui/icons-material/VolumeUp';

interface VolumeLevelProps {
    onChange: (e) => void;
    volume: number
}

export const VolumeLevel: FC<VolumeLevelProps> = ({onChange, volume}) => {

    return (
        <div style={{ display: 'flex', marginLeft: 'auto' }}>
            <VolumeUp sx={{ position: 'relative', marginRight: '5px', color: theme.palette.primary.light }} />
            <MySlider
                size="small"
                min={0}
                value={volume}
                max={100}
                onChange={onChange}
                aria-label="Track progress"
                valueLabelDisplay='auto'
                sx={{ color: theme.palette.primary.light, width: '200px', marginTop: '10px'}}
            />
        </div>
    );
};

export default VolumeLevel;