import { Card, CardMedia, Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react'
import pic from '../../assets/5438785.jpg'
import AuthSection from '../../components/Home/AuthSection';
import PlayerSelectionSection from '../../components/SquadSelection/playeSelectionSection';

const HomePage = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Stack direction={'column'} display='flex'>
            <Card
                elevation={0}>
                <CardMedia
                    component="img"
                    height="400"
                    image={pic}
                    alt="Paella dish"
                />
            </Card>
            <Container maxWidth="lg" sx={{ mt: -6 }}>

                <TabContext value={value}
                >

                    <TabList onChange={handleChange} aria-label="lab API tabs example"
                        TabIndicatorProps={{ sx: { display: 'none' } }}

                        sx={{
                            "& button": { borderRadius: '5px 5px 0px 0px ', backgroundColor: '#d97f1f', marginX: 0.5, color: 'black', fontWeight: 700, textTransform: 'none', },
                            "& button.Mui-selected": { backgroundColor: 'white', color: 'black', fontWeight: 700 },


                        }}>
                        <Tab label="Home" value="1" />
                        <Tab label="Squad Selection" value="2" />
                        <Tab label="Scout" value="3" />
                    </TabList>

                    <TabPanel value="1"><AuthSection /></TabPanel>
                    <TabPanel value="2"><PlayerSelectionSection /></TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>

            </Container>

        </Stack>
    )
}

export default HomePage