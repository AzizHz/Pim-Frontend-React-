import * as React from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';

import { TiInfoLarge } from 'react-icons/ti'
import { Divider, Modal, Stack } from '@mui/material';
import "../playerTable/playerTable.css"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '16px',
    boxShadow: 2,
    display: 'flex',
    alignItems: 'center',

};
const PlayerModal = ({ row, header }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <IconButton color="primary" onClick={handleOpen}>

                <TiInfoLarge />
            </IconButton>
            <Modal
                slotProps={{ backdrop: { style: { backgroundColor: 'white', opacity: 0.1 } } }}
                sx={{ backgroundColor: 'transparent' }}
                open={open}


                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='Modal-image-section'>
                        <Stack direction={'row'} width={'100%'}>
                            <div className='player-image-container'>
                                <img style={{ width: '100%', height: 'auto' }} alt='' src={'https://cdn.nba.com/headshots/nba/latest/260x190/' + row.PLAYER_ID + '.png'} />
                            </div>
                            <div className='player-image-container'>
                                <Stack width={'100%'} direction={'column'} spacing={'5px'}>
                                    <Typography
                                        sx={{ backgroundColor: '#d97f1f', borderRadius: '0px 0px 8px 8px', px: 2, color: 'white' }}
                                        variant="h6"
                                        id="tableTitle"
                                        fontSize={14}
                                        component="div"
                                    >
                                        {header}
                                    </Typography>

                                    <h4> {row.PLAYER_NAME}</h4>
                                    <p>{row.TEAM_ABBREVIATION}</p>
                                </Stack>
                            </div>
                            <div className='player-image-container'>

                            </div>



                        </Stack>

                        <Stack
                            alignItems={'center'}
                            direction="row"
                            width={'100%'}
                            justifyContent={'space-around'}
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                            sx={{ backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 2, padding: 1, px: 2, marginX: 'auto' }}
                        >
                            <h4> {row.AST}</h4>
                            <h4> {row.REB}</h4>
                            <h4> {row.FGA}</h4>
                            <h4> {row.FGM}</h4>
                            <h4> {row.W_PCT}</h4>
                            <h4> {row.PTS}</h4>
                        </Stack>
                    </div>

                </Box>
            </Modal>

        </div>
    )
}

export default PlayerModal