import { Slider, styled } from "@mui/material";
import {theme} from '@/settings/theme'

export const MySlider = styled(Slider)(({ theme }) => ({
  height: 5,
  padding: '0',
  '& .MuiSlider-thumb': {
    height: 15,
    width: 15,
    backgroundColor: `${theme.palette.primary.light}`
  },
}));