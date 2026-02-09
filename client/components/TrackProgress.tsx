import { theme } from '@/settings/theme';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { MySlider } from './ui/MySlider';
import { timeConvertor } from '@/helpers/timeConvertor';

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e) => void;
}

export const TrackProgress: FC<TrackProgressProps> = ({left, right, onChange}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <MySlider
                size="small"
                min={0}
                value={left}
                max={right}
                onChange={onChange}
                aria-label="Track progress"
                valueLabelDisplay='auto'
                valueLabelFormat={timeConvertor}
                sx={{ 
                    color: theme.palette.primary.light, 
                    width: '100vw'
                }}
            />
        </div>
    );
};

export default TrackProgress;