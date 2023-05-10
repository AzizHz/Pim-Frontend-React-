import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import '../field/style.css'
const FieldSection = (props) => {

    const { Gaurd, Center, Forward } = props;
    const [disabled, setDisabled] = useState(true)

    console.log(Gaurd)
    useEffect(() => {

        if (Gaurd && Forward && Center) {
            if (Gaurd.length + Center.length + Forward.length === 5) {
                setDisabled(true)
                console.log(Gaurd)
            }
            else {
                setDisabled(false)
            }
        }
    }, [Gaurd, Center, Forward, disabled])







    return (
        <Card sx={{ background: 'linear-gradient(0deg, rgba(252,191,83,0) 60%, rgba(215,111,20,1) 100%)', p: 2, borderRadius: 2 }}>
            <Stack alignItems={'center'} direction={'column'} spacing={5}>
                <Box sx={{ backgroundColor: 'white', opacity: '60%', height: '200px', borderRadius: 2, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Stack direction={'column'} alignItems='center' spacing={1.5}>
                        <Typography>player selected</Typography>
                        <Typography variant='h4' fontSize={30} fontWeight='bold'>0/15</Typography>
                        <Button variant='contained' color='secondary'  >  Auto pick</Button>

                    </Stack>
                    <Stack direction={'column'} alignItems='center' spacing={1.5}>
                        <Typography>Crypto Remaining</Typography>
                        <Typography variant='h4' fontSize={30} fontWeight='bold' >1000 Eth</Typography>
                        <Button variant='contained' disabled>  Reset</Button>

                    </Stack>

                </Box>

                <div className="field-container">


                    <Avatar>RS</Avatar>
                    <Stack direction={'row'} justifyContent={'space-between'} width={'480px'}>
                        <Avatar>KB</Avatar>
                        <Avatar>LJ</Avatar>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'} width={'320px'}>
                        <Avatar>SK</Avatar>
                        <Avatar>MJ</Avatar>
                    </Stack>









                </div>
                <Button variant='contained' disabled={disabled}>  Confirme Squad</Button>
            </Stack>
        </Card>

    )
}

export default FieldSection