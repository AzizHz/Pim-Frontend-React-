import { Avatar } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import "./style.css"

const Field = () => {
    return (


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
    )
}

export default Field