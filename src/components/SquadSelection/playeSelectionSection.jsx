import { Avatar, Button, Card, Checkbox, FormControlLabel, Modal, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { Suspense, lazy, useEffect, useState } from 'react'
import FieldSection from './FieldSection'
import axios from 'axios'
import PlayerTable from '../playerTable/PlayerTable'
import '../field/style.css'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'white',
    border: 'none',
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
};


const PlayerSelectionSection = () => {
    const [Data, setData] = useState({})
    const [Guard, setGuard] = useState([]);
    const [Center, setCenter] = useState([])
    const [Forward, setForward] = useState([])
    const [disabled, setDisabled] = useState(true)
    const [selectedGuard, setSelectedGuard] = useState([])
    const [selectedCenter, setSelectedCenter] = useState([])
    const [selectedForward, setSelectedForward] = useState([])
    const [playerSelecredCount, setPlayerSelecredCount] = useState(0)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleItemChangeGuard = (newSelectedItems) => {
        setSelectedGuard(newSelectedItems);
    };
    const handleItemChangeForward = (newSelectedItems) => {
        setSelectedForward(newSelectedItems);
    };
    const handleItemChangeCenter = (newSelectedItems) => {
        setSelectedCenter(newSelectedItems);
    };






    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:3001/Data');
            setData(result.data);
            setCenter(result.data.players.filter(player => player.POSITION === 'C' || player.POSITION === 'C-F' || player.POSITION === 'F-C'))
            setGuard(result.data.players.filter(player => player.POSITION === 'G' || player.POSITION === 'G-F' || player.POSITION === 'F-G'))
            setForward(result.data.players.filter(player => player.POSITION === 'F' || player.POSITION === 'G-F' || player.POSITION === 'F-G' || player.POSITION === 'C-F' || player.POSITION === 'F-C'))
        };

        // Call the API initially
        fetchData();

        if (selectedGuard && selectedForward && selectedCenter) {
            if (selectedGuard.length + selectedCenter.length + selectedForward.length === 5) {
                setDisabled(false)
            }
            else {
                setDisabled(true)
            }
        }
        setPlayerSelecredCount(selectedGuard.length + selectedCenter.length + selectedForward.length)
        // Call the API every 5 minutes
        const interval = setInterval(() => {
            fetchData();

        }, 60 * 60 * 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, [Center, Guard, Forward, disabled, selectedGuard, selectedForward, selectedCenter, playerSelecredCount]);






    return (
        <Stack direction={'row'} spacing={2} >
            <Stack >
                <Typography variant='h4'>
                    Squad Selection
                </Typography>
                <Typography variant='body1'>
                    Select a maximum of 3 players from a single team or 'Auto Pick' if you're short of time.
                </Typography>

                <Card sx={{ background: 'linear-gradient(0deg, rgba(252,191,83,0) 60%, rgba(215,111,20,1) 100%)', p: 2, borderRadius: 2 }}>
                    <Stack alignItems={'center'} direction={'column'} spacing={5}>
                        <Box sx={{ backgroundColor: 'white', opacity: '60%', height: '200px', borderRadius: 2, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Stack direction={'column'} alignItems='center' spacing={1.5}>
                                <Typography>player selected</Typography>
                                <Typography variant='h4' fontSize={30} fontWeight='bold'>{playerSelecredCount}/5</Typography>
                                <Button variant='contained' color='secondary'  >  Auto pick</Button>

                            </Stack>
                            <Stack direction={'column'} alignItems='center' spacing={1.5}>
                                <Typography>Crypto Remaining</Typography>
                                <Typography variant='h4' fontSize={30} fontWeight='bold' >1000 Eth</Typography>
                                <Button variant='contained' disabled>  Reset</Button>

                            </Stack>

                        </Box>

                        <div className="field-container">


                            <Avatar sx={{ backgroundColor: 'gray', width: '65px', height: '65px' }} src={'https://cdn.nba.com/headshots/nba/latest/260x190/' + selectedCenter[0] + '.png'}></Avatar>
                            <Stack direction={'row'} justifyContent={'space-between'} width={'500px'}>
                                <Avatar sx={{ backgroundColor: 'gray', width: '65px', height: '65px' }} src={'https://cdn.nba.com/headshots/nba/latest/260x190/' + selectedForward[0] + '.png'}></Avatar>
                                <Avatar sx={{ backgroundColor: 'gray', width: '65px', height: '65px' }} src={'https://cdn.nba.com/headshots/nba/latest/260x190/' + selectedForward[1] + '.png'} ></Avatar>
                            </Stack>
                            <Stack direction={'row'} justifyContent={'space-between'} width={'320px'}>
                                <Avatar sx={{ backgroundColor: 'gray', width: '65px', height: '65px' }} src={'https://cdn.nba.com/headshots/nba/latest/260x190/' + selectedGuard[0] + '.png'} ></Avatar>
                                <Avatar sx={{ backgroundColor: 'gray', width: '65px', height: '65px' }} src={'https://cdn.nba.com/headshots/nba/latest/260x190/' + selectedGuard[1] + '.png'}></Avatar>
                            </Stack>









                        </div>
                        <Button variant='contained' disabled={disabled} onClick={handleOpen}>  Confirme Squad</Button>
                    </Stack>
                </Card>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="body2" component="h2" >
                            Team nameMaximum 20 characters
                        </Typography>
                        <TextField id="outlined-basic" label="Team name" variant="outlined" fullWidth sx={{ my: 2 }} />

                        <FormControlLabel sx={{ width: '100%' }} control={<Checkbox size='medium' />} label="I agree to the terms and condition" />


                        <Button variant='contained' sx={{ mx: 'auto', mt: 2 }} >  Enter Squad</Button>



                    </Box>
                </Modal>


            </Stack>
            <Stack direction={'column'} spacing={2}>




                <PlayerTable header={'Guard '} rows={Guard} onItemChange={handleItemChangeGuard} max={2} />
                <PlayerTable header={'Center '} rows={Center} onItemChange={handleItemChangeCenter} max={1} />
                <PlayerTable header={'Forward '} rows={Forward} onItemChange={handleItemChangeForward} max={2} />



            </Stack>


        </Stack>
    )
}

export default PlayerSelectionSection