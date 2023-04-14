import { Box, Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Icon } from '@iconify/react';
import pic from '../../assets/Layer.png';

const AuthSection = () => {
    return (
        <Stack direction={'column'} alignItems={'center'} spacing={2}>
            <Button variant="outlined" sx={{ maxWidth: '500px', minWidth: '50%' }} startIcon={<Icon icon="logos:metamask-icon" />}>
                Connect with metamask
            </Button>
            <Button variant="outlined" sx={{ maxWidth: '500px', minWidth: '50%' }} startIcon={<Icon icon="logos:metamask-icon" />}>
                Connect with metamask
            </Button>
            <Button variant="outlined" sx={{ maxWidth: '500px', minWidth: '50%' }} startIcon={<Icon icon="logos:metamask-icon" />}>
                Connect with metamask
            </Button>

            <Box height={'150px'} width={'100%'} sx={{ background: 'linear-gradient(308deg, rgba(230,124,45,1) 5%, rgba(252,191,83,1) 19%, rgba(215,78,20,1) 86%)' }}>
                <Stack direction={'row'} alignItems={'center'} height={'100%'} justifyContent={'space-around'} >
                    <img src={pic} alt='logo' height={'120px'} />
                    <Stack direction={'column'} spacing={2} alignItems={'center'} maxWidth={'60%'}>
                        <Typography variant='h6' fontWeight={700} color='#145365'> Register to Play Alley-Oop</Typography>
                        <Typography variant='body2' fontWeight={500} color='white' maxWidth={'80%'}> With over 9 million players, Fantasy Premier League is the biggest Fantasy Football game in the world. It’s FREE to play and you can win great prizes!</Typography>
                    </Stack>
                    <Button variant="contained">
                        Sign Up Now
                    </Button>

                </Stack>

            </Box>


        </Stack>
    )
}

export default AuthSection
