import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useContext } from 'react'
import { connectWallet } from '../../Blockchain.services';
import { truncate, useGlobalState } from '../store';
import { Icon } from '@iconify/react';
import pic from '../../assets/Layer.png';
import { UserContext } from '../../App';
import MediaControlCard from './Card';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 1.5,
    boxShadow: 24,
    p: 2,
};
const AuthSection = () => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');


    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { user, setUser } = useContext(UserContext);

    const [connectedAccount] = useGlobalState('connectedAccount')
    //{truncate(connectedAccount, 4,4,11)}
    //onClick={connectWallet}

    const handleConnect = async () => {
        await connectWallet();
        console.log(name)
        axios.post("http://localhost:3001/user/signup",
            {
                nickname: name,
                accountpk: connectedAccount


            })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.nickname)
                    setUser(res.body.nikname)


                }
            })

    }

    return (
        <Stack direction={'column'} alignItems={'center'} spacing={2}>
            {connectedAccount ? (
                <Button variant="outlined" sx={{ maxWidth: '500px', minWidth: '50%' }} startIcon={<Icon icon="logos:metamask-icon" />}>
                    Connected

                </Button>
            ) : (
                <Button variant="outlined" sx={{ maxWidth: '500px', minWidth: '50%' }} startIcon={<Icon icon="logos:metamask-icon" />}
                    onClick={handleOpen}>
                    Connect with metamask
                </Button>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography width={'100%'} textAlign={'start'} id="modal-modal-title" variant="h6" component="h2" >
                        Connect
                    </Typography>
                    <TextField
                        sx={{ width: '100%' }}
                        label="Name"
                        variant="outlined"
                        size='small'

                        onChange={handleChangeName}

                    />
                    <Button variant="contained" sx={{ Width: '50%', color: 'white' }} onClick={handleConnect} >
                        Submit
                    </Button>
                </Box>
            </Modal>
            <Box height={'150px'} width={'100%'} sx={{ background: 'linear-gradient(170deg, rgba(255, 181, 101, 1) 4%, rgba(255, 85, 0, 1) 90%)' }}>
                <Stack direction={'row'} alignItems={'center'} height={'100%'} justifyContent={'space-around'} >
                    <img src={pic} style={{ height: '100px' }} alt='logo' height={'120px'} />
                    <Stack direction={'column'} spacing={2} alignItems={'center'} maxWidth={'60%'}>
                        <Typography variant='h6' fontWeight={700} color='rgb(12, 12, 73)'> Register to Play Alley-Oop</Typography>
                        <Typography variant='body2' fontWeight={500} color='white' maxWidth={'80%'}> With over 9 million players, Alley-Oop is the biggest Fantasy Basketball game in the world. It’s FREE to play and you can win great prizes!</Typography>
                    </Stack>
                    <Box width={30}></Box>

                </Stack>

            </Box>
            <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
                <MediaControlCard />
                <MediaControlCard />

            </Stack>


        </Stack>
    )
}

export default AuthSection
