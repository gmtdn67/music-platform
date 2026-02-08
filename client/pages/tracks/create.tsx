import StepWrapper from '@/components/StepWrapper';
import MainLayout from '@/layouts/MainLayout';
import { FileUpload } from '../../components/FileUpload';
import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useInput } from '@/hooks/useInput';
import { useRouter } from 'next/router';
import axios from 'axios';


const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
    const router = useRouter()
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep( prev => prev + 1)
        } else {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('text', text.value)
            formData.append('artist', artist.value)
            formData.append('picture', picture)
            formData.append('audio', audio)
            axios.post('http://localhost:5000/tracks', formData)
                .then(res => router.push('/tracks'))
                .catch(e => console.log(e))
        }
    }

    const back = () => {
        setActiveStep( prev => prev - 1)
    }
    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                { activeStep === 0 && <Grid container direction={'column'} style={{padding: 20}}>
                    <TextField {...name} style={{ marginTop: 10 }}label={'Название трека'}/>
                    <TextField {...artist} style={{ marginTop: 10 }}label={'Имя исполнителя'}/>
                    <TextField {...text} style={{ marginTop: 10 }}label={'Текст песни'} multiline rows={3}/>
                </Grid>
                }
                {activeStep === 1 && 
                    <FileUpload setFile={setPicture} accept='image/'>
                        <Button>Загрузить изображение</Button>
                    </FileUpload>
                }
                {activeStep === 2 && 
                    <FileUpload setFile={setAudio} accept='audio/'>
                        <Button>Загрузить аудио</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent={"space-between"}>
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button onClick={next} style={{ color: 'black'}}>Далее</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;